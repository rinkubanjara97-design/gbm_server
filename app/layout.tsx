import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { NavigationProgress } from '@/components/ui/NavigationProgress'
import { ClickFeedback } from '@/components/ui/ClickFeedback'

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
  title: 'GBM Marble Handicrafts | Handcrafted White Makrana Marble Statues & Mandirs',
  description: 'Premier Rajasthani workshop hand-carving white Makrana marble deity idols, home temples, Pietra Dura inlay tables, and decorative urlis.',
  keywords: 'GBM Marble Handicrafts, Makrana Marble Statue, Rajasthani Marble Temple, Ganesha Marble Idol, Pietra Dura Inlay Table, Marble Urli Bowl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${ibmMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#2B2723] antialiased font-sans selection:bg-[#A63D2F] selection:text-white">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <ClickFeedback />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
