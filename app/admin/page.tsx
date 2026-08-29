'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllAdminCategories, getAllAdminProducts, getEnquiries } from '@/lib/supabase/service'
import { Package, FolderTree, Inbox, ArrowUpRight, Plus, Eye, MessageSquare, Sparkles } from 'lucide-react'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    categoriesCount: 0,
    productsCount: 0,
    enquiriesCount: 0,
    unreadEnquiriesCount: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      const [cats, prods, enqs] = await Promise.all([
        getAllAdminCategories(),
        getAllAdminProducts(),
        getEnquiries(),
      ])
      setStats({
        categoriesCount: cats.length,
        productsCount: prods.length,
        enquiriesCount: enqs.length,
        unreadEnquiriesCount: enqs.filter((e) => !e.is_read).length,
      })
      setLoading(false)
    }
    loadStats()
  }, [])

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-[#2B2723] text-white p-8 rounded-sm shadow-md border border-[#A63D2F] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8924A]">
            GBM Marble Handicrafts CMS
          </span>
          <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-[#E4DDCF]/80 text-xs font-light max-w-xl">
            Welcome back! Manage your marble statues, home temples, Pietra Dura inlay products, and customer quote enquiries.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/products"
            className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <Plus className="w-4 h-4 text-[#B8924A]" /> Add Product
          </Link>
          <Link
            href="/"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 text-white border border-[#E4DDCF]/30 px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
          >
            <Eye className="w-4 h-4 text-[#B8924A]" /> View Live Site
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-sm border border-[#E4DDCF] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723]/60">
              Total Categories
            </span>
            <FolderTree className="w-5 h-5 text-[#A63D2F]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2B2723]">
            {loading ? '...' : stats.categoriesCount}
          </div>
          <Link href="/admin/categories" className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#A63D2F] hover:underline">
            Manage Categories <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-sm border border-[#E4DDCF] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723]/60">
              Active Products
            </span>
            <Package className="w-5 h-5 text-[#A63D2F]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2B2723]">
            {loading ? '...' : stats.productsCount}
          </div>
          <Link href="/admin/products" className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#A63D2F] hover:underline">
            Manage Products <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-sm border border-[#E4DDCF] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2723]/60">
              Enquiries Received
            </span>
            <Inbox className="w-5 h-5 text-[#A63D2F]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-[#2B2723]">{loading ? '...' : stats.enquiriesCount}</span>
            {stats.unreadEnquiriesCount > 0 && (
              <span className="text-xs font-mono bg-[#A63D2F] text-white px-2 py-0.5 rounded-sm font-bold">
                {stats.unreadEnquiriesCount} New
              </span>
            )}
          </div>
          <Link href="/admin/enquiries" className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#A63D2F] hover:underline">
            View Inbox <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-[#E5E2DC] shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Site Logo & Hero Photos</h3>
            <Sparkles className="w-5 h-5 text-[#B08968]" />
          </div>
          <p className="text-xs text-[#666666] font-light leading-relaxed">
            Change site logo, homepage hero photo, and heritage story section photo live across the site.
          </p>
          <div className="pt-2">
            <Link
              href="/admin/site-settings"
              className="bg-[#1A1A1A] hover:bg-[#B08968] text-white px-4 py-2.5 rounded-md text-xs font-medium uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Site Settings <ArrowUpRight className="w-3.5 h-3.5 text-[#B08968]" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-[#E5E2DC] shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Product & Image Manager</h3>
            <Package className="w-5 h-5 text-[#B08968]" />
          </div>
          <p className="text-xs text-[#666666] font-light leading-relaxed">
            Upload high-definition marble photos directly to Cloudinary and assign custom dimensions, finishes, and materials.
          </p>
          <div className="pt-2">
            <Link
              href="/admin/products"
              className="bg-[#1A1A1A] hover:bg-[#B08968] text-white px-4 py-2.5 rounded-md text-xs font-medium uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Open Products Manager <ArrowUpRight className="w-3.5 h-3.5 text-[#B08968]" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-[#E5E2DC] shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Customer Quotes & WhatsApp Inbox</h3>
            <MessageSquare className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <p className="text-xs text-[#666666] font-light leading-relaxed">
            Review customer contact form messages and directly reply via WhatsApp using one-click chat links.
          </p>
          <div className="pt-2">
            <Link
              href="/admin/enquiries"
              className="bg-[#1A1A1A] hover:bg-[#B08968] text-white px-4 py-2.5 rounded-md text-xs font-medium uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Open Enquiries Inbox <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
