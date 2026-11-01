import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_ENQUIRIES, Category, Product, Enquiry } from '@/lib/data/mock-data'
import { createClient, createAdminClient } from './client'

// Global site settings cache & deletion trackers
let GLOBAL_SITE_SETTINGS: any = null
const DELETED_PRODUCT_IDS = new Set<string>()
const DELETED_CATEGORY_IDS = new Set<string>()

function loadProductsFromFile() {
  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const pPath = path.join(process.cwd(), 'lib', 'data', 'products.json')
      if (fs.existsSync(pPath)) {
        const content = fs.readFileSync(pPath, 'utf8')
        const fileData = JSON.parse(content)
        if (Array.isArray(fileData) && fileData.length > 0) {
          fileData.forEach((p: Product) => {
            const idx = MOCK_PRODUCTS.findIndex((mp) => mp.id === p.id || mp.slug === p.slug)
            if (idx >= 0) {
              MOCK_PRODUCTS[idx] = { ...MOCK_PRODUCTS[idx], ...p }
            } else {
              MOCK_PRODUCTS.unshift(p)
            }
          })
        }
      }
    } catch {}
  }
}

function saveProductsToFile() {
  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const pPath = path.join(process.cwd(), 'lib', 'data', 'products.json')
      fs.writeFileSync(pPath, JSON.stringify(MOCK_PRODUCTS, null, 2), 'utf8')
    } catch {}
  }
}

function loadCategoriesFromFile() {
  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const cPath = path.join(process.cwd(), 'lib', 'data', 'categories.json')
      if (fs.existsSync(cPath)) {
        const content = fs.readFileSync(cPath, 'utf8')
        const fileData = JSON.parse(content)
        if (Array.isArray(fileData) && fileData.length > 0) {
          fileData.forEach((c: Category) => {
            const idx = MOCK_CATEGORIES.findIndex((mc) => mc.id === c.id || mc.slug === c.slug)
            if (idx >= 0) {
              MOCK_CATEGORIES[idx] = { ...MOCK_CATEGORIES[idx], ...c }
            } else {
              MOCK_CATEGORIES.unshift(c)
            }
          })
        }
      }
    } catch {}
  }
}

function saveCategoriesToFile() {
  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const cPath = path.join(process.cwd(), 'lib', 'data', 'categories.json')
      fs.writeFileSync(cPath, JSON.stringify(MOCK_CATEGORIES, null, 2), 'utf8')
    } catch {}
  }
}

export async function getCategories(): Promise<Category[]> {
  loadCategoriesFromFile()
  const activeMockCategories = MOCK_CATEGORIES.filter((c) => !DELETED_CATEGORY_IDS.has(c.id))
  const supabase = createClient()
  if (!supabase) return activeMockCategories

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_visible', true)
      .order('sort_order', { ascending: true })

    if (error || !data || data.length === 0) return activeMockCategories

    const dbCategories = data.filter((c: Category) => !DELETED_CATEGORY_IDS.has(c.id))
    const mockCatMap = new Map(activeMockCategories.map((c) => [c.id, c]))
    const mockCatSlugMap = new Map(activeMockCategories.map((c) => [c.slug, c]))

    const mergedDbCategories = dbCategories.map((dbc: Category) => {
      const override = mockCatMap.get(dbc.id) || mockCatSlugMap.get(dbc.slug)
      return override ? { ...dbc, ...override } : dbc
    })

    const dbIds = new Set(mergedDbCategories.map((c: Category) => c.id))
    const dbSlugs = new Set(mergedDbCategories.map((c: Category) => c.slug))
    const uniqueMock = activeMockCategories.filter((c) => !dbIds.has(c.id) && !dbSlugs.has(c.slug))
    const all = [...mergedDbCategories, ...uniqueMock]

    const topLevel = all.filter((c: Category) => !c.parent_id)
    return topLevel.map((parent: Category) => ({
      ...parent,
      children: all.filter((c: Category) => c.parent_id === parent.id),
    }))
  } catch {
    return activeMockCategories
  }
}

