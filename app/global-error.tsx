'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global Error:', error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#FAF8F5', color: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
        <div style={{ background: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #E5E2DC', textAlign: 'center', maxWidth: '400px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Application Refreshing</h2>
          <p style={{ fontSize: '13px', color: '#666666', marginBottom: '24px' }}>Updating components. Please click below to reload.</p>
          <button
            onClick={() => reset()}
            style={{ background: '#1A1A1A', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  )
}
