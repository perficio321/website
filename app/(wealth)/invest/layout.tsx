import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the Smart Investing page
export const metadata: Metadata = {
  title: "Smart Mutual Fund Investing | Perificio Advisory",
  description:
    "Invest in top-performing mutual funds with Perificio. Zero commission, live portfolio tracking, goal-based planning, and AI-powered insights.",
  keywords: [
    "Smart Investing",
    "Mutual Funds",
    "Zero Commission Investment",
    "AI Portfolio",
    "Investment Goals",
    "Top Funds India",
    "Morningstar Mutual Funds",
    "CRISIL Verified Funds",
    "Investment Rebalancing",
    "Direct Mutual Fund Plans",
    "Financial Planning",
    "Perificio Advisory",
  ],
  metadataBase: new URL("https://www.perificio.com"),
  openGraph: {
    title: "Invest Smarter with Perificio | Mutual Fund Advisory",
    description:
      "Perificio empowers investors with AI-driven insights, goal-based mutual fund portfolios, and commission-free investing across 2500+ funds.",
    url: "https://www.perificio.com/invest",
    siteName: "Perificio Advisory",
    images: [
      {
        url: "https://www.perificio.com/og-images/invest.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Perificio Mutual Fund Investment",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in Mutual Funds the Smart Way | Perificio",
    description:
      "Join Perificio to access expert-curated portfolios, zero commission plans, and live insights to grow your wealth with confidence.",
    images: ["https://www.perificio.com/twitter-images/invest.png"], // Replace with your Twitter image
  },
};

interface InvestLayoutProps {
  children: ReactNode;
}

const InvestLayout = ({ children }: InvestLayoutProps) => {
  return (
    <div>
      {/* Optional: Include Navbar/Footer here if needed */}
      {children}
    </div>
  );
};

export default InvestLayout;
