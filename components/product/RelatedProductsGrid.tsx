'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data/mock-data'
import { ChevronDown } from 'lucide-react'

interface RelatedProductsGridProps {
  products: Product[]
}

export function RelatedProductsGrid({ products }: RelatedProductsGridProps) {
  const [visibleCount, setVisibleCount] = useState(4)

  if (!products || products.length === 0) return null

  const visibleProducts = products.slice(0, visibleCount)
  const hasMore = visibleCount < products.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  return (
    <div className="space-y-8">
      {/* 2-Column Mobile Grid & Multi-Column Desktop Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {visibleProducts.map((rel) => {
          const relImg = rel.images[0]?.image_url
          return (
            <Link key={rel.id} href={`/products/${rel.slug}`} className="group block space-y-2 cursor-pointer">
              <div className="relative h-40 sm:h-60 rounded-xl overflow-hidden bg-[#F2EFE9] shadow-2xs">
                {relImg && (
                  <Image
                    src={relImg}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1">
                {rel.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#888888] truncate">{rel.material}</p>
            </Link>
          )
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center pt-4 border-t border-[#E5E2DC]">
          <button
            onClick={handleLoadMore}
            className="bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium px-8 py-3 rounded-md text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-2xs hover:scale-102"
          >
            <span>Load More</span>
            <ChevronDown className="w-4 h-4 text-[#B08968]" />
          </button>
          <p className="text-[11px] text-[#888888] font-sans mt-2 font-light">
            Showing {visibleProducts.length} of {products.length} related sculptures
          </p>
        </div>
      )}
    </div>
  )
}
