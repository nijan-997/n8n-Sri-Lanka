"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const consequences = [
  { icon: "⚠️", label: "Warning", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { icon: "🗑️", label: "Removal of content", color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
  { icon: "🔇", label: "Temporary mute", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  { icon: "🚫", label: "Permanent removal", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
];

export function ModerationSection() {
  return (
    <section className="section-spacing px-4 sm:px-6" id="moderation">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-14"
        >
          <div className="badge-pill badge-official inline-flex mb-6">
            🛡️ Community Moderation
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] mb-5 leading-tight">
            Active Moderation
          </h2>
          <p className="text-[17px] text-[#666666] max-w-xl mx-auto leading-relaxed">
            To maintain a safe, welcoming, and high-quality community, moderators actively enforce these guidelines.
          </p>
        </motion.div>

        {/* Violation Consequences */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10"
        >
          <p className="text-[15px] text-[#999999] text-center uppercase tracking-widest font-semibold mb-6">
            Violation may result in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {consequences.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -3, scale: 1.04 }}
                className={`consequence-pill ${item.bg} border ${item.border} ${item.color} font-semibold cursor-default`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          whileHover={{ y: -2 }}
          className="callout-card relative overflow-hidden"
        >
          {/* Background orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 orb orb-primary opacity-10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 orb orb-purple opacity-8 translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#FF6D5A]" />
              </div>
            </div>
            <div>
              <p className="text-[19px] sm:text-[21px] font-semibold text-[#111111] leading-relaxed tracking-[-0.01em]">
                "The moderation team will always act in the best interest of maintaining a safe, respectful, and valuable community for everyone."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-lg">🇱🇰</span>
                <span className="text-[14px] font-semibold text-[#FF6D5A]">n8n Sri Lanka</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
