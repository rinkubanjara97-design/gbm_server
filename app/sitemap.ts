import { MetadataRoute } from 'next'
import { getCategories, getProducts } from '@/lib/supabase/service'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gbmmarble.com'
  const currentDate = new Date().toISOString()

  // Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic Category Pages
  let categoryEntries: MetadataRoute.Sitemap = []
  try {
    const categories = await getCategories()
    categoryEntries = categories.map((cat) => ({
      url: `${baseUrl}/categories/${cat.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    }))
  } catch (err) {
    console.error('Error generating category sitemap:', err)
  }

  // Dynamic Product Pages
  let productEntries: MetadataRoute.Sitemap = []
  try {
    const products = await getProducts()
    productEntries = products.map((prod) => ({
      url: `${baseUrl}/products/${prod.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    }))
  } catch (err) {
    console.error('Error generating product sitemap:', err)
  }

  return [...staticPages, ...categoryEntries, ...productEntries]
}
