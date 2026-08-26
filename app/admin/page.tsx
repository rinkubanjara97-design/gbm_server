import React from 'react'
import Link from 'next/link'
import { getCategories, getProducts } from '@/lib/supabase/service'
import { MOCK_ENQUIRIES } from '@/lib/data/mock-data'
import { Package, FolderTree, Inbox, ArrowRight, MessageCircle } from 'lucide-react'

export const revalidate = 0

export default async function AdminDashboardPage() {
  const categories = await getCategories()
  const products = await getProducts()
  const enquiries = MOCK_ENQUIRIES

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">Dashboard Overview</h1>
        <p className="text-stone-500 text-xs mt-1">
          Welcome back to the GBM Marble Handicrafts content management portal.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Total Products
            </span>
            <span className="font-serif text-3xl font-bold text-stone-900 mt-1 block">
              {products.length}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-maroon-900/10 text-maroon-900 flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Active Categories
            </span>
            <span className="font-serif text-3xl font-bold text-stone-900 mt-1 block">
              {categories.length}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-700 flex items-center justify-center">
            <FolderTree className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Pending Enquiries
            </span>
            <span className="font-serif text-3xl font-bold text-maroon-900 mt-1 block">
              {enquiries.filter((e) => !e.is_read).length}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Enquiries Inbox Preview */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h2 className="font-serif text-lg font-bold text-stone-900">Recent Customer Enquiries</h2>
          <Link
            href="/admin/enquiries"
            className="text-xs font-bold uppercase tracking-wider text-maroon-900 hover:underline flex items-center gap-1"
          >
            View All Enquiries <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="divide-y divide-stone-100">
          {enquiries.slice(0, 3).map((enq) => (
            <div key={enq.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900 text-sm">{enq.name}</span>
                  {!enq.is_read && (
                    <span className="bg-maroon-900 text-gold-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-500">{enq.message}</p>
                <div className="text-[11px] text-stone-400">
                  Phone: <a href={`tel:${enq.phone}`} className="text-stone-700 font-semibold">{enq.phone}</a> • Product: {enq.product_name || 'General Inquiry'}
                </div>
              </div>

              <a
                href={`https://wa.me/91${enq.phone}?text=Hi%20${encodeURIComponent(enq.name)},%20thank%20you%20for%20contacting%20GBM%20Marble%20Handicrafts.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Reply on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
