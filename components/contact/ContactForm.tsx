'use client'

import React, { useState } from 'react'
import { submitEnquiry } from '@/lib/supabase/service'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const res = await submitEnquiry(formData)
    setLoading(false)
    setResult(res)

    if (res.success) {
      setFormData({ name: '', phone: '', email: '', message: '' })
    }
  }

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-[#E4DDCF] space-y-6">
      <div>
        <h3 className="font-serif text-2xl font-bold text-[#2B2723]">Send an Online Enquiry</h3>
        <p className="text-xs text-[#2B2723]/60 mt-1 font-light">
          Fill out your requirements below. Our workshop team will get back to you within 24 hours.
        </p>
      </div>

      {result && (
        <div
          className={`p-4 rounded-sm text-xs font-mono ${
            result.success
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {result.success ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
            <span>{result.message}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
            Your Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] bg-[#F7F4EF]/30"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
              Phone / WhatsApp *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9829012345"
              className="w-full px-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] bg-[#F7F4EF]/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] bg-[#F7F4EF]/30"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
            Requirement Details / Message *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please describe the marble statue, home temple dimensions, or custom design you require..."
            className="w-full px-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] bg-[#F7F4EF]/30 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold py-3.5 rounded-sm text-xs font-mono uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? (
            'Submitting...'
          ) : (
            <>
              <Send className="w-4 h-4 text-[#B8924A]" /> Send Enquiry Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
