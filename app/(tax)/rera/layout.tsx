import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the RERA compliance page
export const metadata: Metadata = {
  title: "RERA Compliance & Buyer Protection | Perficio Advisory",
  description:
    "Discover how RERA ensures transparency, buyer protection, and real estate accountability. Learn about registration, grievance redressal, escrow norms, and more.",
  keywords: [
    "RERA Compliance",
    "Real Estate Regulation",
    "Home Buyer Protection",
    "Escrow Account",
    "Real Estate Law India",
    "Perficio",
    "Carpet Area Regulation",
    "RERA Penalties",
    "RERA Registration",
    "RERA Dispute Redressal",
    "Perficio Advisory",
    "Perficios"
  ],
  metadataBase: new URL("https://www.perficios.com"),
  openGraph: {
    title: "RERA Regulatory Guidance | Perficio Advisory",
    description:
      "Explore the benefits of RERA - Transparency, Escrow safety, On-time delivery, Legal protection, and more with Perficio’s expert guidance.",
    url: "https://www.perficios.com/rera",
    siteName: "Perficio Advisory",
    type: "website",
    locale: "en_IN",
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
