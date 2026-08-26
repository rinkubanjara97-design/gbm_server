import React from 'react'

export function ChiselIcon({ className = 'w-8 h-8 text-[#B8924A]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Hand Chisel & Mallet Tool */}
      <path d="M14.5 4.5L19.5 9.5L11 18H6V13L14.5 4.5Z" />
      <path d="M13 6L18 11" />
      <path d="M4 20L7 17" />
      <path d="M18 2L22 6" />
    </svg>
  )
}

export function StoneBlockIcon({ className = 'w-8 h-8 text-[#B8924A]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Raw Marble Cube / Block */}
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 7V17L12 22V12" />
      <path d="M22 7V17L12 22" />
      <path d="M7 4.5L17 9.5" strokeOpacity="0.5" strokeDasharray="1 2" />
    </svg>
  )
}

export function CaliperIcon({ className = 'w-8 h-8 text-[#B8924A]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Craftsman Measuring Caliper / Compass */}
      <path d="M12 3V6" />
      <path d="M12 6L5 21" />
      <path d="M12 6L19 21" />
      <path d="M7.5 15H16.5" strokeDasharray="2 1" />
      <circle cx="12" cy="6" r="2" />
    </svg>
  )
}

export function CrateIcon({ className = 'w-8 h-8 text-[#B8924A]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Export Wooden Crate & Seal */}
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 4L21 20" />
      <path d="M21 4L3 20" />
      <path d="M3 12H21" />
    </svg>
  )
}
