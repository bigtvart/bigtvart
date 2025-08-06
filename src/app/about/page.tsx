"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Static Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-20 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-[rgba(151,71,255,0.9)]"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto text-center"
        >
          At <strong>BIG TV ART</strong>, we specialize in helping brands grow through powerful organic strategies. From social media marketing, video editing, and graphic design to brand building and digital campaigns — we deliver real, measurable results. Our passionate team has worked with several clients, increasing their engagement and reach organically without paid ads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-[rgba(151,71,255,0.1)] border border-[rgba(151,71,255,0.5)] p-6 rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[rgba(151,71,255,0.9)]">Our Services</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Social Media Marketing</li>
            <li>Video Editing & Reels Creation</li>
            <li>Graphic Design (Posters, Logos, Branding)</li>
            <li>Instagram Growth Strategy</li>
            <li>Content Planning & Calendar</li>
            <li>Website Design & Landing Pages</li>
            <li>Organic Lead Generation</li>
            <li>Performance Analytics & Reports</li>
          </ul>
        </motion.div>
      </main>

      {/* Static Footer */}
      <Footer />
    </div>
  );
}
