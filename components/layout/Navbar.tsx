'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import { ChiselIcon } from '@/components/ui/ChiselIcons'

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E4DDCF]'
          : 'bg-[#F7F4EF] py-4 border-b border-[#E4DDCF]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm bg-[#A63D2F] border border-[#B8924A]/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <ChiselIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider uppercase block text-[#2B2723]">
                GBM Marble
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-mono font-medium block text-[#A63D2F] -mt-0.5">
                Rajasthan Craftsmen
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#A63D2F] font-bold'
                      : 'text-[#2B2723] hover:text-[#A63D2F]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A63D2F] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9210702703"
              className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider px-3.5 py-2 rounded-sm border border-[#E4DDCF] text-[#2B2723] hover:border-[#A63D2F] hover:text-[#A63D2F] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8924A]" />
              9210702703
            </a>
            <a
              href="https://wa.me/919210702703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#A63D2F] hover:bg-[#8C3125] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-[#2B2723] hover:bg-[#E4DDCF]/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EF] border-b border-[#E4DDCF] px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-serif font-semibold tracking-wide py-2 border-b border-[#E4DDCF]/50 ${
                  pathname === link.href ? 'text-[#A63D2F]' : 'text-[#2B2723]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2.5 pt-3">
              <a
                href="tel:9210702703"
                className="flex items-center justify-center gap-2 bg-[#E4DDCF] text-[#2B2723] py-2.5 rounded-sm font-mono text-xs uppercase font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8924A]" />
                Call: 9210702703
              </a>
              <a
                href="https://wa.me/919210702703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#A63D2F] text-white py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Enquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
