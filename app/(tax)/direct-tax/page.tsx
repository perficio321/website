import { Metadata } from "next";
import DirectTaxClient from "./DirectTaxClient";

export const metadata: Metadata = {
  title: "Direct Tax Consulting Services India | Perficio",
  description: "Expert income tax return filing, capital gains advisory, and tax litigation support for individuals and businesses in India. Perficio ensures compliance and optimization.",
  alternates: {
    canonical: "https://www.perficios.com/direct-tax",
  },
  openGraph: {
    title: "Direct Tax Consulting Services India | Perficio",
    description: "Income Tax, TDS, and Litigation support services by professional Chartered Accountants.",
    url: "https://www.perficios.com/direct-tax",
  }
};

export default function DirectTaxPage() {
  return <DirectTaxClient />;
}
