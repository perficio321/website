import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Default metadata for all /direct-tax/* pages
export const metadata: Metadata = {
  title: "Direct Tax Services in India | Perficio Advisory",
  description:
    "Trusted experts in direct tax solutions—ITR filing, capital gains tax, TDS compliance, and litigation support. Simplify your taxation with Perficio Advisory.",
  keywords: [
    "Direct Tax Services India",
    "Income Tax Return Filing",
    "Capital Gains Advisory",
    "TDS Compliance",
    "Advance Tax Planning",
    "Income Tax Litigation",
    "Tax Advisory India",
    "Perficio",
    "Perficios",
    "Perficio Advisory",
    "Perficio Direct Tax",
    "ITR Filing Consultant",
    "Financial Consultants India",
    "Best Tax Consultants in India",
    "Tax Planning Experts",
    "DTAA",
    "Tax Dispute Resolution",
    "Income Tax Experts India"
  ],
  metadataBase: new URL("https://perficios.com"),
  openGraph: {
    title: "Direct Tax Experts | ITR, TDS, Tax Planning | Perficio Advisory",
    description:
      "Get expert tax advice from Perficio: income tax return filing, TDS, capital gains, advance tax planning, and dispute resolution.",
    url: "https://perficio.com/direct-tax",
    siteName: "Perficio Advisory",
    type: "website",
    locale: "en_IN",
  },
};

interface DirectTaxLayoutProps {
  children: ReactNode;
}

const DirectTaxLayout = ({ children }: DirectTaxLayoutProps) => {
  return (
    <div>
      {/* Optional: you can add a sidebar/header/footer here if needed */}
      {children}
    </div>
  );
};

export default DirectTaxLayout;
