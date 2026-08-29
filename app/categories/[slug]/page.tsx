import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProducts } from '@/lib/supabase/service'
import { Category } from '@/lib/data/mock-data'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
    <div className="space-y-12 pb-20 bg-[#FAF8F5]">
      {/* Category Hero Banner */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[#1A1A1A] text-white overflow-hidden">
        {category.banner_image_url && (
          <Image
            src={category.banner_image_url}
            alt={category.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-30"
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
            GBM Marble Atelier Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            {category.name}
          </h1>
          <p className="text-[#D8D3CA]/80 text-base max-w-2xl mx-auto font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Sub-category Filter Chips */}
        {category.children && category.children.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#E5E2DC]">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#888888] mr-2">
              Sub-Categories:
            </span>
            {category.children.map((sub: Category) => (
              <Link
                key={sub.id}
                href={`/categories/${sub.slug}`}
                className="bg-white hover:bg-[#1A1A1A] hover:text-white border border-[#E5E2DC] text-[#1A1A1A] text-xs font-medium px-4 py-2 rounded-md transition-all shadow-2xs"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-[#E5E2DC] p-8 space-y-4 shadow-2xs max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Custom Order Sculpting Available
            </h3>
            <p className="text-[#555555] text-sm font-light leading-relaxed">
              We carve custom {category.name} to order according to your exact architectural dimensions and specifications.
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((prod) => {
              const coverImg = prod.images.find((i: any) => i.is_cover)?.image_url || prod.images[0]?.image_url
              return (
                <div key={prod.id} className="group block space-y-3">
                  <Link href={`/products/${prod.slug}`} className="relative h-72 rounded-xl overflow-hidden bg-[#F2EFE9] block shadow-2xs">
                    {coverImg && (
                      <Image
                        src={coverImg}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </Link>

                  <div className="space-y-2">
                    <Link href={`/products/${prod.slug}`}>
                      <h3 className="font-sans text-base font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1 flex items-center justify-between">
                        {prod.name}
                        <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#B08968] transition-colors" />
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-[#666666]">
                      <span>{prod.material}</span>
                      <a
                        href={`https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20am%20interested%20in%20"${encodeURIComponent(prod.name)}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A1A1A] hover:text-[#B08968] font-medium inline-flex items-center gap-1 transition-colors"
                      >
                        Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
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
