import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blogs | Perficio Insights',
  description:
    'Browse all insightful blogs published by Perficio Advisory, covering taxation, health planning, wealth management, and financial literacy.',
  keywords: [
    'Blogs',
    'Perficio',
    'Tax Tips',
    'Financial Planning',
    'Wealth Management',
    'Health Advisory',
    'Money Management',
    'CA Blogs',
    'Advisory Insights',
  ],
  openGraph: {
    title: 'All Blogs | Perficio Insights',
    description:
      'Explore all blog posts from Perficio Advisory — expert insights on tax, finance, and health planning.',
    url: 'https://your-domain.com/blogs', // update with your actual domain
    siteName: 'Perficio Advisory',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perficio Blog - Expert Financial and Health Advisory',
    description:
      'Read latest blog updates from Perficio Advisory Services covering tax, wealth, and health advisory.',
    site: '@perficio_advisory', // replace if you have a Twitter handle
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="bg-gradient-to-r from-blue-50 via-orange-100 to-yellow-50 py-12 shadow-inner">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-blue-900 font-montserrat">
          Explore Our Latest Blogs
        </h1>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-md sm:text-lg font-inter">
          Stay informed with expert tips and updates on finance, taxation, and wellness from Perficio.
        </p>
      </div>

      <main className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
