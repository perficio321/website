import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indirect Tax Services (GST, Audits, Litigation) | Perficio Advisory",
  description:
    "Perficio offers expert indirect tax services in India including GST registration, returns, audits, LUT filing, and litigation support—ensuring seamless compliance.",
  keywords: [
    "Indirect Tax Services India",
    "GST Registration",
    "GST Filing",
    "GST Audit",
    "GST Litigation",
    "LUT Filing",
    "Indirect Tax Advisory",
    "Perficio",
    "Perficios",
    "Perficio Advisory",
    "GST Consultants India",
    "Tax Compliance India",
    "Best Indirect Tax Consultants",
    "CA GST Experts",
    "GST Refund Assistance",
    "Indirect Tax Dispute Resolution"
  ],
  metadataBase: new URL("https://www.perficios.com"),
  openGraph: {
    title: "Indirect Tax Services (GST, Audits, LUT) | Perficio Advisory",
    description:
      "Simplify GST filings, audits, compliance, and litigation with CA-led indirect tax experts at Perficio Advisory.",
    url: "https://www.perficios.com/indirect-tax",
    siteName: "Perficio Advisory",
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
