import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getCategories } from '@/lib/supabase/service'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'All Stone Craft Categories | Marble Statues, Mandirs & Handicrafts Noida',
  description: 'Explore all 19 handcrafted categories of pure white Makrana marble god statues, custom home temples (mandirs), stone jaali, fountains, kitchen countertops & handicrafts by G.B.M. Marble & Handicraft Noida.',
  alternates: {
    canonical: 'https://gbmmarble.com/categories',
  },
}

// Category one-liner taglines
const CATEGORY_TAGLINES: Record<string, string> = {
  'god-statues': 'Handcrafted pure white Makrana marble deity idols carved with fine facial features and polish.',
  'carving-temple': 'Custom carved marble home temples (mandirs) with traditional pillars, domes and jaali work.',
  'corin-temple': 'Modern CNC carved corian & marble mandirs with warm ambient backlighting.',
  'eley-work-temple': 'Traditional marble temples adorned with delicate stone inlay and floral pietra dura art.',
  'fountain': 'Multi-tiered cascading marble water fountains sculpted for homes, courtyards and gardens.',
  'handicrafts-items': 'Rajasthani decorative marble artifacts, urlis, chowkis and traditional minakari hand-painted items.',
  'jali-work-temple': 'Intricate hand-carved lattice jali cutwork temples designed for home puja spaces.',
  'kitchen-bar-restro': 'Custom white marble countertops, dining surfaces, bar tops and commercial stone fitting.',
  'marble-basin': 'Sculpted solid white marble wash basins and fluted countertop sink bowls.',
  'marble-chhatri': 'Traditional domed Rajasthani marble chhatri pavilions and memorial structures.',
  'marble-fire-place': 'Hand-carved classical marble fireplaces and ornamental decorative mantels.',
  'marble-jali-panel': 'Precision lattice cutwork partition screens and decorative carved wall panels.',
  'marble-singhasan': 'Royal carved marble singhasan thrones and pedestals for deity idols.',
  'marble-table-top': 'Handcrafted marble dining, center and side table tops with gemstone inlay.',
  'marble-tulsi-stand': 'Pure Makrana marble Tulsi Kyaras and Vrindavan stands for courtyard worship.',
  'painting-work-temple': 'Hand-painted 24K gold foil and meenakari decorated marble temples.',
  'statue': 'Custom marble human portrait busts, elephant statues and artistic stone figures.',
  'vedi-temple': 'Traditional marble havan vedi altars and ritual puja structures.',
  'carving-work': 'Custom hand-chiseled stone relief carving for temple walls and pillars.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header Banner */}
      <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
          Makrana Marble Collections • Noida Workshop
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          Explore All Categories
        </h1>
        <p className="text-[#555555] text-base font-light leading-relaxed">
          Discover our complete portfolio of pure white Makrana marble deity idols, custom home temples, stone jaali screens, fountains, and traditional handicrafts.
        </p>
      </FadeIn>

      {/* Modern Luxury Borderless Grid */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10">
        {categories.map((cat) => {
          const tagline = CATEGORY_TAGLINES[cat.slug] || cat.description || `Pure Makrana white marble ${cat.name.toLowerCase()} creations.`
          return (
            <StaggerItem key={cat.id}>
              <Link href={`/categories/${cat.slug}`} className="group block space-y-3">
                <div className="relative h-44 sm:h-80 rounded-xl overflow-hidden bg-[#F2EFE9] shadow-2xs">
                  {cat.banner_image_url && (
                    <Image
                      src={cat.banner_image_url}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-[#1A1A1A] text-xs font-sans font-semibold px-3 py-1 rounded-md">
                    Category #{cat.sort_order || ''}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h2 className="font-sans text-xl font-bold text-[#1A1A1A] group-hover:text-[#B08968] transition-colors flex items-center justify-between">
                    {cat.name}
                    <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#B08968] group-hover:translate-x-0.5 transition-all" />
                  </h2>
                  <p className="text-xs text-[#666666] font-light leading-relaxed">
                    {tagline}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
