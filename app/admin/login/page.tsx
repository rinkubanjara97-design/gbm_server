'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Lock, Mail, ArrowRight, KeyRound } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@gbmmarblehandicrafts.com')
  const [password, setPassword] = useState('admin123')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push('/admin')
    }, 500)
  }

  const fillDemo = () => {
    setEmail('admin@gbmmarblehandicrafts.com')
    setPassword('admin123')
  }

  return (
    <div className="min-h-screen bg-[#2B2723] flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 rounded-sm shadow-2xl border border-[#B8924A]/40 space-y-6">
        <div className="text-center space-y-3">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B8924A] shadow-md mx-auto bg-white">
            <Image src="/logo.jpg" alt="GBM Marble Handicrafts Logo" fill className="object-cover" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#2B2723]">GBM Admin Portal</h1>
          <p className="text-xs text-[#2B2723]/60 font-light">Sign in to manage product catalog, categories, and enquiries.</p>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-[#FAF7F0] border border-[#B8924A]/40 p-4 rounded-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#2B2723]">
            <span className="flex items-center gap-1.5 font-mono text-[#A63D2F]">
              <KeyRound className="w-3.5 h-3.5 text-[#B8924A]" /> Admin Credentials:
            </span>
            <button
              type="button"
              onClick={fillDemo}
              className="text-[11px] font-mono text-[#A63D2F] underline font-semibold hover:text-[#8C3125]"
            >
              Auto-fill
            </button>
          </div>
          <div className="text-xs text-[#2B2723] space-y-0.5 font-mono">
            <p><strong>Email:</strong> admin@gbmmarblehandicrafts.com</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gbmmarblehandicrafts.com"
                className="w-full pl-10 pr-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A63D2F] hover:bg-[#8C3125] text-white font-bold py-3.5 rounded-sm text-xs font-mono uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In To Dashboard'}
            <ArrowRight className="w-4 h-4 text-[#B8924A]" />
          </button>
        </form>

        <div className="pt-4 border-t border-[#E4DDCF] text-center">
          <p className="text-[11px] font-mono text-[#2B2723]/50">
            Protected Admin Route • Restricted to Authorized Staff Only
          </p>
        </div>
      </div>
    </div>
  )
}