export async function getAllAdminCategories(): Promise<Category[]> {
  loadCategoriesFromFile()
  const activeMockCategories = MOCK_CATEGORIES.filter((c) => !DELETED_CATEGORY_IDS.has(c.id))
  const supabase = createAdminClient() || createClient()
  if (!supabase) return activeMockCategories

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error || !data || data.length === 0) return activeMockCategories
    
    const dbCategories = data.filter((c: Category) => !DELETED_CATEGORY_IDS.has(c.id))
    const mockCatMap = new Map(activeMockCategories.map((c) => [c.id, c]))
    const mockCatSlugMap = new Map(activeMockCategories.map((c) => [c.slug, c]))

    const mergedDbCategories = dbCategories.map((dbc: Category) => {
      const override = mockCatMap.get(dbc.id) || mockCatSlugMap.get(dbc.slug)
      return override ? { ...dbc, ...override } : dbc
    })

    const dbIds = new Set(mergedDbCategories.map((c: Category) => c.id))
    const dbSlugs = new Set(mergedDbCategories.map((c: Category) => c.slug))
    const uniqueMock = activeMockCategories.filter((c) => !dbIds.has(c.id) && !dbSlugs.has(c.slug))

    return [...mergedDbCategories, ...uniqueMock]
  } catch {
    return activeMockCategories
  }
}

export async function saveCategory(category: Partial<Category>): Promise<{ success: boolean; data?: any; error?: string }> {
  const supabase = createAdminClient() || createClient()
  
  const catId = category.id || `cat-new-${Date.now()}`
  if (category.id) DELETED_CATEGORY_IDS.delete(category.id)

  const updatedCategory: Category = {
    id: catId,
    name: category.name || 'New Category',
    slug: category.slug || (category.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    description: category.description || '',
    banner_image_url: category.banner_image_url || '',
    parent_id: category.parent_id || null,
    sort_order: category.sort_order || 0,
    is_visible: category.is_visible !== false,
  }

  // Update in-memory categories array & save to file
  const existingIdx = MOCK_CATEGORIES.findIndex((c) => c.id === catId || c.slug === updatedCategory.slug)
  if (existingIdx >= 0) {
    MOCK_CATEGORIES[existingIdx] = { ...MOCK_CATEGORIES[existingIdx], ...updatedCategory }
  } else {
    MOCK_CATEGORIES.unshift(updatedCategory)
  }

  saveCategoriesToFile()

  if (supabase) {
    try {
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(category.id || '')
      const catPayload: any = {
        name: updatedCategory.name,
        slug: updatedCategory.slug,
        description: updatedCategory.description,
        banner_image_url: updatedCategory.banner_image_url,
        sort_order: updatedCategory.sort_order,
        is_visible: updatedCategory.is_visible,
      }
      if (isUuid) {
        catPayload.id = category.id
      }

      const { data: catDb } = await supabase.from('categories').upsert([catPayload], { onConflict: 'slug' }).select().single()
      if (catDb?.id) {
        updatedCategory.id = catDb.id
        saveCategoriesToFile()
      }
    } catch (err: any) {
      console.warn('Supabase category save fallback:', err?.message)
    }
  }

  return { success: true, data: updatedCategory }
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  DELETED_CATEGORY_IDS.add(id)
  const catIdx = MOCK_CATEGORIES.findIndex((c) => c.id === id)
  if (catIdx >= 0) {
    MOCK_CATEGORIES.splice(catIdx, 1)
  }
  saveCategoriesToFile()

  const supabase = createAdminClient() || createClient()
  if (supabase) {
    try {
      await supabase.from('categories').delete().eq('id', id)
    } catch (err: any) {
      console.warn('Supabase category delete fallback:', err?.message)
    }
  }

  return { success: true }
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

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  loadProductsFromFile()
  const activeMockProducts = MOCK_PRODUCTS.filter((p) => !DELETED_PRODUCT_IDS.has(p.id) && p.is_published !== false)
  const supabase = createClient()

  let allProducts = activeMockProducts

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, category:categories(name, slug), images:product_images(*)')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        const dbProducts: Product[] = data
          .filter((p: any) => !DELETED_PRODUCT_IDS.has(p.id))
          .map((p: any) => ({
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
            price: p.price || 'Price on Request',
            is_featured: p.is_featured,
            is_published: p.is_published,
            images: p.images || [],
          }))

        const mockMap = new Map(activeMockProducts.map((p) => [p.id, p]))
        const mockSlugMap = new Map(activeMockProducts.map((p) => [p.slug, p]))

        const mergedDbProducts = dbProducts.map((dbp) => {
          const override = mockMap.get(dbp.id) || mockSlugMap.get(dbp.slug)
          return override ? { ...dbp, ...override } : dbp
        })

        const dbProductIds = new Set(mergedDbProducts.map((p) => p.id))
        const dbProductSlugs = new Set(mergedDbProducts.map((p) => p.slug))
        const uniqueMockProducts = activeMockProducts.filter((p) => !dbProductIds.has(p.id) && !dbProductSlugs.has(p.slug))

        allProducts = [...mergedDbProducts, ...uniqueMockProducts]
      }
    } catch {
      // Fallback to activeMockProducts
    }
  }

  if (categorySlug) {
    allProducts = allProducts.filter((p) => p.category_slug === categorySlug)
  }

  return allProducts
}

