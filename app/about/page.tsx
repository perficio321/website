import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Perficios | Your Trusted Partner for Tax, Health & Wealth Planning",
  description: "Learn about Perficio Advisory Services Mumbai. Established in 2023, we provide AI-powered tax optimization, SEBI-registered advisory, and holistic wealth management solutions.",
  keywords: "About Perficio, financial advisory Mumbai, AI tax optimization, SEBI registered RIA, holistic wealth management, CA Manvi, CA Shabd, CA Saurabh",
  openGraph: {
    title: "About Perficio | Excellence in Health, Wealth, and Taxation",
    description: "Multi-disciplinary advisory firm specializing in integrated financial and health solutions.",
    type: "website",
  }
};

const AboutUsPage = () => {
  return <AboutUsClient />;
};

export default AboutUsPage;