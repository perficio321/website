"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link if you intend to use it for T&C, Privacy Policy

const QuickContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !mobile || !agreed) {
      setMessage("Please fill all required fields and agree to the terms.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: mobile,
          subject: "Quick Contact",
          message: "Quick inquiry from homepage",
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to submit form");

      setMessage("✅ Submitted successfully!");
      setName("");
      setMobile("");
      setEmail("");
      setAgreed(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(`❌ ${err.message}`);
      } else {
        setMessage("❌ An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    // Updated background to your orange-50
    <div className="py-12 md:py-20 bg-orange-50 font-inter">
      {/* Increased max-w for container consistency, similar to main page */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/* Updated text-blue-800 for consistency */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-blue-800 leading-tight mb-4">
            <span className="block">GOT QUESTIONS?</span>
            {/* Kept specific red for strong emphasis on "LET'S TALK!" */}
            <span className="block text-[#B91C1C]">LET&apos;S TALK!</span>
          </h2>
          {/* Ensure gray-700 and font-inter for consistency */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0 font-inter">
            Schedule a <span className="font-bold">FREE</span> call with our
            expert Financial Advisor and gain personalized insights today.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
          {/* Consider changing the logo or its background if it doesn't fit the new theme.
              Or, if the logo has transparent background, it will blend fine. */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
          </div>
          <hr className="mb-4 sm:mb-6" />

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700 font-inter"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                // Updated focus ring to blue-600
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm font-inter"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block mb-1 text-sm font-medium text-gray-700 font-inter"
              >
                Mobile Number *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 sm:p-3">
                <span className="mr-2 text-base sm:text-xl">🇮🇳</span>
                <input
                  type="tel"
                  id="mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your number"
                  // Updated focus ring to blue-600
                  className="w-full outline-none focus:ring-0 focus:ring-blue-600 text-sm font-inter"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700 font-inter"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                // Updated focus ring to blue-600
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm font-inter"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="terms"
                className="flex items-center text-xs sm:text-sm text-gray-700 font-inter"
              >
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  // Updated accent color to blue-600
                  className="mr-2 accent-blue-600"
                  required
                />
                I agree to the{" "}
                <Link href="#" className="text-blue-600 underline ml-1">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 underline ml-1">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              // Updated button background to blue-600 and hover to blue-700
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-md transition font-poppins"
            >
              {loading ? "Submitting..." : "Book Free Call"}
            </button>

            {message && (
              <p
                className={`text-sm mt-2 font-inter ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickContactSection;
