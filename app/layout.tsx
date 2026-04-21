import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import ConditionalLayout from "@/components/ConditionalLayout/ConditionalLayout";
import { Analytics } from "@vercel/analytics/next";


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
  description:
    "Achieve financial freedom and secure your future with Perficio's expert financial planning, real estate advisory, tax assistance, and comprehensive wealth management services for individuals and businesses across India.",
  keywords: [
    "Perficio", "Financial Advisory India", "Real Estate Advisory India", "Wealth Management India",
    "Tax Assistance India", "Investment Planning India", "NRI Financial Services",
    "Chartered Accountant Mumbai", "GST Managed Compliance", "International Taxation India"
  ],
  alternates: {
    canonical: "https://www.perficios.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Perficio - Professional Financial Assistant",
    description: "Expert financial planning, real estate advisory, and wealth management services for India.",
    type: "website",
    locale: "en_IN",
    url: "https://www.perficios.com",
    siteName: "Perficio",
    images: [
      {
        url: "https://www.perficios.com/perficio-logo.png",
        width: 1200,
        height: 630,
        alt: "Perficio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perficio - Professional Financial Assistant",
    description: "Expert financial planning, real estate advisory, and wealth management services in India.",
    images: ["https://www.perficios.com/perficio-logo.png"],
  },
  metadataBase: new URL("https://www.perficios.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Perficio Advisory Services Private Limited",
  "url": "https://www.perficios.com",
  "logo": "https://www.perficios.com/perficio-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9833892635",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/share/19KDXFYx5x/",
    "https://www.instagram.com/perficioadvisory",
    "https://www.linkedin.com/in/deepali-mehta-0b45137"
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9bcd9684-131a-4d39-87bc-20de225a6b75"
        />
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ConditionalLayout>{children}</ConditionalLayout>
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
