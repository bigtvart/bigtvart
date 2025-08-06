'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s Talk on WhatsApp
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Got a project or idea? Chat with us directly on WhatsApp for a quick response.
        </motion.p>

        <motion.a
          href="https://wa.me/916262951515"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-lime-400 text-black font-bold py-3 px-6 rounded-full hover:bg-white transition mb-12"
        >
          Message Us on WhatsApp
        </motion.a>

        <motion.div
          className="bg-[#12091e] p-6 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="flex justify-center items-center gap-2 text-gray-300">
            <Mail className="w-5 h-5" /> bigtvart@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2 text-gray-300 mt-2">
            <Phone className="w-5 h-5" /> +91 6262951515
          </p>
        </motion.div>
      </div>
    </section>
  )
}
