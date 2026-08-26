import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, ShieldCheck, HeartHandshake } from 'lucide-react'
import { ChiselIcon } from '@/components/ui/ChiselIcons'
import { MarbleVeinPattern } from '@/components/ui/MarbleVeinPattern'

export function Footer() {
  return (
    <footer className="bg-[#2B2723] text-[#E4DDCF] pt-16 pb-8 border-t-2 border-[#A63D2F] relative overflow-hidden">
      <MarbleVeinPattern className="w-full h-6 opacity-30 mb-6" strokeColor="#B8924A" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#A63D2F] border border-[#B8924A]/40 flex items-center justify-center">
                <ChiselIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                GBM Marble
              </span>
            </div>
            <p className="text-[#E4DDCF]/70 text-xs leading-relaxed font-light">
              Rajasthani stone carvers and worldwide exporters of pure white Makrana marble deity idols, ornate temples, Pietra Dura inlay tables, and floating urlis.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#B8924A] uppercase tracking-wider">
              <span className="flex items-center gap-1 bg-[#1C1917] px-2.5 py-1 rounded-sm border border-[#E4DDCF]/20">
                <Globe className="w-3 h-3" /> Worldwide Exporter
              </span>
              <span className="flex items-center gap-1 bg-[#1C1917] px-2.5 py-1 rounded-sm border border-[#E4DDCF]/20">
                <ShieldCheck className="w-3 h-3" /> Makrana Stone
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 border-b border-[#E4DDCF]/20 pb-2 uppercase tracking-wider">
              Collections
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/categories/god-statues" className="hover:text-[#A63D2F] transition-colors">
                  God & Goddess Statues
                </Link>
              </li>
              <li>
                <Link href="/categories/temple-items" className="hover:text-[#A63D2F] transition-colors">
                  Carved Marble Temples (Mandir)
                </Link>
              </li>
              <li>
                <Link href="/categories/marble-bowl-urli" className="hover:text-[#A63D2F] transition-colors">
                  Marble Floating Urlis
                </Link>
              </li>
              <li>
                <Link href="/categories/marble-items" className="hover:text-[#A63D2F] transition-colors">
                  Pietra Dura Inlay Table Tops
                </Link>
              </li>
              <li>
                <Link href="/categories/wooden-art" className="hover:text-[#A63D2F] transition-colors">
                  Rajasthani Wooden Handicrafts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#A63D2F] transition-colors">
                  Visual Crafts Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Craftsmanship Guarantee */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 border-b border-[#E4DDCF]/20 pb-2 uppercase tracking-wider">
              Artisan Guarantee
            </h3>
            <ul className="space-y-3 text-xs text-[#E4DDCF]/80">
              <li className="flex items-start gap-2">
                <HeartHandshake className="w-4 h-4 text-[#B8924A] shrink-0 mt-0.5" />
                <span>100% Hand-Carved by Senior Stone Artisans of Rajasthan</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#B8924A] shrink-0 mt-0.5" />
                <span>Custom Size & Architecture Orders Accepted</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8924A] shrink-0 mt-0.5" />
                <span>Safe Export Wooden Crate Packing & Global Shipping</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 border-b border-[#E4DDCF]/20 pb-2 uppercase tracking-wider">
              Workshop Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A63D2F] shrink-0" />
                <div className="flex flex-col font-mono text-[11px]">
                  <a href="tel:9210702703" className="hover:text-white transition-colors">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="hover:text-white transition-colors">
                    +91 9785702703
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A63D2F] shrink-0" />
                <a
                  href="mailto:gbmmarblehandicrafts@gmail.com"
                  className="hover:text-white transition-colors break-all font-mono text-[11px]"
                >
                  gbmmarblehandicrafts@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A63D2F] shrink-0 mt-0.5" />
                <span>GBM Marble Handicrafts, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E4DDCF]/15 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-[#E4DDCF]/50 gap-4">
          <p>© {new Date().getFullYear()} GBM Marble Handicrafts. Crafted with devotion in Rajasthan.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">
              About Workshop
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/admin/login" className="hover:text-white">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
