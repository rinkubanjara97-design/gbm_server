import { NextRequest, NextResponse } from 'next/server'
import { getAllAdminProducts, saveProduct, deleteProduct } from '@/lib/supabase/service'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const products = await getAllAdminProducts()
  return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { product, images } = body

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product payload missing' }, { status: 400 })
    }

    const result = await saveProduct(product, images || [])
    if (result.success) {
      // Purge server component cache across website
      revalidatePath('/', 'layout')
      revalidatePath('/products')
      revalidatePath('/categories')
      return NextResponse.json({ success: true, data: result.data })
    }
    return NextResponse.json({ success: false, error: result.error }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ success: false, error: 'Product ID missing' }, { status: 400 })
    }

    const result = await deleteProduct(id)
    if (result.success) {
      revalidatePath('/', 'layout')
      revalidatePath('/products')
      revalidatePath('/categories')
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ success: false, error: result.error }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
