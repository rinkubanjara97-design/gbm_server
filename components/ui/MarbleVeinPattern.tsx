import React from 'react'

interface MarbleVeinPatternProps {
  className?: string
  strokeColor?: string
}

export function MarbleVeinPattern({
  className = 'w-full h-8 opacity-40',
  strokeColor = '#B8924A',
}: MarbleVeinPatternProps) {
  return (
    <div className={`overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 C150 5, 280 35, 450 18 C580 5, 710 32, 880 15 C1010 3, 1120 28, 1200 20"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeDasharray="4 2 1 2"
          strokeLinecap="round"
        />
        <path
          d="M200 22 C320 28, 380 10, 480 22 C520 26, 560 14, 620 20"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
