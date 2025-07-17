// pages/about-us.js OR components/AboutUsPage.js (depending on your routing structure)
'use client'; // This directive is crucial for client-side functionality

import React from 'react'; // Import Link for navigation
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const AboutUsPage = () => {

  const whyChooseUs = [
    {
      icon: '👩‍💼👨‍💼', // Professional Expertise
      title: 'Professional Expertise',
      description: 'Our team comprises CAs, CFPs, and insurance specialists with deep industry-specific knowledge.',
    },
    {
      icon: '💻', // Technology-Driven
      title: 'Technology-Driven',
      description: 'Leveraging AI-powered tax optimization, mobile apps, and secure digital platforms for efficient service.',
    },
    {
      icon: '📜', // Regulatory Compliance
      title: 'Regulatory Compliance',
      description: 'As a SEBI-registered RIA, IRDAI-licensed, and ICAI member, we ensure full regulatory adherence.',
    },
    {
      icon: '🌍', // Global Reach
      title: 'Global Reach',
      description: 'Serving a diverse clientele across India, Middle East, Asia-Pacific, Europe, and North America.',
    },
    {
      icon: '🌟', // Client-Centric
      title: 'Client-Centric',
      description: 'Enjoy dedicated relationship managers, 24/7 support, and multilingual services tailored to your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      {/* Head section for page metadata - uncomment if this is a top-level page */}
      {/* <Head>
        <title>About Perficio - Your Trusted Partner for Tax, Health & Wealth</title>
        <meta name="description" content="Perficio Advisory Services Private Limited: Accomplishing excellence in Health, Wealth, and Taxation Planning." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section - Matched to previous page's hero gradient and blue header */}

          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
              About <span className="text-red-600">Perficio</span>
            </h1>      
          </div>

        {/* Introduction / Our Story - Matched to previous page's section gradient */}
        <section
          id="our-journey"
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6  text-center"> {/* Centered and text-blue-800 for consistency */}
            Our Journey of Excellence
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            Perficio Advisory Services Private Limited, incorporated in 2023 and headquartered 
            in Mumbai, is a forward-thinking advisory firm. Our foundation is built on the 
            principle of accomplishing excellence in every aspect of Health, Wealth,
             and Taxation Planning. The name &quot;Perficio,&quot; derived from Latin, signifies &quot;
              to accomplish,&quot;  &quot;to complete,&quot; or &quot;to bring
               to perfection,&quot; reflecting our dedication to delivering 
               thorough and transformative outcomes.
          </p>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto mt-4 text-justify">
            We believe that true success is found at the intersection of financial 
            discipline, physical well-being, and regulatory compliance. At Perficio
            , we provide integrated advisory solutions that are customized, compliant,
             and aligned with the evolving needs of individuals, professionals, and businesses.
              We don &quot;t just advise — we accomplish, perfect, and deliver.
          </p>
        </section>

        {/* The Founders Section - Matched to previous page's section gradient and card backgrounds */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 "> {/* text-blue-800 for consistency */}
            Meet Our Visionary Founders
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200"> {/* Matched card styles */}
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">🩺</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 "> {/* text-blue-700 for consistency */}
                UK-qualified Physiotherapist
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify"> {/* text-sm/base for consistency */}
                With a Masters in Advanced Physiotherapy (UK), she brings extensive experience in preventive healthcare, lifestyle-linked financial planning, and rehabilitative support. Her expertise ensures our financial advisory is informed by holistic health insights, creating strategies that support both financial freedom and physical well-being.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200"> {/* Matched card styles */}
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">⚖️</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 "> {/* text-blue-700 for consistency */}
                Chartered Accountant & Legal Expert
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify"> {/* text-sm/base for consistency */}
                Holding a Masters in International Trade Laws (Switzerland), she has a strong foundation in direct and indirect taxation, international structuring, and compliance advisory. Her expertise drives our core financial and regulatory service verticals, offering clients actionable, ethical, and globally aligned solutions.
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto mt-8 text-justify">
            Together, these two dynamic women professionals bring a multidimensional approach to advisory services, making Perficio a one-of-its-kind platform that integrates fiscal strength with lifestyle resilience.
          </p>
        </section>

        {/* Strategic Partnership - Matched to previous page's section gradient */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6  text-center"> {/* text-blue-800 and centered for consistency */}
            Empowered by Strategic Partnership
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            Perficio is proudly backed by the capabilities of its Principal Consultant — a reputed Chartered Accountancy firm with over 20 years of extensive experience. This partnership brings a highly capable team of qualified and semi-qualified professionals, enabling us to deliver technically robust, compliant, and insight-driven services across all verticals.
          </p>
        </section>

        {/* Why Choose Us - Matched to previous page's section gradient and card backgrounds */}
        <section
          className="py-8 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 "> {/* text-blue-800 for consistency */}
            Why Choose Perficio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200" // Matched card styles
              >
                <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3"> {/* text-blue-700 for consistency */}
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed  text-sm sm:text-base text-justify"> {/* text-gray-700 and text-sm/base for consistency */}
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission/Vision Statement - This section remains dark for strong contrast and visual break */}


        {/* Call to Action - Matched to previous page's call to action gradient and button styling */}
     
      </main>

      {/* Global Font Imports (or define in styles/globals.css for better performance) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');

        . {
            font-family: 'Inter', sans-serif;
        }
        . {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;