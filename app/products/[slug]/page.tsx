import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/lib/supabase/service'
import { ProductGallery } from '@/components/product/ProductGallery'
import { MessageCircle, Phone, ShieldCheck, Truck, Sparkles, ChevronRight } from 'lucide-react'

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
    `Namaste GBM Marble Handicrafts, I am interested in inquiring about "${product.name}" (Material: ${product.material}, Size: ${product.size}). Please share catalog & price quotation.`
  )
  const whatsappUrl = `https://wa.me/919210702703?text=${whatsappMessage}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
        <Link href="/" className="hover:text-stone-900">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/categories" className="hover:text-stone-900">
          Categories
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/categories/${product.category_slug}`} className="hover:text-stone-900">
          {product.category_name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-maroon-900 font-semibold truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main Product Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Gallery */}
        <ProductGallery images={product.images} title={product.name} />

        {/* Right: Specifications & CTAs */}
        <div className="space-y-6">
          <div>
            <span className="inline-block bg-maroon-900 text-gold-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-gold-400/40">
              {product.category_name} • {product.work_type}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Key Attributes Box */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <h3 className="font-serif font-bold text-stone-900 border-b pb-2 text-sm uppercase tracking-wider">
              Craftsmanship & Specifications
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm">
              <div>
                <dt className="text-stone-500 font-medium">Material</dt>
                <dd className="font-semibold text-stone-900">{product.material}</dd>
              </div>
              <div>
                <dt className="text-stone-500 font-medium">Dimensions / Size</dt>
                <dd className="font-semibold text-stone-900">{product.size}</dd>
              </div>
              <div>
                <dt className="text-stone-500 font-medium">Surface Finish</dt>
                <dd className="font-semibold text-stone-900">{product.finish}</dd>
              </div>
              <div>
                <dt className="text-stone-500 font-medium">Workmanship</dt>
                <dd className="font-semibold text-stone-900">{product.work_type}</dd>
              </div>
            </dl>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-stone-900 text-base">Product Description</h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">{product.description}</p>
          </div>

          {/* Enquire CTAs (No Cart / No Buy Button) */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Enquire on WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:9210702703"
                className="bg-maroon-900 hover:bg-maroon-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                Call 9210702703
              </a>
              <a
                href="tel:9785702703"
                className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                Call 9785702703
              </a>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-stone-500">
            <div className="p-3 bg-stone-100 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
              100% Pure Marble
            </div>
            <div className="p-3 bg-stone-100 rounded-xl">
              <Sparkles className="w-4 h-4 text-gold-600 mx-auto mb-1" />
              Custom Sizing
            </div>
            <div className="p-3 bg-stone-100 rounded-xl">
              <Truck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
              Worldwide Export
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-8 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Related Marble Creations
            </h2>
            <Link
              href={`/categories/${product.category_slug}`}
              className="text-xs font-bold uppercase tracking-wider text-maroon-900 hover:text-gold-600 flex items-center gap-1"
            >
              View More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => {
              const relImg = rel.images.find((i) => i.is_cover)?.image_url || rel.images[0]?.image_url
              return (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 flex flex-col group hover:shadow-lg transition-all"
                >
                  <Link href={`/products/${rel.slug}`} className="relative h-48 bg-stone-100">
                    {relImg && (
                      <Image src={relImg} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                    )}
                  </Link>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <Link href={`/products/${rel.slug}`}>
                      <h4 className="font-serif font-bold text-stone-900 text-sm line-clamp-2 hover:text-maroon-900">
                        {rel.name}
                      </h4>
                    </Link>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-stone-100">
                      <span className="text-stone-500">{rel.material}</span>
                      <Link href={`/products/${rel.slug}`} className="text-maroon-900 font-bold hover:underline">
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
