'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MOCK_CATEGORIES, Category } from '@/lib/data/mock-data'
import { Plus, Edit2, Trash2, CheckCircle, Eye, EyeOff, FolderTree } from 'lucide-react'

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES)
  const [showModal, setShowModal] = useState(false)
  const [editingCat, setEditingCat] = useState<Category | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    banner_image_url: '',
    parent_id: '',
  })

  const handleOpenAdd = () => {
    setEditingCat(null)
    setFormData({ name: '', slug: '', description: '', banner_image_url: '', parent_id: '' })
    setShowModal(true)
  }

  const handleEdit = (cat: Category) => {
    setEditingCat(cat)
    setFormData({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || '',
      banner_image_url: cat.banner_image_url || '',
      parent_id: cat.parent_id || '',
    })
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingCat) {
      setCategories(
        categories.map((c) =>
          c.id === editingCat.id
            ? { ...c, ...formData, parent_id: formData.parent_id || null }
            : c
        )
      )
    } else {
      const newCat: Category = {
        id: `cat-${Date.now()}`,
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-'),
        description: formData.description,
        banner_image_url: formData.banner_image_url || 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop',
        parent_id: formData.parent_id || null,
        is_visible: true,
      }
      setCategories([...categories, newCat])
    }
    setShowModal(false)
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Category Management</h1>
          <p className="text-stone-500 text-xs mt-1">
            Create, edit, and organize product categories and sub-category taxonomies.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-maroon-900 hover:bg-maroon-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-gold-400" /> Add New Category
        </button>
      </div>

      {/* Category List */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-[11px] font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                <th className="p-4">Category Name</th>
                <th className="p-4">Slug</th>
                <th className="p-4">Sub-Categories</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-stone-50/50">
                  <td className="p-4 flex items-center gap-3">
                    <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border">
                      {cat.banner_image_url && (
                        <Image src={cat.banner_image_url} alt={cat.name} fill className="object-cover" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 block">{cat.name}</span>
                      {cat.parent_id && <span className="text-[10px] text-stone-400">Sub-category</span>}
                    </div>
                  </td>
                  <td className="p-4 text-stone-600 font-mono">{cat.slug}</td>
                  <td className="p-4 text-stone-600">
                    {cat.children && cat.children.length > 0 ? (
                      <span className="bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                        {cat.children.length} Sub-items
                      </span>
                    ) : (
                      <span className="text-stone-400 text-[11px]">None</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold text-[10px] uppercase border border-emerald-200">
                      <Eye className="w-3 h-3" /> Visible
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="p-2 hover:bg-stone-100 text-stone-700 rounded-lg transition-colors"
                      title="Edit Category"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors"
                      title="Delete Category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Category Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-2xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {editingCat ? 'Edit Category' : 'Create New Category'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marble Temples"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Slug (URL Keyword)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="e.g. marble-temples"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Banner Image URL (Cloudinary / Unsplash)
                </label>
                <input
                  type="url"
                  value={formData.banner_image_url}
                  onChange={(e) => setFormData({ ...formData, banner_image_url: e.target.value })}
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of this collection..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-900"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
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
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
