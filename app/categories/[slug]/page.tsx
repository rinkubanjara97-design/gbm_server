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
    <div className="space-y-10 pb-16">
      {/* Category Hero Banner */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center bg-[#2B2723] text-white overflow-hidden border-b border-[#A63D2F]">
        {category.banner_image_url && (
          <Image
            src={category.banner_image_url}
            alt={category.name}
            fill
            priority
            className="object-cover opacity-35"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF] via-[#2B2723]/50 to-[#2B2723]/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8924A]">
            GBM Marble Handicrafts Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            {category.name}
          </h1>
          <p className="text-[#E4DDCF]/80 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Sub-category Filter Chips */}
        {category.children && category.children.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E4DDCF]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723]/60 mr-2">
              Filter Sub-Categories:
            </span>
            {category.children.map((sub) => (
              <Link
                key={sub.id}
                href={`/categories/${sub.slug}`}
                className="bg-white hover:bg-[#A63D2F] hover:text-white border border-[#E4DDCF] text-[#2B2723] text-xs font-mono px-3.5 py-1.5 rounded-sm transition-all shadow-sm"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-sm border border-[#E4DDCF] p-8 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#2B2723]">
              Custom Order Manufacturing Available
            </h3>
            <p className="text-[#2B2723]/70 text-sm font-light">
              We carve custom {category.name} to order according to your architectural dimensions.
            </p>
            <a
              href="https://wa.me/919210702703"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> Enquire via WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((prod) => {
              const coverImg = prod.images.find((i) => i.is_cover)?.image_url || prod.images[0]?.image_url
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-sm overflow-hidden border border-[#E4DDCF] flex flex-col group hover:shadow-md transition-all duration-300"
                >
                  <Link href={`/products/${prod.slug}`} className="relative h-60 overflow-hidden bg-[#E4DDCF]/30">
                    {coverImg && (
                      <Image
                        src={coverImg}
                        alt={prod.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <span className="absolute top-3 left-3 bg-[#4A5D53] text-white text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm">
                      {prod.work_type}
                    </span>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <Link href={`/products/${prod.slug}`}>
                        <h3 className="font-serif text-base font-bold text-[#2B2723] group-hover:text-[#A63D2F] transition-colors line-clamp-2">
                          {prod.name}
                        </h3>
                      </Link>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="spec-tag">{prod.material}</span>
                        <span className="spec-tag">{prod.size}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E4DDCF] flex items-center gap-2">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="flex-1 bg-[#E4DDCF]/40 hover:bg-[#E4DDCF] text-[#2B2723] text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#B8924A]" /> Details
                      </Link>
                      <a
                        href={`https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20am%20interested%20in%20"${encodeURIComponent(
                          prod.name
                        )}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 rounded-sm transition-colors"
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
