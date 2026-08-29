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
    <div className="space-y-6">
      {result && (
        <div
          className={`p-4 rounded-md text-xs font-sans ${
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

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-xs font-sans font-medium text-[#1A1A1A] mb-1.5">
            Your Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-sm focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-sans font-medium text-[#1A1A1A] mb-1.5">
              Phone / WhatsApp *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9829012345"
              className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-sm focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-sans font-medium text-[#1A1A1A] mb-1.5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-sm focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5] transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-sans font-medium text-[#1A1A1A] mb-1.5">
            Requirement Details / Message *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please describe the marble statue, home temple dimensions, or custom design you require..."
            className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-sm focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5] resize-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1A1A1A] hover:bg-[#B08968] text-white font-medium py-4 rounded-md text-xs uppercase tracking-wider shadow-2xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
        >
          {loading ? (
            'Submitting...'
          ) : (
            <>
              <Send className="w-4 h-4 text-white" /> Send Inquiry Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
