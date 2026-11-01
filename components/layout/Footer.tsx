import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Globe, ShieldCheck, HeartHandshake } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5] pt-20 pb-10 border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#333] shrink-0 bg-white p-0.5">
                <Image src="/logo.jpg" alt="GBM Marble Handicrafts Logo" fill className="object-cover rounded-full" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                GBM Marble
              </span>
            </div>
            <p className="text-[#D8D3CA]/70 text-xs leading-relaxed font-light">
              Master stone sculptors and global exporters of pure white Makrana marble deity statues, bespoke home mandirs, Pietra Dura inlay tables, and architectural stone art.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#B08968]">
              <span className="flex items-center gap-1.5 bg-[#242424] px-3 py-1 rounded-md border border-[#333]">
                <Globe className="w-3 h-3 text-[#B08968]" /> Global Export
              </span>
              <span className="flex items-center gap-1.5 bg-[#242424] px-3 py-1 rounded-md border border-[#333]">
                <ShieldCheck className="w-3 h-3 text-[#B08968]" /> 100% Makrana Stone
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white mb-5 uppercase tracking-wider text-[#B08968]">
              Collections
            </h3>
            <ul className="space-y-3 text-xs text-[#D8D3CA]">
              <li>
                <Link href="/categories/god-statues" className="hover:text-[#B08968] transition-colors">
                  God & Goddess Statues
                </Link>
              </li>
              <li>
                <Link href="/categories/carving-temple" className="hover:text-[#B08968] transition-colors">
                  Carved Marble Temples (Mandir)
                </Link>
              </li>
              <li>
                <Link href="/categories/fountain" className="hover:text-[#B08968] transition-colors">
                  Architectural Fountains & Basins
                </Link>
              </li>
              <li>
                <Link href="/categories/marble-table-top" className="hover:text-[#B08968] transition-colors">
                  Pietra Dura Inlay Table Tops
                </Link>
              </li>
              <li>
                <Link href="/categories/handicrafts-items" className="hover:text-[#B08968] transition-colors">
                  Rajasthani Heritage Handicrafts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#B08968] transition-colors">
                  Visual Photography Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Craftsmanship Guarantee */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white mb-5 uppercase tracking-wider text-[#B08968]">
              Artisan Guarantee
            </h3>
            <ul className="space-y-4 text-xs text-[#D8D3CA]/80">
              <li className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <span>100% Hand-Carved by Senior Stone Artisans of Rajasthan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <span>Custom Dimensions & Architecture Commissions Accepted</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <span>Safe Export Wooden Crate Packing & Global Door Delivery</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white mb-5 uppercase tracking-wider text-[#B08968]">
              Workshop Contact
            </h3>
            <ul className="space-y-4 text-xs text-[#D8D3CA]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B08968] shrink-0" />
                <div className="flex flex-col font-mono text-[11px]">
                  <a href="tel:9210702703" className="hover:text-white transition-colors">
                    +91 9210702703
                  </a>
                  <a href="tel:9664258577" className="hover:text-white transition-colors">
                    +91 9664258577
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B08968] shrink-0" />
                <a
                  href="mailto:gbmmarblehandicrafts@gmail.com"
                  className="hover:text-white transition-colors break-all font-mono text-[11px]"
                >
                  gbmmarblehandicrafts@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/D5aLdbw6dZfESYSi6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors leading-relaxed block"
                  >
                    Sher Singh Complex, Opp. Pillar No-40, Dadri Road, Barola, Sector-49, Noida, Uttar Pradesh - 201301
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <p>© {new Date().getFullYear()} GBM Marble Handicrafts. Sculpted with devotion in Rajasthan.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Workshop
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
