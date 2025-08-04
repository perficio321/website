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
    'perficios.com',
    'perficios insurance',
    'perficio insurance'
  ],
  openGraph: {
    title: 'Insurance Advisory | Perficio Advisory',
    description:
      'Get unbiased, tax-aligned insurance guidance from our CA-led team. Protect your family, assets, and future with expert planning.',
    url: 'https://www.perficios.com/insurance', // Replace with actual domain
    siteName: 'Perficio Advisory',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      {children}
    </div>
  );
}
