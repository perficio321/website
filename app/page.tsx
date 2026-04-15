import AnimatedSection from "@/components/AnimatedComponent/AnimatedSection";
import MovingImages from "@/components/HeroContainer/MovingImages";
import Testinomials from "@/components/Testinomials/Testinomials";
import { Rubik } from "next/font/google";
import Image from "next/image";
import DisplayContent from "@/components/Blogs/DisplayContent";
import ChatBot from "@/components/Chatbot/Chatbot";
import FloatingChatbot from "@/components/ChatbotNew/FloatingChatbot";
const rubik = Rubik({
  weight: "600",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
});

const Home = () => {
  const headerBanner = "/assets/Topbanner.jpg"; // Path to your main header banner

  return (
    <div className="min-h-screen bg-amber-100 text-gray-900 relative">
      {/* SEO Headline */}
      <h1 className="sr-only">Perficio - Professional Financial Assistant and Wealth Management in India</h1>

      {/* Header Banner */}
      <section
        id="header-banner"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden"
      >
        <Image
          src={headerBanner}
          alt="Perficio - Expert Financial Planning and Wealth Management"
          className="object-contain md:object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
      </section>

      {/* New Section with "Living well today..." */}
      <section className="  w-full bg-amber-100 py-2 md:py-4 flex items-center justify-center relative overflow-hidden font-mono">
        {/* Content container */}
        <div className="relative z-10 text-center p-4 mx-4">
          <h2
            className={`${rubik.className} italic  text-md md:text-2xl   font-extrabold text-blue-900  md:tracking-wide`}
          >
            <span className="text-red-500">&quot;</span>
            We would like to be known as people who add meaningful value to the
            financial lives of our clients. To be respected as a company which
            is known for its high moral standards.
            <span className="text-red-600">&quot;</span>
          </h2>
        </div>
      </section>

      {/* Added relative for chatbot positioning */}
      {/* Dynamic Services Advertising Banner with Rolling Cards   */}

      <section className="bg-amber-100">
        <MovingImages />
      </section>
      <AnimatedSection>
        {/* Testimonials Section */}
        <section >
          <Testinomials />
        </section>
      </AnimatedSection>

      {/* Blog/Knowledge Base Section */}

      <section className="py-12 md:py-20 px-3 md:px-6 sm:px-4 bg-orange-50">
        <DisplayContent />
      </section>
        <FloatingChatbot />
    </div>
  );
};

export default Home;
