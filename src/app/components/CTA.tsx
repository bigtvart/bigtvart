'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-6 text-center bg-[#12091e]">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready To Get Started?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-6 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Let’s collaborate and grow your brand through innovative content and strategic marketing.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-lime-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-white transition"
      >
        Contact Us
      </motion.a>
    </section>
  )
}
