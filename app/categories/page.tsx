import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/supabase/service'
import { ArrowRight } from 'lucide-react'

export const revalidate = 60

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A63D2F]">
          Rajasthani Stone Collections
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2723]">
          Product Categories
        </h1>
        <p className="text-[#2B2723]/70 text-sm font-light">
          Explore our portfolio of white Makrana marble deity statues, home temples, Pietra Dura inlay art, and traditional Rajasthani handicrafts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-sm overflow-hidden border border-[#E4DDCF] flex flex-col group hover:shadow-md transition-all duration-300"
          >
            <Link href={`/categories/${cat.slug}`} className="relative h-60 overflow-hidden bg-[#E4DDCF]/30">
              {cat.banner_image_url && (
                <Image
                  src={cat.banner_image_url}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2723]/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 bg-[#A63D2F] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                Hand-Carved
              </div>
            </Link>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <Link href={`/categories/${cat.slug}`}>
                  <h2 className="font-serif text-2xl font-bold text-[#2B2723] group-hover:text-[#A63D2F] transition-colors">
                    {cat.name}
                  </h2>
                </Link>
                <p className="text-[#2B2723]/70 text-xs mt-2 line-clamp-3 leading-relaxed font-light">
                  {cat.description}
                </p>

                {cat.children && cat.children.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#E4DDCF] flex flex-wrap gap-1.5">
                    {cat.children.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/categories/${sub.slug}`}
                        className="spec-tag text-[10px] hover:bg-[#E4DDCF] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#A63D2F] group-hover:text-[#8C3125] pt-2"
              >
                <span>Browse {cat.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
