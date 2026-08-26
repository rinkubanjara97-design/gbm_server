'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MOCK_PRODUCTS, MOCK_CATEGORIES, Product } from '@/lib/data/mock-data'
import { Plus, Edit2, Trash2, Star, UploadCloud, Loader2 } from 'lucide-react'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS)
  const [showModal, setShowModal] = useState(false)
  const [editingProd, setEditingProd] = useState<Product | null>(null)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category_id: 'cat-1',
    description: '',
    material: '',
    size: '',
    finish: '',
    work_type: '',
    image_url: '',
    is_featured: false,
  })

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const data = new FormData()
    data.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      })
      const result = await res.json()
      if (result.url) {
        setFormData((prev) => ({ ...prev, image_url: result.url }))
      } else {
        alert('Upload failed: ' + (result.error || 'Unknown error'))
      }
    } catch (err: any) {
      alert('Upload error: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  const handleOpenAdd = () => {
    setEditingProd(null)
    setFormData({
      name: '',
      slug: '',
      category_id: MOCK_CATEGORIES[0]?.id || 'cat-1',
      description: '',
      material: '',
      size: '',
      finish: '',
      work_type: '',
      image_url: '',
      is_featured: false,
    })
    setShowModal(true)
  }

  const handleEdit = (prod: Product) => {
    setEditingProd(prod)
    setFormData({
      name: prod.name,
      slug: prod.slug,
      category_id: prod.category_id,
      description: prod.description,
      material: prod.material,
      size: prod.size,
      finish: prod.finish,
      work_type: prod.work_type,
      image_url: prod.images[0]?.image_url || '',
      is_featured: prod.is_featured,
    })
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedCat = MOCK_CATEGORIES.find((c) => c.id === formData.category_id)

    if (editingProd) {
      setProducts(
        products.map((p) =>
          p.id === editingProd.id
            ? {
                ...p,
                ...formData,
                category_name: selectedCat?.name || p.category_name,
                category_slug: selectedCat?.slug || p.category_slug,
                images: formData.image_url
                  ? [{ id: `img-${Date.now()}`, product_id: p.id, image_url: formData.image_url, is_cover: true }]
                  : p.images,
              }
            : p
        )
      )
    } else {
      const newProd: Product = {
        id: `prod-${Date.now()}`,
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-'),
        category_id: formData.category_id,
        category_name: selectedCat?.name || 'God Statues',
        category_slug: selectedCat?.slug || 'god-statues',
        description: formData.description,
        material: formData.material || 'Makrana White Marble',
        size: formData.size || '24 Inches',
        finish: formData.finish || 'Mirror Gloss',
        work_type: formData.work_type || 'Hand Carving',
        is_featured: formData.is_featured,
        is_published: true,
        images: [
          {
            id: `img-${Date.now()}`,
            product_id: `prod-${Date.now()}`,
            image_url: formData.image_url || 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop',
            is_cover: true,
          },
        ],
      }
      setProducts([newProd, ...products])
    }
    setShowModal(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Product Management</h1>
          <p className="text-stone-500 text-xs mt-1">
            Manage your marble craft catalog, upload photos directly to Cloudinary, set attributes, and toggle featured status.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-maroon-900 hover:bg-maroon-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-gold-400" /> Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-[11px] font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Material & Size</th>
                <th className="p-4">Featured</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs">
              {products.map((prod) => {
                const cover = prod.images[0]?.image_url
                return (
                  <tr key={prod.id} className="hover:bg-stone-50/50">
                    <td className="p-4 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                        {cover && <Image src={cover} alt={prod.name} fill className="object-cover" />}
                      </div>
                      <div>
                        <span className="font-bold text-stone-900 block line-clamp-1">{prod.name}</span>
                        <span className="text-[10px] text-stone-500">{prod.work_type}</span>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-stone-700">{prod.category_name}</td>
                    <td className="p-4 text-stone-600">
                      <div className="font-semibold text-stone-900">{prod.material}</div>
                      <div className="text-[11px] text-stone-500">{prod.size}</div>
                    </td>
                    <td className="p-4">
                      {prod.is_featured ? (
                        <span className="inline-flex items-center gap-1 bg-gold-100 text-gold-800 px-2.5 py-1 rounded-full font-bold text-[10px] uppercase border border-gold-300">
                          <Star className="w-3 h-3 fill-current text-gold-600" /> Featured
                        </span>
                      ) : (
                        <span className="text-stone-400 text-[11px]">Standard</span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(prod)}
                        className="p-2 hover:bg-stone-100 text-stone-700 rounded-lg transition-colors"
                        title="Edit Product"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(prod.id)}
                        className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full p-8 rounded-3xl shadow-2xl space-y-6 my-8">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {editingProd ? 'Edit Product Details' : 'Add New Marble Product'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. White Makrana Marble Lord Ganesha Statue"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Assign Category *
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900 bg-white"
                  >
                    {MOCK_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Material
                  </label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    placeholder="e.g. Pure White Makrana Marble"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Dimensions / Size
                  </label>
                  <input
                    type="text"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    placeholder="e.g. 24 Inches Height"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Surface Finish
                  </label>
                  <input
                    type="text"
                    value={formData.finish}
                    onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                    placeholder="e.g. Mirror Polish & Gold Foil"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Work Type
                  </label>
                  <input
                    type="text"
                    value={formData.work_type}
                    onChange={(e) => setFormData({ ...formData, work_type: e.target.value })}
                    placeholder="e.g. 3D Hand Carving"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Product Photo (Cloudinary Direct Upload or URL)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://res.cloudinary.com/fl6gqfor/..."
                    className="flex-1 px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                  <label className="bg-maroon-900 hover:bg-maroon-800 text-white border border-gold-400/40 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm transition-colors">
                    {uploading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-gold-400" /> Uploading...
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 text-gold-400" /> Upload Image
                      </>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed description of craftsmanship, idol story, or mandir architecture..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-4 h-4 text-maroon-900 rounded focus:ring-maroon-900"
                />
                <label htmlFor="is_featured" className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  Highlight on Home Page as Featured Product
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-maroon-900 text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
