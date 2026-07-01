"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GuidelineItem {
  emoji: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  warningNotes?: string[];
  tag?: string;
  isList?: boolean;
  items?: string[];
  subSections?: { intro?: string; items?: string[]; note?: string }[];
}

const guidelines: GuidelineItem[] = [
  {
    emoji: "🤝",
    title: "Be Respectful",
    tag: "Culture",
    description:
      "Treat every member with kindness and professionalism. Healthy discussions and different perspectives are encouraged.",
    warningNotes: [
      "Harassment, discrimination, hate speech, bullying, or personal attacks will not be tolerated.",
    ],
  },
  {
    emoji: "💬",
    title: "Stay On Topic",
    tag: "Relevance",
    description: "Keep discussions relevant to our community focus areas:",
    items: [
      "n8n",
      "AI & AI Agents",
      "Workflow Automation",
      "Business Automation",
      "APIs & Integrations",
      "Community Learning",
      "Community Events",
    ],
  },
  {
    emoji: "🚫",
    title: "No Spam or Excessive Self-Promotion",
    tag: "Quality",
    description:
      "This community is built for learning — not advertising. Please avoid:",
    items: [
      "Advertisements",
      "Referral or affiliate links",
      "Repeated promotions",
      "Irrelevant content",
      "Mass-forwarded messages",
    ],
    bulletPoints: [
      "You're welcome to share your projects, tutorials, articles, or resources when they genuinely provide value to the community and help others learn.",
    ],
  },
  {
    emoji: "📩",
    title: "No Unsolicited Direct Messages",
    tag: "Privacy",
    description:
      "Please do not privately message community members for:",
    items: ["Sales", "Recruitment", "Business opportunities", "Promotions"],
    warningNotes: [
      "Unless they have explicitly given permission. If you receive unwanted messages from another member, please report them to the moderation team.",
    ],
  },
  {
    emoji: "🛡️",
    title: "No Illegal or Unethical Activities",
    tag: "Safety",
    description: "The following are strictly prohibited:",
    items: [
      "Hacking",
      "Malware",
      "Phishing",
      "Scams",
      "Spam campaigns",
      "Credential theft",
      "Copyright infringement",
      "Any illegal or unethical use of AI or automation",
    ],
    bulletPoints: [
      "We are committed to promoting responsible and ethical use of automation.",
    ],
  },
  {
    emoji: "🌱",
    title: "Help Others Learn",
    tag: "Growth",
    description:
      "This community grows through collaboration.",
    items: [
      "Ask questions",
      "Share knowledge",
      "Support beginners",
      "Celebrate wins",
      "Help each other grow",
    ],
    bulletPoints: [
      "Together, we're building Sri Lanka's strongest AI Automation community.",
    ],
  },
  {
    emoji: "📢",
    title: "Official Announcements & Community Safety",
    tag: "Trust",
    description:
      "Official n8n Sri Lanka meetups, workshops, webinars, community programs, partnerships, and announcements will only be shared by the n8n Sri Lanka Community Team or through official n8n communication channels.",
    items: [
      "Fake event announcements",
      "Unofficial registration links",
      "Payment requests from unknown individuals",
      "Anyone falsely claiming to represent n8n or the n8n Sri Lanka Community",
    ],
    bulletPoints: [
      "Please be cautious of the above. If you're ever unsure whether something is official, please verify it with a community moderator before taking any action.",
    ],
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  Culture: { bg: "bg-amber-50", text: "text-amber-700" },
  Relevance: { bg: "bg-blue-50", text: "text-blue-700" },
  Quality: { bg: "bg-rose-50", text: "text-rose-700" },
  Privacy: { bg: "bg-purple-50", text: "text-purple-700" },
  Safety: { bg: "bg-red-50", text: "text-red-700" },
  Growth: { bg: "bg-green-50", text: "text-green-700" },
  Trust: { bg: "bg-orange-50", text: "text-orange-700" },
};

interface GuidelineCardProps {
  guideline: GuidelineItem;
  index: number;
}

function GuidelineCard({ guideline, index }: GuidelineCardProps) {
  const tag = guideline.tag ?? "";
  const tagStyle = tagColors[tag] ?? { bg: "bg-gray-50", text: "text-gray-700" };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="card-premium p-7 sm:p-8 flex flex-col gap-5 group relative overflow-hidden cursor-default"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-pink-50/0 group-hover:from-orange-50/40 group-hover:to-pink-50/20 transition-all duration-500 rounded-[24px]" />

      {/* Number indicator */}
      <div className="absolute top-6 right-7 text-[13px] font-semibold text-[#DDDDDD]">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 relative">
        <div className="icon-container bg-gradient-to-br from-[#FFF5F3] to-[#FFF0F5] border border-[#FFECEA] text-[22px] flex-shrink-0">
          {guideline.emoji}
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-[18px] sm:text-[19px] font-bold text-[#111111] leading-snug">
              {guideline.title}
            </h3>
            {guideline.tag && (
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tagStyle.bg} ${tagStyle.text}`}>
                {guideline.tag}
              </span>
            )}
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed">
            {guideline.description}
          </p>
        </div>
      </div>

      {/* Items list */}
      {guideline.items && guideline.items.length > 0 && (
        <ul className="guideline-list relative ml-2">
          {guideline.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {/* Warning notes — red callout */}
      {guideline.warningNotes && guideline.warningNotes.length > 0 && (
        <div className="relative rounded-xl bg-red-50 border border-red-200 px-4 py-3 flex items-start gap-2.5">
          <span className="text-base mt-0.5 flex-shrink-0">⚠️</span>
          <div>
            {guideline.warningNotes.map((note) => (
              <p key={note} className="text-[13px] sm:text-[14px] text-red-700 font-medium leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Bullet points (notes) */}
      {guideline.bulletPoints && guideline.bulletPoints.length > 0 && (
        <div className="relative rounded-xl bg-[#FAFAFA] border border-[#EFEFEF] px-4 py-3">
          {guideline.bulletPoints.map((point) => (
            <p key={point} className="text-[13px] sm:text-[14px] text-[#888888] leading-relaxed">
              {point}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function GuidelinesSection() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-[#FAFAFA]" id="guidelines">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-5"
        >
          <div className="badge-pill badge-official inline-flex mb-6">
            📋 Community Guidelines
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] mb-5 leading-tight">
            Our Community Standards
          </h2>
          <p className="text-[17px] text-[#666666] max-w-xl mx-auto leading-relaxed">
            To ensure this community remains welcoming, professional, and valuable for everyone, please follow these guidelines.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14"
        >
          {guidelines.map((guideline, index) => (
            <GuidelineCard key={guideline.title} guideline={guideline} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
