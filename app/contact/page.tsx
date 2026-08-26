import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { Phone, Mail, MapPin, MessageCircle, Globe } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A63D2F]">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2723]">
          Contact GBM Marble Handicrafts
        </h1>
        <p className="text-[#2B2723]/70 text-sm font-light">
          Have questions about custom statue dimensions, home temple orders, or international wooden crate shipping? Reach out directly.
        </p>
      </div>

      {/* Main Grid: Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#E4DDCF] space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#2B2723] border-b border-[#E4DDCF] pb-3">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#A63D2F]/10 border border-[#A63D2F]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#A63D2F]" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#2B2723]/60 uppercase tracking-wider">Phone Lines</p>
                  <a href="tel:9210702703" className="font-mono font-bold text-[#2B2723] hover:text-[#A63D2F] block text-sm">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="font-mono font-bold text-[#2B2723] hover:text-[#A63D2F] block text-sm">
                    +91 9785702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#2B2723]/60 uppercase tracking-wider">WhatsApp Enquiry</p>
                  <a
                    href="https://wa.me/919210702703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-[#25D366] hover:underline block text-sm"
                  >
                    +91 9210702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#B8924A]/10 border border-[#B8924A]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#B8924A]" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#2B2723]/60 uppercase tracking-wider">Email Address</p>
                  <a
                    href="mailto:gbmmarblehandicrafts@gmail.com"
                    className="font-mono font-bold text-[#2B2723] hover:text-[#A63D2F] block text-xs break-all"
                  >
                    gbmmarblehandicrafts@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#E4DDCF] border border-[#D4C9B8] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#2B2723]" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#2B2723]/60 uppercase tracking-wider">Workshop Location</p>
                  <p className="font-bold text-[#2B2723] text-xs">
                    GBM Marble Handicrafts, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2B2723] text-white p-6 rounded-sm shadow-sm border border-[#B8924A]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#B8924A] font-serif text-base font-bold">
              <Globe className="w-4 h-4" /> Global Export Shipping
            </div>
            <p className="text-[#E4DDCF]/80 text-xs leading-relaxed font-light">
              We regularly export white marble temples and deity idols to USA, UK, UAE, Canada, Australia, and European countries. Safe wooden crate packing ensured.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Google Map Section */}
      <section className="space-y-4 pt-4">
        <div className="border-b border-[#E4DDCF] pb-3">
          <h3 className="font-serif text-2xl font-bold text-[#2B2723]">Map & Location</h3>
          <p className="text-[#2B2723]/60 text-xs font-mono">Find our manufacturing workshop on Google Maps</p>
        </div>
        <GoogleMap />
      </section>
    </div>
  )
}
