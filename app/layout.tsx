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
  title: 'GBM Marble Handicrafts | Best Makrana Marble Statues & Mandir Manufacturer in Rajasthan',
  description: 'Leading Makrana marble statue manufacturer and handicraft exporter in Nagaur, Rajasthan. Handcrafted white marble deity idols, custom home temples, Pietra Dura inlay tables, marble urlis & fountains.',
  keywords: [
    'Makrana Marble',
    'makarana marble',
    'best marble in makrana',
    'makrana marble statue maker',
    'marble handicrafts rajasthan',
    'makrana marble mandir manufacturer',
    'white marble god idols makrana',
    'best statue maker in makrana',
    'makrana marble handicrafts nagaur',
    'marble temple design for home',
    'pietra dura inlay table top',
    'marble urli bowl rajasthan',
    'marble fountain manufacturer',
    'makrana marble exporters india',
    'custom marble carving work makrana'
  ].join(', '),
  openGraph: {
    title: 'GBM Marble Handicrafts | Handcrafted White Makrana Marble Statues & Mandirs',
    description: 'Premier Rajasthani workshop hand-carving white Makrana marble deity idols, home temples, Pietra Dura inlay tables, and decorative urlis.',
    url: 'https://gbmmarble.com',
    siteName: 'GBM Marble Handicrafts',
    locale: 'en_IN',
    type: 'website',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GBM Marble Handicrafts',
    image: 'https://gbmmarble.com/logo.png',
    description: 'Premier manufacturer of authentic white Makrana marble statues, deity idols, home temples, and luxury stone handicrafts in Makrana, Nagaur, Rajasthan.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sher Singh Complex, Opp Pillar No-40, Dadri Road, Barola, Sector-49',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
      postalCode: '201301',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5566,
      longitude: 77.3725,
    },
    url: 'https://gbmmarble.com',
    telephone: ['+919210702703', '+919664258577'],
    areaServed: ['India', 'USA', 'UK', 'UAE', 'Worldwide'],
    knowsAbout: [
      'Makrana Marble',
      'Marble Statues',
      'Marble Mandir',
      'Pietra Dura Inlay',
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
