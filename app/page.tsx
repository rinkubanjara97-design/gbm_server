import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories, getProducts, getSiteSettings } from '@/lib/supabase/service'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { ChiselIcon, StoneBlockIcon, CaliperIcon, CrateIcon } from '@/components/ui/ChiselIcons'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation'
import { ArrowRight, Phone, ArrowUpRight, Grid, MapPin } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Category one-liner descriptions map for high-fashion clean cards
const CATEGORY_TAGLINES: Record<string, string> = {
  'god-statues': 'Divine handcrafted Makrana deity idols carved with traditional precision.',
  'carving-temple': 'Bespoke marble home shrines featuring architectural pillars and relief work.',
  'corin-temple': 'Modern backlit CNC carved temples designed for minimalist contemporary sanctuaries.',
  'eley-work-temple': 'Pietra Dura gemstone inlay temples adorned with semi-precious floral motifs.',
  'fountain': 'Multi-tiered cascading marble water fountains and luxury garden fixtures.',
  'handicrafts-items': 'Rajasthani decorative marble artifacts, urlis, and hand-painted minakari art.',
  'jali-work-temple': 'Intricate marble lattice jali cutwork temples offering delicate light diffusion.',
  'kitchen-bar-restro': 'Luxury custom marble countertops and architectural stone surfaces.',
  'marble-basin': 'Sculpted countertop wash basins and fluted white marble sink bowls.',
  'marble-chhatri': 'Heritage domed marble chhatri pavilions and garden canopy structures.',
  'marble-fire-place': 'Classical white marble fireplace surrounds and architectural mantels.',
  'marble-jali-panel': 'Precision lattice cutwork partition screens and decorative wall grills.',
  'marble-singhasan': 'Royal carved marble thrones and pedestals for sacred deity idols.',
  'marble-table-top': 'Pietra Dura stone inlay dining, coffee, and accent table tops.',
  'marble-tulsi-stand': 'Ornate Makrana marble Tulsi Vrindavan stands for courtyard devotion.',
  'painting-work-temple': 'Meenakari gold leaf painted marble temples and color decorated mandirs.',
  'statue': 'Custom human portrait sculptures, artistic figures, and animal statues.',
  'vedi-temple': 'Sacred marble havan vedi altars and traditional ritual structures.',
  'carving-work': 'Custom hand chisel stone relief carving for architectural walls and pillars.',
}

