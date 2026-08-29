'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Product, Category } from '@/lib/data/mock-data'
import { getAllAdminProducts, getAllAdminCategories, saveProduct, deleteProduct } from '@/lib/supabase/service'
import { Plus, Edit2, Trash2, Package, Upload, Save, X, Eye, EyeOff, Star } from 'lucide-react'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null)
  const [productImages, setProductImages] = useState<{ image_url: string; is_cover: boolean }[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const loadData = async () => {
    setLoading(true)
    const [prodsData, catsData] = await Promise.all([getAllAdminProducts(), getAllAdminCategories()])
    setProducts(prodsData)
    setCategories(catsData)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleOpenAdd = () => {
    setEditingProduct({
      name: '',
      slug: '',
      category_id: categories[0]?.id || '',
      description: '',
      material: 'Pure White Makrana Marble',
      size: '24" Height',
      finish: 'Natural Diamond Polish',
      work_type: 'Hand Relief Carving',
      price: '₹45,000',
      is_featured: true,
      is_published: true,
    })
    setProductImages([
      { image_url: 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop', is_cover: true },
    ])
    setIsModalOpen(true)
  }

  const handleOpenEdit = (product: Product) => {
    setEditingProduct({ ...product })
    setProductImages(
      product.images.length > 0
        ? product.images.map((img) => ({ image_url: img.image_url, is_cover: img.is_cover }))
        : [{ image_url: 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop', is_cover: true }]
    )
    setIsModalOpen(true)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.url) {
        setProductImages((prev) => [...prev, { image_url: data.url, is_cover: prev.length === 0 }])
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (err: any) {
      alert('Upload failed: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProduct?.name || !editingProduct?.category_id) return

    setSaveLoading(true)
    setMessage(null)

    const slug = editingProduct.slug || editingProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const payload = { ...editingProduct, slug }

    const res = await saveProduct(payload, productImages)
    setSaveLoading(false)

    if (res.success) {
      setMessage({ type: 'success', text: 'Product saved successfully to Supabase!' })
      setIsModalOpen(false)
      loadData()
    } else {
      setMessage({ type: 'error', text: res.error || 'Failed to save product.' })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    const res = await deleteProduct(id)
    if (res.success) {
      loadData()
    } else {
      alert(res.error || 'Failed to delete product')
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4DDCF] pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#2B2723] flex items-center gap-2">
            <Package className="w-7 h-7 text-[#A63D2F]" /> Product Management
          </h1>
          <p className="text-xs text-[#2B2723]/60 font-mono mt-1">
            Manage product catalog, prices, upload images to Cloudinary, and publish to Supabase.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4 text-[#B8924A]" /> Add New Product
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-sm text-xs font-mono ${
            message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-sm border border-[#E4DDCF] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs font-mono text-[#2B2723]/60">Loading live products...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#2B2723] text-white font-mono uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Image</th>
                  <th className="py-3.5 px-4">Product Name</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Material & Size</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DDCF]">
                {products.map((prod) => {
                  const cover = prod.images.find((i) => i.is_cover)?.image_url || prod.images[0]?.image_url
                  return (
                    <tr key={prod.id} className="hover:bg-[#F7F4EF]/50 transition-colors">
                      <td className="py-3 px-4">
                        {cover ? (
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden border border-[#E4DDCF]">
                            <Image src={cover} alt={prod.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-[#E4DDCF]/40 rounded-sm border border-[#E4DDCF]" />
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-[#2B2723] flex items-center gap-1.5">
                          {prod.name}
                          {prod.is_featured && (
                            <span title="Featured Product">
                              <Star className="w-3.5 h-3.5 text-[#B8924A] fill-[#B8924A]" />
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-[#2B2723]/60">{prod.slug}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold text-[#A63D2F]">{prod.category_name}</td>
                      <td className="py-3 px-4 font-mono font-bold text-[#A63D2F]">
                        {prod.price || 'Price on Request'}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-mono text-[11px] text-[#2B2723]">{prod.material}</div>
                        <div className="font-mono text-[10px] text-[#2B2723]/60">{prod.size}</div>
                      </td>
                      <td className="py-3 px-4">
                        {prod.is_published !== false ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-mono text-[10px]">
                            <Eye className="w-3 h-3" /> Live
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-stone-500 bg-stone-100 px-2 py-0.5 rounded-sm font-mono text-[10px]">
                            <EyeOff className="w-3 h-3" /> Draft
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(prod)}
                            className="p-1.5 bg-[#E4DDCF]/50 hover:bg-[#E4DDCF] text-[#2B2723] rounded-sm transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(prod.id)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-sm transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-sm shadow-xl border border-[#B8924A]/40 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#E4DDCF] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#2B2723]">
                {editingProduct.id ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    placeholder="e.g. Makrana Marble Ganesha Idol"
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Category *
                  </label>
                  <select
                    value={editingProduct.category_id || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category_id: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#A63D2F] mb-1">
                    Price (INR / Quote) *
                  </label>
                  <input
                    type="text"
                    value={editingProduct.price || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                    placeholder="e.g. ₹45,000"
                    className="w-full px-3 py-2 rounded-sm border border-[#A63D2F]/40 font-mono font-bold text-[#A63D2F] text-xs focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Material
                  </label>
                  <input
                    type="text"
                    value={editingProduct.material || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, material: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-[#E4DDCF] text-xs focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Dimensions / Size
                  </label>
                  <input
                    type="text"
                    value={editingProduct.size || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, size: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-[#E4DDCF] text-xs focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Finish
                  </label>
                  <input
                    type="text"
                    value={editingProduct.finish || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, finish: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-[#E4DDCF] text-xs focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Workmanship
                  </label>
                  <input
                    type="text"
                    value={editingProduct.work_type || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, work_type: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-[#E4DDCF] text-xs focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingProduct.description || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  placeholder="Detailed description of marble carving..."
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] resize-none"
                />
              </div>

              {/* Cloudinary Live Image Upload Section */}
              <div className="space-y-3 pt-2 border-t border-[#E4DDCF]">
                <div className="flex items-center justify-between">
                  <label className="font-mono font-bold uppercase tracking-wider text-[#2B2723]">
                    Product Photography (Cloudinary Direct Stream)
                  </label>
                  <label className="cursor-pointer bg-[#2B2723] hover:bg-stone-900 text-white px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-[#B8924A]" /> {uploading ? 'Uploading...' : 'Upload Image'}
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, i) => (
                    <div key={i} className="relative group h-24 rounded-sm overflow-hidden border border-[#E4DDCF] bg-[#F7F4EF]">
                      <Image src={img.image_url} alt="Product" fill className="object-cover" />
                      <button
                        type="button"
                        onClick={() => setProductImages(productImages.filter((_, idx) => idx !== i))}
                        className="absolute top-1 right-1 p-1 bg-rose-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove image"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 pt-3 border-t border-[#E4DDCF]">
                <label className="flex items-center gap-2 font-mono font-bold text-[#2B2723]">
                  <input
                    type="checkbox"
                    checked={editingProduct.is_featured !== false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, is_featured: e.target.checked })}
                    className="w-4 h-4 text-[#A63D2F] rounded-sm"
                  />
                  Featured on Home Page
                </label>

                <label className="flex items-center gap-2 font-mono font-bold text-[#2B2723]">
                  <input
                    type="checkbox"
                    checked={editingProduct.is_published !== false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, is_published: e.target.checked })}
                    className="w-4 h-4 text-[#A63D2F] rounded-sm"
                  />
                  Publish Live
                </label>
              </div>

              <div className="pt-4 border-t border-[#E4DDCF] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-sm border border-[#E4DDCF] text-[#2B2723] font-mono text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveLoading}
                  className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                >
                  <Save className="w-3.5 h-3.5 text-[#B8924A]" /> {saveLoading ? 'Saving...' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
