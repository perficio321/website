"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  const indirectTaxServices = [
    {
      title: "GST Registration, Filing & Refund Support",
      description:
        "We offer complete assistance for GST registration and ensure timely filing of all GST returns, including GSTR-1, 3B, 9, and 9C. Exporters can also rely on us for smooth processing of GST refund claims and LUT (Letter of Undertaking) applications.",
      icon: "📝", // Document/Pen icon
    },
    {
      title: "Reconciliation, RCM & ISD Advisory",
      description:
        "Our experts help businesses reconcile their purchase data with GSTR-2A/2B and resolve mismatches efficiently. We also advise on Reverse Charge Mechanism (RCM) compliance and Input Service Distributor (ISD) setups for multi-location operations.",
      icon: "💰", // Money Bag icon
    },
    {
      title: "GST Audit, Litigation & Appeals",
      description:
        "We provide end-to-end support for GST audits and annual return filings. Our litigation services include drafting replies to notices, handling assessments, and representing clients in GST appeals before departmental authorities.",
      icon: "📊", // Chart/Analysis icon
    },
    {
      title: "State-Level VAT Compliance",
      description:
        "We assist in VAT registration, return filing, assessments, and dispute handling for states where VAT is still applicable—such as on petroleum and liquor. Our services ensure compliance with legacy VAT laws and support in closure of pending cases.",
      icon: "🔍", // Magnifying Glass/Audit icon
    },
    {
      title: "Professional Tax Compliance",
      description:
        "We offer complete support for Professional Tax registration, monthly return filing, challan payments, and compliance with state-specific rules—ensuring timely deductions and penalty-free operations.",
      icon: "🔄", // Refresh/Cycle icon
    },
    // NEW SERVICE ADDED HERE
    {
      title: "International VAT Consultancy",
      description:
        "We provide advisory services on VAT/GST compliance for cross-border transactions in the UAE, UK, EU, and Australia. Our consultancy includes guidance on registration, reverse charge, and input tax eligibility.",
      icon: "⚖️", // Balance/Justice icon
    },
  ];

  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section - Now with Orange Gradient Background and Blue Header */}

        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
            Indirect Taxation Services
          </h1>
        </div>

        {/* Key Expertise Section - Orange Gradient Background, Cards with Solid Light Orange */}

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
          Our Expertise Includes:
        </h2>
        {/* The grid will automatically adjust to accommodate the new box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
          {indirectTaxServices.map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200"
            >
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Call to Action Section - Orange Gradient Background, Blue Header */}
      </main>

      {/* Global Font Imports */}
    </div>
  );
};

export default page;
