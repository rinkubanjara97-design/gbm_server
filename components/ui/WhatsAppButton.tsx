'use client'

import React, { useState, useRef, useEffect } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { Phone, X, MessageCircle, ChevronUp } from 'lucide-react'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const num1 = '919210702703'
  const num2 = '919664258577'

  const messageText = encodeURIComponent(
    'Namaste G.B.M. Marble & Handicraft! I am interested in your marble statues, temples & handicrafts. Please share details.'
  )

  const waUrl1 = `https://wa.me/${num1}?text=${messageText}`
  const waUrl2 = `https://wa.me/${num2}?text=${messageText}`

  // Close popup menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Selection Box */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#E5E2DC] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white">G.B.M. Marble WhatsApp</h4>
                <p className="text-[10px] text-[#B08968] font-sans">Choose WhatsApp line to chat</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Option Buttons */}
          <div className="p-3 space-y-2.5 bg-[#FAF8F5]">
            {/* Number 1 */}
            <a
              href={waUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white hover:bg-emerald-50 border border-[#E5E2DC] hover:border-emerald-300 p-3 rounded-xl transition-all group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-medium text-[#888888] block uppercase tracking-wider">Line 1 (Sales & Custom)</span>
                  <span className="font-mono text-xs font-bold text-[#1A1A1A] group-hover:text-emerald-700 transition-colors">
                    +91 9210702703
                  </span>
                </div>
              </div>
              <MessageCircle className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100" />
            </a>

            {/* Number 2 */}
            <a
              href={waUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white hover:bg-emerald-50 border border-[#E5E2DC] hover:border-emerald-300 p-3 rounded-xl transition-all group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-medium text-[#888888] block uppercase tracking-wider">Line 2 (Workshop & Showroom)</span>
                  <span className="font-mono text-xs font-bold text-[#1A1A1A] group-hover:text-emerald-700 transition-colors">
                    +91 9664258577
                  </span>
                </div>
              </div>
              <MessageCircle className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          <div className="p-2.5 text-center bg-white border-t border-[#E5E2DC]">
            <span className="text-[10px] text-[#888888] font-sans">
              Instant reply during workshop hours (9 AM - 8 PM IST)
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group border border-emerald-400"
        aria-label="Enquire on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-sans font-semibold pl-0 group-hover:pl-2.5 flex items-center gap-1">
          Chat WhatsApp (2 Lines) <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>
    </div>
  )
}
