import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 bg-[#FAF8F5]">
      {/* Brand Aesthetic Loader Motif */}
      <div className="relative flex items-center justify-center w-20 h-20 mb-6">
        {/* Outer Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-t-[#B08968] border-r-[#D4AF37] border-b-transparent border-l-transparent animate-spin duration-1000" />
        
        {/* Inner Counter-Rotating Pulsing Ring */}
        <div className="absolute inset-2 rounded-full border border-b-[#A63D2F] border-l-[#B08968] border-t-transparent border-r-transparent animate-spin duration-700 reverse" />

        {/* Center Chisel Icon */}
        <div className="relative w-8 h-8 rounded-full bg-[#F2EFE9] border border-[#E5E2DC] flex items-center justify-center shadow-inner">
          <div className="w-3 h-3 bg-[#A63D2F] rounded-sm transform rotate-45 animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="font-serif text-lg tracking-wide text-[#1A1A1A]">
          GBM Marble Handicrafts
        </h3>
        <p className="text-xs font-mono text-[#B08968] uppercase tracking-widest animate-pulse">
          Crafting White Makrana Perfection...
        </p>
      </div>
    </div>
  )
}
