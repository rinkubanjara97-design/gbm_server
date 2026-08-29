'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClickRipple {
  id: number
  x: number
  y: number
}

export function ClickFeedback() {
  const [ripples, setRipples] = useState<ClickRipple[]>([])

  useEffect(() => {
    let idCounter = 0

    const handleClick = (e: MouseEvent) => {
      // Create ripple effect at click coordinates
      const newRipple: ClickRipple = {
        id: ++idCounter,
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev.slice(-10), newRipple])

      // Auto cleanup ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 600)
    }

    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <React.Fragment key={ripple.id}>
            {/* Main expanding gold/terracotta ring */}
            <motion.span
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                left: ripple.x - 24,
                top: ripple.y - 24,
              }}
              className="absolute w-12 h-12 rounded-full border border-[#D4AF37] bg-[#B08968]/15 shadow-[0_0_15px_rgba(212,175,55,0.4)] pointer-events-none"
            />

            {/* Inner quick flash dot */}
            <motion.span
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: 0.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                left: ripple.x - 4,
                top: ripple.y - 4,
              }}
              className="absolute w-2 h-2 rounded-full bg-[#A63D2F] pointer-events-none"
            />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  )
}
