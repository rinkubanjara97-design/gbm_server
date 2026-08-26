import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProducts } from '@/lib/supabase/service'
import { MessageCircle, Eye } from 'lucide-react'

export const revalidate = 60

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug)
  if (!category) {
    notFound()
  }

  const products = await getProducts(params.slug)

  return (
    <div className="space-y-12 pb-16">
      {/* Category Hero Banner */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        {category.banner_image_url && (
          <Image
            src={category.banner_image_url}
            alt={category.name}
            fill
            priority
            className="object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/40 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
            GBM Handicrafts Collection
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            {category.name}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Sub-category Filter Chips */}
        {category.children && category.children.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">
              Filter Sub-Categories:
            </span>
            {category.children.map((sub) => (
              <Link
                key={sub.id}
                href={`/categories/${sub.slug}`}
                className="bg-white hover:bg-maroon-900 hover:text-white border border-stone-300 text-stone-800 text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              No Products Currently Listed
            </h3>
            <p className="text-stone-600 text-sm">
              We manufacture custom {category.name} on order. Contact our artisans directly to request photos and designs.
            </p>
            <a
              href="https://wa.me/919210702703"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4" /> Enquire via WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((prod) => {
              const coverImg = prod.images.find((i) => i.is_cover)?.image_url || prod.images[0]?.image_url
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-stone-200/80 flex flex-col group transition-all duration-300"
                >
                  <Link href={`/products/${prod.slug}`} className="relative h-64 overflow-hidden bg-stone-100">
                    {coverImg && (
                      <Image
                        src={coverImg}
                        alt={prod.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <span className="absolute top-3 left-3 bg-maroon-900 text-gold-300 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-gold-400/40">
                      {prod.work_type}
                    </span>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <Link href={`/products/${prod.slug}`}>
                        <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-maroon-900 transition-colors line-clamp-2">
                          {prod.name}
                        </h3>
                      </Link>
                      <div className="mt-3 space-y-1 text-xs text-stone-600">
                        <p>
                          <strong className="text-stone-800">Material:</strong> {prod.material}
                        </p>
                        <p>
                          <strong className="text-stone-800">Size:</strong> {prod.size}
                        </p>
                        <p>
                          <strong className="text-stone-800">Finish:</strong> {prod.finish}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" /> Details
                      </Link>
                      <a
                        href={`https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20am%20interested%20in%20"${encodeURIComponent(
                          prod.name
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
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
