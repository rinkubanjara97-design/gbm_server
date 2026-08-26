import type { Metadata } from 'next'
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GBM Marble Handicrafts | Handcrafted Marble Statues, Mandirs & Artisanal Decor',
  description: 'Premier manufacturer and exporter of white Makrana marble deity statues, home temples, Pietra Dura inlay table tops, and Rajasthani handicrafts.',
  keywords: 'GBM Marble, Marble Statues, Marble Mandir, Makrana Marble, Ganesha Statue, Radha Krishna Statue, Marble Inlay, Rajasthani Handicrafts, Jaipur Marble Art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
