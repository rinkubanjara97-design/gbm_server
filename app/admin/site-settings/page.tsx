'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Save, Sparkles, CheckCircle2, Image as ImageIcon, Crop, Sliders, Palette, Lightbulb, Wand2 } from 'lucide-react'

export default function AdminSiteSettingsPage() {
  const [settings, setSettings] = useState({
    logo_image_url: '/logo.jpg',
    hero_image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/t3vcepigqrv49y6vq6sl.jpg',
    hero_title: 'White Makrana Marble Lord Ganesha Statue',
    hero_subtitle: 'Master Sculptor Creation',
    hero_badge: 'Custom Order',
    hero_object_fit: 'contain',
    hero_aspect_ratio: '4/3',
    hero_bg_color: '#F2EFE9',
    heritage_image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg',
  })
  const [saving, setSaving] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch('/api/admin/site-settings')
        if (res.ok) {
          const data = await res.json()
          setSettings((prev) => ({ ...prev, ...data }))
        }
      } catch {}
    }
    loadSettings()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSuccessMsg('')

    try {
      const res = await fetch('/api/admin/site-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (res.ok) {
        setSuccessMsg('Hero photo, crop settings, and site media updated live successfully!')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  // Cloudinary High Quality & Head Focus Optimizer
  const applyCloudinaryTopFocus = () => {
    if (settings.hero_image_url.includes('cloudinary.com') && !settings.hero_image_url.includes('q_auto')) {
      const parts = settings.hero_image_url.split('/upload/')
      if (parts.length === 2) {
        const optimized = `${parts[0]}/upload/c_limit,w_1400,q_auto:best,f_auto/${parts[1]}`
        setSettings({ ...settings, hero_image_url: optimized })
        setSuccessMsg('Cloudinary HD & Head-Focus parameter applied!')
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-4">
        <div>
          <Link href="/admin" className="inline-flex items-center gap-1.5 text-xs font-sans text-[#888888] hover:text-[#1A1A1A] mb-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="font-serif text-3xl font-bold text-[#1A1A1A]">
            Homepage Hero Photo, Crop & Media Control
          </h1>
          <p className="text-xs text-[#666666] font-light mt-1">
            Adjust photo cropping, statue head alignment, container backdrop, and site logo live across the website.
          </p>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-sans flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8 bg-white p-8 rounded-xl border border-[#E5E2DC] shadow-2xs">
        {/* 1. Main Hero Photo & Live Crop Preview */}
        <div className="space-y-6 border-b border-[#E5E2DC] pb-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-base font-bold text-[#1A1A1A] flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#B08968]" /> Homepage Hero Feature Photo & Live Framing
            </h2>
            <span className="text-[11px] font-sans text-[#B08968] font-semibold bg-[#F2EFE9] px-2.5 py-1 rounded-md">
              Hero Section Right Card
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Real-time Live Preview Card */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-sans font-medium text-[#888888] uppercase tracking-wider block">
                Live Homepage Card Preview:
              </span>
              <div
                className="relative h-72 rounded-xl overflow-hidden border border-[#E5E2DC] shadow-sm transition-all"
                style={{ backgroundColor: settings.hero_bg_color || '#F2EFE9' }}
              >
                {settings.hero_image_url && (
                  <Image
                    src={settings.hero_image_url}
                    alt="Hero Preview"
                    fill
                    className={`${
                      settings.hero_object_fit === 'cover-top'
                        ? 'object-cover object-top'
                        : settings.hero_object_fit === 'cover-center'
                        ? 'object-cover object-center'
                        : 'object-contain object-top p-3'
                    } transition-all duration-300`}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent p-4 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-[#B08968] uppercase font-sans font-medium block">{settings.hero_subtitle || 'Subtitle'}</span>
                    <span className="font-serif text-sm font-bold block truncate max-w-[180px]">{settings.hero_title || 'Title'}</span>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white border border-white/30">
                    {settings.hero_badge || 'Badge'}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Crop & Framing Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                    Hero Photo Cloudinary URL *
                  </label>
                  <button
                    type="button"
                    onClick={applyCloudinaryTopFocus}
                    className="text-[11px] text-[#B08968] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <Wand2 className="w-3.5 h-3.5" /> Auto HD Sharpen
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={settings.hero_image_url}
                  onChange={(e) => setSettings({ ...settings, hero_image_url: e.target.value })}
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
                />
              </div>

              {/* Crop & Framing Selector */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#1A1A1A] mb-2 flex items-center gap-1.5">
                  <Crop className="w-3.5 h-3.5 text-[#B08968]" /> Photo Framing & Head Protection Mode
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, hero_object_fit: 'contain' })}
                    className={`p-3 rounded-lg border text-left space-y-1 transition-all ${
                      settings.hero_object_fit === 'contain'
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-2xs'
                        : 'border-[#E5E2DC] bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <span className="font-semibold text-xs block">Full View</span>
                    <span className="text-[10px] block opacity-80">0% Head Crop Guarantee</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, hero_object_fit: 'cover-top' })}
                    className={`p-3 rounded-lg border text-left space-y-1 transition-all ${
                      settings.hero_object_fit === 'cover-top'
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-2xs'
                        : 'border-[#E5E2DC] bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <span className="font-semibold text-xs block">Head / Top Focus</span>
                    <span className="text-[10px] block opacity-80">Focus on Idol Face</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, hero_object_fit: 'cover-center' })}
                    className={`p-3 rounded-lg border text-left space-y-1 transition-all ${
                      settings.hero_object_fit === 'cover-center'
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-2xs'
                        : 'border-[#E5E2DC] bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <span className="font-semibold text-xs block">Centered Cover</span>
                    <span className="text-[10px] block opacity-80">Full-bleed Card Fill</span>
                  </button>
                </div>
              </div>

              {/* Background Color Picker for Photo Card */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#1A1A1A] mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#B08968]" /> Container Backdrop Color Presets
                </label>
                <div className="flex items-center gap-3">
                  {[
                    { label: 'Soft Stone', hex: '#F2EFE9' },
                    { label: 'Warm Off-White', hex: '#FAF8F5' },
                    { label: 'Pure White', hex: '#FFFFFF' },
                    { label: 'Dark Charcoal', hex: '#1A1A1A' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => setSettings({ ...settings, hero_bg_color: color.hex })}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-medium transition-all ${
                        settings.hero_bg_color === color.hex ? 'border-[#1A1A1A] ring-2 ring-[#B08968]' : 'border-[#E5E2DC]'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: color.hex }} />
                      {color.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Titles & Captions */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#1A1A1A] mb-1">
                  Photo Main Caption / Title
                </label>
                <input
                  type="text"
                  value={settings.hero_title}
                  onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                  placeholder="e.g. White Makrana Marble Lord Ganesha Statue"
                  className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#1A1A1A] mb-1">
                    Eyebrow / Subtitle
                  </label>
                  <input
                    type="text"
                    value={settings.hero_subtitle}
                    onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
                    placeholder="e.g. Master Sculptor Creation"
                    className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#1A1A1A] mb-1">
                    Badge Tag Text
                  </label>
                  <input
                    type="text"
                    value={settings.hero_badge}
                    onChange={(e) => setSettings({ ...settings, hero_badge: e.target.value })}
                    placeholder="e.g. Custom Order"
                    className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Photo Suggestions & Photography Tips Box */}
        <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E5E2DC] space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#B08968]" /> Professional Photography Suggestions & Cloudinary Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#555555]">
            <div className="space-y-1">
              <span className="font-semibold text-[#1A1A1A] block">1. High Contrast Backdrops</span>
              <p className="font-light">White Makrana marble photos look best against neutral dark charcoal or soft warm gray backdrops for maximum visual pop.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#1A1A1A] block">2. Head Crop Prevention</span>
              <p className="font-light">Use <strong>Full View (Contain)</strong> mode for deity idols so crown/mukut is 100% visible, or select <strong>Head / Top Focus</strong> mode.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#1A1A1A] block">3. Cloudinary HD Auto-Sharpen</span>
              <p className="font-light">Click &ldquo;Auto HD Sharpen&rdquo; above to automatically add <code>q_auto:best,f_auto</code> for fast WebP loading with zero blur!</p>
            </div>
          </div>
        </div>

        {/* 3. Logo Settings */}
        <div className="space-y-4 border-b border-[#E5E2DC] pb-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-base font-bold text-[#1A1A1A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B08968]" /> Website Logo
            </h2>
            <span className="text-[11px] text-[#888888]">Navbar & Footer Logo</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-3 flex justify-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#E5E2DC] bg-[#FAF8F5] p-1 shadow-2xs">
                {settings.logo_image_url && (
                  <Image src={settings.logo_image_url} alt="Site Logo Preview" fill className="object-cover rounded-full" />
                )}
              </div>
            </div>
            <div className="sm:col-span-9 space-y-2">
              <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                Logo Image URL
              </label>
              <input
                type="text"
                value={settings.logo_image_url}
                onChange={(e) => setSettings({ ...settings, logo_image_url: e.target.value })}
                placeholder="/logo.jpg or Cloudinary Image URL"
                className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
              />
            </div>
          </div>
        </div>

        {/* 4. Homepage Heritage Story Photo */}
        <div className="space-y-4 pb-2">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-base font-bold text-[#1A1A1A] flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#B08968]" /> Heritage Story Section Photo
            </h2>
            <span className="text-[11px] text-[#888888]">Background Photo in Heritage Section</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-4 relative h-36 rounded-lg overflow-hidden border border-[#E5E2DC] bg-[#FAF8F5]">
              {settings.heritage_image_url && (
                <Image src={settings.heritage_image_url} alt="Heritage Story Preview" fill className="object-cover object-top" />
              )}
            </div>
            <div className="sm:col-span-8 space-y-2">
              <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                Heritage Story Photo Cloudinary URL
              </label>
              <input
                type="text"
                value={settings.heritage_image_url}
                onChange={(e) => setSettings({ ...settings, heritage_image_url: e.target.value })}
                placeholder="https://res.cloudinary.com/..."
                className="w-full px-4 py-3 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5]"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#1A1A1A] hover:bg-[#B08968] text-white px-8 py-3.5 rounded-md text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving Changes...' : 'Save Site Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}
