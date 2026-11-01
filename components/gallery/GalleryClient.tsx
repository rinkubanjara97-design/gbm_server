'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Grid, ChevronDown } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Category } from '@/lib/data/mock-data'

interface GalleryItem {
  id: string
  image_url: string
  product_name: string
  product_slug: string
  category_name: string
  category_slug: string
}

interface GalleryClientProps {
  categories: Category[]
  items: GalleryItem[]
}

export function GalleryClient({ categories, items }: GalleryClientProps) {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState<number>(8)

  const filteredItems = selectedCategorySlug === 'all'
    ? items
    : items.filter((item) => item.category_slug === selectedCategorySlug)

  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const handleCategorySelect = (slug: string) => {
    setSelectedCategorySlug(slug)
    setVisibleCount(8) // Reset visible count to 8 when category changes
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8)
  }

  return (
    <div className="space-y-10">
      {/* Category Filter Chips Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-[#E5E2DC]">
        <button
          onClick={() => handleCategorySelect('all')}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
            selectedCategorySlug === 'all'
              ? 'bg-[#1A1A1A] text-white shadow-2xs'
              : 'bg-[#F2EFE9] text-[#1A1A1A] hover:bg-[#E5E2DC]'
          }`}
        >
          <Grid className="w-3.5 h-3.5" /> All Categories ({items.length})
        </button>

        {categories.map((cat) => {
          const catCount = items.filter((i) => i.category_slug === cat.slug).length
          if (catCount === 0) return null
          const isSelected = selectedCategorySlug === cat.slug

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#1A1A1A] text-white shadow-2xs'
                  : 'bg-[#F2EFE9] text-[#1A1A1A] hover:bg-[#E5E2DC]'
              }`}
            >
              {cat.name} ({catCount})
            </button>
          )
        })}
      </div>

      {/* Uniform Aspect-Ratio Grid (Equal Width & Height + Head Crop Safety) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
        {visibleItems.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group block space-y-3 bg-white p-3 rounded-xl border border-[#E5E2DC]/70 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            {/* Equal Aspect-Ratio Box (Square aspect-square) */}
            <Link href={`/products/${item.product_slug}`} className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#F2EFE9] block cursor-pointer">
              <Image
                src={item.image_url}
                alt={item.product_name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-xs text-white text-[10px] font-sans font-medium px-2.5 py-1 rounded-md">
                {item.category_name}
              </div>
            </Link>

            {/* Title & Action Links */}
            <div className="space-y-2 px-1">
              <Link href={`/products/${item.product_slug}`}>
                <h3 className="font-sans text-sm font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors truncate flex items-center justify-between">
                  {item.product_name}
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#B08968] transition-colors shrink-0 ml-1" />
                </h3>
              </Link>

              <div className="flex items-center justify-between pt-1 border-t border-[#E5E2DC]/60 text-xs">
                <Link
                  href={`/products/${item.product_slug}`}
                  className="text-xs font-medium text-[#1A1A1A] hover:text-[#B08968] transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={`https://wa.me/919210702703?text=${encodeURIComponent(
                    `Namaste GBM Marble Handicrafts!\n\nI saw this photo in your gallery:\n📦 Item: ${item.product_name}\n🖼️ Photo: ${item.image_url}\n📂 Category: ${item.category_name}\n\nPlease share customization & quotation details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#B08968] inline-flex items-center gap-1 font-medium transition-colors"
                  title="Enquire on WhatsApp"
                >
                  Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More (+8 Photos) Button Bar */}
      {hasMore && (
        <div className="text-center pt-8 border-t border-[#E5E2DC]">
          <button
            onClick={handleLoadMore}
            className="bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium px-8 py-3.5 rounded-md text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-2xs hover:scale-102"
          >
            <span>Load More</span>
            <ChevronDown className="w-4 h-4 text-[#B08968]" />
          </button>
          <p className="text-[11px] text-[#888888] font-sans mt-2 font-light">
            Showing {visibleItems.length} of {filteredItems.length} photos
          </p>
        </div>
      )}
    </div>
  )
}
