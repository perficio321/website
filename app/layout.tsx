import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perficio - Professional Financial Assistant",
  description: "Achieve financial freedom and secure your future with Perficio's expert financial planning, real estate advisory, tax assistance, and comprehensive wealth management services for individuals and businesses across India. Partner with Perficio for smart growth and lasting security",
keywords: [
"Perficio", // Primary brand keyword
"Perficio India",
"Financial Advisory India",
"Real Estate Advisory India",
"Wealth Management India",
"Tax Assistance India", // Using 'Assistance'
"Investment Planning India",
"Personal Financial Planning India",
"NRI Financial Services India",
"Business Financial Services India",
"Financial Consultant Mumbai", // Example for a specific city, modify as needed
"Financial Advisor Perficio",
"Property Advisory India", // More specific for real estate
"Asset Management India", // Broaden wealth management
"Financial Growth India",
"Financial Security India",
"Perficios", // Common misspelling/variation
"https://www.google.com/search?q=Perficios.com", // Direct domain (useful for brand searches)
"perficio.com",
"perficios.com", // Also include the correct spelling of the domain if people might search it
"Financial Planning Company", // Broader industry term
],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Perficio",
    description: "Professional Financial Assistant for Tax & Wealth",
    type: "website",
    locale: "en_US",
    url: "https://perficios.com",
    siteName: "Perficio",
  },
  metadataBase: new URL("https://perficios.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
     </SessionProvider>
  );
}
