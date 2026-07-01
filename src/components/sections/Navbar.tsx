"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#EFEFEF] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/n8n sl logo.svg"
            alt="n8n Sri Lanka Community"
            className="h-8 w-auto"
          />
        </div>

        {/* Nav links — desktop */}
        <div className="hidden sm:flex items-center gap-1">
          {[
            { label: "Guidelines", href: "#guidelines" },
            { label: "Moderation", href: "#moderation" },
            { label: "Values", href: "#values" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[14px] font-medium text-[#666666] hover:text-[#111111] rounded-lg hover:bg-[#F5F5F5] transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Badge */}
        <div className="badge-pill badge-official text-[12px] py-1.5 px-3 hidden sm:flex">
          Official Community
        </div>
      </div>
    </motion.nav>
  );
}
