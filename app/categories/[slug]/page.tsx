import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProducts } from '@/lib/supabase/service'
import { Category } from '@/lib/data/mock-data'
import { CategoryProductGrid } from '@/components/product/CategoryProductGrid'
import { ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug)
  if (!category) return {}

  const title = `${category.name} in Noida, Delhi NCR | Pure Makrana Marble`
  const description = `Explore handcrafted ${category.name.toLowerCase()} carved from authentic pure white Makrana marble by G.B.M. Marble & Handicraft Noida Sector 49. Custom orders, direct workshop prices & safe wooden crate delivery.`

  return {
    title,
    description,
    keywords: [
      `${category.name.toLowerCase()} in noida`,
      `makrana marble ${category.name.toLowerCase()}`,
      `best ${category.name.toLowerCase()} manufacturer delhi ncr`,
      `marble ${category.name.toLowerCase()} shop noida sector 49`,
      `custom ${category.name.toLowerCase()} dadri road barola`,
      'makrana marble handicrafts'
    ],
    openGraph: {
      title,
      description,
      url: `https://gbmmarble.com/categories/${params.slug}`,
      siteName: 'G.B.M. Marble & Handicraft',
      images: category.banner_image_url ? [{ url: category.banner_image_url, alt: category.name }] : ['/logo.jpg'],
    },
    alternates: {
      canonical: `https://gbmmarble.com/categories/${params.slug}`,
    },
  }
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug)
  if (!category) {
    notFound()
  }

  const products = await getProducts(params.slug)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gbmmarble.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Categories',
        item: 'https://gbmmarble.com/categories',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://gbmmarble.com/categories/${category.slug}`,
      },
    ],
  }

  return (
    <div className="space-y-12 pb-20 bg-[#FAF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
            G.B.M. Marble & Handicraft • Noida Workshop
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            {category.name}
          </h1>
          <p className="text-[#D8D3CA]/80 text-base max-w-2xl mx-auto font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-[#888888] pt-2">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08968]" />
          <Link href="/categories" className="hover:text-[#1A1A1A] transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08968]" />
          <span className="text-[#1A1A1A] font-semibold">{category.name}</span>
        </nav>

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

        {/* Interactive Category Product Grid with +8 Load More */}
        <CategoryProductGrid products={products} categoryName={category.name} />
      </div>
    </div>
  )
}
