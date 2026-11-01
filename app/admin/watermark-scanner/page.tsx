'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ShieldAlert,
  AlertTriangle,
  Search,
  Trash2,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  FileText,
  Filter,
  Eye,
  X
} from 'lucide-react'

interface WatermarkItem {
  public_id: string
  url: string
  matched_keywords?: string[]
  other_phones?: string[]
  urls?: string[]
  words_count?: number
  raw_text?: string
}

interface ScanData {
  total_scanned: number
  high_priority_count: number
  medium_priority_count: number
  texture_noise_count: number
  high_priority_items: WatermarkItem[]
  medium_priority_items: WatermarkItem[]
}

export default function WatermarkScannerPage() {
  const [data, setData] = useState<ScanData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'high' | 'medium' | 'all'>('high')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [bulkDeleting, setBulkDeleting] = useState(false)
  const [confirmModal, setConfirmModal] = useState<{ isOpen: boolean; item: WatermarkItem | null }>({
    isOpen: false,
    item: null,
  })
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [previewTextModal, setPreviewTextModal] = useState<WatermarkItem | null>(null)

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  const fetchScanResults = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/watermarks')
      const json = await res.json()
      if (json.success && json.data) {
        setData(json.data)
      } else {
        setError(json.error || 'Failed to load scanner results')
      }
    } catch (err: any) {
      setError(err.message || 'Error connecting to server')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchScanResults()
  }, [])

  const handleDeleteImage = async (item: WatermarkItem) => {
    setDeletingId(item.public_id)
    try {
      const res = await fetch('/api/admin/watermarks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id: item.public_id, url: item.url }),
      })
      const json = await res.json()

      if (json.success) {
        showToast(`Image deleted successfully from Cloudinary & Website!`)
        // Update local state
        if (data) {
          const newHigh = data.high_priority_items.filter((i) => i.public_id !== item.public_id)
          const newMed = data.medium_priority_items.filter((i) => i.public_id !== item.public_id)
          setData({
            ...data,
            high_priority_count: newHigh.length,
            medium_priority_count: newMed.length,
            high_priority_items: newHigh,
            medium_priority_items: newMed,
          })
        }
        setSelectedIds((prev) => {
          const next = new Set(prev)
          next.delete(item.public_id)
          return next
        })
      } else {
        showToast(json.error || 'Failed to delete image', 'error')
      }
    } catch (err: any) {
      showToast(err.message || 'Error deleting image', 'error')
    } finally {
      setDeletingId(null)
      setConfirmModal({ isOpen: false, item: null })
    }
  }

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return
    if (!confirm(`Are you sure you want to delete ${selectedIds.size} selected images from Cloudinary and the Website?`)) {
      return
    }

    setBulkDeleting(true)
    let successCount = 0

    const idsArray = Array.from(selectedIds)
    const allItems = [...(data?.high_priority_items || []), ...(data?.medium_priority_items || [])]

    for (const pid of idsArray) {
      const item = allItems.find((i) => i.public_id === pid)
      if (item) {
        try {
          const res = await fetch('/api/admin/watermarks', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ public_id: item.public_id, url: item.url }),
          })
          const json = await res.json()
          if (json.success) successCount++
        } catch {}
      }
    }

    showToast(`Bulk delete complete: ${successCount} images removed.`)
    setSelectedIds(new Set())
    setBulkDeleting(false)
    fetchScanResults()
  }

  const toggleSelect = (public_id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(public_id)) next.delete(public_id)
      else next.add(public_id)
      return next
    })
  }

  // Filter items based on activeTab and searchQuery
  const currentItems = React.useMemo(() => {
    if (!data) return []
    let list: WatermarkItem[] = []
    if (activeTab === 'high') list = data.high_priority_items
    else if (activeTab === 'medium') list = data.medium_priority_items
    else list = [...data.high_priority_items, ...data.medium_priority_items]

    if (!searchQuery.trim()) return list

    const q = searchQuery.toLowerCase()
    return list.filter(
      (item) =>
        item.public_id.toLowerCase().includes(q) ||
        (item.matched_keywords && item.matched_keywords.some((k) => k.toLowerCase().includes(q))) ||
        (item.other_phones && item.other_phones.some((p) => p.includes(q))) ||
        (item.raw_text && item.raw_text.toLowerCase().includes(q))
    )
  }, [data, activeTab, searchQuery])

  const toggleSelectAll = () => {
    if (selectedIds.size === currentItems.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(currentItems.map((i) => i.public_id)))
    }
  }

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-md shadow-xl text-xs font-mono font-bold flex items-center gap-3 animate-fade-in ${
            toast.type === 'success' ? 'bg-[#1C1917] text-emerald-400 border border-emerald-500/30' : 'bg-rose-950 text-rose-300 border border-rose-600/40'
          }`}
        >
          {toast.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E4DDCF] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[#A63D2F]" />
            <h1 className="font-serif text-2xl font-bold text-[#2B2723]">Watermark & Text Scanner</h1>
          </div>
          <p className="text-xs text-[#2B2723]/60 font-sans mt-1">
            Audit and remove images containing competitor logos, watermarks, price tags, or third-party contact numbers.
          </p>
        </div>

        <button
          onClick={fetchScanResults}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-[#2B2723] text-[#E4DDCF] hover:bg-[#1C1917] rounded-sm text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Results</span>
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-sm shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-rose-800 tracking-wider">🚨 High Priority</span>
            <ShieldAlert className="w-5 h-5 text-rose-600" />
          </div>
          <p className="font-serif text-3xl font-bold text-rose-950 mt-2">{data?.high_priority_count || 0}</p>
          <p className="text-[11px] text-rose-700/80 mt-1">Images with company logos, watermarks, phone numbers, or URLs</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-sm shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-amber-800 tracking-wider">⚠️ Medium Priority</span>
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <p className="font-serif text-3xl font-bold text-amber-950 mt-2">{data?.medium_priority_count || 0}</p>
          <p className="text-[11px] text-amber-700/80 mt-1">Images with detected readable text / product stickers</p>
        </div>

        <div className="bg-[#2B2723] text-white p-5 rounded-sm shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-[#B8924A] tracking-wider"> Total Cloudinary Scanned</span>
            <FileText className="w-5 h-5 text-[#B8924A]" />
          </div>
          <p className="font-serif text-3xl font-bold text-white mt-2">{data?.total_scanned || 0}</p>
          <p className="text-[11px] text-[#E4DDCF]/70 mt-1">All images checked across Cloudinary account</p>
        </div>
      </div>

      {/* Controls Bar: Tabs & Search */}
      <div className="bg-white border border-[#E4DDCF] p-4 rounded-sm shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('high')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2 ${
                activeTab === 'high' ? 'bg-rose-900 text-white shadow-sm' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>🚨 High Priority</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20">{data?.high_priority_count || 0}</span>
            </button>

            <button
              onClick={() => setActiveTab('medium')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2 ${
                activeTab === 'medium' ? 'bg-amber-800 text-white shadow-sm' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>⚠️ Medium Priority</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20">{data?.medium_priority_count || 0}</span>
            </button>

            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2 ${
                activeTab === 'all' ? 'bg-[#2B2723] text-white shadow-sm' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>📋 All Flagged</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20">
                {(data?.high_priority_count || 0) + (data?.medium_priority_count || 0)}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ID, phone, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#F7F4EF] border border-[#E4DDCF] rounded-sm text-xs font-mono text-stone-900 focus:outline-none focus:border-[#A63D2F]"
            />
          </div>
        </div>

        {/* Bulk Selection Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-mono">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-stone-700">
              <input
                type="checkbox"
                checked={currentItems.length > 0 && selectedIds.size === currentItems.length}
                onChange={toggleSelectAll}
                className="rounded text-[#A63D2F] focus:ring-0 cursor-pointer w-4 h-4"
              />
              <span className="font-semibold uppercase tracking-wider">Select All ({currentItems.length})</span>
            </label>
            {selectedIds.size > 0 && (
              <span className="text-[#A63D2F] font-bold">({selectedIds.size} selected)</span>
            )}
          </div>

          {selectedIds.size > 0 && (
            <button
              onClick={handleBulkDelete}
              disabled={bulkDeleting}
              className="flex items-center gap-2 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-sm text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-sm"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{bulkDeleting ? 'Deleting...' : `Delete Selected (${selectedIds.size})`}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid */}
      {loading ? (
        <div className="bg-white border border-[#E4DDCF] p-12 text-center rounded-sm">
          <RefreshCw className="w-8 h-8 text-[#A63D2F] animate-spin mx-auto mb-3" />
          <p className="font-serif text-base text-[#2B2723] font-bold">Loading Cloudinary OCR Scan Data...</p>
        </div>
      ) : error ? (
        <div className="bg-rose-50 border border-rose-200 p-8 text-center rounded-sm text-rose-900">
          <AlertTriangle className="w-8 h-8 text-rose-600 mx-auto mb-3" />
          <p className="font-serif text-base font-bold">{error}</p>
        </div>
      ) : currentItems.length === 0 ? (
        <div className="bg-white border border-[#E4DDCF] p-12 text-center rounded-sm text-stone-500">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
          <p className="font-serif text-base font-bold text-stone-800">No Flagged Images Found</p>
          <p className="text-xs font-mono text-stone-500 mt-1">All images in this filter category are clean.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => {
            const isSelected = selectedIds.has(item.public_id)
            const isDeleting = deletingId === item.public_id

            return (
              <div
                key={item.public_id}
                className={`bg-white border rounded-sm overflow-hidden shadow-sm transition-all flex flex-col justify-between ${
                  isSelected ? 'border-[#A63D2F] ring-2 ring-[#A63D2F]/20' : 'border-[#E4DDCF] hover:border-stone-400'
                }`}
              >
                <div>
                  {/* Top Image Box */}
                  <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden group">
                    <Image
                      src={item.url}
                      alt={item.public_id}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Checkbox overlay */}
                    <div className="absolute top-3 left-3 z-10">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(item.public_id)}
                        className="w-5 h-5 rounded text-[#A63D2F] focus:ring-0 cursor-pointer shadow"
                      />
                    </div>

                    {/* Quick view button */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-10 p-1.5 bg-black/60 hover:bg-black text-white rounded-sm text-xs backdrop-blur-sm transition-colors"
                      title="View Full Resolution"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-3">
                    {/* Public ID & Folder */}
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#B8924A] tracking-wider block font-semibold">
                        {item.public_id.split('/')[1] || 'Cloudinary'}
                      </span>
                      <h3 className="font-mono text-xs font-bold text-stone-900 truncate" title={item.public_id}>
                        {item.public_id.split('/').pop()}
                      </h3>
                    </div>

                    {/* Detected Reason Badges */}
                    <div className="flex flex-wrap gap-1">
                      {item.matched_keywords &&
                        item.matched_keywords.map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-mono font-bold rounded-sm">
                            Keyword: {kw}
                          </span>
                        ))}
                      {item.other_phones &&
                        item.other_phones.map((p, i) => (
                          <span key={i} className="px-2 py-0.5 bg-purple-100 text-purple-800 border border-purple-200 text-[10px] font-mono font-bold rounded-sm">
                            Phone: {p}
                          </span>
                        ))}
                      {item.urls &&
                        item.urls.map((u, i) => (
                          <span key={i} className="px-2 py-0.5 bg-blue-100 text-blue-800 border border-blue-200 text-[10px] font-mono font-bold rounded-sm">
                            URL: {u}
                          </span>
                        ))}
                    </div>

                    {/* Detected Text Snippet */}
                    {item.raw_text && (
                      <div className="bg-[#F7F4EF] p-2.5 rounded-sm border border-[#E4DDCF]">
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-1">
                          <span className="font-bold uppercase tracking-wider">OCR Text Detected</span>
                          <button
                            onClick={() => setPreviewTextModal(item)}
                            className="text-[#A63D2F] hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Eye className="w-3 h-3" />
                            <span>View All</span>
                          </button>
                        </div>
                        <p className="text-[11px] font-mono text-stone-800 line-clamp-2 leading-relaxed italic">
                          &quot;{item.raw_text.replace(/\n/g, ' ')}&quot;
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 pt-0 border-t border-stone-100 flex items-center justify-between gap-2 mt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-xs font-mono font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-sm transition-colors"
                  >
                    View Original
                  </a>
                  <button
                    onClick={() => setConfirmModal({ isOpen: true, item })}
                    disabled={isDeleting}
                    className="flex-1 py-2 text-center text-xs font-mono font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{isDeleting ? 'Deleting...' : 'Delete Image'}</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal.isOpen && confirmModal.item && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white border border-[#E4DDCF] p-6 max-w-md w-full rounded-sm shadow-2xl space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-100 text-rose-700 rounded-full shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2B2723]">Delete Image Permanent</h3>
                <p className="text-xs text-stone-600 font-sans mt-1">
                  Are you sure you want to delete this image from Cloudinary and all live website catalog listings?
                </p>
              </div>
            </div>

            <div className="bg-stone-100 p-3 rounded-sm text-xs font-mono space-y-1">
              <p className="font-bold text-stone-900 truncate">ID: {confirmModal.item.public_id}</p>
              <p className="text-stone-500 text-[11px] truncate">URL: {confirmModal.item.url}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setConfirmModal({ isOpen: false, item: null })}
                className="px-4 py-2 text-xs font-mono uppercase font-bold text-stone-700 hover:bg-stone-100 rounded-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteImage(confirmModal.item!)}
                disabled={deletingId === confirmModal.item.public_id}
                className="px-4 py-2 text-xs font-mono uppercase font-bold bg-rose-700 hover:bg-rose-800 text-white rounded-sm shadow"
              >
                {deletingId === confirmModal.item.public_id ? 'Deleting...' : 'Yes, Delete Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Text Preview Modal */}
      {previewTextModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white border border-[#E4DDCF] p-6 max-w-lg w-full rounded-sm shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-base font-bold text-[#2B2723]">Full OCR Raw Text</h3>
              <button onClick={() => setPreviewTextModal(null)} className="text-stone-400 hover:text-stone-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#F7F4EF] p-4 rounded-sm text-xs font-mono max-h-60 overflow-y-auto whitespace-pre-wrap border border-[#E4DDCF]">
              {previewTextModal.raw_text}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewTextModal(null)}
                className="px-4 py-2 text-xs font-mono uppercase font-bold bg-[#2B2723] text-white rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
