import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_ENQUIRIES, Category, Product, Enquiry } from '@/lib/data/mock-data'
import { createClient } from './client'

export async function getCategories(): Promise<Category[]> {
  const supabase = createClient()
  if (!supabase) return MOCK_CATEGORIES

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_visible', true)
      .order('sort_order', { ascending: true })

    if (error || !data || data.length === 0) return MOCK_CATEGORIES

    // Build hierarchy
    const topLevel = data.filter((c: Category) => !c.parent_id)
    return topLevel.map((parent: Category) => ({
      ...parent,
      children: data.filter((c: Category) => c.parent_id === parent.id),
    }))
  } catch {
    return MOCK_CATEGORIES
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories()
  for (const cat of categories) {
    if (cat.slug === slug) return cat
    if (cat.children) {
      const sub = cat.children.find((c) => c.slug === slug)
      if (sub) return sub
    }
  }
  return null
}

export async function getProducts(categorySlug?: string, subCategorySlug?: string): Promise<Product[]> {
  const supabase = createClient()
  if (!supabase) {
    let prods = MOCK_PRODUCTS
    if (categorySlug) {
      const cat = MOCK_CATEGORIES.find((c) => c.slug === categorySlug)
      if (cat) {
        prods = prods.filter((p) => p.category_id === cat.id || p.category_slug === categorySlug)
      }
    }
    return prods
  }

  try {
    let query = supabase
      .from('products')
      .select('*, category:categories(name, slug), images:product_images(*)')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })

    const { data, error } = await query
    if (error || !data || data.length === 0) return MOCK_PRODUCTS

    return data.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category_id: p.category_id,
      category_name: p.category?.name || 'Handicrafts',
      category_slug: p.category?.slug || 'handicrafts',
      description: p.description,
      material: p.material,
      size: p.size,
      finish: p.finish,
      work_type: p.work_type,
      is_featured: p.is_featured,
      is_published: p.is_published,
      images: p.images || [],
    }))
  } catch {
    return MOCK_PRODUCTS
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts()
  return all.filter((p) => p.is_featured)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const all = await getProducts()
  const found = all.find((p) => p.slug === slug)
  if (found) return found
  return MOCK_PRODUCTS[0] || null
}

export async function getRelatedProducts(categoryId: string, currentProductId: string): Promise<Product[]> {
  const all = await getProducts()
  return all.filter((p) => p.id !== currentProductId).slice(0, 4)
}

export async function submitEnquiry(enquiryData: {
  name: string
  phone: string
  email: string
  message: string
  product_id?: string
}): Promise<{ success: boolean; message: string }> {
  const supabase = createClient()
  if (!supabase) {
    // Add to mock enquiries in memory / console for testing
    MOCK_ENQUIRIES.unshift({
      id: `enq-${Date.now()}`,
      name: enquiryData.name,
      phone: enquiryData.phone,
      email: enquiryData.email,
      message: enquiryData.message,
      product_id: enquiryData.product_id,
      is_read: false,
      created_at: new Date().toISOString(),
    })
    return { success: true, message: 'Your enquiry has been received! Our team will contact you shortly.' }
  }

  try {
    const { error } = await supabase.from('enquiries').insert([enquiryData])
    if (error) throw error
    return { success: true, message: 'Your enquiry has been received! Our team will contact you shortly.' }
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to submit enquiry. Please call or WhatsApp us directly.' }
  }
}
