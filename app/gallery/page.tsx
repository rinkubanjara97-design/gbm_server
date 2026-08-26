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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A63D2F]">
          Visual Crafts Showcase
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2723]">
          Artisanal Photography Gallery
        </h1>
        <p className="text-[#2B2723]/70 text-sm font-light">
          A visual journey through our white Makrana marble deity idols, home temples, Pietra Dura inlay art, and Rajasthani wooden crafts.
        </p>
      </div>

      {/* Gallery Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((item, idx) => (
          <div
            key={item.id || idx}
            className="break-inside-avoid relative rounded-sm overflow-hidden border border-[#E4DDCF] group bg-[#E4DDCF]/20 transition-all duration-300 hover:shadow-md"
          >
            <div className="relative min-h-[260px] sm:min-h-[340px] w-full">
              <Image
                src={item.image_url}
                alt={item.product_name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2723]/90 via-[#2B2723]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8924A] font-bold block mb-1">
                {item.category_name}
              </span>
              <h3 className="font-serif text-base font-bold line-clamp-2">{item.product_name}</h3>

              <div className="flex items-center gap-2 mt-3">
                <Link
                  href={`/products/${item.product_slug}`}
                  className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider py-2 rounded-sm text-center transition-colors flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" /> View Product
                </Link>
                <a
                  href={`https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20saw%20this%20photo%20in%20your%20gallery:%20"${encodeURIComponent(
                    item.product_name
                  )}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2 rounded-sm transition-colors"
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
