"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    quote:
      "Their understanding of RERA, TDR, and real estate-specific GST complications is exceptional. With Perficio handling our project audits and GST reconciliations, we’re always confident of staying compliant.",
    author: "Sahil Mehta",
    role: "CEO, Vardhman Group Of Builders and Developers",
  },
  {
    quote:
      "100% satisfied with the services provided. Extremely kind, humble, and always available to guide us with in-depth, quality knowledge. Truly appreciate the commitment and expertise.",
    author: "Jitesh Shah",
    role: "Hansraj Mathurdas Surveyors PVT LTD",
  },
  {
    quote:
      "We have been extremely satisfied with the services rendered by Perficio for our TDS and GST compliance. Their team is knowledgeable, prompt in their responses, and ensures timely guidance on complex matters. Their support has helped us stay compliant and focus on our core operations in the offshore oil services sector.",
    author: "Chandan Papalkar",
    role: "Manager in Finance",
  },
  {
    quote:
      "Our GST refunds were stuck for months until we engaged Perficio. Their clarity on export documentation, LUT, and refunds helped us recover significant amounts on time, without repeated follow-ups.",
    author: "Gemini Exports",
    role: "",
  },
  {
    quote:
      "I am extremely happy to be a part of the Perficio family of clients.The professional approach to our business and dedication to giving us the best solutions to our problems has resulted in consistently positive outcomes. We are proud to say that we have no unresolved issues with any official agency and this is testament to correct and sound advice",
    author: "Ashish Meghani",
    role: "Founder, Wraptech Machines",
  },
  {
    quote:
      "Navigating GST in the infrastructure space is challenging, but Mehta & Shah made it seamless. Their hands-on approach to monthly filing, RCM advisory, and reconciliation has ensured zero disruptions and full compliance. Their team is dependable and thorough.",
    author: "Premal Shah",
    role: "Founder, Devanse Infra",
  },
  {
    quote:
      "We have been working with Perficio for past 8yrs now and we are pleased to be associated with them for a long time. Their discipline and meticulous approach towards their work, and commitment to deadlines is noteworthy. We wish them all the best for their endeavours",
    author: "Amol Chaphekar Suyash Global Pvt Ltd",
  },
  {
    quote:
      "We have worked with Perficio for TDS Compliance, indirect tax audits and complex GST reconciliations. Their technical knowledge is exceptional, and their team has always ensured regulatory deadlines are met without compromising accuracy.",
    author: "Sandeep Vaidya",
    role: "Founder, Designplus Infra",
  },
  {
    quote:
      "We have been working with Perficio for our GST-related needs and are extremely satisfied with their services. The team is highly knowledgeable, proactive, and well-versed with evolving tax regulations. Their clear, timely, and practical advice has made our GST compliance smooth and hassle-free. We highly recommend Perficio to anyone seeking a reliable tax consultant.",
    author: "Bhavesh Doshi",
    role: "Founder, Entelechy group",
  },
];

// Duplicate list to enable smooth infinite loop
const infiniteTestimonials = [...testimonials, ...testimonials];

const InfiniteTestimonials = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Start scrolling on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // pause at current position
  };

  const handleMouseLeave = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section className="py-16 bg-amber-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-red-500"> What Our</span> <span className="text-blue-500">Clients Say</span> 
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={containerRef}
            animate={controls}
            className="flex w-max gap-6 cursor-pointer"
          >
            {infiniteTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-amber-50 rounded-2xl shadow-md p-6 w-[300px] flex-shrink-0 flex flex-col justify-between"
              >
                <p className="text-gray-700 text-sm mb-4 text-justify">“{t.quote}”</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;
