import { Instagram, Youtube, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#12091e] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo or Agency Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-white">BIG TV ART</h2>
          <p className="text-sm text-gray-400">Creative Agency for Ads & Brands</p>
        </div>


        {/* Right: Socials */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/bigtvart" target="_blank" className="hover:text-[#c1ff72]">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/@bigtvart3" target="_blank" className="hover:text-[#c1ff72]">
            <Youtube />
          </a>
          <a href="mailto:bigtvart@gmail.com" className="hover:text-[#c1ff72]">
            <Mail />
          </a>
          <a href="https://wa.me/916262951515" target="_blank" className="hover:text-[#c1ff72]">
            <Phone />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} BIG TV ART. All rights reserved.
      </div>
    </footer>
  )
}