export default async function HomePage() {
  const [categories, allProducts, siteSettings] = await Promise.all([
    getCategories(),
    getProducts(),
    getSiteSettings(),
  ])

  // Group products for category-wise sections
  const godStatues = allProducts.filter((p) => p.category_slug === 'god-statues').slice(0, 4)
  const temples = allProducts.filter((p) => p.category_slug === 'carving-temple' || p.category_slug === 'jali-work-temple' || p.category_slug === 'corin-temple').slice(0, 4)
  const fountainsAndBasins = allProducts.filter((p) => p.category_slug === 'fountain' || p.category_slug === 'marble-basin' || p.category_slug === 'marble-table-top').slice(0, 4)
  const handicraftsAndArt = allProducts.filter((p) => p.category_slug === 'handicrafts-items' || p.category_slug === 'statue' || p.category_slug === 'marble-tulsi-stand').slice(0, 4)

  return (
    <div className="space-y-28 pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* 1. Grand Modern Luxury Split Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Quiet Luxury Typography */}
            <FadeIn direction="right" duration={0.8} className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#F2EFE9] text-[#1A1A1A] px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08968]" />
                Rajasthan Heritage Stone Atelier
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] leading-[1.08] tracking-tight">
                Handcrafted Pure <br />
                <span className="italic font-serif font-normal text-[#B08968]">Makrana Marble Statues</span> <br />
                & Heritage Mandirs
              </h1>

              <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Masterpiece deity idols, bespoke home temples, Pietra Dura gemstone table tops, and architectural fountains hand-carved by senior stone sculptors in Rajasthan.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/categories"
                  className="bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium px-8 py-4 rounded-md text-sm transition-all flex items-center justify-center gap-2 group shadow-2xs"
                >
                  Explore All 19 Categories
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/919210702703?text=Namaste%20GBM%20Marble,%20I%20am%20interested%20in%20inquiring%20about%20your%20marble%20handicrafts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#F2EFE9] border border-[#E5E2DC] text-[#1A1A1A] font-medium px-7 py-4 rounded-md text-sm transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#1A1A1A] fill-current" />
                  WhatsApp Enquiry
                </a>
              </div>
            </FadeIn>

            {/* Right Column: Full-Bleed Modern Photography Card (Un-cropped Head Guard) */}
            <FadeIn direction="left" duration={0.8} delay={0.2} className="lg:col-span-6 relative">
              <div
                className="relative h-[480px] sm:h-[560px] w-full rounded-xl overflow-hidden shadow-xs transition-all"
                style={{ backgroundColor: siteSettings.hero_bg_color || '#F2EFE9' }}
              >
                <Image
                  src={siteSettings.hero_image_url}
                  alt={siteSettings.hero_title || "Handcrafted White Makrana Marble God Statue"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`${
                    siteSettings.hero_object_fit === 'cover-top'
                      ? 'object-cover object-top'
                      : siteSettings.hero_object_fit === 'cover-center'
                      ? 'object-cover object-center'
                      : 'object-contain object-top p-4'
                  } transition-transform duration-700 hover:scale-102`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent p-6 text-white flex items-end justify-between backdrop-blur-2xs">
                  <div>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#B08968] font-medium block mb-1">
                      {siteSettings.hero_subtitle}
                    </span>
                    <span className="font-serif text-lg font-bold text-white block">
                      {siteSettings.hero_title}
                    </span>
                  </div>
                  <span className="spec-tag bg-white/20 text-white border-white/30 backdrop-blur-md">
                    {siteSettings.hero_badge}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Craftsmanship Legacy Counter Bar */}
      <section className="bg-[#1A1A1A] text-[#FAF8F5] py-12">
        <StaggerContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StaggerItem className="space-y-1">
            <span className="font-serif text-4xl md:text-5xl font-bold text-[#B08968] block">30+</span>
            <span className="text-xs text-[#D8D3CA] font-sans font-medium tracking-wide">Years Legacy</span>
          </StaggerItem>

          <StaggerItem className="space-y-1">
            <span className="font-serif text-4xl md:text-5xl font-bold text-[#B08968] block">19</span>
            <span className="text-xs text-[#D8D3CA] font-sans font-medium tracking-wide">Product Categories</span>
          </StaggerItem>

          <StaggerItem className="space-y-1">
            <span className="font-serif text-4xl md:text-5xl font-bold text-[#B08968] block">296</span>
            <span className="text-xs text-[#D8D3CA] font-sans font-medium tracking-wide">Portfolio Artworks</span>
          </StaggerItem>

          <StaggerItem className="space-y-1">
            <span className="font-serif text-4xl md:text-5xl font-bold text-[#B08968] block">100%</span>
            <span className="text-xs text-[#D8D3CA] font-sans font-medium tracking-wide">Pure Makrana Stone</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 3. Borderless 4-Icon Trust Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-10 rounded-xl border border-[#E5E2DC]/60 shadow-2xs">
          <StaggerItem className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#B08968]">
              <ChiselIcon className="w-6 h-6 text-[#B08968]" />
            </div>
            <h4 className="font-sans font-semibold text-[#1A1A1A] text-base">Senior Carvers</h4>
            <p className="text-xs text-[#666666] font-light">Traditional hand chisel sculpting</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#B08968]">
              <StoneBlockIcon className="w-6 h-6 text-[#B08968]" />
            </div>
            <h4 className="font-sans font-semibold text-[#1A1A1A] text-base">Pure Makrana Stone</h4>
            <p className="text-xs text-[#666666] font-light">Authentic white Indian marble</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#B08968]">
              <CaliperIcon className="w-6 h-6 text-[#B08968]" />
            </div>
            <h4 className="font-sans font-semibold text-[#1A1A1A] text-base">Custom Sizing</h4>
            <p className="text-xs text-[#666666] font-light">Tailored for home mandirs & villas</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#B08968]">
              <CrateIcon className="w-6 h-6 text-[#B08968]" />
            </div>
            <h4 className="font-sans font-semibold text-[#1A1A1A] text-base">Worldwide Export</h4>
            <p className="text-xs text-[#666666] font-light">Safe wooden crate door delivery</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. Complete 19 Categories Directory (Borderless Cards + Head-Crop Safety) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E2DC] pb-6">
            <div>
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block mb-1">
                Rajasthan Atelier Portfolio
              </span>
              <h2 className="font-serif text-4xl font-bold text-[#1A1A1A]">
                Explore All 19 Categories
              </h2>
            </div>
            <Link
              href="/categories"
              className="mt-4 md:mt-0 text-xs font-sans font-semibold text-[#1A1A1A] hover:text-[#B08968] flex items-center gap-1.5 transition-colors"
            >
              <Grid className="w-4 h-4" /> Full Categories Directory <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
          {categories.map((cat) => {
            const tagline = CATEGORY_TAGLINES[cat.slug] || cat.description || `Pure Makrana white marble ${cat.name.toLowerCase()} creations.`
            return (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="group block space-y-3"
                >
                  <div className="relative h-44 sm:h-72 rounded-lg overflow-hidden bg-[#F2EFE9] shadow-2xs">
                    {cat.banner_image_url && (
                      <Image
                        src={cat.banner_image_url}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#1A1A1A] text-[10px] font-sans font-semibold px-2.5 py-1 rounded-md">
                      #{cat.sort_order || ''}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-sans text-lg font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors flex items-center justify-between">
                      {cat.name}
                      <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#B08968] group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-[#666666] line-clamp-2 font-light leading-relaxed">
                      {tagline}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </section>

      {/* 5. Category Showcase Sections */}

      {/* Section A: God & Goddess Statues */}
      {godStatues.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E2DC] pb-5">
              <div>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block mb-1">
                  Collection Showcase
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                  Divine God Statues & Idols
                </h2>
              </div>
              <Link
                href="/categories/god-statues"
                className="mt-4 md:mt-0 text-xs font-sans font-semibold text-[#1A1A1A] hover:text-[#B08968] flex items-center gap-1.5 transition-colors"
              >
                View All Statues <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {godStatues.map((prod) => {
              const coverImage = prod.images[0]?.image_url
              return (
                <StaggerItem key={prod.id}>
                  <div className="group block space-y-3">
                    <Link href={`/products/${prod.slug}`} className="relative h-44 sm:h-72 rounded-lg overflow-hidden bg-[#F2EFE9] block shadow-2xs">
                      {coverImage && (
                        <Image
                          src={coverImage}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </Link>

                    <div className="space-y-2">
                      <Link href={`/products/${prod.slug}`}>
                        <h3 className="font-sans text-xs sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1">
                          {prod.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#666666]">
                        <span className="truncate">{prod.material}</span>
                        <a
                          href={`https://wa.me/919210702703?text=${encodeURIComponent(
                            `Namaste GBM Marble Handicrafts!\n\nI am interested in inquiring about:\n📦 Product: ${prod.name}\n🖼️ Photo: ${coverImage || ''}\n💎 Material: ${prod.material}\n\nPlease share details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1A1A1A] hover:text-[#B08968] font-medium inline-flex items-center gap-1 transition-colors shrink-0 ml-1"
                        >
                          Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </section>
      )}

      {/* Section B: Carved Temples & Shrines */}
      {temples.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E2DC] pb-5">
              <div>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block mb-1">
                  Home Shrines & Shrines
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                  Carved Marble Temples & Shrines
                </h2>
              </div>
              <Link
                href="/categories/carving-temple"
                className="mt-4 md:mt-0 text-xs font-sans font-semibold text-[#1A1A1A] hover:text-[#B08968] flex items-center gap-1.5 transition-colors"
              >
                View All Temples <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {temples.map((prod) => {
              const coverImage = prod.images[0]?.image_url
              return (
                <StaggerItem key={prod.id}>
                  <div className="group block space-y-3">
                    <Link href={`/products/${prod.slug}`} className="relative h-44 sm:h-72 rounded-lg overflow-hidden bg-[#F2EFE9] block shadow-2xs">
                      {coverImage && (
                        <Image
                          src={coverImage}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </Link>

                    <div className="space-y-2">
                      <Link href={`/products/${prod.slug}`}>
                        <h3 className="font-sans text-xs sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1">
                          {prod.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#666666]">
                        <span className="truncate">{prod.category_name}</span>
                        <a
                          href={`https://wa.me/919210702703?text=${encodeURIComponent(
                            `Namaste GBM Marble Handicrafts!\n\nI am interested in inquiring about:\n📦 Product: ${prod.name}\n🖼️ Photo: ${coverImage || ''}\n📂 Category: ${prod.category_name}\n\nPlease share details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1A1A1A] hover:text-[#B08968] font-medium inline-flex items-center gap-1 transition-colors shrink-0 ml-1"
                        >
                          Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </section>
      )}

      {/* Section C: Fountains & Architectural Stone */}
      {fountainsAndBasins.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E2DC] pb-5">
              <div>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block mb-1">
                  Architectural Features
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                  Fountains, Basins & Table Tops
                </h2>
              </div>
              <Link
                href="/categories/fountain"
                className="mt-4 md:mt-0 text-xs font-sans font-semibold text-[#1A1A1A] hover:text-[#B08968] flex items-center gap-1.5 transition-colors"
              >
                Browse Fountains & Stone <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {fountainsAndBasins.map((prod) => {
              const coverImage = prod.images[0]?.image_url
              return (
                <StaggerItem key={prod.id}>
                  <div className="group block space-y-3">
                    <Link href={`/products/${prod.slug}`} className="relative h-44 sm:h-72 rounded-lg overflow-hidden bg-[#F2EFE9] block shadow-2xs">
                      {coverImage && (
                        <Image
                          src={coverImage}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </Link>

                    <div className="space-y-2">
                      <Link href={`/products/${prod.slug}`}>
                        <h3 className="font-sans text-xs sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors line-clamp-1">
                          {prod.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#666666]">
                        <span className="truncate">{prod.category_name}</span>
                        <a
                          href={`https://wa.me/919210702703?text=${encodeURIComponent(
                            `Namaste GBM Marble Handicrafts!\n\nI am interested in inquiring about:\n📦 Product: ${prod.name}\n🖼️ Photo: ${coverImage || ''}\n📂 Category: ${prod.category_name}\n\nPlease share details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1A1A1A] hover:text-[#B08968] font-medium inline-flex items-center gap-1 transition-colors shrink-0 ml-1"
                        >
                          Enquire <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </section>
      )}

      {/* 6. Rajasthan Sculpting Heritage Story */}
      <section className="bg-[#1A1A1A] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="space-y-6">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block">
              Rajasthan Sculpting Heritage
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
              Carving Pure Makrana Stone with Devotion & Precision
            </h2>
            <p className="text-[#D8D3CA]/80 text-base font-light leading-relaxed">
              Based in Rajasthan, GBM Marble Handicrafts inherits centuries of master stone sculpting tradition. White Makrana marble is hand-selected for its crystal density, pure white translucency, and timeless durability that never yellows over time.
            </p>
            <p className="text-[#D8D3CA]/80 text-base font-light leading-relaxed">
              Every idol of Lord Ganesha, Krishna, or custom home temple is sculpted using traditional hand chisels and finished with diamond polishing for heirloom beauty.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#B08968] hover:bg-white hover:text-[#1A1A1A] text-white font-medium px-8 py-4 rounded-md text-sm transition-all"
              >
                Discover Our Atelier Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative h-[440px] rounded-xl overflow-hidden bg-[#242424]">
            <Image
              src={siteSettings.heritage_image_url}
              alt="Artisan Hand Carving Marble Temple"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </FadeIn>
        </div>
      </section>

      {/* 7. Workshop Location & Interactive Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeIn direction="up">
          <div className="border-b border-[#E5E2DC] pb-5">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block mb-1">
              Atelier & Showroom Location
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#1A1A1A]">
              Visit Our Workshop & Showroom
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <FadeIn direction="right" className="bg-white p-8 rounded-xl border border-[#E5E2DC]/70 shadow-2xs space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] border-b border-[#E5E2DC] pb-4">
              G.B.M. Marble & Handicraft
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#B08968] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Workshop & Showroom:</p>
                  <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                    Sher Singh Complex, Opp. Pillar No-40, Dadri Road, Barola, Sector-49, Noida, U.P.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#B08968] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Direct Calling Lines:</p>
                  <a href="tel:9210702703" className="font-mono text-sm text-[#B08968] font-bold block hover:underline">
                    +91 9210702703
                  </a>
                  <a href="tel:9664258577" className="font-mono text-sm text-[#B08968] font-bold block hover:underline">
                    +91 9664258577
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">WhatsApp Inquiry (2 Lines):</p>
                  <div className="space-y-1 mt-1">
                    <a
                      href="https://wa.me/919210702703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#1A1A1A] hover:text-[#25D366] font-semibold flex items-center gap-1.5 hover:underline"
                    >
                      Line 1: +91 9210702703
                    </a>
                    <a
                      href="https://wa.me/919664258577"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#1A1A1A] hover:text-[#25D366] font-semibold flex items-center gap-1.5 hover:underline"
                    >
                      Line 2: +91 9664258577
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="https://maps.app.goo.gl/D5aLdbw6dZfESYSi6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1A1A1A] border border-[#E5E2DC] font-medium py-3 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B08968]" />
                Get Directions on Map
              </a>
              <Link
                href="/contact"
                className="w-full bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium py-3 rounded-md text-xs uppercase tracking-wider block text-center transition-colors shadow-2xs"
              >
                Send Online Inquiry
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-2 rounded-xl overflow-hidden border border-[#E5E2DC] shadow-2xs">
            <GoogleMap />
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
