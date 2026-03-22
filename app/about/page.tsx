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

        {/* Strategic Partnership */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center">
            Empowered by Strategic Partnership
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            Perficio is proudly backed by the capabilities of its Principal Consultants — distinguished Chartered Accountants with deep expertise across Indirect Taxation, Statutory Audits, Litigation, and Business Advisory. Their combined experience brings a highly capable team of qualified and semi-qualified professionals, enabling us to deliver technically robust, compliant, and insight-driven services across all verticals.
          </p>
        </section>

        {/* Principal Consultants Section */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-4">
            Meet Our Principal Consultants
          </h2>
          <p className="text-gray-600 text-md sm:text-lg text-center mb-10 max-w-3xl mx-auto">
            Our leadership brings together decades of experience in taxation, audit, and advisory — delivering excellence across industries.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* CA Manvi Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-200 overflow-hidden">
              <div className="flex flex-col items-center p-6 sm:p-8">
                {/* Photo */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-5">
                  <img
                    src="/assets/ca-manvi.jpg"
                    alt="CA Manvi - Principal Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl sm:text-2xl font-bold text-blue-800 mb-1">
                  CA Manvi
                </h3>
                <p className="text-red-600 font-semibold text-sm sm:text-base mb-3">
                  Principal Consultant
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    🏆 AIR 46
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    8+ Years Experience
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Ex-Deloitte
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                  CA Manvi, a distinguished Chartered Accountant and All India Rank 46 holder, brings over 8 years of rich professional experience with <strong>Deloitte Haskins &amp; Sells LLP</strong>, where she handled diverse assignments across Statutory Audits and Indirect Taxation. Based in Agra, she actively oversees professional engagements across the Western region of Uttar Pradesh, delivering comprehensive tax and assurance services.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify mt-3">
                  She possesses strong expertise in <strong>GST Managed Compliance</strong>, business transaction advisory, and representation before tax authorities, along with extensive experience in handling core litigation and departmental proceedings. As Principal Consultant, she leads the firm&apos;s <strong>Indirect Taxation, Litigation, Liaisoning, and Statutory Audit</strong> practice, providing technically sound, practical, and result-oriented solutions to clients across industries.
                </p>
              </div>
            </div>

            {/* CA Shabd Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-200 overflow-hidden">
              <div className="flex flex-col items-center p-6 sm:p-8">
                {/* Photo */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-5">
                  <img
                    src="/assets/ca-shabd.jpg"
                    alt="CA Shabd - Principal Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl sm:text-2xl font-bold text-blue-800 mb-1">
                  CA Shabd
                </h3>
                <p className="text-red-600 font-semibold text-sm sm:text-base mb-3">
                  Principal Consultant
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    🏆 AIR 21
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    5+ Years Experience
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    PGD in GST (MNLU)
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                  CA Shabd, an All India Rank 21 holder, brings over 5 years of post-qualification experience in managing indirect tax compliance, advisory, and litigation assignments across industries including manufacturing, exports, and retail. He has also worked with <strong>Lakshmikumaran &amp; Sridharan</strong>, gaining focused exposure to high-stakes tax litigation and advisory matters.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify mt-3">
                  A Post Graduate Diploma holder in GST from <strong>Maharashtra National Law University, Mumbai</strong>, he combines strong technical expertise with process-driven execution. As Principal Consultant, based in Agra and catering to the Western region of Uttar Pradesh, he specializes in <strong>Indirect Taxation, Tax Technology, Financial Process Review, and Business Automation</strong>, delivering structured, technology-enabled, and litigation-ready solutions to clients across sectors.
                </p>
              </div>
            </div>

            {/* CA Saurabh Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-200 overflow-hidden">
              <div className="flex flex-col items-center p-6 sm:p-8">
                {/* Photo */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-5">
                  <img
                    src="/assets/ca-saurabh.jpg"
                    alt="CA Saurabh - Principal Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl sm:text-2xl font-bold text-blue-800 mb-1">
                  CA Saurabh
                </h3>
                <p className="text-red-600 font-semibold text-sm sm:text-base mb-3">
                  Principal Consultant
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    13+ Years Experience
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    GST Specialist
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Ex-General Electric
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                  CA Saurabh is a qualified Chartered Accountant with over <strong>13 years of experience</strong> in tax advisory, compliance, and litigation support, having worked with leading CA firms and multinational corporations including <strong>General Electric</strong>. He has extensive expertise in managing end-to-end compliance frameworks for multinational and large domestic businesses, ensuring alignment with evolving regulatory requirements.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify mt-3">
                  He specializes in <strong>Goods and Services Tax (GST)</strong>, with hands-on experience in implementation, conducting health checks, audits, and delivering structured training programs for client teams. Known for his practical and litigation-ready approach, CA Saurabh provides commercially viable GST solutions across diverse sectors, enabling organizations to effectively manage compliance, mitigate risks, and navigate complex tax landscapes with confidence.
                </p>
              </div>
            </div>
          </div>
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