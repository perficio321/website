'use client'; // This directive is crucial for using React Hooks like useEffect and useState in Next.js

import React from 'react';
import Link from 'next/link'; // Ensure Link is imported if used for navigation

const page = () => {
    // Define the features data for Real Estate services
    const features = [
        {
            icon: '🔍', // Search/Discovery icon
            title: 'Expert Property Search',
            description: 'Access curated listings and off-market opportunities tailored to your investment goals, whether residential or commercial.'
        },
        {
            icon: '⚖️', // Balance/Legal icon
            title: 'Legal & Due Diligence',
            description: 'Navigate complex real estate regulations with our comprehensive legal and due diligence support, ensuring secure transactions.'
        },
        {
            icon: '💰', // Money bag icon
            title: 'Investment Advisory',
            description: 'Receive personalized advice on optimal real estate investment strategies, financing options, and market trends for maximum returns.'
        },
        {
            icon: '📈', // Growth chart icon
            title: 'Property Valuation & Analysis',
            description: 'Get accurate property valuations and detailed market analysis to make informed buying, selling, or leasing decisions.'
        },
        {
            icon: '🛠️', // Tools/Maintenance icon
            title: 'Property Management Support',
            description: 'From tenant acquisition to maintenance and rent collection, we offer support to simplify your property management.'
        },
        {
            icon: '🌐', // Globe/Network icon
            title: 'NRI Real Estate Services',
            description: 'Specialized assistance for Non-Resident Indians (NRIs) in buying, selling, and managing properties in India, ensuring compliance and ease.'
        },
    ];

    return (
        // Main container with a consistent light orange background
        <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
            {/* Main content wrapper for consistent spacing and max-width */}
            <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

                {/* Hero Section for Real Estate Page - Using the prominent orange gradient */}
             
                        {/* Heading with blue-900 and  */}
                        <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4  leading-tight">
                            Your Trusted Partner in <span className="text-red-600">Real Estate.</span> {/* Retaining red accent */}
                        </h1>
                        {/* Paragraph text with gray-700 and  */}
                      
        

                {/* Features Section for Real Estate Services - Using the lighter orange gradient */}
             
                    <div className="container mx-auto px-4">
                        {/* Heading with blue-800 and  */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 ">
                            Why Choose Perficio for Your <span className="text-red-600">Property Needs?</span> {/* Retaining red accent */}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    // Card styling with bg-orange-50, border-orange-200, and hover effects
                                    className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200"
                                >
                                    {/* Icon color changed to blue-600 */}
                                    <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                                        {feature.icon}
                                    </div>
                                    {/* Feature title with blue-700 and  */}
                                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 ">
                                        {feature.title}
                                    </h3>
                                    {/* Description with gray-700 and  */}
                                    <p className="text-gray-700 leading-relaxed  text-sm sm:text-base text-justify">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
               

                {/* Call to Action/Contact Section - Using the tertiary orange gradient */}
           
            </main>

            {/* Global Font Imports - It's highly recommended to place this in your _app.js or layout.js for global application */}
         
        </div>
    );
};

export default page;