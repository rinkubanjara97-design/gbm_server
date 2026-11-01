import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'
import { createAdminClient, createClient } from '@/lib/supabase/client'
import { Product, Category } from '@/lib/data/mock-data'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'fl6gqfor',
  api_key: process.env.CLOUDINARY_API_KEY || '469747129578673',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R13JBoQ_bpUS82ktRpP2fY4bXuE',
  secure: true,
})

const ARTIFACT_DIR = 'C:\\Users\\ajayj\\.gemini\\antigravity\\brain\\b204b014-b631-42f8-b749-e29e62de964c\\scratch'
const REPORT_FILE = path.join(ARTIFACT_DIR, 'report.json')
const RESULTS_FILE = path.join(ARTIFACT_DIR, 'scan_results.json')

export async function GET() {
  try {
    if (fs.existsSync(REPORT_FILE)) {
      const content = fs.readFileSync(REPORT_FILE, 'utf8')
      const data = JSON.parse(content)
      return NextResponse.json({ success: true, data })
    }

    if (fs.existsSync(RESULTS_FILE)) {
      const content = fs.readFileSync(RESULTS_FILE, 'utf8')
      const data = JSON.parse(content)
      return NextResponse.json({ success: true, data: { items: Object.values(data) } })
    }

    return NextResponse.json({ success: false, error: 'No scan results found. Please run the scanner script first.' }, { status: 404 })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { searchParams } = new URL(req.url)
    const public_id = body.public_id || searchParams.get('public_id')
    const imageUrl = body.url || searchParams.get('url')

    if (!public_id && !imageUrl) {
      return NextResponse.json({ success: false, error: 'public_id or url is required' }, { status: 400 })
    }

    let deletedPublicId = public_id

    if (!deletedPublicId && imageUrl) {
      // Extract public_id from Cloudinary URL if missing
      const match = imageUrl.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z]+)?$/)
      if (match) {
        deletedPublicId = match[1]
      }
    }

    // 1. Delete from Cloudinary
    let cloudinaryResult = null
    if (deletedPublicId) {
      try {
        cloudinaryResult = await cloudinary.uploader.destroy(deletedPublicId)
      } catch (cErr: any) {
        console.warn('Cloudinary destroy warning:', cErr.message)
      }
    }

    // 2. Remove reference from lib/data/products.json
    const productsPath = path.join(process.cwd(), 'lib', 'data', 'products.json')
    if (fs.existsSync(productsPath)) {
      try {
        const pContent = fs.readFileSync(productsPath, 'utf8')
        let products: Product[] = JSON.parse(pContent)
        let modified = false

        products = products.map((p) => {
          if (p.images && p.images.length > 0) {
            const originalLen = p.images.length
            const filteredImages = p.images.filter((img) => {
              const urlMatches = imageUrl && img.image_url === imageUrl
              const publicIdMatches = deletedPublicId && img.image_url.includes(deletedPublicId)
              return !urlMatches && !publicIdMatches
            })
            if (filteredImages.length !== originalLen) {
              modified = true
              return { ...p, images: filteredImages }
            }
          }
          return p
        })

        if (modified) {
          fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8')
        }
      } catch (err: any) {
        console.warn('products.json cleanup error:', err.message)
      }
    }

    // 3. Remove reference from Supabase database
    const supabase = createAdminClient() || createClient()
    if (supabase) {
      try {
        if (imageUrl) {
          await supabase.from('product_images').delete().eq('image_url', imageUrl)
          await supabase.from('categories').update({ banner_image_url: '' }).eq('banner_image_url', imageUrl)
        }
        if (deletedPublicId) {
          await supabase.from('product_images').delete().ilike('image_url', `%${deletedPublicId}%`)
          await supabase.from('categories').update({ banner_image_url: '' }).ilike('banner_image_url', `%${deletedPublicId}%`)
        }
      } catch (sErr: any) {
        console.warn('Supabase DB delete warning:', sErr.message)
      }
    }

    // 4. Update scan results JSON files
    if (fs.existsSync(RESULTS_FILE)) {
      try {
        const rContent = fs.readFileSync(RESULTS_FILE, 'utf8')
        const results = JSON.parse(rContent)
        if (deletedPublicId && results[deletedPublicId]) {
          delete results[deletedPublicId]
          fs.writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2), 'utf8')
        }
      } catch {}
    }

    if (fs.existsSync(REPORT_FILE)) {
      try {
        const repContent = fs.readFileSync(REPORT_FILE, 'utf8')
        const report = JSON.parse(repContent)

        if (deletedPublicId) {
          report.high_priority_items = (report.high_priority_items || []).filter((item: any) => item.public_id !== deletedPublicId)
          report.medium_priority_items = (report.medium_priority_items || []).filter((item: any) => item.public_id !== deletedPublicId)
          report.high_priority_count = report.high_priority_items.length
          report.medium_priority_count = report.medium_priority_items.length
          fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf8')
        }
      } catch {}
    }

    // 5. Purge Next.js Cache
    revalidatePath('/', 'layout')
    revalidatePath('/products')
    revalidatePath('/categories')
    revalidatePath('/admin/products')

    return NextResponse.json({
      success: true,
      message: `Image ${deletedPublicId || imageUrl} successfully deleted from Cloudinary & Website`,
      cloudinaryResult,
    })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
