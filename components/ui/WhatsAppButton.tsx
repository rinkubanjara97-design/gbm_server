'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  productName?: string
}

export function WhatsAppButton({ productName }: WhatsAppButtonProps) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919210702703'
  
  const text = productName
    ? encodeURIComponent(`Namaste GBM Marble Handicrafts, I am interested in inquiring about "${productName}". Please share details and pricing.`)
    : encodeURIComponent(`Namaste GBM Marble Handicrafts, I would like to inquire about your marble statues, mandirs, and handicraft collection.`)

  const href = `https://wa.me/${number}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20"
    >
      <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
      <span className="font-semibold text-sm hidden sm:inline-block tracking-wide">
        Enquire on WhatsApp
      </span>
    </a>
  )
}
