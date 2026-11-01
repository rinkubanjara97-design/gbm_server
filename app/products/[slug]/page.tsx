import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/lib/supabase/service'
import { ProductGallery } from '@/components/product/ProductGallery'
import { RelatedProductsGrid } from '@/components/product/RelatedProductsGrid'
import { Phone, ShieldCheck, Truck, ChevronRight } from 'lucide-react'
import { ChiselIcon } from '@/components/ui/ChiselIcons'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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

  const relatedProducts = await getRelatedProducts(product.category_id, product.id, product.category_slug)

  const coverImg = product.images.find((i) => i.is_cover)?.image_url || product.images[0]?.image_url || ''

  const whatsappMessage = encodeURIComponent(
    `Namaste GBM Marble Handicrafts!\n\nI am interested in inquiring about:\n📦 Product: ${product.name}\n🖼️ Photo: ${coverImg}\n💎 Material: ${product.material}\n📏 Size: ${product.size}\n\nPlease share design details & custom order quotation.`
  )
  const whatsappUrl = `https://wa.me/919210702703?text=${whatsappMessage}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#FAF8F5]">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-sans text-[#888888]">
        <Link href="/" className="hover:text-[#1A1A1A]">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/categories" className="hover:text-[#1A1A1A]">
          Categories
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/categories/${product.category_slug}`} className="hover:text-[#1A1A1A]">
          {product.category_name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#1A1A1A] font-semibold truncate max-w-[220px]">{product.name}</span>
      </nav>

      {/* Main Product Specification & Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-6">
          <ProductGallery images={product.images} title={product.name} />
        </div>

        {/* Right: Specifications & Enquiry CTAs */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="inline-block bg-[#1A1A1A] text-white text-[11px] font-sans font-medium uppercase tracking-wider px-3 py-1 rounded-md mb-3">
              {product.category_name} • {product.work_type}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Craftsman Measurement Specs Box */}
          <div className="bg-white p-6 rounded-xl border border-[#E5E2DC] shadow-2xs space-y-4">
            <h3 className="font-sans font-semibold text-[#1A1A1A] text-xs uppercase tracking-wider flex items-center gap-2 border-b border-[#E5E2DC] pb-3">
              <ChiselIcon className="w-4 h-4 text-[#B08968]" /> Atelier Specifications
            </h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs">
              <div>
                <dt className="text-[#888888] font-sans text-[11px] uppercase tracking-wider">Material</dt>
                <dd className="font-semibold text-[#1A1A1A] mt-0.5">{product.material}</dd>
              </div>
              <div>
                <dt className="text-[#888888] font-sans text-[11px] uppercase tracking-wider">Dimensions / Size</dt>
                <dd className="font-semibold text-[#1A1A1A] mt-0.5">{product.size}</dd>
              </div>
              <div>
                <dt className="text-[#888888] font-sans text-[11px] uppercase tracking-wider">Surface Finish</dt>
                <dd className="font-semibold text-[#1A1A1A] mt-0.5">{product.finish}</dd>
              </div>
              <div>
                <dt className="text-[#888888] font-sans text-[11px] uppercase tracking-wider">Workmanship</dt>
                <dd className="font-semibold text-[#1A1A1A] mt-0.5">{product.work_type}</dd>
              </div>
            </dl>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-[#1A1A1A] text-lg">Sculpting Details & Description</h3>
            <p className="text-[#555555] text-sm leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1A1A1A] hover:bg-[#B08968] text-white py-4 rounded-md font-medium text-xs uppercase tracking-wider shadow-2xs flex items-center justify-center gap-2 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
              Inquire via WhatsApp
            </a>
            <a
              href="tel:9210702703"
              className="w-full bg-white hover:bg-[#F2EFE9] text-[#1A1A1A] border border-[#E5E2DC] py-3.5 rounded-md font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B08968]" />
              Call Workshop: +91 9210702703
            </a>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E2DC] text-xs text-[#555555]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B08968]" />
              <span>100% Pure Makrana Stone</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#B08968]" />
              <span>Safe Wooden Crate Shipping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section with Load More */}
      {relatedProducts.length > 0 && (
        <section className="space-y-8 pt-8 border-t border-[#E5E2DC]">
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
            Related Sculptures & Artworks
          </h2>
          <RelatedProductsGrid products={relatedProducts} />
        </section>
      )}
    </div>
  )
}
