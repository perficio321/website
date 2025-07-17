import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the Real Estate Services page
export const metadata: Metadata = {
  title: "Real Estate Advisory & Property Services | Perificio",
  description:
    "Comprehensive real estate services by Perificio including legal due diligence, investment advisory, NRI support, valuation, and property management.",
  keywords: [
    "Real Estate Services",
    "Property Investment",
    "Legal Due Diligence",
    "NRI Real Estate",
    "Property Valuation",
    "Real Estate India",
    "Perificio",
    "Property Advisory",
    "Tenant Management",
    "Real Estate Compliance",
    "Buy Property India",
    "Commercial Real Estate",
  ],
  metadataBase: new URL("https://www.perificio.com"),
  openGraph: {
    title: "Real Estate Solutions | Perificio Advisory",
    description:
      "Trust Perificio for expert property services: investment advisory, legal guidance, NRI support, valuation, and more.",
    url: "https://www.perificio.com/real-estate",
    siteName: "Perificio Advisory",
    images: [
      {
        url: "https://www.perificio.com/og-images/real-estate.png", // Update to your actual OG image
        width: 1200,
        height: 630,
        alt: "Perificio Real Estate Advisory",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services | Perificio Advisory",
    description:
      "Explore property investment, NRI real estate assistance, and due diligence support with Perificio's end-to-end advisory services.",
    images: ["https://www.perificio.com/twitter-images/real-estate.png"], // Update if needed
  },
};

interface RealEstateLayoutProps {
  children: ReactNode;
}

const RealEstateLayout = ({ children }: RealEstateLayoutProps) => {
  return <>{children}</>;
};

export default RealEstateLayout;
