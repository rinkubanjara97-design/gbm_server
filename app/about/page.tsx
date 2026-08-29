import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ChiselIcon, StoneBlockIcon, CaliperIcon, CrateIcon } from '@/components/ui/ChiselIcons'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-20 bg-[#FAF8F5]">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
            Our Heritage & Story
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white">
            GBM Marble Handicrafts
          </h1>
          <p className="text-[#D8D3CA]/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Sculpting eternal divine beauty from pure white Makrana marble for home mandirs, luxury villas, and collectors worldwide.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968] block">
              Rajasthan Stone Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
              Preserving Traditional Stone Chiseling for Generations
            </h2>
            <p className="text-[#555555] text-sm leading-relaxed font-light">
              GBM Marble Handicrafts inherits Rajasthan&apos;s rich legacy of master stone carvers. Makrana white marble—the very same marble chosen for the Taj Mahal—is globally celebrated for its translucent crystal structure and timeless sheen that never dulls over centuries.
            </p>
            <p className="text-[#555555] text-sm leading-relaxed font-light">
              Every idol of Lord Ganesha, Radha Krishna, Shiv Parivar, or custom home temple is sculpted using traditional hand chisels and finished with diamond polishing for heirloom beauty.
            </p>

            <div className="pt-4 flex items-center gap-8 border-t border-[#E5E2DC]">
              <div>
                <span className="font-serif text-4xl font-bold text-[#B08968] block">30+</span>
                <span className="text-xs text-[#666666] font-medium">Years Legacy</span>
              </div>
              <div className="h-10 w-px bg-[#E5E2DC]" />
              <div>
                <span className="font-serif text-4xl font-bold text-[#B08968] block">1000+</span>
                <span className="text-xs text-[#666666] font-medium">Temples Carved</span>
              </div>
              <div className="h-10 w-px bg-[#E5E2DC]" />
              <div>
                <span className="font-serif text-4xl font-bold text-[#B08968] block">25+</span>
                <span className="text-xs text-[#666666] font-medium">Countries Exported</span>
              </div>
            </div>
          </div>

          <div className="relative h-[440px] rounded-xl overflow-hidden bg-[#F2EFE9] shadow-2xs">
            <Image
              src="https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg"
              alt="Marble Mandir Workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* 4-Stage Craftsmanship Process */}
      <section className="py-20 bg-white border-y border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
              Process of Creation
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
              Our 4-Stage Craftsmanship Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-[#FAF8F5] rounded-xl space-y-3 shadow-2xs border border-[#E5E2DC]/50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B08968] shadow-2xs">
                <StoneBlockIcon className="w-5 h-5 text-[#B08968]" />
              </div>
              <span className="text-xs font-mono font-medium text-[#B08968] block">Stage 01</span>
              <h3 className="font-sans font-bold text-[#1A1A1A] text-base">Stone Selection</h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                Hand-selecting flawless white Makrana marble blocks without internal flaws or discoloration.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-xl space-y-3 shadow-2xs border border-[#E5E2DC]/50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B08968] shadow-2xs">
                <ChiselIcon className="w-5 h-5 text-[#B08968]" />
              </div>
              <span className="text-xs font-mono font-medium text-[#B08968] block">Stage 02</span>
              <h3 className="font-sans font-bold text-[#1A1A1A] text-base">Hand Chiseling</h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                Master sculptors carve facial expressions, drapery folds, and architectural pillars using traditional hand chisels.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-xl space-y-3 shadow-2xs border border-[#E5E2DC]/50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B08968] shadow-2xs">
                <CaliperIcon className="w-5 h-5 text-[#B08968]" />
              </div>
              <span className="text-xs font-mono font-medium text-[#B08968] block">Stage 03</span>
              <h3 className="font-sans font-bold text-[#1A1A1A] text-base">Diamond Polishing</h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                Multi-grade diamond pads polish the marble to a smooth silk sheen without chemicals.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-xl space-y-3 shadow-2xs border border-[#E5E2DC]/50">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B08968] shadow-2xs">
                <CrateIcon className="w-5 h-5 text-[#B08968]" />
              </div>
              <span className="text-xs font-mono font-medium text-[#B08968] block">Stage 04</span>
              <h3 className="font-sans font-bold text-[#1A1A1A] text-base">Export Packing</h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                Custom wooden crate packaging with shock-absorbing foam ensuring zero breakage during transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Ready to Commission Your Custom Sculpture?
        </h2>
        <p className="text-[#555555] text-sm font-light leading-relaxed">
          Talk directly to our master stone artisans in Rajasthan for bespoke size guidance and custom temple design consultations.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/919210702703"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] hover:bg-[#B08968] text-white px-8 py-4 rounded-md text-sm font-medium transition-colors shadow-2xs flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
            Talk on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
