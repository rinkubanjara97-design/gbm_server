'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Category } from '@/lib/data/mock-data'
import { Plus, Edit2, Trash2, FolderTree, Save, X, Eye, EyeOff } from 'lucide-react'
import { ImagePicker } from '@/components/ui/ImagePicker'

export default function AdminCategoriesPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCategory, setEditingCategory] = useState<Partial<Category> | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const loadCategories = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/categories')
      const data = await res.json()
      setCategories(Array.isArray(data) ? data : [])
    } catch {
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  const handleOpenAdd = () => {
    setEditingCategory({
      name: '',
      slug: '',
      description: '',
      banner_image_url: '',
      parent_id: null,
      sort_order: categories.length + 1,
      is_visible: true,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (category: Category) => {
    setEditingCategory({ ...category })
    setIsModalOpen(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingCategory?.name) return

    setSaveLoading(true)
    setMessage(null)

    const slug = editingCategory.slug || editingCategory.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const payload = { ...editingCategory, slug }

    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Category saved live successfully!' })
        setIsModalOpen(false)
        await loadCategories()
        router.refresh()
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to save category.' })
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Network error' })
    } finally {
      setSaveLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return
    try {
      const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        await loadCategories()
        router.refresh()
      } else {
        alert(data.error || 'Failed to delete category')
      }
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4DDCF] pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#2B2723] flex items-center gap-2">
            <FolderTree className="w-7 h-7 text-[#A63D2F]" /> Category Management
          </h1>
          <p className="text-xs text-[#2B2723]/60 font-mono mt-1">
            Manage product categories and sub-categories. Changes reflect live on site immediately.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-[#A63D2F] hover:bg-[#8C3125] text-white px-5 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4 text-[#B8924A]" /> Add New Category
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

      {/* Categories Table */}
      <div className="bg-white rounded-sm border border-[#E4DDCF] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs font-mono text-[#2B2723]/60">Loading live categories...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#2B2723] text-white font-mono uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Banner</th>
                  <th className="py-3.5 px-4">Category Name</th>
                  <th className="py-3.5 px-4">Slug</th>
                  <th className="py-3.5 px-4">Order</th>
                  <th className="py-3.5 px-4">Visibility</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DDCF]">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-[#F7F4EF]/50 transition-colors">
                    <td className="py-3 px-4">
                      {cat.banner_image_url ? (
                        <div className="relative w-12 h-10 rounded-sm overflow-hidden border border-[#E4DDCF]">
                          <Image src={cat.banner_image_url} alt={cat.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-10 bg-[#E4DDCF]/40 rounded-sm border border-[#E4DDCF]" />
                      )}
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#2B2723]">{cat.name}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-[#2B2723]/70">{cat.slug}</td>
                    <td className="py-3 px-4 font-mono text-center">{cat.sort_order || 1}</td>
                    <td className="py-3 px-4">
                      {cat.is_visible !== false ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-mono text-[10px]">
                          <Eye className="w-3 h-3" /> Visible
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-stone-500 bg-stone-100 px-2 py-0.5 rounded-sm font-mono text-[10px]">
                          <EyeOff className="w-3 h-3" /> Hidden
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(cat)}
                          className="p-1.5 bg-[#E4DDCF]/50 hover:bg-[#E4DDCF] text-[#2B2723] rounded-sm transition-colors"
                          title="Edit Category"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-sm transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && editingCategory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-sm shadow-xl border border-[#B8924A]/40 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E4DDCF] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#2B2723]">
                {editingCategory.id ? 'Edit Category' : 'Create New Category'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingCategory.name || ''}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  placeholder="e.g. Marble Temples"
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                />
              </div>

              <div>
                <ImagePicker
                  value={editingCategory.banner_image_url || ''}
                  onChange={(url) => setEditingCategory({ ...editingCategory, banner_image_url: url })}
                  label="Category Banner Photo"
                  placeholder="Choose device photo or Cloudinary gallery photo..."
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingCategory.description || ''}
                  onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                  placeholder="Brief description of the category..."
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F] resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#2B2723] mb-1">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={editingCategory.sort_order || 1}
                    onChange={(e) => setEditingCategory({ ...editingCategory, sort_order: parseInt(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#E4DDCF] text-sm focus:outline-none focus:ring-1 focus:ring-[#A63D2F]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="is_visible"
                    checked={editingCategory.is_visible !== false}
                    onChange={(e) => setEditingCategory({ ...editingCategory, is_visible: e.target.checked })}
                    className="w-4 h-4 text-[#A63D2F] rounded-sm"
                  />
                  <label htmlFor="is_visible" className="font-mono font-bold text-[#2B2723]">
                    Visible on Site
                  </label>
                </div>
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
                  <Save className="w-3.5 h-3.5 text-[#B8924A]" /> {saveLoading ? 'Saving...' : 'Save Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
