'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/da086pdlp/image/upload/v1738347508/ytk4ue0la5b4y4o5ut9k.svg"
            alt="BIG TV ART Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <li><a href="/#hero" className="hover:text-[#c1ff72] transition">Home</a></li>
          <li><a href="/#services" className="hover:text-[#c1ff72] transition">Services</a></li>
          <li>
            <Link href="/about" className="hover:text-[#c1ff72] transition">
              About Us
            </Link>
          </li>
          <li><a href="/#contact" className="hover:text-[#c1ff72] transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            <li><a href="/#hero" className="hover:text-[#c1ff72] transition">Home</a></li>
            <li><a href="/#services" className="hover:text-[#c1ff72] transition">Services</a></li>
            <li>
              <Link href="/about" className="hover:text-[#c1ff72] transition">
                About Us
              </Link>
            </li>
            <li><a href="/#contact" className="hover:text-[#c1ff72] transition">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
