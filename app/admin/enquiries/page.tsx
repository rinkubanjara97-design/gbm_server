'use client'

import React, { useState, useEffect } from 'react'
import { Enquiry } from '@/lib/data/mock-data'
import { getEnquiries, markEnquiryRead, deleteEnquiry } from '@/lib/supabase/service'
import { Inbox, Phone, Mail, CheckCircle2, Trash2, Clock, MessageSquare } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)

  const loadEnquiries = async () => {
    setLoading(true)
    const data = await getEnquiries()
    setEnquiries(data)
    setLoading(false)
  }

  useEffect(() => {
    loadEnquiries()
  }, [])

  const handleToggleRead = async (id: string, currentReadState: boolean) => {
    await markEnquiryRead(id, !currentReadState)
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, is_read: !currentReadState } : e)))
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return
    await deleteEnquiry(id)
    setEnquiries((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#E4DDCF] pb-4">
        <h1 className="font-serif text-3xl font-bold text-[#2B2723] flex items-center gap-2">
          <Inbox className="w-7 h-7 text-[#A63D2F]" /> Customer Enquiries Inbox
        </h1>
        <p className="text-xs text-[#2B2723]/60 font-mono mt-1">
          Review customer WhatsApp & web form quote requests stored live in Supabase.
        </p>
      </div>

      {/* Enquiries Inbox */}
      {loading ? (
        <div className="p-8 text-center text-xs font-mono text-[#2B2723]/60">Loading customer enquiries...</div>
      ) : enquiries.length === 0 ? (
        <div className="bg-white p-10 rounded-sm border border-[#E4DDCF] text-center space-y-3">
          <MessageSquare className="w-10 h-10 text-[#B8924A] mx-auto opacity-50" />
          <h3 className="font-serif text-lg font-bold text-[#2B2723]">No Enquiries Yet</h3>
          <p className="text-xs text-[#2B2723]/60 font-light">Customer submissions from the contact form will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((enq) => (
            <div
              key={enq.id}
              className={`bg-white rounded-sm border p-6 shadow-sm transition-all ${
                enq.is_read ? 'border-[#E4DDCF]' : 'border-l-4 border-l-[#A63D2F] border-[#E4DDCF]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4DDCF] pb-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-[#2B2723] text-lg">{enq.name}</h3>
                    {!enq.is_read && (
                      <span className="bg-[#A63D2F] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        New Enquiry
                      </span>
                    )}
                  </div>
                  {enq.product_name && (
                    <span className="text-xs font-mono font-semibold text-[#A63D2F] block mt-0.5">
                      Interested Product: {enq.product_name}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#2B2723]/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B8924A]" /> {new Date(enq.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-[#2B2723]/80 text-sm font-light leading-relaxed bg-[#F7F4EF]/50 p-4 rounded-sm border border-[#E4DDCF]/50 mb-4">
                &ldquo;{enq.message}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href={`tel:${enq.phone}`}
                    className="flex items-center gap-1.5 font-bold text-[#2B2723] hover:text-[#A63D2F]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B8924A]" /> {enq.phone}
                  </a>

                  {enq.email && (
                    <a
                      href={`mailto:${enq.email}`}
                      className="flex items-center gap-1.5 font-bold text-[#2B2723] hover:text-[#A63D2F]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B8924A]" /> {enq.email}
                    </a>
                  )}

                  <a
                    href={`https://wa.me/91${enq.phone.replace(/[^0-9]/g, '')}?text=Namaste%20${encodeURIComponent(
                      enq.name
                    )},%20thank%20you%20for%20inquiring%20with%20GBM%20Marble%20Handicrafts.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-bold text-[#25D366] hover:underline"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" /> Reply on WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleRead(enq.id, enq.is_read)}
                    className="px-3 py-1.5 rounded-sm border border-[#E4DDCF] text-xs font-mono text-[#2B2723] hover:bg-[#E4DDCF]/40 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${enq.is_read ? 'text-emerald-600' : 'text-stone-400'}`} />
                    {enq.is_read ? 'Mark Unread' : 'Mark as Read'}
                  </button>

                  <button
                    onClick={() => handleDelete(enq.id)}
                    className="px-3 py-1.5 rounded-sm border border-rose-200 bg-rose-50 text-xs font-mono text-rose-700 hover:bg-rose-100 flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
