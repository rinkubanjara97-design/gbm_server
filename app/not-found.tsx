import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-[#E5DFD5] shadow-sm">
        <span className="text-6xl font-serif text-[#A63D2F] font-bold block mb-2">404</span>
        <h2 className="text-2xl font-serif text-[#2B2723] font-bold mb-2">
          Page Not Found
        </h2>
        <p className="text-[#6B635B] text-sm mb-6">
          The marble creation or category page you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A63D2F] text-white rounded-xl font-medium text-sm hover:bg-[#8B3226] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore Categories
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F7F4EF] text-[#2B2723] border border-[#E5DFD5] rounded-xl font-medium text-sm hover:bg-[#EDE8E0] transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
