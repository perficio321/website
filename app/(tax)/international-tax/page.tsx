// pages/fema.js OR components/FEMATab.js (depending on your routing structure)
"use client"; // This directive is crucial for client-side functionality

import React from "react";
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const page = () => {
  const oversightAreas = [
    {
      icon: "🌍",
      title: "Inbound Investment & Advisory",
      items: [
        "Entry Strategy & Entity Structuring (FEMA, FDI)",
        "Setup of Liaison, Branch & Project Offices",
        "FDI Reporting (FC-GPR, FC-TRS via FIRMS Portal)",
        "FEMA Compliance & RBI filings",
        "Due Diligence for Cross-Border Investments",
      ],
    },
    {
      icon: "🚀",
      title: "Outbound Investment & NRI Services",
      items: [
        "Overseas Direct Investment (ODI) Advisory",
        "JV & Wholly Owned Subsidiaries Structuring",
        "Remittance Planning under LRS",
        "NRI Tax Advisory – Income, Capital Gains, DTAA",
        "Repatriation of Funds & Asset Restructuring",
      ],
    },
    {
      icon: "🧾",
      title: "International Taxation & Compliance",
      items: [
        "Tax Residency & PE Risk Analysis",
        "Transfer Pricing Documentation & Compliance",
        "Withholding Tax (TDS) on Cross-border Transactions",
        "Foreign Tax Credit (FTC) advisory",
        "Form 15CA/CB, FATCA & CRS Compliance",
      ],
    },
  ];

  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      {/* Head section for page metadata - uncomment if this is a top-level page */}
      {/* <Head>
        <title>FEMA Compliance & Foreign Exchange - Corporate Legal Services</title>
        <meta name="description" content="Understand the Foreign Exchange Management Act and its implications for individuals and businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section for FEMA - Now with Orange Gradient Background */}

        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
            {" "}
            {/* Deep blue header */}
            International Tax
          </h1>
        </div>

        {/* Key Aspects Section - Now with Orange Gradient Background and Orange Cards */}
        {/* Section with a different orange gradient */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
          {" "}
          {/* Deep blue header */}
          Understanding International Tax for Your Global Transactions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
          {oversightAreas.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200" // Light orange card background and border
            >
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                {" "}
                {/* Blue icon */}
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 ">
                {" "}
                {/* Blue header */}
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed  text-sm sm:text-base text-justify">
                {" "}
                {/* Adjusted text color */}
                {feature.items}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action / Consultation Section - Now with Orange Gradient Background */}
      </main>

      {/* Global Font Imports (or define in styles/globals.css for better performance) */}
    </div>
  );
};

export default page;
