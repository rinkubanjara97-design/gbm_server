'use client'

import React from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

export function WhatsAppButton() {
  const phoneNumber = '919210702703'
  const message = encodeURIComponent(
    'Namaste GBM Marble Handicrafts! I am interested in your Makrana marble statues & home temples. Please share your catalog and details.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 bg-[#1A1A1A] hover:bg-[#B08968] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group border border-[#333]"
      aria-label="Enquire on WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5 text-white fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-sans font-medium pl-0 group-hover:pl-2.5">
        Chat on WhatsApp
      </span>
    </a>
  )
}
