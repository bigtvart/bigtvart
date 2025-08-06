'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; dx: number; dy: number }[] = []
    const numParticles = 100

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      })
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(151, 71, 255, 0.9)' // glowing purple
        ctx.shadowColor = 'rgba(151, 71, 255, 0.9)'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.closePath()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Particle Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Content (above particles) */}
      <div className="z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Are BIG TV ART
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Where Marketing meets Creativity. Elevate your brand with innovative social media marketing and captivating content. Watch your audience grow and engage like never before.
        </motion.p>
        <motion.a
          href="https://wa.me/916262951515"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-white transition"
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  )
}
