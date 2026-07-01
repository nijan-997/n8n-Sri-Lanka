"use client";

import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="relative bg-[#FAFAFA] border-t border-[#EFEFEF] overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6D5A] to-transparent opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        {/* Logo area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="text-2xl">🇱🇰</span>
            <span className="text-[20px] font-bold text-[#111111]">n8n Sri Lanka</span>
          </div>
          <div className="text-[15px] text-[#999999] mt-1">Official Community</div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {["Learn", "Build", "Share", "Grow 🇱🇰"].map((val, i) => (
            <div key={val} className="flex items-center gap-2 sm:gap-3">
              <span className="text-[15px] font-semibold text-[#666666]">{val}</span>
              {i < 3 && (
                <span className="w-1 h-1 rounded-full bg-[#EFEFEF] flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="divider mb-10"
        />

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[13px] text-[#AAAAAA] max-w-lg mx-auto leading-relaxed"
        >
          By participating in this community, you agree to follow these Community Guidelines and help us create a welcoming environment for everyone.
        </motion.p>

        {/* Bottom spacing */}
        <div className="mt-8 text-[12px] text-[#CCCCCC]">
          © {new Date().getFullYear()} n8n Sri Lanka Community · All rights reserved
        </div>
      </div>
    </footer>
  );
}
