import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Taxation | Perficio",
  description:
    "Expert advisory on inbound/outbound investments, NRI services, FEMA compliance, and international tax strategy. Simplify your global transactions with Perficio.",
  openGraph: {
    title: "International Taxation | Perficio",
    description:
      "Comprehensive support on International Tax compliance, NRI investments, cross-border taxation, and RBI filings. Navigate global finances confidently with Perficio.",
    url: "https://perficios.com/international-tax", // Replace with your actual domain
    siteName: "Perficio",
    locale: "en_IN",
    type: "website",
  },
};

export default function FemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 font-inter">
      {children}
    </div>
  );
}
