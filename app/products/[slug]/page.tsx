import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/lib/supabase/service'
import { ProductGallery } from '@/components/product/ProductGallery'
import { MessageCircle, Phone, ShieldCheck, Truck, ChevronRight } from 'lucide-react'
import { ChiselIcon } from '@/components/ui/ChiselIcons'

export const revalidate = 60

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)
  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category_id, product.id)

  const whatsappMessage = encodeURIComponent(
    `Namaste GBM Marble Handicrafts, I am interested in inquiring about "${product.name}" (Material: ${product.material}, Size: ${product.size}). Please share details.`
  )
  const whatsappUrl = `https://wa.me/919210702703?text=${whatsappMessage}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#2B2723]/60 uppercase tracking-wider">
        <Link href="/" className="hover:text-[#A63D2F]">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/categories" className="hover:text-[#A63D2F]">
          Categories
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/categories/${product.category_slug}`} className="hover:text-[#A63D2F]">
          {product.category_name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#A63D2F] font-bold truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main Product Specification & Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Gallery */}
        <ProductGallery images={product.images} title={product.name} />

        {/* Right: Specifications & Enquiry CTAs */}
        <div className="space-y-6">
          <div>
            <span className="inline-block bg-[#4A5D53] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-3">
              {product.category_name} • {product.work_type}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2723] leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Craftsman Measurement Specs Tag Box */}
          <div className="bg-[#E4DDCF]/40 p-5 rounded-sm border border-[#E4DDCF] space-y-3">
            <h3 className="font-mono font-bold text-[#2B2723] text-xs uppercase tracking-widest flex items-center gap-1.5 border-b border-[#E4DDCF] pb-2">
              <ChiselIcon className="w-4 h-4 text-[#B8924A]" /> Craftsman Specifications Tag
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
              <div>
                <dt className="text-[#2B2723]/60 font-mono text-[11px] uppercase">Material</dt>
                <dd className="font-semibold text-[#2B2723] mt-0.5">{product.material}</dd>
              </div>
              <div>
                <dt className="text-[#2B2723]/60 font-mono text-[11px] uppercase">Dimensions / Size</dt>
                <dd className="font-semibold text-[#2B2723] mt-0.5">{product.size}</dd>
              </div>
              <div>
                <dt className="text-[#2B2723]/60 font-mono text-[11px] uppercase">Surface Finish</dt>
                <dd className="font-semibold text-[#2B2723] mt-0.5">{product.finish}</dd>
              </div>
              <div>
                <dt className="text-[#2B2723]/60 font-mono text-[11px] uppercase">Workmanship</dt>
                <dd className="font-semibold text-[#2B2723] mt-0.5">{product.work_type}</dd>
              </div>
            </dl>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-[#2B2723] text-base">Product Description</h3>
            <p className="text-[#2B2723]/80 text-sm leading-relaxed font-light">{product.description}</p>
          </div>

          {/* Enquire CTAs (Strictly No Price Tag, No Cart, No Buy Button) */}
          <div className="space-y-3 pt-4 border-t border-[#E4DDCF]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Enquire on WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:9210702703"
                className="bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold py-3 rounded-sm text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8924A]" />
                Call 9210702703
              </a>
              <a
                href="tel:9785702703"
                className="bg-[#2B2723] hover:bg-stone-900 text-white font-bold py-3 rounded-sm text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8924A]" />
                Call 9785702703
              </a>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] font-mono text-[#2B2723]/70 uppercase">
            <div className="p-2.5 bg-white border border-[#E4DDCF] rounded-sm">
              <ShieldCheck className="w-4 h-4 text-[#B8924A] mx-auto mb-1" />
              100% Pure Marble
            </div>
            <div className="p-2.5 bg-white border border-[#E4DDCF] rounded-sm">
              <ChiselIcon className="w-4 h-4 text-[#B8924A] mx-auto mb-1" />
              Custom Dimensions
            </div>
            <div className="p-2.5 bg-white border border-[#E4DDCF] rounded-sm">
              <Truck className="w-4 h-4 text-[#B8924A] mx-auto mb-1" />
              Worldwide Shipping
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-[#E4DDCF]">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#2B2723]">
              Related Marble Creations
            </h2>
            <Link
              href={`/categories/${product.category_slug}`}
              className="text-xs font-semibold uppercase tracking-wider text-[#A63D2F] hover:text-[#8C3125] flex items-center gap-1"
            >
              View Collection <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => {
              const relImg = rel.images.find((i) => i.is_cover)?.image_url || rel.images[0]?.image_url
              return (
                <div
                  key={rel.id}
                  className="bg-white rounded-sm overflow-hidden border border-[#E4DDCF] flex flex-col group hover:shadow-md transition-all"
                >
                  <Link href={`/products/${rel.slug}`} className="relative h-44 bg-[#E4DDCF]/30">
                    {relImg && (
                      <Image src={relImg} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </Link>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <Link href={`/products/${rel.slug}`}>
                      <h4 className="font-serif font-bold text-[#2B2723] text-sm line-clamp-2 hover:text-[#A63D2F]">
                        {rel.name}
                      </h4>
                    </Link>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E4DDCF]">
                      <span className="spec-tag text-[10px]">{rel.material}</span>
                      <Link href={`/products/${rel.slug}`} className="text-[#A63D2F] font-bold text-xs hover:underline">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
