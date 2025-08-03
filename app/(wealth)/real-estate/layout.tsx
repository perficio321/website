import type { Metadata } from "next";
import React, { ReactNode } from "react";

// ✅ Metadata for the Real Estate Services page
export const metadata: Metadata = {
  title: "Perficio Real Estate | Advisory & Financial Services in India",
  description:
    "Perficio Real Estate offers comprehensive property services across India, including legal due diligence, investment advisory for NRIs, property valuation, and expert management. Your trusted real estate partner.",
         keywords: [
            "Perficio Real Estate",
            "Real Estate Services India",
            "Property Investment India",
            "Legal Due Diligence Real Estate India",
            "NRI Real Estate Investment India",
            "Property Valuation India",
            "Real Estate Advisory Perficio",
            "Property Management India",
            "Tenant Management Services India",
            "Real Estate Compliance India",
            "Buy Property in India Perficio",
            "Commercial Real Estate India",
            "Perficio Property Solutions",
            "Real Estate Consultant Mumbai", // Example of adding a specific city if relevant for local SEO
            "Real Estate Agent Perficio",
            "Perficios", // ✅ Added the misspelled keyword here
            "Perficios Real Estate" // ✅ Added a combination with the misspelling
        ],
  metadataBase: new URL("https://www.perficio.com"),
  openGraph: {
    title: "Real Estate Solutions | Perficio Advisory",
    description:
      "Perficio Real Estate offers comprehensive property services across India, including legal due diligence, investment advisory for NRIs, property valuation, and expert management. Your trusted real estate partner.",
    url: "https://www.perficios.com/real-estate",
    siteName: "Perficio Advisory",
    images: [
      {
        url: "https://www.perficios.com/og-images/real-estate.png", // Update to your actual OG image
        width: 1200,
        height: 630,
        alt: "Perficio Real Estate Advisory",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};

interface RealEstateLayoutProps {
  children: ReactNode;
}

const RealEstateLayout = ({ children }: RealEstateLayoutProps) => {
  return <>{children}</>;
};

export default RealEstateLayout;