export async function getAllAdminProducts(): Promise<Product[]> {
  loadProductsFromFile()
  const activeMockProducts = MOCK_PRODUCTS.filter((p) => !DELETED_PRODUCT_IDS.has(p.id))
  const supabase = createAdminClient() || createClient()

  if (!supabase) return activeMockProducts

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*, category:categories(name, slug), images:product_images(*)')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) return activeMockProducts

    const dbProducts: Product[] = data
      .filter((p: any) => !DELETED_PRODUCT_IDS.has(p.id))
      .map((p: any) => ({
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
        price: p.price || 'Price on Request',
        is_featured: p.is_featured,
        is_published: p.is_published,
        images: p.images || [],
      }))

    const mockMap = new Map(activeMockProducts.map((p) => [p.id, p]))
    const mockSlugMap = new Map(activeMockProducts.map((p) => [p.slug, p]))

    const mergedDbProducts = dbProducts.map((dbp) => {
      const override = mockMap.get(dbp.id) || mockSlugMap.get(dbp.slug)
      return override ? { ...dbp, ...override } : dbp
    })

    const dbProductIds = new Set(mergedDbProducts.map((p) => p.id))
    const dbProductSlugs = new Set(mergedDbProducts.map((p) => p.slug))
    const uniqueMockProducts = activeMockProducts.filter((p) => !dbProductIds.has(p.id) && !dbProductSlugs.has(p.slug))

    return [...mergedDbProducts, ...uniqueMockProducts]
  } catch {
    return activeMockProducts
  }
}

