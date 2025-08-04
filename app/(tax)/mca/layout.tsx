import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for MCA page
export const metadata: Metadata = {
  title: "MCA Compliance & Corporate Services | Perficio Advisory",
  description:
    "Comprehensive MCA compliance services including company incorporation, LLP setup, ROC filings, strike-offs, conversions, and legal advisory by Perficio.",
  keywords: [
    "MCA Compliance",
    "ROC Filings",
    "Company Incorporation",
    "LLP Registration",
    "STK-2",
    "Strike Off",
    "Corporate Advisory",
    "MOA AOA Drafting",
    "DIN DSC",
    "Corporate Law Services India",
    "Company Law Compliance",
    "Perficio",
    "Perficios",
    "Perficio MCA",
    "MCA Services India",
    "Company Registration India",
    "Perficios MCA",
    "Perficio Advisory"
  ],
  metadataBase: new URL("https://www.perficios.com"),
  openGraph: {
    title: "MCA Services & Compliance | Perficio Advisory",
    description:
      "Expert services from Perficio Advisory for MCA compliance – Incorporation, ROC filings, LLP compliance, company law advisory, and more.",
    url: "https://www.perficios.com/mca",
    siteName: "Perficio Advisory",
    type: "website",
    locale: "en_IN",
  },
};


interface McaLayoutProps {
  children: ReactNode;
}

const McaLayout = ({ children }: McaLayoutProps) => {
  return (
    <div>
      {/* You can optionally add a header/sidebar/footer here */}
      {children}
    </div>
  );
};

export default McaLayout;
