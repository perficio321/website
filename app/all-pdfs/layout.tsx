import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All PDFs | Perficio Advisory Resources',
  description:
    'Explore all downloadable PDF resources shared by Perficio Advisory Services, including tax, finance, and compliance insights.',
  keywords: [
    'Perficio PDFs',
    'Tax PDF Resources',
    'Wealth Planning Documents',
    'Downloadable Finance PDFs',
    'CA PDFs',
    'Financial Literacy PDFs',
  ],
  openGraph: {
    title: 'All PDFs | Perficio Advisory Resources',
    description:
      'Download Perficio’s curated PDFs covering tax planning, compliance, and financial wellness topics.',
    url: 'https://your-domain.com/pdfs', // Replace with your actual domain
    siteName: 'Perficio Advisory',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perficio PDF Library',
    description:
      'Access official PDF downloads from Perficio Advisory Services for tax and wealth management.',
    site: '@perficio_advisory', // Replace with your actual Twitter handle
  },
};

export default function PdfsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-orange-50  text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 font-poppins mb-4">
            Our PDF Library
          </h1>
          <p className="text-gray-600 text-md sm:text-lg max-w-2xl mx-auto ">
            Access Perficio's downloadable resources for insights on taxation, compliance, and strategic wealth planning.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
