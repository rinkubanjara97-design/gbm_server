'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Upload, Image as ImageIcon, X, Search, Check, Loader2, Sparkles, FolderOpen } from 'lucide-react'

interface PhotoItem {
  url: string
  title?: string
  public_id?: string
  source: string
}

interface ImagePickerProps {
  value: string
  onChange: (url: string) => void
  label?: string
  placeholder?: string
  aspectRatioHint?: string
}

export function ImagePicker({
  value,
  onChange,
  label = 'Select Image',
  placeholder = 'https://res.cloudinary.com/... or upload from device',
  aspectRatioHint = 'Recommended: High resolution JPG/WebP',
}: ImagePickerProps) {
  const [uploading, setUploading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [photos, setPhotos] = useState<PhotoItem[]>([])
  const [loadingPhotos, setLoadingPhotos] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'cloudinary' | 'catalog'>('all')

  // Load Cloudinary + Catalog photos for modal gallery
  const fetchPhotos = async () => {
    setLoadingPhotos(true)
    try {
      const res = await fetch('/api/media')
      if (res.ok) {
        const data = await res.json()
        if (data.photos) {
          setPhotos(data.photos)
        }
      }
    } catch (err) {
      console.error('Failed to load photos:', err)
    } finally {
      setLoadingPhotos(false)
    }
  }

  const handleOpenGallery = () => {
    setIsModalOpen(true)
    fetchPhotos()
  }

  // Handle direct file upload from phone or computer device
  const handleDeviceFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.url) {
        onChange(data.url)
      } else {
        alert(data.error || 'Failed to upload photo')
      }
    } catch (err: any) {
      alert('Upload error: ' + err.message)
    } finally {
      setUploading(false)
      // Reset input value so user can upload same file again if desired
      e.target.value = ''
    }
  }

  const filteredPhotos = photos.filter((p) => {
    const matchesSearch =
      !searchQuery ||
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.url.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === 'cloudinary') return matchesSearch && p.source === 'cloudinary'
    if (activeTab === 'catalog') return matchesSearch && (p.source === 'catalog' || p.source === 'category')
    return matchesSearch
  })

  return (
    <div className="space-y-3">
      {label && (
        <div className="flex items-center justify-between">
          <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
            {label}
          </label>
          {aspectRatioHint && (
            <span className="text-[10px] text-[#888888] font-sans font-normal">
              {aspectRatioHint}
            </span>
          )}
        </div>
      )}

      {/* Primary Control Box */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-[#FAF8F5] p-3 rounded-lg border border-[#E5E2DC]">
        {/* Preview Thumbnail */}
        <div className="sm:col-span-3 flex items-center justify-center">
          <div className="relative w-full h-24 sm:h-20 rounded-md overflow-hidden border border-[#E5E2DC] bg-white flex items-center justify-center shadow-2xs">
            {value ? (
              <Image
                src={value}
                alt="Selected Preview"
                fill
                className="object-cover"
                sizes="120px"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#A09C94] space-y-1">
                <ImageIcon className="w-6 h-6" />
                <span className="text-[10px]">No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons & Input */}
        <div className="sm:col-span-9 space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            {/* Device Upload Button */}
            <label className={`cursor-pointer px-3.5 py-2 rounded-md text-xs font-sans font-semibold inline-flex items-center gap-1.5 transition-all shadow-2xs ${
              uploading
                ? 'bg-[#B08968]/50 text-white cursor-wait'
                : 'bg-[#1A1A1A] hover:bg-[#B08968] text-white'
            }`}>
              {uploading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Uploading Device Photo...
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5 text-[#B08968]" /> Choose from Device
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleDeviceFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>

            {/* Cloudinary Gallery Modal Button */}
            <button
              type="button"
              onClick={handleOpenGallery}
              className="px-3.5 py-2 rounded-md border border-[#B08968] bg-white hover:bg-[#F2EFE9] text-[#1A1A1A] text-xs font-sans font-semibold inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <FolderOpen className="w-3.5 h-3.5 text-[#B08968]" /> Pick from Cloudinary Gallery
            </button>
          </div>

          {/* URL Direct Edit Input */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-1.5 rounded-md border border-[#E5E2DC] text-[11px] font-mono focus:outline-none focus:border-[#1A1A1A] bg-white text-[#333333]"
          />
        </div>
      </div>

      {/* Cloudinary Media Gallery Picker Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full rounded-xl shadow-2xl border border-[#E5E2DC] flex flex-col max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E5E2DC] flex items-center justify-between bg-[#FAF8F5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#B08968]" /> Cloudinary & Atelier Media Library
                </h3>
                <p className="text-xs text-[#666666] font-sans font-light">
                  Click any photo below to set it instantly. No manual copy-pasting required!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Bar & Search */}
            <div className="p-4 border-b border-[#E5E2DC] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Tab Filters */}
              <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1 rounded-lg border border-[#E5E2DC]">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1 rounded-md text-xs font-sans font-medium transition-all ${
                    activeTab === 'all' ? 'bg-[#1A1A1A] text-white shadow-2xs' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  All Photos ({photos.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cloudinary')}
                  className={`px-3 py-1 rounded-md text-xs font-sans font-medium transition-all ${
                    activeTab === 'cloudinary' ? 'bg-[#1A1A1A] text-white shadow-2xs' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Cloudinary Uploads
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('catalog')}
                  className={`px-3 py-1 rounded-md text-xs font-sans font-medium transition-all ${
                    activeTab === 'catalog' ? 'bg-[#1A1A1A] text-white shadow-2xs' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Product Catalog Photos
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search photo name..."
                  className="pl-8 pr-3 py-1.5 rounded-md border border-[#E5E2DC] text-xs focus:outline-none focus:border-[#1A1A1A] bg-[#FAF8F5] w-full sm:w-48"
                />
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="p-5 overflow-y-auto flex-1 bg-[#FAF8F5]">
              {loadingPhotos ? (
                <div className="py-16 text-center space-y-2">
                  <Loader2 className="w-7 h-7 animate-spin text-[#B08968] mx-auto" />
                  <p className="text-xs font-sans text-[#666666]">Loading photos from Cloudinary...</p>
                </div>
              ) : filteredPhotos.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#888888]">
                  No matching photos found. Upload a photo from your device above!
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {filteredPhotos.map((photo, i) => {
                    const isSelected = photo.url === value
                    return (
                      <button
                        key={photo.url + i}
                        type="button"
                        onClick={() => {
                          onChange(photo.url)
                          setIsModalOpen(false)
                        }}
                        className={`group relative h-28 rounded-lg overflow-hidden border text-left transition-all ${
                          isSelected
                            ? 'ring-3 ring-[#B08968] border-[#B08968] shadow-md'
                            : 'border-[#E5E2DC] hover:border-[#1A1A1A] hover:shadow-sm'
                        }`}
                      >
                        <Image
                          src={photo.url}
                          alt={photo.title || 'Photo'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 bg-[#B08968] text-white p-1 rounded-full shadow-md">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1.5 text-[10px] text-white truncate font-sans">
                          {photo.title || 'Image'}
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E5E2DC] bg-white flex items-center justify-between">
              <span className="text-xs text-[#888888]">
                Total Available Photos: {photos.length}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md border border-[#E5E2DC] text-xs font-semibold text-[#1A1A1A] hover:bg-[#F2EFE9]"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
