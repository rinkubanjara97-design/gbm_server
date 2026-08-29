import React from 'react'
import { getCategories, getProducts } from '@/lib/supabase/service'
import { GalleryClient } from '@/components/gallery/GalleryClient'
import { FadeIn } from '@/components/ui/ScrollAnimation'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function GalleryPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ])

  const galleryItems = products.flatMap((p) =>
    p.images.map((img: any) => ({
      id: img.id || `${p.id}-${img.image_url}`,
      image_url: img.image_url,
      product_name: p.name,
      product_slug: p.slug,
      category_name: p.category_name || 'Handicrafts',
      category_slug: p.category_slug || 'handicrafts-items',
    }))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-[#FAF8F5]">
      {/* Header */}
      <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
          Visual Atelier Showcase
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          Category-Wise Photography Gallery
        </h1>
        <p className="text-[#555555] text-base font-light leading-relaxed">
          Filter our complete visual catalog by category. All sculptures, mandirs, and handicrafts are carved from pure white Makrana marble.
        </p>
      </FadeIn>

      {/* Interactive Filterable Category Grid */}
      <GalleryClient categories={categories} items={galleryItems} />
    </div>
  )
}
