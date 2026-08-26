import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, Gem, ShieldCheck, HeartHandshake } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gold-400 blur-md opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-maroon-900 border border-gold-400 flex items-center justify-center">
                <Gem className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                GBM Marble
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Premier manufacturers and worldwide exporters of handcrafted white Makrana marble deity idols, ornate temples, inlay table tops, and Rajasthani wooden handicrafts.
            </p>
            <div className="flex items-center gap-4 text-xs text-gold-400 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
                <Globe className="w-3.5 h-3.5" /> Exporter Worldwide
              </span>
              <span className="flex items-center gap-1.5 bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
                <ShieldCheck className="w-3.5 h-3.5" /> Pure Marble
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-stone-800 pb-2">
              Explore Catalog
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/god-statues" className="hover:text-gold-300 transition-colors">
                  God & Goddess Statues
                </Link>
              </li>
              <li>
                <Link href="/categories/temple-items" className="hover:text-gold-300 transition-colors">
                  Marble Home Temples (Mandir)
                </Link>
              </li>
              <li>
                <Link href="/categories/marble-bowl-urli" className="hover:text-gold-300 transition-colors">
                  Marble Urlis & Decorative Bowls
                </Link>
              </li>
              <li>
                <Link href="/categories/marble-items" className="hover:text-gold-300 transition-colors">
                  Pietra Dura Inlay Table Tops
                </Link>
              </li>
              <li>
                <Link href="/categories/wooden-art" className="hover:text-gold-300 transition-colors">
                  Rajasthani Wooden Furniture & Art
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-300 transition-colors">
                  Visual Crafts Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Craftsmanship */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-stone-800 pb-2">
              Our Promise
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>100% Hand-Carved by Skilled Master Artisans of Rajasthan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Custom Size & Design Orders Accepted for Temples & Idols</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Safe Export Wooden Crate Packing & Door Delivery</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-stone-800 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9210702703" className="hover:text-white transition-colors">
                    9210702703
                  </a>
                  <a href="tel:9785702703" className="hover:text-white transition-colors">
                    9785702703
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="mailto:gbmmarblehandicrafts@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  gbmmarblehandicrafts@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>GBM Marble Handicrafts, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} GBM Marble Handicrafts. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-stone-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-stone-300">
              Contact
            </Link>
            <Link href="/admin/login" className="hover:text-stone-300">
              Admin CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
