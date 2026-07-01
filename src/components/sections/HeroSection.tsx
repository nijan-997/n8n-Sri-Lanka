"use client";

import { motion } from "framer-motion";

const valueLabels = ["Learn", "Build", "Share", "Grow"];

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden w-full"
      id="hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-hero" />

      {/* Decorative orbs */}
      <div
        className="orb orb-primary absolute"
        style={{ width: 500, height: 500, top: "-15%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="orb orb-pink absolute"
        style={{ width: 350, height: 350, top: "10%", right: "-5%", opacity: 0.2 }}
      />
      <div
        className="orb orb-purple absolute"
        style={{ width: 300, height: 300, bottom: "5%", left: "-5%", opacity: 0.15 }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Official badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <span className="badge-pill badge-official">
            🇱🇰 Official n8n Sri Lanka Community
          </span>
        </motion.div>

        {/* Hero title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[48px] sm:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-7"
        >
          <span className="text-[#111111]">Community </span>
          <span className="gradient-text-primary">Guidelines</span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-[18px] sm:text-[20px] text-[#444444] leading-relaxed mb-3">
            Welcome to the official n8n Sri Lanka Community!
          </p>
          <p className="text-[16px] sm:text-[17px] text-[#666666] leading-relaxed">
            This community is led by the local Community Team as part of the official n8n Community Program, providing a trusted space to learn, build, and grow with AI Automation and n8n.
          </p>
        </motion.div>

        {/* Value badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {valueLabels.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + i * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="badge-pill badge-value cursor-default select-none"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[12px] text-[#CCCCCC] tracking-widest uppercase font-medium">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
