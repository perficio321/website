import { Metadata } from "next";
import IndirectTaxClient from "./IndirectTaxClient";

export const metadata: Metadata = {
  title: "GST Filing & Indirect Tax Services India | Perficio",
  description: "Comprehensive GST registration, reconciliation, audit, and litigation support in India. Expert VAT consultancy for UAE, UK, EU, and Australia.",
  alternates: {
    canonical: "https://www.perficios.com/indirect-tax",
  },
  openGraph: {
    title: "GST Filing & Indirect Tax Services India | Perficio",
    description: "Expert assistance for GST registration, filing, refunds, and litigation support.",
    url: "https://www.perficios.com/indirect-tax",
  }
};

export default function IndirectTaxPage() {
  return <IndirectTaxClient />;
}
