import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for MCA page
export const metadata: Metadata = {
  title: "MCA Compliance & Corporate Services | Perificio Advisory",
  description:
    "Comprehensive MCA compliance services including company incorporation, LLP setup, ROC filings, strike-offs, conversions, and legal advisory by Perificio.",
  keywords: [
    "MCA Compliance",
    "ROC Filings",
    "Company Incorporation",
    "LLP Registration",
    "STK-2",
    "Strike Off",
    "Corporate Advisory",
    "MOA AOA Drafting",
    "Perificio",
    "DIN DSC",
    "Corporate Law Services India"
  ],
  metadataBase: new URL("https://www.perificio.com"),
  openGraph: {
    title: "MCA Services & Compliance | Perificio Advisory",
    description:
      "Expert services from Perificio Advisory for MCA compliance – Incorporation, ROC filings, LLP compliance, company law advisory, and more.",
    url: "https://www.perificio.com/mca",
    siteName: "Perificio Advisory",
    images: [
      {
        url: "https://www.perificio.com/og-images/mca.png", // Replace with real OG image path
        width: 1200,
        height: 630,
        alt: "Perificio MCA Services",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCA Compliance & ROC Filing Services | Perificio",
    description:
      "Simplify MCA compliance with Perificio – from incorporation to strike-offs, ROC compliance and more.",
    images: ["https://www.perificio.com/twitter-images/mca.png"], // Replace with real image path
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