export async function saveProduct(
  product: Partial<Product>,
  images: { image_url: string; is_cover: boolean }[]
): Promise<{ success: boolean; data?: any; error?: string }> {
  const supabase = createAdminClient() || createClient()
  let savedProductId = product.id || `prod-new-${Date.now()}`

  if (product.id) DELETED_PRODUCT_IDS.delete(product.id)
  DELETED_PRODUCT_IDS.delete(savedProductId)

  // Find category details for correct category filtering on website
  const categoryMatch = MOCK_CATEGORIES.find((c) => c.id === product.category_id || c.slug === product.category_slug)
  const catName = categoryMatch?.name || product.category_name || 'Handicrafts'
  const catSlug = categoryMatch?.slug || product.category_slug || 'handicrafts-items'

  const formattedImages = images.map((img, idx) => ({
    id: `img-${savedProductId}-${idx}`,
    product_id: savedProductId,
    image_url: img.image_url,
    is_cover: img.is_cover || idx === 0,
  }))

  const fullProduct: Product = {
    id: savedProductId,
    name: product.name || 'New Marble Sculpture',
    slug: product.slug || (product.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    category_id: product.category_id || 'cat-1',
    category_name: catName,
    category_slug: catSlug,
    description: product.description || '',
    material: product.material || 'Pure White Makrana Marble',
    size: product.size || 'Standard Size',
    finish: product.finish || 'Natural Diamond Polish',
    work_type: product.work_type || 'Hand Relief Carving',
    price: product.price || 'Price on Request',
    is_featured: product.is_featured !== false,
    is_published: product.is_published !== false,
    images: formattedImages,
  }

  // Update in-memory MOCK_PRODUCTS & persist to file
  const existingIndex = MOCK_PRODUCTS.findIndex((p) => p.id === savedProductId || p.slug === fullProduct.slug)
  if (existingIndex >= 0) {
    MOCK_PRODUCTS[existingIndex] = { ...MOCK_PRODUCTS[existingIndex], ...fullProduct }
  } else {
    MOCK_PRODUCTS.unshift(fullProduct)
  }

  saveProductsToFile()

  if (supabase) {
    try {
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(product.id || '')

      let validCatUuid: string | null = categoryMatch && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(categoryMatch.id) ? categoryMatch.id : null

      if (!validCatUuid) {
        const { data: catDb } = await supabase.from('categories').select('id').eq('slug', catSlug).maybeSingle()
        if (catDb?.id) {
          validCatUuid = catDb.id
        } else {
          const { data: newCat } = await supabase.from('categories').insert([{
            name: catName,
            slug: catSlug,
            description: `${catName} collection`,
            is_visible: true
          }]).select().single()
          if (newCat?.id) validCatUuid = newCat.id
        }
      }

      if (validCatUuid) {
        const payload: any = {
          name: fullProduct.name,
          slug: fullProduct.slug,
          category_id: validCatUuid,
          description: fullProduct.description,
          material: fullProduct.material,
          size: fullProduct.size,
          finish: fullProduct.finish,
          work_type: fullProduct.work_type,
          price: fullProduct.price,
          is_featured: fullProduct.is_featured,
          is_published: fullProduct.is_published,
        }
        if (isUuid) {
          payload.id = product.id
        }

        const { data: upsertedProd } = await supabase.from('products').upsert([payload], { onConflict: 'slug' }).select().single()
        if (upsertedProd?.id) {
          savedProductId = upsertedProd.id
          fullProduct.id = savedProductId
          saveProductsToFile()
        }

        if (images.length > 0 && savedProductId) {
          await supabase.from('product_images').delete().eq('product_id', savedProductId)
          const imagePayloads = images.map((img, i) => ({
            product_id: savedProductId,
            image_url: img.image_url,
            is_cover: img.is_cover || i === 0,
            sort_order: i,
          }))
          await supabase.from('product_images').insert(imagePayloads)
        }
      }
    } catch (err: any) {
      console.warn('Supabase product save fallback:', err?.message)
    }
  }

  return { success: true, data: { id: savedProductId } }
}

export async function deleteProduct(id: string): Promise<{ success: boolean; error?: string }> {
  DELETED_PRODUCT_IDS.add(id)
  const prodIdx = MOCK_PRODUCTS.findIndex((p) => p.id === id)
  if (prodIdx >= 0) {
    MOCK_PRODUCTS.splice(prodIdx, 1)
  }
  saveProductsToFile()

  const supabase = createAdminClient() || createClient()
  if (supabase) {
    try {
      await supabase.from('product_images').delete().eq('product_id', id)
      await supabase.from('products').delete().eq('id', id)
    } catch (err: any) {
      console.warn('Supabase product delete fallback:', err?.message)
    }
  }

  return { success: true }
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

export async function getRelatedProducts(categoryId: string, currentProductId: string, categorySlug?: string): Promise<Product[]> {
  const all = await getProducts()
  // Filter products matching the same category first
  let sameCategory = all.filter(
    (p) => p.id !== currentProductId && (p.category_id === categoryId || (categorySlug && p.category_slug === categorySlug))
  )

  // Append remaining products as fallback
  const remaining = all.filter((p) => p.id !== currentProductId && !sameCategory.some((sc) => sc.id === p.id))
  sameCategory = [...sameCategory, ...remaining]

  return sameCategory
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

export async function getEnquiries(): Promise<Enquiry[]> {
  const supabase = createAdminClient() || createClient()
  if (!supabase) return MOCK_ENQUIRIES

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*, product:products(name)')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) return MOCK_ENQUIRIES

    return data.map((e: any) => ({
      id: e.id,
      name: e.name,
      phone: e.phone,
      email: e.email,
      message: e.message,
      product_id: e.product_id,
      product_name: e.product?.name || 'General Inquiry',
      is_read: e.is_read,
      created_at: e.created_at,
    }))
  } catch {
    return MOCK_ENQUIRIES
  }
}

export async function markEnquiryRead(id: string, is_read: boolean): Promise<{ success: boolean }> {
  const supabase = createAdminClient() || createClient()
  if (!supabase) return { success: true }

  try {
    await supabase.from('enquiries').update({ is_read }).eq('id', id)
    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function deleteEnquiry(id: string): Promise<{ success: boolean }> {
  const supabase = createAdminClient() || createClient()
  if (!supabase) return { success: true }

  try {
    await supabase.from('enquiries').delete().eq('id', id)
    return { success: true }
  } catch {
    return { success: false }
  }
}

export interface SiteSettings {
  logo_image_url: string
  hero_image_url: string
  hero_title: string
  hero_subtitle: string
  hero_badge: string
  hero_object_fit: string
  hero_aspect_ratio: string
  hero_bg_color: string
  heritage_image_url: string
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const defaultSettings: SiteSettings = {
    logo_image_url: '/logo.jpg',
    hero_image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787817748/gbm-marble-handicrafts/god-statues/dxqz2jqqyo6el1uyyky8.jpg',
    hero_title: 'White Makrana Marble Lord Ganesha Statue',
    hero_subtitle: 'Master Sculptor Creation',
    hero_badge: 'Custom Order',
    hero_object_fit: 'cover-top',
    hero_aspect_ratio: '4/3',
    hero_bg_color: '#FAF8F5',
    heritage_image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787819081/gbm-marble-handicrafts/vedi-temple/xnddxikch5gcd3uii5mi.jpg',
  }

  // 1. Try reading from Supabase
  const supabase = createAdminClient() || createClient()
  if (supabase) {
    try {
      const { data, error } = await supabase.from('site_settings').select('*').eq('id', 'main').maybeSingle()
      if (data && !error) {
        GLOBAL_SITE_SETTINGS = { ...defaultSettings, ...data }
        return GLOBAL_SITE_SETTINGS
      }
    } catch {}
  }

  // 2. Try reading from lib/data/site-settings.json
  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const settingsPath = path.join(process.cwd(), 'lib', 'data', 'site-settings.json')
      if (fs.existsSync(settingsPath)) {
        const content = fs.readFileSync(settingsPath, 'utf8')
        const parsed = JSON.parse(content)
        GLOBAL_SITE_SETTINGS = { ...defaultSettings, ...parsed }
        return GLOBAL_SITE_SETTINGS
      }
    } catch {}
  }

  if (GLOBAL_SITE_SETTINGS) {
    return { ...defaultSettings, ...GLOBAL_SITE_SETTINGS }
  }

  return defaultSettings
}

export async function saveSiteSettings(settings: Partial<SiteSettings>): Promise<{ success: boolean; error?: string }> {
  const current = await getSiteSettings()
  const updated = { ...current, ...settings }
  GLOBAL_SITE_SETTINGS = updated

  const supabase = createAdminClient() || createClient()
  if (supabase) {
    try {
      await supabase.from('site_settings').upsert({ id: 'main', ...updated }, { onConflict: 'id' })
    } catch (err: any) {
      console.warn('Supabase site settings save fallback:', err?.message)
    }
  }

  if (typeof window === 'undefined') {
    try {
      const fs = eval("require('fs')")
      const path = eval("require('path')")
      const settingsPath = path.join(process.cwd(), 'lib', 'data', 'site-settings.json')
      fs.writeFileSync(settingsPath, JSON.stringify(updated, null, 2), 'utf8')
    } catch {}
  }

  return { success: true }
}

