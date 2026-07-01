import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Community Guidelines — n8n Sri Lanka",
  description:
    "Official Community Guidelines for the n8n Sri Lanka Community. A trusted space to learn, build, and grow with AI Automation and n8n.",
  keywords: [
    "n8n Sri Lanka",
    "AI Automation",
    "Community Guidelines",
    "Workflow Automation",
    "n8n Community",
    "Sri Lanka Tech Community",
  ],
  openGraph: {
    title: "Community Guidelines — n8n Sri Lanka",
    description:
      "Official Community Guidelines for the n8n Sri Lanka Community. Learn, build, and grow with AI Automation.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-[var(--font-dm-sans)] bg-white text-[#111111] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
