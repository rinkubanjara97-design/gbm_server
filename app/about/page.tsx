import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, ShieldCheck, HeartHandshake, Globe, ArrowRight, MessageCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Banner */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1920&auto=format&fit=crop"
            alt="GBM Marble Craftsmanship Heritage"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-stone-950/60 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Our Story & Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
            GBM Marble Handicrafts
          </h1>
          <p className="text-stone-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Carving eternal divine beauty from pure white Makrana marble for homes, temples, and collectors worldwide.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
              Rajasthan&apos;s Stone Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Preserving Ancient Sculpting Techniques for the Modern Era
            </h2>
            <p className="text-stone-600 text-base leading-relaxed font-light">
              GBM Marble Handicrafts was founded with a passion to carry forward Rajasthan&apos;s centuries-old legacy of marble sculpting. Makrana white marble—the very same marble used in the Taj Mahal—is globally renowned for its pure crystal density and timeless shine that never yellows over centuries.
            </p>
            <p className="text-stone-600 text-base leading-relaxed font-light">
              Every idol of Lord Ganesha, Radha Krishna, Shiv Parivar, or custom temple carved at our workshops undergoes meticulous hand-detailing by senior sculptors who have inherited their skills across generations.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="font-serif text-3xl font-bold text-maroon-900 block">30+</span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="h-10 w-px bg-stone-300" />
              <div>
                <span className="font-serif text-3xl font-bold text-maroon-900 block">1000+</span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Temples Carved</span>
              </div>
              <div className="h-10 w-px bg-stone-300" />
              <div>
                <span className="font-serif text-3xl font-bold text-maroon-900 block">25+</span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Countries Exported</span>
              </div>
            </div>
          </div>

          <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gold-300/40">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop"
              alt="Marble Mandir Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 Steps of Craftsmanship */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Process of Creation
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Our 4-Stage Craftsmanship Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 relative space-y-3">
              <span className="font-serif text-4xl font-bold text-gold-500/40 block">01</span>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Stone Selection</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hand-selecting flawless white Makrana or Vietnam marble blocks with zero internal cracks or blemishes.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 relative space-y-3">
              <span className="font-serif text-4xl font-bold text-gold-500/40 block">02</span>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Rough Chisel Carving</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Roughing out divine proportions and silhouettes according to traditional Shilpa Shastra guidelines.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 relative space-y-3">
              <span className="font-serif text-4xl font-bold text-gold-500/40 block">03</span>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Fine Hand Detailing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Carving expressive facial features, flowing garments, jewelry, and ornate floral jali borders.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 relative space-y-3">
              <span className="font-serif text-4xl font-bold text-gold-500/40 block">04</span>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Diamond Polish & Gold Work</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Water polishing for mirror sheen, followed by optional 24K gold foil leafing and Meenakari painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-5xl mx-auto px-4 text-center bg-gradient-to-r from-maroon-900 to-stone-900 text-white p-12 rounded-3xl shadow-2xl border border-gold-400/40 space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">
          Commission Your Custom Marble Temple or Statue Today
        </h2>
        <p className="text-stone-300 text-sm max-w-xl mx-auto font-light">
          Have specific dimensions or a custom deity design in mind? Speak directly with our master artisans.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/919210702703"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Inquiry
          </a>
          <Link
            href="/contact"
            className="bg-white hover:bg-stone-100 text-stone-900 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
          >
            Contact Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
