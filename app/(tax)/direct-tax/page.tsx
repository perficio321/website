"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  const directTaxServices = [
    {
      title: "Income Tax Return Filing",
      description:
        "Preparation and e-filing of ITRs for individuals, firms, corporates, and trusts.",
      icon: "📄", // Document icon
    },
    {
      title: "Capital Gains Advisory",
      description:
        "Accurate computation and planning for long-term and short-term capital gains under various heads.",
      icon: "📈", // Chart icon
    },
    {
      title: "Advance Tax & Strategic Tax Planning",
      description:
        "We assist in advance tax calculations, timely payments, and provide strategic tax planning to help minimise liabilities and optimise savings across income sources.",
      icon: "✔️", // Checkmark icon
    },
    {
      title: "TDS Compliance & Advisory",
      description:
        "We offer end-to-end TDS services including monthly deduction calculations, challan payments, return filing, correction statements, Form 16/16A generation, and resolution of TDS notices—ensuring full compliance and timely reporting.",
      icon: "⏰",
    },
    {
      title: "TDS Demand Notice Handling",
      description:
        "We provide expert assistance in resolving TDS demand notices for past periods through verification, corrections, and timely response to tax authorities.",
      icon: "💡", // Lightbulb icon
    },
    {
      title: "Income Tax Litigation Support",
      description:
        "We assist in drafting replies to notices, representing before AO, CIT(A), and ITAT, and managing assessments, reassessments, and appeals for efficient dispute resolution.",
      icon: "💸", // Lightbulb icon
    },
  ];

  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section - Prominent orange gradient with blue header */}

        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
          Direct Taxation Services
        </h1>

        {/* Highlighted Core Services List - Section with light orange gradient, cards with solid light orange */}

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
          Our Expertise Includes:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8 text-justify">
          {directTaxServices.map((service, index) => (
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
              <p className="text-gray-700 leading-relaxed  text-sm sm:text-base text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section - Orange gradient background, blue header */}
      </main>

      {/* Global Font Imports */}
    </div>
  );
};

export default page;
