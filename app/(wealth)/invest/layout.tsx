import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the Smart Investing page
export const metadata: Metadata = {
  title: "Perficio Investments | Smart Fund Advisory & Planning",
  description:
    "Invest in top-performing mutual funds with Perficio. Zero commission, live portfolio tracking, goal-based planning, and AI-powered insights.",
  keywords: [
    "Perficio Investments", // Primary keyword
    "Perficio Financial Planning",
    "Smart Investment India",
    "Mutual Fund Investment India",
    "Zero Commission Mutual Funds",
    "AI-Powered Investment Advisory",
    "Goal-Based Financial Planning",
    "Alternate Investment Funds India", // Matches "AIF"
    "Portfolio Management Services India", // Matches "PMS"
    "Global Investment Advisory India",
    "NRI Investment Planning India",
    "Succession Planning India",
    "Estate Planning India",
    "Startup Investment Advisory",
    "Angel Investment India",
    "Wealth Management India",
    "Financial Advisor Perficio",
    "Perficios Investments", // Including the common misspelling
    "Perficios Financial Planning" // Misspelling + related service
  ],
  metadataBase: new URL("https://www.perficios.com"),
  openGraph: {
    title: "Perficio Investments | Smart Fund Advisory & Planning",
    description:
      "Perficio empowers investors with AI-driven insights, goal-based mutual fund portfolios, and commission-free investing across 2500+ funds.",
    url: "https://www.perficio.com/invest",
    siteName: "Perficio Advisory",
    type: "website",
    locale: "en_IN",
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
