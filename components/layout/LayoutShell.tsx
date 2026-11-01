'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
