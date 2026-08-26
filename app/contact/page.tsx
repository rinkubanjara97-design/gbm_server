import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
          Contact GBM Marble Handicrafts
        </h1>
        <p className="text-stone-600 text-base font-light">
          Have questions about custom statue dimensions, home temple orders, or international wooden crate shipping? Reach out to us directly.
        </p>
      </div>

      {/* Main Grid: Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900 border-b pb-3">
              Direct Contact Details
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-maroon-900/10 border border-maroon-900/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-maroon-900" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Phone Lines</p>
                  <a href="tel:9210702703" className="font-bold text-stone-900 hover:text-maroon-900 block text-base">
                    +91 9210702703
                  </a>
                  <a href="tel:9785702703" className="font-bold text-stone-900 hover:text-maroon-900 block text-base">
                    +91 9785702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">WhatsApp Enquiry</p>
                  <a
                    href="https://wa.me/919210702703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline block text-base"
                  >
                    +91 9210702703
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Email Address</p>
                  <a
                    href="mailto:gbmmarblehandicrafts@gmail.com"
                    className="font-bold text-stone-900 hover:text-maroon-900 block text-sm break-all"
                  >
                    gbmmarblehandicrafts@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-stone-700" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Workshop Location</p>
                  <p className="font-bold text-stone-900 text-sm">
                    GBM Marble Handicrafts, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-lg border border-gold-400/30 space-y-4">
            <div className="flex items-center gap-3 text-gold-400 font-serif text-lg font-bold">
              <Globe className="w-5 h-5" /> Export Enquiries
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-light">
              We regularly export white marble temples, deity idols, and inlay items to USA, UK, UAE, Canada, Australia, and European countries. Safe wooden crate packing ensured.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Google Map Section */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-stone-900">Map & Location</h3>
          <p className="text-stone-500 text-xs">Find our manufacturing unit on Google Maps</p>
        </div>
        <GoogleMap />
      </section>
    </div>
  )
}
