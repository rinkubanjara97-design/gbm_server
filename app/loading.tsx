import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-[#FAF8F5]">
      {/* Standard Clean Circular Spinner */}
      <div className="w-10 h-10 border-3 border-[#E5E2DC] border-t-[#1A1A1A] rounded-full animate-spin" />
    </div>
  )
}
