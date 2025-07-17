"use client";
import Head from "next/head";
import React from "react";
import { FaShieldAlt, FaHandshake, FaUserTie, FaQuoteLeft, FaQuestionCircle, FaLightbulb, FaChartLine, FaClipboardCheck, FaUsers, FaArrowRight, FaFileContract,FaBalanceScale, FaGraduationCap, FaClipboardList } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  mobile: string;
  email: string;
  agreedToTerms: boolean;
}

const servicesData = [
  {
    title: "Term Insurance Planning",
    icon: <FaShieldAlt className="text-blue-700 text-4xl mb-4" />,
    points: [
      "Coverage analysis based on income, liabilities, and dependents",
      "Help with choosing high-claim-settlement insurers",
      "Structuring policies for tax benefit under Section 80C & 10(10D)",
    ],
  },
  {
    title: "Health Insurance Advisory",
    icon: <FaHandshake className="text-red-600 text-4xl mb-4" />,
    points: [
      "Guidance on individual vs family floater policies",
      "Integration with Section 80D tax savings",
      "Claim settlement assistance & document review",
    ],
  },
  {
    title: "Keyman & Corporate Insurance",
    icon: <FaUserTie className="text-blue-700 text-4xl mb-4" />,
    points: [
      "Structuring Keyman Insurance for business owners and directors",
      "Buy-sell agreement-based insurance planning",
      "Group Mediclaim advisory for employees",
    ],
  },
  {
    title: "Tax & Compliance Edge",
    icon: <FaFileContract className="text-red-600 text-4xl mb-4" />,
    points: [
      "Maximize deductions (80C, 80D, 80DD, 80U)",
      "Avoid claim rejections through proper disclosures",
      "Post-claim documentation and tax advisory",
    ],
  },
];

const howItWorksSteps = [
  {
    step: "1. Initial Consultation",
    icon: <FaUsers className="text-blue-700 text-4xl mb-4" />,
    description: "We begin with an introductory call to understand your financial goals, existing coverage, and specific needs.",
  },
  {
    step: "2. Personalized Analysis",
    icon: <FaChartLine className="text-red-600 text-4xl mb-4" />,
    description: "Our CA-led team conducts a thorough analysis of your financial situation, considering tax implications and future aspirations.",
  },
  {
    step: "3. Tailored Recommendations",
    icon: <FaLightbulb className="text-blue-700 text-4xl mb-4" />,
    description: "Receive unbiased recommendations on insurance products that perfectly align with your risk profile and financial objectives.",
  },
  {
    step: "4. Seamless Implementation & Support",
    icon: <FaClipboardCheck className="text-red-600 text-4xl mb-4" />,
    description: "We assist with documentation, policy setup, and provide ongoing support, including claim settlement assistance.",
  },
];

const trustReasons = [
  {
    text: "We are not insurance sellers—we are your unbiased advisor.",
    icon: <FaBalanceScale className="text-blue-600 text-xl" />
  },
  {
    text: "CA-led opinion on financial impact, not just premium cost.",
    icon: <FaGraduationCap className="text-red-600 text-xl" />
  },
  {
    text: "We assist in choosing, reviewing, and even claiming.",
    icon: <FaClipboardList className="text-blue-600 text-xl" />
  },
];

const testimonials = [
  {
    quote: "Perificio simplified our insurance planning. Their tax advice was invaluable!",
    author: "Ritu Sharma, Small Business Owner",
  },
  {
    quote: "Professional and thorough. I finally understand my policies thanks to them.",
    author: "Anil Kumar, Software Engineer",
  },
  {
    quote: "Excellent support during claims. Highly recommend their advisory services.",
    author: "Priya Singh, Homemaker",
  },
];

const faqs = [
  {
    question: "Why should I choose Perificio for insurance advisory?",
    answer: "At Perificio, our insurance advisory is led by Certified Accountants (CAs), ensuring you receive unbiased, tax-optimized, and expert advice tailored to your financial health. We prioritize your long-term security and provide end-to-end support.",
  },
  {
    question: "How do you help with tax savings on insurance?",
    answer: "We specialize in structuring your insurance policies to maximize deductions under various sections like 80C, 80D, 80DD, and 80U. Our advice helps you effectively reduce your taxable income while securing comprehensive coverage.",
  },
  {
    question: "What is the process for getting insurance advice?",
    answer: "Our process starts with an initial consultation to understand your needs. Following this, we conduct a personalized analysis, provide tailored recommendations, and offer seamless assistance with implementation and ongoing support, including claim processes.",
  },
  {
    question: "Do you assist with claim settlements?",
    answer: "Yes, absolutely. We provide complete assistance with documentation review and guidance throughout the claim settlement process to ensure a hassle-free experience and avoid rejections due to procedural errors.",
  },
  {
    question: "Can you help with corporate and Keyman insurance?",
    answer: "Indeed. We offer specialized solutions for businesses, including structuring Keyman Insurance for critical personnel and directors, planning buy-sell agreement-based insurance, and advising on comprehensive group mediclaim policies for employees.",
  },
];


export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: '',
    mobile: '',
    email: '',
    agreedToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      alert('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', mobile: '', email: '', agreedToTerms: false });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Insurance Advisory | Perificio - Your Financial Protectors</title>
        <meta
          name="description"
          content="Personalized, tax-aligned insurance advice from CAs. Protect your income, family, and future with expert guidance from Perificio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-orange-50 text-gray-900 font-inter">
        {/* Hero Section */}
        <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gradient-to-b from-orange-50 to-orange-100 relative overflow-hidden">
   

          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-blue-900 font-poppins">
              <span className="text-red-600">Protect</span> What You Have <span className="text-blue-700">Built</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl text-justify">
              Informed financial planning isn&apos;t complete without protection. We assist you in choosing tax-efficient, goal-aligned
              insurance products that safeguard your income, family, and future assets—without overpaying or overcommitting.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8 w-full max-w-lg z-10">
            <img
              src="/assets/insurance1.png"
              alt="Family protected by insurance, financial security"
              className="rounded-2xl shadow-xl w-full h-auto object-cover transform hover:scale-105 transition duration-300 ease-in-out border-4 border-orange-200"
            />
          </div>
        </section>

        {/* Introduction to Services Section */}

        {/* New - Decide Right Insurance Mix CTA */}


        {/* Our Support/Services Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-orange-50 border-t border-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900 font-poppins">
            Our Support Includes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-justify">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-orange-100 rounded-xl shadow-md p-6 flex flex-col items-start text-left border border-orange-200 hover:shadow-lg transition duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-800 ml-3 text-center">{service.title}</h3>
                </div>
                <ul className="text-gray-700 list-disc list-outside pl-2 text-base space-y-2 text-justify">
                  {service.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-orange-100 border-t border-orange-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900 font-poppins">
            Our Simple Advisory Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-orange-300 hover:shadow-lg transition duration-300 ease-in-out">
                {step.icon}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.step}</h3>
                <p className="text-gray-700 text-base text-justify">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Clients Trust Us Section */}
     

        {/* Testimonials Section */}
       

        {/* FAQs Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-orange-100 border-t border-orange-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900 font-poppins">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-orange-200">
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-blue-800 focus:outline-none font-poppins"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <FaQuestionCircle className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 text-red-600' : 'rotate-0 text-blue-600'}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-5 text-gray-700 text-base border-t border-orange-200  text-justify">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
   
      </main>
      {/* Global Font Imports (Ensure these are in your global CSS or _app.tsx if using Next.js for global application) */}

    </>
  );
}