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
    images.find((img) => img.is_cover)?.image_url || images[0]?.image_url || 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg'
  )

  return (
    <div className="space-y-4">
      {/* Main Image Container with Head-Crop Safety */}
      <div className="relative h-[420px] sm:h-[520px] w-full rounded-xl overflow-hidden bg-[#F2EFE9] shadow-2xs border border-[#E5E2DC]/60">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-top p-2 transition-all duration-500 hover:scale-102"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              onClick={() => setSelectedImage(img.image_url)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border shrink-0 transition-all ${
                selectedImage === img.image_url
                  ? 'border-[#1A1A1A] ring-2 ring-[#B08968]'
                  : 'border-[#E5E2DC] opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img.image_url} alt={`${title} thumbnail ${idx + 1}`} fill className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
