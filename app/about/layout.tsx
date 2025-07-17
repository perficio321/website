// app/about-us/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Perficio - Your Trusted Partner for Tax, Health & Wealth',
  description:
    'Perficio Advisory Services Private Limited: Accomplishing excellence in Health, Wealth, and Taxation Planning with global reach and regulatory compliance.',
  keywords: [
    'Perficio',
    'Tax Planning',
    'Health Advisory',
    'Wealth Management',
    'SEBI Registered',
    'Chartered Accountant',
    'Financial Planning',
    'RIA',
    'IRDAI',
    'Mumbai Advisory Firm'
  ],
  authors: [{ name: 'Perficio Advisory Services' }],
  openGraph: {
    title: 'About Perficio - Your Trusted Partner for Tax, Health & Wealth',
    description:
      'Discover Perficio, a firm integrating health, wealth, and taxation expertise with global reach and AI-driven tools.',
    url: 'https://your-domain.com/about-us', // replace with actual domain
    siteName: 'Perficio Advisory Services',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Perficio',
    description:
      'Perficio Advisory Services: Accomplishing excellence in health, wealth, and taxation advisory.',
    site: '@perficio_advisory', // replace with actual handle if available
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
