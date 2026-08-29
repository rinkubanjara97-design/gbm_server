import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/lib/supabase/service'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Category one-liner taglines
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

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header Banner */}
      <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
          Rajasthan Stone Collections
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          Explore All Categories
        </h1>
        <p className="text-[#555555] text-base font-light leading-relaxed">
          Discover our complete portfolio of white Makrana marble deity idols, home temples, Pietra Dura inlay tables, fountains, and traditional Rajasthani stone art.
        </p>
      </FadeIn>

      {/* Modern Luxury Borderless Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat) => {
          const tagline = CATEGORY_TAGLINES[cat.slug] || cat.description || `Pure Makrana white marble ${cat.name.toLowerCase()} creations.`
          return (
            <StaggerItem key={cat.id}>
              <Link href={`/categories/${cat.slug}`} className="group block space-y-4">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#F2EFE9] shadow-2xs">
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
