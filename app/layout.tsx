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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Perficio",
    description: "Professional Financial Assistant",
    keywords: ["perficios","financial assistant", "wealth management", "tax assistant", "Perficio", "investment planning"],
    icons: {
      icon: "/favicon.ico", // optional
    },
    openGraph: {
      title: "Perficio",
      description: "Professional Financial Assistant for Tax & Wealth",
      type: "website",
      locale: "en_US",
      url: "https://perficios.com", // change to your domain
      siteName: "Perficio",
    },
    metadataBase: new URL("https://perficios.com"),
  };
}
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
