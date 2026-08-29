'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App Error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center bg-[#FAF8F5]">
      <div className="max-w-md w-full bg-white rounded-xl p-8 border border-[#E5E2DC] shadow-2xs">
        <div className="w-12 h-12 rounded-full bg-[#F2EFE9] text-[#B08968] flex items-center justify-center mx-auto mb-4">
          <RefreshCw className="w-6 h-6 animate-spin" />
        </div>
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold mb-2">
          Refreshing Page Content
        </h2>
        <p className="text-[#666666] text-xs font-light mb-6">
          An unexpected error occurred while loading this page. Please click below to refresh or return home.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#B08968] text-white rounded-md font-medium text-xs uppercase tracking-wider transition-colors shadow-2xs"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1A1A1A] border border-[#E5E2DC] rounded-md font-medium text-xs uppercase tracking-wider hover:bg-[#F2EFE9] transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
