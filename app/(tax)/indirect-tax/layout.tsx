import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indirect Taxation Services | Perficio",
  description:
    "Expert indirect tax advisory including GST registration, filings, audits, LUTs, litigation support & more. Simplify compliance with Perficio.",
  openGraph: {
    title: "Indirect Taxation Services | Perficio",
    description:
      "Simplify your GST filings, audits, and disputes with CA-led indirect tax experts. Explore Perficio's advisory offerings.",
    url: "https://perficios.com/indirect-tax", // Replace with your actual domain
    siteName: "Perficio",
    locale: "en_IN",
    type: "website",
  },
};

export default function IndirectTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      {children}
    </div>
  );
}
