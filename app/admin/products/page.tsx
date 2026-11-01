'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Product, Category } from '@/lib/data/mock-data'
import { Plus, Edit2, Trash2, Package, Save, X, Eye, EyeOff, Star, FolderPlus, Filter } from 'lucide-react'
import { ImagePicker } from '@/components/ui/ImagePicker'

export default function AdminProductsPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all')

  // Product modal states
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null)
  const [productImages, setProductImages] = useState<{ image_url: string; is_cover: boolean }[]>([])
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)

  // Quick Add Category Modal states directly in Products Section
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [newCatName, setNewCatName] = useState('')
  const [newCatBanner, setNewCatBanner] = useState('')
  const [catSaveLoading, setCatSaveLoading] = useState(false)

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const loadData = async () => {
    setLoading(true)
    try {
      const [prodsRes, catsRes] = await Promise.all([
        fetch('/api/admin/products'),
        fetch('/api/admin/categories')
      ])
      const [prodsData, catsData] = await Promise.all([prodsRes.json(), catsRes.json()])
      setProducts(Array.isArray(prodsData) ? prodsData : [])
      setCategories(Array.isArray(catsData) ? catsData : [])
    } catch {
      setProducts([])
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleOpenAddProduct = () => {
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
      { image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/t3vcepigqrv49y6vq6sl.jpg', is_cover: true },
    ])
    setIsProductModalOpen(true)
  }

  const handleOpenEditProduct = (product: Product) => {
    setEditingProduct({ ...product })
    setProductImages(
      product.images.length > 0
        ? product.images.map((img) => ({ image_url: img.image_url, is_cover: img.is_cover }))
        : [{ image_url: 'https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/t3vcepigqrv49y6vq6sl.jpg', is_cover: true }]
    )
    setIsProductModalOpen(true)
  }

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProduct?.name || !editingProduct?.category_id) return

    setSaveLoading(true)
    setMessage(null)

    const slug = editingProduct.slug || editingProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const payload = { ...editingProduct, slug }

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: payload, images: productImages }),
      })
      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Product, photos & description saved live!' })
        setIsProductModalOpen(false)
        await loadData()
        router.refresh()
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to save product.' })
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Network error' })
    } finally {
      setSaveLoading(false)
    }
  }

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      const res = await fetch(`/api/admin/products?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        await loadData()
        router.refresh()
      } else {
        alert(data.error || 'Failed to delete product')
      }
    } catch (err: any) {
      alert(err.message)
    }
  }

  const handleAddImageFromPicker = (url: string) => {
    if (url && !productImages.some((i) => i.image_url === url)) {
      setProductImages((prev) => [...prev, { image_url: url, is_cover: prev.length === 0 }])
    }
  }

  // Handle Quick Category Creation directly inside Products section
  const handleQuickSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCatName.trim()) return

    setCatSaveLoading(true)
    const slug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newCatName.trim(),
          slug,
          banner_image_url: newCatBanner,
          is_visible: true,
          sort_order: categories.length + 1,
        }),
      })
      const data = await res.json()

      if (data.success && data.data) {
        setMessage({ type: 'success', text: `New Category "${newCatName}" created successfully!` })
        setIsCategoryModalOpen(false)
        setNewCatName('')
        setNewCatBanner('')
        await loadData()

        if (editingProduct) {
          setEditingProduct((prev) => (prev ? { ...prev, category_id: data.data.id } : prev))
        }
        router.refresh()
      } else {
        alert(data.error || 'Failed to create category')
      }
    } catch (err: any) {
      alert(err.message)
    } finally {
      setCatSaveLoading(false)
    }
  }

  // Filter products by selected category
  const filteredProducts = selectedCategoryFilter === 'all'
    ? products
    : products.filter((p) => p.category_id === selectedCategoryFilter || p.category_slug === selectedCategoryFilter)

  return (
    <div className="space-y-8">
      {/* Header with Dual Actions: Add Product & Add Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4DDCF] pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#2B2723] flex items-center gap-2">
            <Package className="w-7 h-7 text-[#A63D2F]" /> Product & Category Management
          </h1>
          <p className="text-xs text-[#2B2723]/60 font-mono mt-1">
            Manage catalog, create new categories directly, upload photos, and publish live.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Add Category Button */}
          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="bg-[#2B2723] hover:bg-[#1C1917] text-white px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all border border-[#B8924A]/40"
          >
            <FolderPlus className="w-4 h-4 text-[#B8924A]" /> + Add Category
          </button>

          {/* Add Product Button */}
          <button
            onClick={handleOpenAddProduct}
            className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <Plus className="w-4 h-4 text-[#B8924A]" /> Add New Product
          </button>
        </div>
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

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar bg-white p-3 rounded-sm border border-[#E4DDCF] shadow-2xs">
        <span className="text-xs font-mono font-bold text-[#2B2723] flex items-center gap-1 shrink-0 mr-2">
          <Filter className="w-3.5 h-3.5 text-[#A63D2F]" /> Filter Category:
        </span>
        <button
          onClick={() => setSelectedCategoryFilter('all')}
          className={`px-3 py-1.5 rounded-sm text-xs font-mono font-semibold shrink-0 transition-all ${
            selectedCategoryFilter === 'all'
              ? 'bg-[#A63D2F] text-white'
              : 'bg-[#F7F4EF] text-[#2B2723] hover:bg-[#E4DDCF]'
          }`}
        >
          All Products ({products.length})
        </button>

        {categories.map((c) => {
          const count = products.filter((p) => p.category_id === c.id || p.category_slug === c.slug).length
          const isSelected = selectedCategoryFilter === c.id
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCategoryFilter(c.id)}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-semibold shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#A63D2F] text-white'
                  : 'bg-[#F7F4EF] text-[#2B2723] hover:bg-[#E4DDCF]'
              }`}
            >
              {c.name} ({count})
            </button>
          )
        })}
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-sm border border-[#E4DDCF] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs font-mono text-[#2B2723]/60">Loading live products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-8 text-center text-xs font-mono text-[#2B2723]/60">
            No products found in this category. Click &ldquo;Add New Product&rdquo; above!
          </div>
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
                {filteredProducts.map((prod) => {
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
                            onClick={() => handleOpenEditProduct(prod)}
                            className="p-1.5 bg-[#E4DDCF]/50 hover:bg-[#E4DDCF] text-[#2B2723] rounded-sm transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
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

      {/* Quick Category Creation Modal */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-sm shadow-xl border border-[#B8924A]/40 space-y-5">
            <div className="flex items-center justify-between border-b border-[#E4DDCF] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#2B2723] flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-[#A63D2F]" /> Add New Category
              </h3>
              <button onClick={() => setIsCategoryModalOpen(false)} className="p-1 text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleQuickSaveCategory} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="e.g. Marble Tulsi Stand"
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                />
              </div>

              <div>
                <ImagePicker
                  value={newCatBanner}
                  onChange={(url) => setNewCatBanner(url)}
                  label="Category Banner Photo (Optional)"
                  placeholder="Upload device photo or pick from Cloudinary..."
                />
              </div>

              <div className="pt-3 border-t border-[#E4DDCF] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 rounded-sm border border-[#E4DDCF] text-[#2B2723] font-mono text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={catSaveLoading}
                  className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <Save className="w-3.5 h-3.5 text-[#B8924A]" /> {catSaveLoading ? 'Saving...' : 'Save Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit / Add Product Modal */}
      {isProductModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-sm shadow-xl border border-[#B8924A]/40 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#E4DDCF] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#2B2723]">
                {editingProduct.id ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button onClick={() => setIsProductModalOpen(false)} className="p-1 text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
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
                  <div className="flex items-center justify-between mb-1">
                    <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723]">
                      Category *
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCategoryModalOpen(true)}
                      className="text-[10px] font-mono text-[#A63D2F] font-bold hover:underline"
                    >
                      + New
                    </button>
                  </div>
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

              {/* Product Photos Manager with Dual Device + Gallery Selection */}
              <div className="space-y-3 pt-2 border-t border-[#E4DDCF]">
                <ImagePicker
                  value=""
                  onChange={handleAddImageFromPicker}
                  label="Add Image to Product Gallery"
                  placeholder="Choose device photo or Cloudinary gallery photo to add..."
                />

                <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] pt-2">
                  Attached Product Photos ({productImages.length})
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, i) => (
                    <div key={i} className="relative group h-24 rounded-sm overflow-hidden border border-[#E4DDCF] bg-[#F7F4EF]">
                      <Image src={img.image_url} alt="Product" fill className="object-cover" />
                      <button
                        type="button"
                        onClick={() => setProductImages(productImages.filter((_, idx) => idx !== i))}
                        className="absolute top-1 right-1 p-1 bg-rose-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                        title="Remove image"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      {img.is_cover && (
                        <span className="absolute bottom-1 left-1 bg-[#A63D2F] text-white text-[9px] font-mono px-1.5 py-0.5 rounded-xs font-bold">
                          Cover Photo
                        </span>
                      )}
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
                  onClick={() => setIsProductModalOpen(false)}
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
