import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/lib/supabase/service'
import { MessageCircle, Eye } from 'lucide-react'

export const revalidate = 60

export default async function GalleryPage() {
  const products = await getProducts()

  const galleryImages = products.flatMap((p) =>
    p.images.map((img) => ({
      ...img,
      product_name: p.name,
      product_slug: p.slug,
      category_name: p.category_name,
    }))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Visual Craftsmanship Showcase
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
          Artisanal Photography Gallery
        </h1>
        <p className="text-stone-600 text-base font-light">
          A visual feast of our handcrafted marble deity sculptures, royal home shrines, inlay table tops, and decor artifacts.
        </p>
      </div>

      {/* Gallery Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((item, idx) => (
          <div
            key={item.id || idx}
            className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 group bg-stone-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative min-h-[280px] sm:min-h-[360px] w-full">
              <Image
                src={item.image_url}
                alt={item.product_name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                {item.category_name}
              </span>
              <h3 className="font-serif text-lg font-bold line-clamp-2">{item.product_name}</h3>

              <div className="flex items-center gap-3 mt-4">
                <Link
                  href={`/products/${item.product_slug}`}
                  className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" /> View Product
                </Link>
                <a
                  href={`https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20saw%20this%20photo%20in%20your%20gallery%20and%20want%20details:%20"${encodeURIComponent(
                    item.product_name
                  )}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 rounded-lg transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
