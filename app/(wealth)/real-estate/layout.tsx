import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the Real Estate Services page
export const metadata: Metadata = {
  title: "Real Estate Advisory & Property Services | Perficio",
  description:
    "Comprehensive real estate services by Perficio including legal due diligence, investment advisory, NRI support, valuation, and property management.",
  keywords: [
    "Real Estate Services",
    "Property Investment",
    "Legal Due Diligence",
    "NRI Real Estate",
    "Property Valuation",
    "Real Estate India",
    "Perficio",
    "Property Advisory",
    "Tenant Management",
    "Real Estate Compliance",
    "Buy Property India",
    "Commercial Real Estate",
    "Real Estate Perficio",
    "Perficio"
  ],
  metadataBase: new URL("https://www.perficio.com"),
  openGraph: {
    title: "Real Estate Solutions | Perficio Advisory",
    description:
      "Trust Perficio for expert property services: investment advisory, legal guidance, NRI support, valuation, and more.",
    url: "https://www.perficio.com/real-estate",
    siteName: "Perficio Advisory",
    images: [
      {
        url: "https://www.perficio.com/og-images/real-estate.png", // Update to your actual OG image
        width: 1200,
        height: 630,
        alt: "Perficio Real Estate Advisory",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services | Perficio Advisory",
    description:
      "Explore property investment, NRI real estate assistance, and due diligence support with Perficio's end-to-end advisory services.",
    images: ["https://www.perficio.com/twitter-images/real-estate.png"], // Update if needed
  },
};

interface RealEstateLayoutProps {
  children: ReactNode;
}

const RealEstateLayout = ({ children }: RealEstateLayoutProps) => {
  return <>{children}</>;
};

export default RealEstateLayout;
