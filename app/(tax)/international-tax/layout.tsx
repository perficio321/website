import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Taxation Services (NRI, FEMA, Cross-Border) | Perficio Advisory",
  description:
    "Perficio provides expert international tax advisory including NRI taxation, cross-border planning, FEMA compliance, DTAA advisory, and RBI reporting—simplifying global finance for individuals and businesses.",
  keywords: [
    "International Taxation India",
    "NRI Tax Services",
    "FEMA Compliance",
    "DTAA Advisory",
    "Cross-Border Taxation",
    "Inbound Investments",
    "Outbound Investments",
    "RBI Compliance",
    "Foreign Asset Reporting",
    "International Tax Planning",
    "Perficio",
    "Perficio Advisory",
    "Perficios",
    "NRI Tax Consultant India",
    "Global Tax Strategy",
    "Tax Advisory for Expats",
    "Overseas Tax Compliance"
  ],
  metadataBase: new URL("https://www.perficios.com"),
  openGraph: {
    title: "International Taxation Services (NRI, FEMA, DTAA) | Perficio Advisory",
    description:
      "Comprehensive guidance on cross-border taxation, NRI investments, FEMA & RBI compliance. Trusted international tax advisors at Perficio.",
    url: "https://www.perficios.com/international-tax",
    siteName: "Perficio Advisory",
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
