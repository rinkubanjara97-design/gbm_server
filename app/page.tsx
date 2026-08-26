import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories, getFeaturedProducts } from '@/lib/supabase/service'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { ArrowRight, Sparkles, Shield, Award, Truck, MessageCircle, Phone, ChevronRight } from 'lucide-react'

export const revalidate = 60 // Revalidate every 60s

export default async function HomePage() {
  const categories = await getCategories()
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop"
            alt="GBM Marble Handicrafts Master Showcase"
            fill
            priority
            className="object-cover object-center opacity-40 scale-105 animate-pulse transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/50 text-gold-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Rajasthan&apos;s Finest Marble Artisans
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Handcrafted Marble Artistry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
              Since Generations
            </span>
          </h1>

          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Exquisite white Makrana marble deity idols, custom home temples, Pietra Dura inlay table tops, and heirloom handicrafts crafted for residences and shrines worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/categories"
              className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-stone-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-2xl hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/919210702703?text=Hi%20GBM%20Marble,%20I%20would%20like%20to%20inquire%20about%20your%20marble%20crafts."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl shadow-xl border border-gold-300/30">
          <div className="flex flex-col items-center text-center p-4">
            <Award className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-serif font-bold text-stone-900 text-lg">Master Craftsmanship</h4>
            <p className="text-xs text-stone-500 mt-1">Carved by senior Rajasthani sculptors</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Shield className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-serif font-bold text-stone-900 text-lg">Pure Makrana Marble</h4>
            <p className="text-xs text-stone-500 mt-1">Authentic 100% white Indian marble</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Sparkles className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-serif font-bold text-stone-900 text-lg">Custom Sizing</h4>
            <p className="text-xs text-stone-500 mt-1">Tailored for home temples & villas</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Truck className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-serif font-bold text-stone-900 text-lg">Worldwide Export</h4>
            <p className="text-xs text-stone-500 mt-1">Safe wooden crate door delivery</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
              Collections
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Featured Categories
            </h2>
          </div>
          <Link
            href="/categories"
            className="mt-4 md:mt-0 text-sm font-semibold uppercase tracking-wider text-maroon-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
          >
            View All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-gold-300/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {cat.banner_image_url && (
                <Image
                  src={cat.banner_image_url}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1 font-light">
                  {cat.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-400 group-hover:translate-x-1 transition-transform">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
            Artisan Masterpieces
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Featured Products
          </h2>
          <p className="text-stone-600 text-sm">
            Hand-selected marble statues, temples, and inlay artifacts ready for enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((prod) => {
            const coverImage = prod.images.find((img) => img.is_cover)?.image_url || prod.images[0]?.image_url
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/products/${prod.slug}`} className="relative h-64 overflow-hidden bg-stone-100">
                  {coverImage && (
                    <Image
                      src={coverImage}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className="absolute top-3 left-3 bg-maroon-900 text-gold-300 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-gold-400/40">
                    {prod.work_type}
                  </span>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider block mb-1">
                      {prod.category_name}
                    </span>
                    <Link href={`/products/${prod.slug}`}>
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-maroon-900 transition-colors line-clamp-2">
                        {prod.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-stone-500 mt-2 font-medium">
                      Material: <span className="text-stone-800">{prod.material}</span>
                    </p>
                    <p className="text-xs text-stone-500 font-medium">
                      Size: <span className="text-stone-800">{prod.size}</span>
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg text-center transition-colors"
                    >
                      View Details
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
      </section>

      {/* 5. Our Craftsmanship Story */}
      <section className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-stone-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
              Centuries of Sculpting Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Crafting Divine Statues & Temples with Passion
            </h2>
            <p className="text-stone-300 text-base font-light leading-relaxed">
              Based in Rajasthan, GBM Marble Handicrafts inherits a rich legacy of master stone carvers. Each piece of white Makrana marble is selected with utmost devotion and carved by hand using traditional chisels and modern diamond precision tools.
            </p>
            <p className="text-stone-300 text-base font-light leading-relaxed">
              Whether you require a grand marble temple for your home shrine or an intricate Pietra Dura inlay table for your estate, our craftsmen bring timeless beauty and sacred energy into every creation.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-stone-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-xl hover:from-gold-400 hover:to-gold-500 transition-all"
              >
                Discover Our Heritage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/30">
            <Image
              src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop"
              alt="Artisan Carving Marble Idol"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. Contact Strip & Map Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">
            Our Workshop Location
          </h2>
          <p className="text-stone-600 text-sm">
            Contact us for custom temple dimensions, statue commissions, or international shipping enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b pb-3">
              GBM Marble Handicrafts
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-900">Direct Phone Enquiries:</p>
                  <a href="tel:9210702703" className="text-maroon-900 font-semibold block hover:underline">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="text-maroon-900 font-semibold block hover:underline">
                    +91 9785702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-900">WhatsApp Instant Chat:</p>
                  <a
                    href="https://wa.me/919210702703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold hover:underline"
                  >
                    Chat on WhatsApp (+91 9210702703)
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full bg-maroon-900 hover:bg-maroon-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider block text-center shadow-md transition-colors"
            >
              Send Online Inquiry
            </Link>
          </div>

          <div className="lg:col-span-2">
            <GoogleMap />
          </div>
        </div>
      </section>
    </div>
  )
}
