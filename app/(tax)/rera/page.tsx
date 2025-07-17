// pages/rera.js OR components/RERATab.js (depending on your routing)
"use client"; // This directive is crucial for client-side functionality

import React from "react";
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const page = () => {
  // Define the key points about RERA for customers
  const reraHighlights = [
    {
      title: "Project & Agent Registration",
      description:
        "Complete assistance in RERA registration of real estate projects and agents, including documentation, declaration, and compliance with State-specific RERA rules.",
      icon: "🛡️", // Shield icon
    },
    {
      title: "Quarterly Compliance & Reporting",
      description:
        "Filing of quarterly updates on project progress, financial disclosures, and uploading of CA, Architect, and Engineer certificates on the RERA portal.",
      icon: "📝", // Document/Clipboard icon
    },
    {
      title: "Legal Drafting & Documentation",
      description:
        "Drafting/vetting of Builder-Buyer Agreements, Allotment Letters, Sale Deeds, and Joint Development Agreements in line with RERA requirements.",
      icon: "🔍", // Magnifying glass/Transparency icon
    },
    {
      title: "Litigation & Complaint Handling",
      description:
        "Filing complaints under Section 31, representing clients before RERA Authority & Appellate Tribunal for delays, refund, and possession issues.",
      icon: "🏦", // Bank/Money icon
    },
    {
      title: "Advisory for Developers & Homebuyers",
      description:
        "Advisory on compliance structuring, ongoing project disclosures, refund rights, compensation, and escrow account utilisation.",
      icon: "📏", // Ruler/Measurement icon
    },
    {
      title: "Compliance Audits & Trainings",
      description:
        "Conducting RERA compliance audits for projects, real estate firms, and offering training sessions for internal legal, sales, and finance teams.",
      icon: "⏰", // Clock/Timeliness icon
    },
    // {
    //   title: "Streamlined Grievance Redressal",
    //   description:
    //     "RERA establishes a swift and effective dispute resolution mechanism, allowing homebuyers to file complaints against developers.",
    //   icon: "🏛️", // Pillar/Justice icon
    // },
    // {
    //   title: "Accountability for Developers",
    //   description:
    //     "RERA imposes strict liabilities and penalties on developers for non-compliance, ensuring greater responsibility.",
    //   icon: "✅", // Checkmark/Approval icon
    // },
  ];

  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      {/* Head section for page metadata - only if this is a top-level page */}
      {/* <Head>
        <title>RERA Compliance & Regulation - Corporate Legal Services</title>
        <meta name="description" content="Understand the Real Estate (Regulation and Development) Act and its benefits." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section for RERA - Now with Orange Gradient Background */}

        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
            {" "}
            {/* Deep blue header */}
            RERA: Your Assurance in{" "}
            <span className="text-blue-700">Real Estate</span>
          </h1>
        </div>

        {/* Key Features Section - Now with Orange Gradient Background and Orange Cards */}
        {/* Section with a different orange gradient */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
          {" "}
          {/* Deep blue header */}
          Why RERA Matters For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
          {reraHighlights.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200" // Light orange card background
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
                {feature.description}
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
