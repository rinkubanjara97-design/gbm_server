import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { ChiselIcon, StoneBlockIcon, CaliperIcon } from '@/components/ui/ChiselIcons'

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#2B2723] text-white overflow-hidden border-b border-[#A63D2F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1920&auto=format&fit=crop"
            alt="GBM Marble Craftsmanship Heritage"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF] via-[#2B2723]/60 to-[#2B2723]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8924A]">
            Our Heritage & Story
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            GBM Marble Handicrafts
          </h1>
          <p className="text-[#E4DDCF]/80 text-base font-light max-w-2xl mx-auto leading-relaxed">
            Sculpting eternal divine beauty from pure white Makrana marble for home mandirs, villas, and collectors worldwide.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A63D2F] block">
              Rajasthan Stone Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2723] leading-tight">
              Preserving Traditional Stone Chiseling for Generations
            </h2>
            <p className="text-[#2B2723]/80 text-sm leading-relaxed font-light">
              GBM Marble Handicrafts inherits Rajasthan&apos;s rich legacy of master stone carvers. Makrana white marble—the very same marble chosen for the Taj Mahal—is globally celebrated for its translucent crystal structure and timeless sheen that never dulls over centuries.
            </p>
            <p className="text-[#2B2723]/80 text-sm leading-relaxed font-light">
              Every idol of Lord Ganesha, Radha Krishna, Shiv Parivar, or custom home temple is sculpted using traditional hand chisels and finished with diamond polishing for heirloom beauty.
            </p>

            <div className="pt-2 flex items-center gap-6 font-mono border-t border-[#E4DDCF]">
              <div>
                <span className="font-serif text-3xl font-bold text-[#A63D2F] block">30+</span>
                <span className="text-[10px] text-[#2B2723]/60 uppercase tracking-wider">Years Legacy</span>
              </div>
              <div className="h-8 w-px bg-[#E4DDCF]" />
              <div>
                <span className="font-serif text-3xl font-bold text-[#A63D2F] block">1000+</span>
                <span className="text-[10px] text-[#2B2723]/60 uppercase tracking-wider">Temples Carved</span>
              </div>
              <div className="h-8 w-px bg-[#E4DDCF]" />
              <div>
                <span className="font-serif text-3xl font-bold text-[#A63D2F] block">25+</span>
                <span className="text-[10px] text-[#2B2723]/60 uppercase tracking-wider">Countries Exported</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-sm overflow-hidden border border-[#E4DDCF] bg-stone-900">
            <Image
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop"
              alt="Marble Mandir Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 Steps of Craftsmanship */}
      <section className="bg-white py-14 border-y border-[#E4DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A63D2F]">
              Process of Creation
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B2723]">
              Our 4-Stage Craftsmanship Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-[#F7F4EF] rounded-sm border border-[#E4DDCF] space-y-2">
              <StoneBlockIcon className="w-6 h-6 text-[#B8924A]" />
              <span className="font-mono text-xs text-[#A63D2F] font-bold block">Stage 01</span>
              <h3 className="font-serif font-bold text-[#2B2723] text-base">Stone Selection</h3>
              <p className="text-xs text-[#2B2723]/70 font-light leading-relaxed">
                Hand-selecting flawless white Makrana marble blocks without internal flaws or discoloration.
              </p>
            </div>

            <div className="p-5 bg-[#F7F4EF] rounded-sm border border-[#E4DDCF] space-y-2">
              <ChiselIcon className="w-6 h-6 text-[#B8924A]" />
              <span className="font-mono text-xs text-[#A63D2F] font-bold block">Stage 02</span>
              <h3 className="font-serif font-bold text-[#2B2723] text-base">Chisel Carving</h3>
              <p className="text-xs text-[#2B2723]/70 font-light leading-relaxed">
                Roughing out divine silhouettes and traditional proportions according to Shilpa Shastra guidelines.
              </p>
            </div>

            <div className="p-5 bg-[#F7F4EF] rounded-sm border border-[#E4DDCF] space-y-2">
              <CaliperIcon className="w-6 h-6 text-[#B8924A]" />
              <span className="font-mono text-xs text-[#A63D2F] font-bold block">Stage 03</span>
              <h3 className="font-serif font-bold text-[#2B2723] text-base">Fine Detailing</h3>
              <p className="text-xs text-[#2B2723]/70 font-light leading-relaxed">
                Detailing expressive facial features, flowing garments, jewelry, and ornate floral jali borders.
              </p>
            </div>

            <div className="p-5 bg-[#F7F4EF] rounded-sm border border-[#E4DDCF] space-y-2">
              <ChiselIcon className="w-6 h-6 text-[#B8924A]" />
              <span className="font-mono text-xs text-[#A63D2F] font-bold block">Stage 04</span>
              <h3 className="font-serif font-bold text-[#2B2723] text-base">Diamond Polish & Gold</h3>
              <p className="text-xs text-[#2B2723]/70 font-light leading-relaxed">
                Water polishing for smooth touch, followed by optional 24K gold leafing and Meenakari accents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-5xl mx-auto px-4 text-center bg-[#2B2723] text-white p-10 rounded-sm shadow-md border border-[#A63D2F] space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">
          Commission Your Custom Marble Temple or Statue Today
        </h2>
        <p className="text-[#E4DDCF]/80 text-xs sm:text-sm max-w-xl mx-auto font-light">
          Have specific dimensions or custom temple architectural designs? Speak directly with our master craftsmen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919210702703"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-3 rounded-sm text-xs uppercase tracking-wider flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Inquiry
          </a>
          <Link
            href="/contact"
            className="bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold px-7 py-3 rounded-sm text-xs uppercase tracking-wider flex items-center gap-2"
          >
            Contact Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
