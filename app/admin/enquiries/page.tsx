'use client'

import React, { useState } from 'react'
import { MOCK_ENQUIRIES, Enquiry } from '@/lib/data/mock-data'
import { MessageCircle, Phone, Mail, CheckCircle2, Circle, Trash2 } from 'lucide-react'

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(MOCK_ENQUIRIES)

  const toggleReadStatus = (id: string) => {
    setEnquiries(
      enquiries.map((e) => (e.id === id ? { ...e, is_read: !e.is_read } : e))
    )
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this customer enquiry?')) {
      setEnquiries(enquiries.filter((e) => e.id !== id))
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">Enquiries Inbox</h1>
        <p className="text-stone-500 text-xs mt-1">
          Review customer inquiries submitted via website contact form or product page enquiry buttons.
        </p>
      </div>

      {/* Inbox List */}
      <div className="space-y-4">
        {enquiries.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-stone-200 text-stone-500 text-sm">
            No customer enquiries in the inbox yet.
          </div>
        ) : (
          enquiries.map((enq) => (
            <div
              key={enq.id}
              className={`bg-white p-6 rounded-2xl shadow-sm border transition-all ${
                !enq.is_read ? 'border-maroon-900 ring-1 ring-maroon-900/20' : 'border-stone-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleReadStatus(enq.id)}
                    title={enq.is_read ? 'Mark as Unread' : 'Mark as Read'}
                    className="text-stone-400 hover:text-maroon-900 transition-colors"
                  >
                    {enq.is_read ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-maroon-900" />
                    )}
                  </button>

                  <div>
                    <h3 className="font-bold text-stone-900 text-base">{enq.name}</h3>
                    <p className="text-[11px] text-stone-400">
                      Received: {new Date(enq.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/91${enq.phone}?text=Hi%20${encodeURIComponent(
                      enq.name
                    )},%20thank%20you%20for%20contacting%20GBM%20Marble%20Handicrafts%20regarding%20${encodeURIComponent(
                      enq.product_name || 'your inquiry'
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" /> Reply via WhatsApp
                  </a>

                  <button
                    onClick={() => handleDelete(enq.id)}
                    className="p-2 hover:bg-rose-50 text-rose-600 rounded-xl transition-colors"
                    title="Delete Inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inquiry Content */}
              <div className="space-y-3">
                <p className="text-stone-700 text-sm bg-stone-50 p-4 rounded-xl leading-relaxed border border-stone-100">
                  {enq.message}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold-600" />
                    <span className="font-semibold">Phone:</span>
                    <a href={`tel:${enq.phone}`} className="text-stone-900 font-bold hover:underline">
                      {enq.phone}
                    </a>
                  </div>

                  {enq.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gold-600" />
                      <span className="font-semibold">Email:</span>
                      <a href={`mailto:${enq.email}`} className="text-stone-900 font-bold hover:underline">
                        {enq.email}
                      </a>
                    </div>
                  )}

                  {enq.product_name && (
                    <div className="bg-maroon-50 text-maroon-900 px-3 py-1 rounded-full text-[11px] font-bold border border-maroon-200">
                      Product Reference: {enq.product_name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
