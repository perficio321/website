import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Advisory | Perficio Advisory',
  description:
    'CA-led insurance advisory focused on personalized, tax-efficient protection planning. Get unbiased advice on life, health, and business insurance.',
  keywords: [
    'insurance advisory',
    'term insurance',
    'health insurance',
    'Keyman insurance',
    'tax-saving insurance',
    'CA insurance advice',
    'Perficio financial protection',
  ],
  openGraph: {
    title: 'Insurance Advisory | Perficio Advisory',
    description:
      'Get unbiased, tax-aligned insurance guidance from our CA-led team. Protect your family, assets, and future with expert planning.',
    url: 'https://your-domain.com/insurance-advisory', // Replace with actual domain
    siteName: 'Perficio Advisory',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Advisory | Perficio',
    description:
      'Plan smarter with expert insurance advice. We protect your financial journey with clarity, tax benefits, and support.',
    site: '@perficio_advisory', // Replace with actual handle if available
  },
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      {children}
    </div>
  );
}
