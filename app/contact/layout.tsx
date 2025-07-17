import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Perficio Advisory Services',
  description:
    'Get in touch with Perficio Advisory Services for expert help in tax, health, and wealth management. We’re here to assist with your financial and wellness goals.',
  keywords: [
    'Contact Perficio',
    'Tax Advisor Mumbai',
    'Wealth Management Contact',
    'Perficio Advisory Office',
    'Financial Planning Consultation',
    'Chartered Accountant Contact',
    'Get in touch Perficio',
  ],
  openGraph: {
    title: 'Contact Us | Perficio Advisory Services',
    description:
      'Connect with Perficio Advisory for tax planning, financial wellness, and wealth advisory solutions. Reach out to our expert team.',
    url: 'https://your-domain.com/contact-us', // Replace with actual domain
    siteName: 'Perficio Advisory',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Perficio Advisory',
    description:
      'We are ready to assist you with expert financial, tax, and health advisory. Reach out today!',
    site: '@perficio_advisory', // Replace with your handle
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
