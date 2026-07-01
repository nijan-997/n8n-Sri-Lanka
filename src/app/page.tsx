import { HeroSection } from "@/components/sections/HeroSection";
import { GuidelinesSection } from "@/components/sections/GuidelinesSection";
import { ModerationSection } from "@/components/sections/ModerationSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Section divider */}
      <div className="divider mx-6 sm:mx-12" />

      {/* Community Guidelines */}
      <GuidelinesSection />

      {/* Section divider */}
      <div className="divider mx-6 sm:mx-12" />

      {/* Moderation */}
      <ModerationSection />

      {/* Section divider */}
      <div className="divider mx-6 sm:mx-12" />

      {/* Community Values */}
      <ValuesSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
