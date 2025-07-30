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

// Static metadata (for home + fallback)
export const metadata: Metadata = {
  title: "Perficio - Professional Financial Assistant",
  description: "Perficio helps you manage your finances, taxes, and investments professionally.",
  keywords: [
    "perficio",
    "perficios",
    "financial assistant",
    "wealth management",
    "tax assistant",
    "Perficio.com",
    "investment planning",
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
