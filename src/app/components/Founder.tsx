'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Founder() {
  return (
    <section id="founder" className="py-20 px-6 bg-black text-center">
      <motion.h2
        className="text-4xl font-bold mb-10 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Founder
      </motion.h2>

      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="w-[250px] h-[320px] overflow-hidden rounded-2xl shadow-lg border border-purple-600">
          <Image
            src="https://res.cloudinary.com/da086pdlp/image/upload/v1738347515/dq4wo94yqr5q74tz8avl.png"
            alt="Anubhav Pandey"
            width={400}
            height={600}
            className="object-cover object-top w-full h-full scale-[1.25]"
          />
        </div>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="mb-4 font-semibold text-[#c1ff72] text-xl">
          Anubhav Pandey
        </p>
        <p>
          Anubhav Pandey, the visionary behind BIG TV ART, brings over 4 years of experience in social media management.
          His journey from modest beginnings to leading a successful agency showcases his resilience and innovation.
          Facing early setbacks, Anubhav used each challenge to refine his strategies, ultimately mastering the art of social media growth.
        </p>
      </motion.div>
    </section>
  )
}
