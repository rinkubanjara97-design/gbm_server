import { NextRequest, NextResponse } from 'next/server'
import { getAllAdminCategories, saveCategory, deleteCategory } from '@/lib/supabase/service'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const categories = await getAllAdminCategories()
  return NextResponse.json(categories)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = await saveCategory(body)
    if (result.success) {
      revalidatePath('/', 'layout')
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
      return NextResponse.json({ success: false, error: 'Category ID missing' }, { status: 400 })
    }

    const result = await deleteCategory(id)
    if (result.success) {
      revalidatePath('/', 'layout')
      revalidatePath('/categories')
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ success: false, error: result.error }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
