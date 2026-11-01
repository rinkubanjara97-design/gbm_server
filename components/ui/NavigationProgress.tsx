'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  // Complete progress on pathname or searchParams change
  useEffect(() => {
    if (isLoading) {
      setProgress(100)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams, isLoading])

  // Intercept click on internal links to start progress bar instantly
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (!anchor) return

      const href = anchor.getAttribute('href')
      const targetAttr = anchor.getAttribute('target')

      // Ignore external, hash-only, or new-tab links
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('javascript:') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        targetAttr === '_blank'
      ) {
        return
      }

      // Check if link is to current page
      const currentUrl = new URL(window.location.href)
      const targetUrl = new URL(href, window.location.href)

      if (
        targetUrl.origin === currentUrl.origin &&
        targetUrl.pathname === currentUrl.pathname &&
        targetUrl.search === currentUrl.search
      ) {
        return
      }

      if (targetUrl.origin === currentUrl.origin) {
        setIsLoading(true)
        setProgress(35)
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  // Simulate smooth progress increment while loading
  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        const diff = (90 - prev) * 0.15
        return Math.min(90, prev + Math.max(diff, 1))
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center">
          {/* Top Progress Bar */}
          <motion.div
            initial={{ width: '0%', opacity: 1 }}
            animate={{ width: `${progress}%`, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-[#1A1A1A] shadow-xs"
          />

          {/* Centered Pure Circle Spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-10 h-10 border-3 border-[#E5E2DC] border-t-[#1A1A1A] rounded-full animate-spin" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
