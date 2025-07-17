import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the RERA compliance page
export const metadata: Metadata = {
  title: "RERA Compliance & Buyer Protection | Perificio Advisory",
  description:
    "Discover how RERA ensures transparency, buyer protection, and real estate accountability. Learn about registration, grievance redressal, escrow norms, and more.",
  keywords: [
    "RERA Compliance",
    "Real Estate Regulation",
    "Home Buyer Protection",
    "Escrow Account",
    "Real Estate Law India",
    "Perificio",
    "Carpet Area Regulation",
    "RERA Penalties",
    "RERA Registration",
    "RERA Dispute Redressal",
  ],
  metadataBase: new URL("https://www.perificio.com"),
  openGraph: {
    title: "RERA Regulatory Guidance | Perificio Advisory",
    description:
      "Explore the benefits of RERA – Transparency, Escrow safety, On-time delivery, Legal protection, and more with Perificio’s expert guidance.",
    url: "https://www.perificio.com/rera",
    siteName: "Perificio Advisory",
    images: [
      {
        url: "https://www.perificio.com/og-images/rera.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "RERA Compliance - Perificio Advisory",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RERA Compliance & Real Estate Regulation | Perificio",
    description:
      "Secure your real estate investments with expert RERA compliance advisory from Perificio.",
    images: ["https://www.perificio.com/twitter-images/rera.png"], // Replace with actual image
  },
};

interface ReraLayoutProps {
  children: ReactNode;
}

const ReraLayout = ({ children }: ReraLayoutProps) => {
  return (
    <div>
      {/* You can include Header/Footer/Sidebar here if needed */}
      {children}
    </div>
  );
};

export default ReraLayout;
