import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Default metadata for all /direct-tax/* pages
export const metadata: Metadata = {
  title: "Direct Tax Services | Perificio Advisory",
  description:
    "Expert direct tax advisory services by Perificio including ITR filing, capital gains, TDS, advance tax, and international taxation.",
  keywords: [
    "Direct Tax",
    "ITR Filing",
    "TDS",
    "Advance Tax",
    "Capital Gains",
    "DTAA",
    "Perificio",
    "Tax Advisory India",
    "Financial Consulting",
  ],
  metadataBase: new URL("https://www.perificio.com"),
  openGraph: {
    title: "Direct Tax Solutions | Perificio",
    description:
      "Navigate direct tax complexities with Perificio’s expert services: ITR, TDS, international tax & more.",
    url: "https://www.perificio.com/direct-tax",
    siteName: "Perificio Advisory",
    images: [
      {
        url: "https://www.perificio.com/og-images/direct-tax.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Perificio Direct Tax Services",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Tax Services | Perificio Advisory",
    description:
      "Explore top-tier direct tax services including ITR filing, capital gains, and international taxation with Perificio.",
    images: ["https://www.perificio.com/twitter-images/direct-tax.png"], // Replace if needed
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
