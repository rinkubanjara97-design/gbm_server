import React from 'react'

export function GoogleMap() {
  return (
    <div className="w-full relative min-h-[380px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-gold-400/30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3601.772261095964!2d74.86137677543178!3d26.691974976779413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQxJzMxLjEiTiA3NMKwNTEnNTAuMiJF!5e1!3m2!1sen!2sin!4v1787726732017!5m2!1sen!2sin"
        className="w-full h-full absolute inset-0 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="GBM Marble Handicrafts Workshop Location"
      />
    </div>
  )
}
