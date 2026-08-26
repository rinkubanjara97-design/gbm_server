'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FolderTree, Package, Inbox, LogOut, ExternalLink } from 'lucide-react'
import { ChiselIcon } from '@/components/ui/ChiselIcons'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Categories', href: '/admin/categories', icon: FolderTree },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Enquiries Inbox', href: '/admin/enquiries', icon: Inbox },
  ]

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#2B2723] text-[#E4DDCF] p-6 flex flex-col justify-between shrink-0 border-r border-[#A63D2F]">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#A63D2F] border border-[#B8924A]/40 flex items-center justify-center">
              <ChiselIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-serif text-base font-bold text-white uppercase tracking-wider block">
                GBM Admin
              </span>
              <span className="text-[9px] text-[#B8924A] uppercase font-mono tracking-widest block">CMS Portal</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#A63D2F] text-white font-bold border-l-2 border-[#B8924A]'
                      : 'text-[#E4DDCF]/70 hover:bg-[#1C1917] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#B8924A]" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#E4DDCF]/15 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-xs font-mono text-[#E4DDCF]/70 hover:text-white px-3 py-2 rounded-sm bg-[#1C1917]"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B8924A]" />
          </Link>
          <Link
            href="/admin/login"
            className="flex items-center gap-2 text-xs font-mono text-rose-400 hover:text-rose-300 px-3 py-2 rounded-sm"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Body */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  )
}
