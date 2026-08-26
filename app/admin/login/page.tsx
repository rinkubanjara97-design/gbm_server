'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Gem, Lock, Mail, ArrowRight, KeyRound } from 'lucide-react'

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
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 rounded-3xl shadow-2xl border border-gold-400/30 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-maroon-900 border border-gold-400 flex items-center justify-center mx-auto shadow-lg">
            <Gem className="w-6 h-6 text-gold-400" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-stone-900">GBM Admin Portal</h1>
          <p className="text-xs text-stone-500">Sign in to manage product catalog, categories, and enquiries.</p>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-amber-50 border border-gold-300 p-4 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800">
            <span className="flex items-center gap-1 text-maroon-900">
              <KeyRound className="w-4 h-4 text-gold-600" /> Admin Credentials:
            </span>
            <button
              type="button"
              onClick={fillDemo}
              className="text-[11px] text-maroon-900 underline font-semibold hover:text-gold-700"
            >
              Auto-fill
            </button>
          </div>
          <div className="text-xs text-stone-700 space-y-0.5 font-mono">
            <p><strong>Email:</strong> admin@gbmmarblehandicrafts.com</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
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
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
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
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-maroon-900 hover:bg-maroon-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In To Dashboard'}
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </form>

        <div className="pt-4 border-t border-stone-100 text-center">
          <p className="text-[11px] text-stone-400">
            Protected Admin Route • Restricted to Authorized Staff Only
          </p>
        </div>
      </div>
    </div>
  )
}
