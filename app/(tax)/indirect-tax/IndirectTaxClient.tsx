'use client';
import React from "react";

const IndirectTaxClient = () => {
  const indirectTaxServices = [
    {
      title: "GST Registration, Filing & Refund Support",
      description:
        "We offer complete assistance for GST registration and ensure timely filing of all GST returns, including GSTR-1, 3B, 9, and 9C.",
      icon: "📝",
    },
    {
      title: "Reconciliation, RCM & ISD Advisory",
      description:
        "Our experts help businesses reconcile their purchase data with GSTR-2A/2B and resolve mismatches efficiently.",
      icon: "💰",
    },
    {
      title: "GST Audit, Litigation & Appeals",
      description:
        "We provide end-to-end support for GST audits and annual return filings, including drafting replies to notices.",
      icon: "📊",
    },
    {
      title: "State-Level VAT Compliance",
      description:
        "We assist in VAT registration and return filing for states where VAT is still applicable—such as on petroleum and liquor.",
      icon: "🔍",
    },
    {
      title: "Professional Tax Compliance",
      description:
        "We offer complete support for Professional Tax registration, monthly return filing, and challan payments.",
      icon: "🔄",
    },
    {
      title: "International VAT Consultancy",
      description:
        "We provide advisory services on VAT/GST compliance for cross-border transactions in the UAE, UK, EU, and Australia.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 leading-tight text-center">
          Indirect Taxation Services
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10">
          Our Expertise Includes:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
          {indirectTaxServices.map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200"
            >
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600" aria-hidden="true">
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
      </main>
    </div>
  );
};

export default IndirectTaxClient;
