'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Social Media Management',
    description: 'Optimize your social presence with consistent content, strategy, and growth plans.',
  },
  {
    title: 'Professional Video Editing',
    description: 'Transform raw footage into polished masterpieces with creative editing and effects.',
  },
  {
    title: 'Script Writing',
    description: 'Unlock the power of storytelling with tailored scripts aligned to your brand.',
  },
  {
    title: 'Website Development',
    description: 'Elevate your brand with fast, mobile-first, and stunning website designs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 text-center bg-black">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-[#12091e] border border-[#9747ff] rounded-xl p-6 hover:shadow-lg transition flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#c1ff72]">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
            </div>
            <div className="mt-auto">
              <a
                href="#contact"
                className="inline-block mt-4 px-4 py-2 bg-[#9747ff] text-white rounded-full hover:bg-[#c1ff72] hover:text-black transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
