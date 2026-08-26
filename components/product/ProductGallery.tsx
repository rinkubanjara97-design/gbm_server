'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductImage } from '@/lib/data/mock-data'

interface ProductGalleryProps {
  images: ProductImage[]
  title: string
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images.find((img) => img.is_cover)?.image_url || images[0]?.image_url || 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop'
  )

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl bg-stone-100 border border-stone-200">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          className="object-cover object-center transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              onClick={() => setSelectedImage(img.image_url)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                selectedImage === img.image_url
                  ? 'border-maroon-900 ring-2 ring-gold-400'
                  : 'border-stone-200 opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img.image_url} alt={`${title} thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
