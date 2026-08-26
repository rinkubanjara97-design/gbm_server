'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, Gem, MessageCircle } from 'lucide-react'

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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-gold-300/30'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-maroon-900 border border-gold-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Gem className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <span
                className={`font-serif text-xl md:text-2xl font-bold tracking-wider uppercase block ${
                  scrolled ? 'text-maroon-900' : 'text-white'
                }`}
              >
                GBM Marble
              </span>
              <span
                className={`text-[10px] tracking-[0.25em] uppercase font-semibold block -mt-1 ${
                  scrolled ? 'text-gold-700' : 'text-gold-300'
                }`}
              >
                Handicrafts & Statues
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
                  className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
                    scrolled
                      ? isActive
                        ? 'text-maroon-900 font-semibold'
                        : 'text-stone-700 hover:text-maroon-800'
                      : isActive
                      ? 'text-gold-300 font-semibold'
                      : 'text-stone-200 hover:text-gold-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9210702703"
              className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                scrolled
                  ? 'border-maroon-900 text-maroon-900 hover:bg-maroon-900 hover:text-white'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              9210702703
            </a>
            <a
              href="https://wa.me/919210702703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-stone-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-maroon-900 hover:bg-stone-200/50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-gold-300/40 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-serif font-medium tracking-wide py-2 border-b border-stone-200 ${
                  pathname === link.href ? 'text-maroon-900 font-bold' : 'text-stone-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:9210702703"
                className="flex items-center justify-center gap-2 bg-maroon-900 text-white py-3 rounded-xl font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                Call: 9210702703
              </a>
              <a
                href="https://wa.me/919210702703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold-500 text-stone-900 py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
