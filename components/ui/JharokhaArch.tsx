import React from 'react'

interface JharokhaArchProps {
  className?: string
  color?: string
}

export function JharokhaArch({ className = 'w-full h-12 text-[#C5A059]', color = 'currentColor' }: JharokhaArchProps) {
  return (
    <div className={`overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-10"
        preserveAspectRatio="none"
      >
        {/* Ornate Rajasthani Arch Motif */}
        <path
          d="M0 38 H160 C170 38, 175 30, 180 20 C185 8, 192 2, 200 2 C208 2, 215 8, 220 20 C225 30, 230 38, 240 38 H400"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="200" cy="8" r="2" fill={color} />
        <path
          d="M175 38 C182 32, 190 14, 200 14 C210 14, 218 32, 225 38"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  )
}
