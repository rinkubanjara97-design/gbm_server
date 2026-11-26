import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { LayoutShell } from '@/components/layout/LayoutShell'
import { NavigationProgress } from '@/components/ui/NavigationProgress'


const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gbmmarble.com'),
  title: {
    default: 'G.B.M. Marble & Handicraft | Makrana Marble God Statues & Mandir Manufacturer in Noida Sector 49, Delhi NCR',
    template: '%s | G.B.M. Marble & Handicraft',
  },
  description: 'Premier manufacturer of authentic white Makrana marble god statues, custom carved home temples (mandirs), stone jaali, fountains, kitchen countertops & handicrafts in Sector-49 Noida, Delhi NCR. Visit our showroom & workshop or order custom stone art.',
  keywords: [
    'marble moorti shop in noida',
    'marble mandir shop noida sector 49',
    'makrana marble statue manufacturer noida',
    'marble god idols shop delhi ncr',
    'white marble temple maker noida',
    'marble temple dadri road barola noida',
    'makrana marble shop near me',
    'custom marble mandir manufacturer noida',
    'marble pooja mandir greater noida',
    'marble elephant statue maker noida',
    'pure makrana white marble statues',
    'marble water fountain noida',
    'marble kitchen counter stone fitting noida',
    'rajasthani marble handicrafts shop noida',
    'pietra dura marble inlay table tops',
    'marble tulsi stand noida',
    'custom stone carving workshop noida',
    'makrana marble exporters india'
  ],
  authors: [{ name: 'G.B.M. Marble & Handicraft' }],
  creator: 'G.B.M. Marble & Handicraft',
  publisher: 'G.B.M. Marble & Handicraft',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'G.B.M. Marble & Handicraft | Makrana Marble God Statues & Mandirs in Noida',
    description: 'Direct manufacturer of handcrafted white Makrana marble deity idols, custom home temples, stone jaali, and architectural handicrafts in Sector-49 Noida, Delhi NCR.',
    url: 'https://gbmmarble.com',
    siteName: 'G.B.M. Marble & Handicraft',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'G.B.M. Marble & Handicraft Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.B.M. Marble & Handicraft | Makrana Marble Statues & Mandirs Noida',
    description: 'Premier manufacturer of pure white Makrana marble deity idols, home mandirs & architectural stone art in Sector-49 Noida.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://gbmmarble.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeGoodsStore', 'Store'],
    '@id': 'https://gbmmarble.com/#store',
    name: 'G.B.M. Marble & Handicraft',
    alternateName: ['GBM Marble', 'GBM Marble Handicrafts', 'GBM Marble & Handicraft Noida'],
    image: 'https://gbmmarble.com/logo.jpg',
    logo: 'https://gbmmarble.com/logo.jpg',
    description: 'Premier manufacturer and retailer of authentic white Makrana marble deity statues, custom hand-carved home temples (mandirs), stone jali, fountains, kitchen countertops, and traditional stone handicrafts located in Sector-49, Noida, Uttar Pradesh.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sher Singh Complex, Opp. Pillar No-40, Dadri Road, Barola, Sector-49',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
      postalCode: '201301',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5566067,
      longitude: 77.3725653,
    },
    hasMap: 'https://maps.app.goo.gl/D5aLdbw6dZfESYSi6',
    url: 'https://gbmmarble.com',
    telephone: ['+919210702703', '+919785702703'],
    email: 'gbmmarblehandicrafts@gmail.com',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR, USD, EUR, GBP, AED',
    paymentAccepted: 'Cash, UPI, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'State', name: 'Uttar Pradesh' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'USA' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
    ],
    knowsAbout: [
      'Makrana Marble',
      'Marble Statues and Moortis',
      'Marble Mandir Design and Carving',
      'Pietra Dura Inlay Art',
      'Marble Jaali Cutwork',
      'Architectural Marble Fountains',
      'Custom Kitchen Marble Countertops',
      'Rajasthani Stone Handicrafts',
    ],
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${ibmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#2B2723] antialiased font-sans selection:bg-[#A63D2F] selection:text-white">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
