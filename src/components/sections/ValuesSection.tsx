"use client";

import { motion } from "framer-motion";

const values = [
  { emoji: "🤝", title: "Respect Everyone" },
  { emoji: "📚", title: "Learn Continuously" },
  { emoji: "🛠️", title: "Build Responsibly" },
  { emoji: "💡", title: "Share Knowledge" },
  { emoji: "🌍", title: "Use AI Ethically" },
  { emoji: "🚀", title: "Grow Together" },
];

const gradients = [
  "from-orange-50 to-red-50",
  "from-amber-50 to-orange-50",
  "from-rose-50 to-pink-50",
  "from-purple-50 to-violet-50",
  "from-blue-50 to-indigo-50",
  "from-green-50 to-emerald-50",
];

const iconBgs = [
  "bg-gradient-to-br from-orange-100 to-red-100",
  "bg-gradient-to-br from-amber-100 to-orange-100",
  "bg-gradient-to-br from-rose-100 to-pink-100",
  "bg-gradient-to-br from-purple-100 to-violet-100",
  "bg-gradient-to-br from-blue-100 to-indigo-100",
  "bg-gradient-to-br from-green-100 to-emerald-100",
];

export function ValueCard({ emoji, title, index }: { emoji: string; title: string; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`card-premium bg-gradient-to-br ${gradients[index % gradients.length]} p-6 sm:p-7 flex flex-col items-start gap-3 cursor-default group`}
    >
      {/* Icon — top left */}
      <div className={`icon-container w-14 h-14 text-[26px] ${iconBgs[index % iconBgs.length]} rounded-2xl flex items-center justify-center flex-shrink-0`}>
        {emoji}
      </div>
      {/* Title — below icon */}
      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#111111] leading-snug">{title}</h3>
    </motion.div>
  );
}

export function ValuesSection() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-[#FAFAFA]" id="values">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#111111] mb-4">
            Community Values
          </h2>
          <p className="text-[17px] text-[#666666] max-w-lg mx-auto leading-relaxed">
            The principles that guide every interaction in our community.
          </p>
        </motion.div>

        {/* Values Grid — 2 cols on mobile, 3 on sm+ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
        >
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
