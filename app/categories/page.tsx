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
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Our Handcrafted Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
          Product Categories
        </h1>
        <p className="text-stone-600 text-base font-light">
          Explore our complete range of Makrana white marble deity statues, mandirs, Pietra Dura inlay art, and traditional Rajasthani handicrafts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 flex flex-col group hover:shadow-2xl transition-all duration-300"
          >
            <Link href={`/categories/${cat.slug}`} className="relative h-64 overflow-hidden">
              {cat.banner_image_url && (
                <Image
                  src={cat.banner_image_url}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-gold-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Handcrafted
              </div>
            </Link>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <Link href={`/categories/${cat.slug}`}>
                  <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-maroon-900 transition-colors">
                    {cat.name}
                  </h2>
                </Link>
                <p className="text-stone-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                  {cat.description}
                </p>

                {cat.children && cat.children.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                    {cat.children.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/categories/${sub.slug}`}
                        className="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1 rounded-md transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-maroon-900 group-hover:text-gold-600 pt-2"
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
