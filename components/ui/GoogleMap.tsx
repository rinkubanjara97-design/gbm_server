import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'

export function GoogleMap() {
  const mapUrl = 'https://maps.google.com/maps?q=28.5566067,77.3725653&hl=en&z=17&output=embed'
  const directLink = 'https://maps.app.goo.gl/D5aLdbw6dZfESYSi6'

  return (
    <div className="w-full relative min-h-[380px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E2DC] group">
      <iframe
        src={mapUrl}
        className="w-full h-full absolute inset-0 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="GBM Marble Handicrafts Workshop Location"
      />
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1A1A1A]/90 hover:bg-[#1A1A1A] text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-200 border border-white/10 hover:border-white/20"
        >
          <MapPin className="w-3.5 h-3.5 text-[#B08968]" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 text-white/60" />
        </a>
      </div>
    </div>
  )
}

