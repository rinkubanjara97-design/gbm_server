import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories, getFeaturedProducts } from '@/lib/supabase/service'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { MarbleVeinPattern } from '@/components/ui/MarbleVeinPattern'
import { ChiselIcon, StoneBlockIcon, CaliperIcon, CrateIcon } from '@/components/ui/ChiselIcons'
import { ArrowRight, MessageCircle, Phone, ChevronRight } from 'lucide-react'

export const revalidate = 60

export default async function HomePage() {
  const categories = await getCategories()
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Redesigned Split Hero Section */}
      <section className="relative min-h-[85vh] bg-[#F7F4EF] flex items-center border-b border-[#E4DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Carved Typography & Sandstone Red CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#E4DDCF]/60 border border-[#B8924A]/40 text-[#2B2723] px-3.5 py-1.5 rounded-sm text-[11px] font-mono font-medium uppercase tracking-widest">
                <ChiselIcon className="w-4 h-4 text-[#B8924A]" />
                Rajasthani Stone Carving Workshop
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2723] leading-[1.1] tracking-tight carved-text">
                Carved From White <br />
                <span className="text-[#A63D2F]">Makrana Marble</span> <br />
                Since Generations
              </h1>

              <p className="text-[#2B2723]/80 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Hand-sculpted deity idols, custom home temples, Pietra Dura inlay table tops, and floating urlis crafted by master artisans in Rajasthan.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/categories"
                  className="bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold px-7 py-3.5 rounded-sm text-xs uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/919210702703?text=Namaste%20GBM%20Marble,%20I%20am%20interested%20in%20inquiring%20about%20your%20marble%20handicrafts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#E4DDCF]/40 border border-[#2B2723]/30 text-[#2B2723] font-semibold px-7 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Full-Bleed Authentic Product Photo */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-sm overflow-hidden border border-[#E4DDCF] shadow-lg bg-[#E4DDCF]/30">
              <Image
                src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1200&auto=format&fit=crop"
                alt="Master Carved White Makrana Marble Ganesha Idol"
                fill
                priority
                className="object-cover object-center transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2B2723]/85 backdrop-blur-sm p-3.5 rounded-sm border border-[#B8924A]/30 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8924A] block">
                    Featured Masterwork
                  </span>
                  <span className="font-serif text-sm font-bold text-white block">
                    White Makrana Marble Ganesha with 24K Gold Leafing
                  </span>
                </div>
                <span className="spec-tag text-[10px] bg-[#A63D2F] text-white border-0">
                  24&quot; Height
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Vein Divider */}
      <MarbleVeinPattern className="my-6" />

      {/* 2. Custom Chisel Tool Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-sm shadow-sm border border-[#E4DDCF]">
          <div className="flex flex-col items-center text-center p-3 space-y-2">
            <ChiselIcon className="w-8 h-8 text-[#B8924A]" />
            <h4 className="font-serif font-bold text-[#2B2723] text-base">Senior Artisans</h4>
            <p className="text-xs text-[#2B2723]/70 font-light">Hand-carved with traditional chisel tools</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 space-y-2">
            <StoneBlockIcon className="w-8 h-8 text-[#B8924A]" />
            <h4 className="font-serif font-bold text-[#2B2723] text-base">Pure Makrana Marble</h4>
            <p className="text-xs text-[#2B2723]/70 font-light">Authentic 100% white Indian stone</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 space-y-2">
            <CaliperIcon className="w-8 h-8 text-[#B8924A]" />
            <h4 className="font-serif font-bold text-[#2B2723] text-base">Custom Sizing</h4>
            <p className="text-xs text-[#2B2723]/70 font-light">Tailored for home mandirs & villas</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 space-y-2">
            <CrateIcon className="w-8 h-8 text-[#B8924A]" />
            <h4 className="font-serif font-bold text-[#2B2723] text-base">Worldwide Export</h4>
            <p className="text-xs text-[#2B2723]/70 font-light">Safe wooden crate door delivery</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E4DDCF] pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A63D2F] block mb-1">
              Stone Craft Collections
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B2723]">
              Featured Categories
            </h2>
          </div>
          <Link
            href="/categories"
            className="mt-3 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#A63D2F] hover:text-[#8C3125] flex items-center gap-1 transition-colors"
          >
            View All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative h-80 rounded-sm overflow-hidden shadow-sm border border-[#E4DDCF] transition-all duration-300 hover:shadow-md"
            >
              {cat.banner_image_url && (
                <Image
                  src={cat.banner_image_url}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2723]/90 via-[#2B2723]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#B8924A] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#E4DDCF] line-clamp-2 mt-1 font-light">
                  {cat.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B8924A] group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Signature Vein Divider */}
      <MarbleVeinPattern className="my-6" />

      {/* 4. Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E4DDCF] pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A63D2F] block mb-1">
              Hand-Carved Masterpieces
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B2723]">
              Featured Marble Products
            </h2>
          </div>
          <Link
            href="/gallery"
            className="mt-3 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#A63D2F] hover:text-[#8C3125] flex items-center gap-1"
          >
            Browse Full Gallery <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => {
            const coverImage = prod.images.find((img) => img.is_cover)?.image_url || prod.images[0]?.image_url
            return (
              <div
                key={prod.id}
                className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#E4DDCF] flex flex-col group hover:shadow-md transition-all duration-300"
              >
                <Link href={`/products/${prod.slug}`} className="relative h-60 overflow-hidden bg-[#E4DDCF]/30">
                  {coverImage && (
                    <Image
                      src={coverImage}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className="absolute top-3 left-3 bg-[#4A5D53] text-white text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">
                    {prod.work_type}
                  </span>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-[#A63D2F] uppercase tracking-wider block mb-1">
                      {prod.category_name}
                    </span>
                    <Link href={`/products/${prod.slug}`}>
                      <h3 className="font-serif text-base font-bold text-[#2B2723] group-hover:text-[#A63D2F] transition-colors line-clamp-2">
                        {prod.name}
                      </h3>
                    </Link>

                    {/* Craftsman Spec Tag */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="spec-tag">{prod.material}</span>
                      <span className="spec-tag">{prod.size}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E4DDCF] flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 bg-[#E4DDCF]/40 hover:bg-[#E4DDCF] text-[#2B2723] text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm text-center transition-colors"
                    >
                      View Specs
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
      </section>

      {/* 5. Our Craftsmanship Story */}
      <section className="bg-[#2B2723] text-white py-16 border-y-2 border-[#A63D2F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8924A] block">
              Rajasthan Sculpting Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Carving Pure Makrana Stone with Devotion & Precision
            </h2>
            <p className="text-[#E4DDCF]/80 text-sm font-light leading-relaxed">
              Based in Rajasthan, GBM Marble Handicrafts inherits centuries of master stone sculpting tradition. White Makrana marble is hand-selected for its crystal density, pure white translucency, and timeless durability.
            </p>
            <p className="text-[#E4DDCF]/80 text-sm font-light leading-relaxed">
              Every idol of Lord Ganesha, Radha Krishna, or custom home temple is sculpted using traditional hand chisels and finished with diamond polishing for heirloom beauty.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold px-7 py-3 rounded-sm text-xs uppercase tracking-widest transition-all"
              >
                Discover Our Heritage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[380px] rounded-sm overflow-hidden border border-[#B8924A]/40 bg-stone-900">
            <Image
              src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop"
              alt="Artisan Hand Carving Marble Idol"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. Contact & Google Map Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E4DDCF] pb-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A63D2F] block mb-1">
            Workshop Location
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2B2723]">
            Visit Us in Rajasthan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#E4DDCF] space-y-5">
            <h3 className="font-serif text-xl font-bold text-[#2B2723] border-b border-[#E4DDCF] pb-3">
              GBM Marble Handicrafts
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A63D2F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#2B2723]">Phone Lines:</p>
                  <a href="tel:9210702703" className="font-mono text-sm text-[#A63D2F] font-bold block hover:underline">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="font-mono text-sm text-[#A63D2F] font-bold block hover:underline">
                    +91 9785702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#2B2723]">WhatsApp Enquiry:</p>
                  <a
                    href="https://wa.me/919210702703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#25D366] font-bold hover:underline"
                  >
                    Chat on WhatsApp (+91 9210702703)
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold py-3 rounded-sm text-xs uppercase tracking-wider block text-center shadow-sm transition-colors"
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
