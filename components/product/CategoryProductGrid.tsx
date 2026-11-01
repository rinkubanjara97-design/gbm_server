'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data/mock-data'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

interface CategoryProductGridProps {
  products: Product[]
  categoryName: string
}

export function CategoryProductGrid({ products, categoryName }: CategoryProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(8)

  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-[#E5E2DC] p-8 space-y-4 shadow-2xs max-w-2xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
          Custom Order Sculpting Available
        </h3>
        <p className="text-[#555555] text-sm font-light leading-relaxed">
          We carve custom {categoryName} to order according to your exact architectural dimensions and specifications.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919210702703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#B08968] text-white px-6 py-3.5 rounded-md text-xs font-medium uppercase tracking-wider transition-colors shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white fill-current" /> Enquire via WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const visibleProducts = products.slice(0, visibleCount)
  const hasMore = visibleCount < products.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8)
  }

  return (
    <div className="space-y-12">
      {/* 2-Column Mobile Grid & Multi-Column Desktop Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
        {visibleProducts.map((prod) => {
          const coverImg = prod.images.find((i: any) => i.is_cover)?.image_url || prod.images[0]?.image_url
          return (
            <div key={prod.id} className="group block space-y-3">
              <Link
                href={`/products/${prod.slug}`}
                className="relative h-44 sm:h-72 rounded-xl overflow-hidden bg-[#F2EFE9] block shadow-2xs cursor-pointer"
              >
                {coverImg && (
                  <Image
                    src={coverImg}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </Link>

              <div className="space-y-2">
                <Link href={`/products/${prod.slug}`}>
                  <h3 className="font-sans text-xs sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1 flex items-center justify-between">
                    {prod.name}
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#B08968] transition-colors shrink-0 ml-1" />
                  </h3>
                </Link>
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#666666]">
                  <span className="truncate">{prod.material}</span>
                  <a
                    href={`https://wa.me/919210702703?text=${encodeURIComponent(
                      `Namaste GBM Marble Handicrafts!\n\nI am interested in inquiring about:\n📦 Product: ${prod.name}\n🖼️ Photo: ${coverImg}\n💎 Material: ${prod.material}\n\nPlease share details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A1A1A] hover:text-[#B08968] font-medium inline-flex items-center gap-1 transition-colors shrink-0 ml-1"
                  >
                    Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Load More (+8 Items) Button Bar */}
      {hasMore && (
        <div className="text-center pt-6 border-t border-[#E5E2DC]">
          <button
            onClick={handleLoadMore}
            className="bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium px-8 py-3.5 rounded-md text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-2xs hover:scale-102"
          >
            <span>Load More</span>
            <ChevronDown className="w-4 h-4 text-[#B08968]" />
          </button>
          <p className="text-[11px] text-[#888888] font-sans mt-2 font-light">
            Showing {visibleProducts.length} of {products.length} items
          </p>
        </div>
      )}
    </div>
  )
}
