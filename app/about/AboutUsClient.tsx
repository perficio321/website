'use client';

import React from 'react';

const AboutUsClient = () => {
  const whyChooseUs = [
    {
      icon: '👩‍💼👨‍💼',
      title: 'Professional Expertise',
      description: 'Our team comprises CAs, CFPs, and insurance specialists with deep industry-specific knowledge.',
    },
    {
      icon: '💻',
      title: 'Technology-Driven',
      description: 'Leveraging AI-powered tax optimization, mobile apps, and secure digital platforms for efficient service.',
    },
    {
      icon: '📜',
      title: 'Regulatory Compliance',
      description: 'As a SEBI-registered RIA, IRDAI-licensed, and ICAI member, we ensure full regulatory adherence.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving a diverse clientele across India, Middle East, Asia-Pacific, Europe, and North America.',
    },
    {
      icon: '🌟',
      title: 'Client-Centric',
      description: 'Enjoy dedicated relationship managers, 24/7 support, and multilingual services tailored to your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
            About <span className="text-red-600">Perficio</span>
          </h1>
        </div>

        <section
          id="our-journey"
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center">
            Our Journey of Excellence
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            Perficio Advisory Services Private Limited, incorporated in 2023 and headquartered
            in Mumbai, is a forward-thinking advisory firm. Our foundation is built on the
            principle of accomplishing excellence in every aspect of Health, Wealth,
            and Taxation Planning. The name &quot;Perficio,&quot; derived from Latin, signifies &quot;
            to accomplish,&quot; &quot;to complete,&quot; or &quot;to bring
            to perfection,&quot; reflecting our dedication to delivering
            thorough and transformative outcomes.
          </p>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto mt-4 text-justify">
            We believe that true success is found at the intersection of financial
            discipline, physical well-being, and regulatory compliance. At Perficio,
            we provide integrated advisory solutions that are customized, compliant,
            and aligned with the evolving needs of individuals, professionals, and businesses.
          </p>
        </section>

        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10">
            Meet Our Visionary Founders
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200">
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">🩺</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
                UK-qualified Physiotherapist
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                With a Masters in Advanced Physiotherapy (UK), she brings extensive experience in preventive healthcare, lifestyle-linked financial planning, and rehabilitative support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200">
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">⚖️</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
                Chartered Accountant & Legal Expert
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                Holding a Masters in International Trade Laws (Switzerland), she has a strong foundation in direct and indirect taxation, international structuring, and compliance advisory.
              </p>
            </div>
          </div>
        </section>

        {/* ... Rest of the components truncated for brevity in this step, but I'll provide the full file ... */}
        {/* I will include the rest of the sections (Principal Consultants, Why Choose Us, etc.) */}
        
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center">
            Empowered by Strategic Partnership
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            Perficio is proudly backed by the capabilities of its Principal Consultants — distinguished Chartered Accountants with deep expertise across Indirect Taxation, Statutory Audits, Litigation, and Business Advisory.
          </p>
        </section>

        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-4">
            Meet Our Principal Consultants
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* CA Manvi Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg border border-orange-200 overflow-hidden p-8 text-center">
               <img src="/assets/ca-manvi.jpg" alt="CA Manvi" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
               <h3 className="text-xl font-bold text-blue-800">CA Manvi</h3>
               <p className="text-red-600 font-semibold mb-2">Principal Consultant</p>
               <p className="text-gray-700 text-sm text-justify">CA Manvi, AIR 46 holder, brings over 8 years of experience with Deloitte. She leads the firm's Indirect Taxation and Statutory Audit practice.</p>
            </div>
            {/* CA Shabd Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg border border-orange-200 overflow-hidden p-8 text-center">
               <img src="/assets/ca-shabd.jpg" alt="CA Shabd" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
               <h3 className="text-xl font-bold text-blue-800">CA Shabd</h3>
               <p className="text-red-600 font-semibold mb-2">Principal Consultant</p>
               <p className="text-gray-700 text-sm text-justify">CA Shabd, AIR 21 holder, specializes in Tax Technology and Business Automation with experience at Lakshmikumaran & Sridharan.</p>
            </div>
            {/* CA Saurabh Card */}
            <div className="flex-1 bg-orange-50 rounded-xl shadow-lg border border-orange-200 overflow-hidden p-8 text-center">
               <img src="/assets/ca-saurabh.jpg" alt="CA Saurabh" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
               <h3 className="text-xl font-bold text-blue-800">CA Saurabh</h3>
               <p className="text-red-600 font-semibold mb-2">Principal Consultant</p>
               <p className="text-gray-700 text-sm text-justify">CA Saurabh has 13+ years of experience in tax advisory, having worked with General Electric and leading CA firms.</p>
            </div>
          </div>
        </section>

        <section
          className="py-8 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10">
            Why Choose Perficio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-xl shadow-lg border border-orange-200 flex flex-col items-center text-center text-justify">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsClient;
