'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, Globe } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Craft', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#D8D3CA] text-[11px] font-sans font-medium py-2 px-4 text-center border-b border-[#292929] flex items-center justify-center gap-4">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[#E5E2DC]">
          Hand-Carved Makrana White Marble
        </span>
        <span className="hidden sm:inline text-[#444]">•</span>
        <span className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-[#B08968]" /> Worldwide Wooden Crate Shipping
        </span>
        <span className="hidden md:inline text-[#444]">•</span>
        <span className="hidden md:inline text-[#E5E2DC]">
          Direct Atelier: +91 9210702703
        </span>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E5E2DC]'
            : 'bg-[#FAF8F5] py-4 border-b border-[#E5E2DC]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Preserved Logo Image */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E5E2DC] shrink-0 group-hover:scale-105 transition-transform bg-white p-0.5 shadow-xs">
                <Image src="/logo.jpg" alt="GBM Marble Handicrafts Logo" fill className="object-cover rounded-full" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight block text-[#1A1A1A]">
                  GBM Marble
                </span>
                <span className="text-[10px] tracking-wider uppercase font-sans font-semibold block text-[#B08968] -mt-0.5">
                  Rajasthan Atelier
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#1A1A1A] font-semibold'
                        : 'text-[#555555] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B08968] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:9210702703"
                className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-md border border-[#E5E2DC] text-[#1A1A1A] hover:border-[#1A1A1A] transition-all bg-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08968]" />
                9210702703
              </a>
              <a
                href="https://wa.me/919210702703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#B08968] text-white px-5 py-2.5 rounded-md text-xs font-medium transition-all shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                Enquire Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-[#F2EFE9] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E5E2DC] px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-[#E5E2DC]/60 ${
                  pathname === link.href ? 'text-[#B08968] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <a
                href="tel:9210702703"
                className="flex items-center justify-center gap-2 bg-white text-[#1A1A1A] py-3 rounded-md font-medium text-xs border border-[#E5E2DC]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08968]" />
                Call: +91 9210702703
              </a>
              <a
                href="https://wa.me/919210702703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3 rounded-md font-medium text-xs shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                WhatsApp Enquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
