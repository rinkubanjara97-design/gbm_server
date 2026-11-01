import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { getAllAdminProducts, getAllAdminCategories } from '@/lib/supabase/service'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'fl6gqfor',
  api_key: process.env.CLOUDINARY_API_KEY || '469747129578673',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'R13JBoQ_bpUS82ktRpP2fY4bXuE',
  secure: true,
})

export async function GET() {
  try {
    const photos: Array<{ url: string; public_id?: string; title?: string; source: string }> = []
    const seenUrls = new Set<string>()

    // 1. Fetch Cloudinary uploaded resources
    try {
      const result = await cloudinary.api.resources({
        type: 'upload',
        max_results: 100,
      })

      if (result?.resources && Array.isArray(result.resources)) {
        for (const res of result.resources) {
          if (res.secure_url && !seenUrls.has(res.secure_url)) {
            seenUrls.add(res.secure_url)
            photos.push({
              url: res.secure_url,
              public_id: res.public_id,
              title: res.public_id?.split('/').pop() || 'Cloudinary Image',
              source: 'cloudinary',
            })
          }
        }
      }
    } catch (err: any) {
      console.warn('Cloudinary API resources fetch warning:', err?.message)
    }

    // 2. Fetch all product images & category banners from database/service
    try {
      const products = await getAllAdminProducts()
      for (const p of products) {
        if (p.images) {
          for (const img of p.images) {
            if (img.image_url && !seenUrls.has(img.image_url)) {
              seenUrls.add(img.image_url)
              photos.push({
                url: img.image_url,
                title: p.name,
                source: 'catalog',
              })
            }
          }
        }
      }

      const categories = await getAllAdminCategories()
      for (const c of categories) {
        if (c.banner_image_url && !seenUrls.has(c.banner_image_url)) {
          seenUrls.add(c.banner_image_url)
          photos.push({
            url: c.banner_image_url,
            title: c.name,
            source: 'category',
          })
        }
      }
    } catch (err: any) {
      console.warn('Catalog images fetch warning:', err?.message)
    }

    return NextResponse.json({ success: true, photos })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
