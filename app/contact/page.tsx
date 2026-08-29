import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 bg-[#FAF8F5]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B08968]">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          Contact GBM Marble Atelier
        </h1>
        <p className="text-[#555555] text-base font-light leading-relaxed">
          Have questions about custom statue dimensions, home temple orders, or international wooden crate shipping? Reach out directly to our Rajasthan atelier.
        </p>
      </div>

      {/* Main Grid: Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-2xs border border-[#E5E2DC]/70 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] border-b border-[#E5E2DC] pb-4">
              Direct Contact Details
            </h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#B08968]" />
                </div>
                <div>
                  <p className="font-sans text-xs text-[#888888] font-medium uppercase tracking-wider mb-1">Phone Lines</p>
                  <a href="tel:9210702703" className="font-mono font-bold text-[#1A1A1A] hover:text-[#B08968] block text-base transition-colors">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="font-mono font-bold text-[#1A1A1A] hover:text-[#B08968] block text-base transition-colors">
                    +91 9785702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-[#1A1A1A] fill-current" />
                </div>
                <div>
                  <p className="font-sans text-xs text-[#888888] font-medium uppercase tracking-wider mb-1">WhatsApp Enquiry</p>
                  <a
                    href="https://wa.me/919210702703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-[#1A1A1A] hover:text-[#B08968] block text-base transition-colors"
                  >
                    +91 9210702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#B08968]" />
                </div>
                <div>
                  <p className="font-sans text-xs text-[#888888] font-medium uppercase tracking-wider mb-1">Email Address</p>
                  <a
                    href="mailto:gbmmarblehandicrafts@gmail.com"
                    className="font-mono font-bold text-[#1A1A1A] hover:text-[#B08968] block text-sm break-all transition-colors"
                  >
                    gbmmarblehandicrafts@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div>
                  <p className="font-sans text-xs text-[#888888] font-medium uppercase tracking-wider mb-1">Workshop Location</p>
                  <p className="font-medium text-[#1A1A1A] text-sm">
                    GBM Marble Handicrafts, Near Marble Market, Makrana Road, Rajasthan, India - 305801
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-xl shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#B08968] font-serif text-lg font-bold">
              <Globe className="w-5 h-5" /> Global Export Shipping
            </div>
            <p className="text-[#D8D3CA]/80 text-xs leading-relaxed font-light">
              We regularly export white marble temples and deity idols to USA, UK, UAE, Canada, Australia, and European countries. Safe wooden crate packing ensured.
            </p>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl shadow-2xs border border-[#E5E2DC]/70">
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-6">
            Send an Atelier Inquiry
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Interactive Google Map Section */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
          Atelier Google Map Location
        </h2>
        <div className="rounded-xl overflow-hidden border border-[#E5E2DC] shadow-2xs">
          <GoogleMap />
        </div>
      </div>
    </div>
  )
}
