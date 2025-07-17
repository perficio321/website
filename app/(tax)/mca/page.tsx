"use client";
import React from "react";

const oversightAreas = [
  {
    icon: "🏢",
    title: "Incorporation & Setup",
    items: [
      "Company / LLP Incorporation (SPICe+ / FiLLiP)",
      "DIN & DSC Application",
      "PAN, TAN, PF, ESI, Bank A/c Setup",
      "Drafting MOA, AOA, LLP Agreement",
    ],
  },
  {
    icon: "📄",
    title: "ROC Compliance & Filings",
    items: [
      "Annual Filings – MGT-7, AOC-4, DIR-3 KYC",
      "Director Appointments / Resignations (DIR-12)",
      "Changes in Registered Office / Capital",
      "Maintenance of Statutory Registers",
      "Filing of Resolutions (MGT-14)",
      "XBRL Filings, MSME-1, BEN-2",
    ],
  },
  {
    icon: "⚖️",
    title: "Advisory, Conversions & Closure",
    items: [
      "Share Allotment & Transfer Compliance",
      "Charge Creation / Satisfaction (CHG-1/4)",
      "Conversion of Company / LLP",
      "Strike-off (STK-2), Compounding of Offences",
      "SBO, Beneficial Ownership Disclosures",
    ],
  },
];

const page = () => {
  // Make sure this line is exactly as written, with the curly brace {
  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section - The MCA Hero with Orange Gradient Background and Blue Header */}

        <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
          The <span className="text-blue-600">Corporate Law Services</span>
        </h1>

        {/* Our Mission & Key Responsibilities Section - With Orange Gradient Background and Blue Headers */}
        {/* <section className="py-8 rounded-xl shadow-lg border border-orange-100"
                  style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-8">
          
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🎯
               </div>
               <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 ">
                 Our Mission
               </h2>
               <p className="text-gray-700 leading-relaxed  text-sm sm:text-base">
                 The Ministry of Corporate Affairs is dedicated to upholding corporate governance, fostering economic stability, and ensuring the protection of stakeholder interests through robust regulatory frameworks and diligent oversight. We strive for excellence in governance and transparency.
               </p>
             </div>
       
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 ✅
               </div>
               <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 ">
                 Key Responsibilities
               </h2>
               <ul className="list-none p-0 text-gray-700 space-y-2 text-sm sm:text-base text-left w-full">
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Policy formulation and implementation for corporate affairs.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Regulatory compliance monitoring and enforcement.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Administration of the Companies Act, 2013 and LLP Act, 2008.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Promotion of good corporate governance practices.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Investor protection and education.</li>
               </ul>
             </div>
           </div>
         </section> */}

        {/* Areas of Oversight Section - With Orange Gradient Background and Blue Headers */}

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
          Areas of Oversight
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {oversightAreas.map((area, index) => (
            <article
              key={index}
              className=" border border-orange-200 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="text-5xl sm:text-6xl text-blue-600 mb-3">
                  {area.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 ">
                  {area.title}
                </h3>
              </div>
              <ul className="text-left text-gray-700  text-sm sm:text-base list-disc list-outside pl-5 space-y-1">
                {area.items.map((item, i) => (
                  <li key={i} className="text-justify">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Contact CTA Section - Orange Gradient Background and Blue Header */}
      </main>

      {/* Global Font Imports */}
    </div>
  );
};

export default page;
