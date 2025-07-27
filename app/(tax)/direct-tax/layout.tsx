import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Default metadata for all /direct-tax/* pages
export const metadata: Metadata = {
  title: "Direct Tax Services | Perficio Advisory",
  description:
    "Expert direct tax advisory services by Perficio including ITR filing, capital gains, TDS, advance tax, and international taxation.",
  keywords: [
    "Direct Tax",
    "ITR Filing",
    "TDS",
    "Advance Tax",
    "Capital Gains",
    "DTAA",
    "Perficio",
    "Tax Advisory India",
    "Financial Consulting",
  ],
  metadataBase: new URL("https://www.perficio.com"),
  openGraph: {
    title: "Direct Tax Solutions | Perficio",
    description:
      "Navigate direct tax complexities with Perficio’s expert services: ITR, TDS, international tax & more.",
    url: "https://www.perficio.com/direct-tax",
    siteName: "Perficio Advisory",
    images: [
      {
        url: "https://www.perficio.com/og-images/direct-tax.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Perficio Direct Tax Services",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Tax Services | Perficio Advisory",
    description:
      "Explore top-tier direct tax services including ITR filing, capital gains, and international taxation with Perficio.",
    images: ["https://www.perficio.com/twitter-images/direct-tax.png"], // Replace if needed
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
