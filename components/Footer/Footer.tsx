import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  RiMoneyDollarCircleFill,
  // RiBuilding2Fill,
  RiLinkM,
  // RiNewspaperFill
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950 text-white px-6 md:px-20 pt-16 pb-10 text-sm font-inter overflow-hidden">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 z-10 relative">
        {/* Column 1: Logo, Contact & Social */}
        <div className="space-y-6">
          <div className="w-[170px] h-[170px] relative mx-auto lg:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/assets/LogoTransparent.png"
              alt="Perificio Logo"
              fill
              className="object-cover scale-105" // scale slightly to force cropping
              priority
            />
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <FaPhoneAlt className="text-blue-300 text-xl" />
            <a
              href="tel:+919699800600"
              className="hover:text-white transition-colors duration-200 text-base"
            >
              +91-9699 800 600
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <FaEnvelope className="text-blue-300 text-xl" />
            <a
              href="mailto:online@perificio.com"
              className="hover:text-white transition-colors duration-200 text-base"
            >
              online@perificio.com
            </a>
          </div>

          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19KDXFYx5x/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/deepali-mehta-0b45137"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-700 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/perficioadvisory?igsh=MTNnZ2Rnc2FrOGR0cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <RiMoneyDollarCircleFill className="text-2xl" /> Our Services
          </h3>
          <div className="grid grid-cols-1 gap-3 text-white/80 text-base">
            <a href="direct-tax" className="hover:text-white transition-colors">
              Direct Tax Consulting
            </a>
            <a
              href="indirect-tax"
              className="hover:text-white transition-colors"
            >
              Indirect Tax Solutions
            </a>
            <a href="mca" className="hover:text-white transition-colors">
              MCA Services
            </a>
            <a href="rera" className="hover:text-white transition-colors">
              RERA Advisory
            </a>
            <a href="fema" className="hover:text-white transition-colors">
              International Taxation
            </a>
            <a href="insurance" className="hover:text-white transition-colors">
              Insurance
            </a>
            <a href="invest" className="hover:text-white transition-colors">
              Investment Planning
            </a>
            <a
              href="real-estate"
              className="hover:text-white transition-colors"
            >
              Real Estate Guidance
            </a>
          </div>
        </div>

        {/* Column 3: Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <RiLinkM className="text-2xl" /> Important Links
          </h3>
          <ul className="space-y-3 text-white/80 text-base">
            <li>
              <a
                href="all-blogs"
                className="hover:text-white transition-colors duration-200"
              >
                Blog & Insights
              </a>
            </li>
            <li>
              <a
                href="about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Address */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <FaMapMarkerAlt className="text-xl" /> Our Location
          </h3>
          <address className="text-white/70 not-italic text-base leading-relaxed">
            Office no 23/24 | A Wing | Mezzanine Floor | Satyam Shopping Centre
            | M.G.Road | Ghatkopar (East) | Mumbai-400 077| T:022 49764411
          </address>
        </div>
      </div>

      {/* ===== START: ADDED SECTION ===== */}
      {/* Divider */}
      <hr className="my-8 border-blue-800/50" />

      {/* Bottom Section: Copyright and Credit */}
      <div className="text-center text-white/70 text-sm">
        <p className="mb-2">
          Copyright &copy; 2025 Perficio. All rights reserved.
        </p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/pratik-ohol-344b9b30b"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/90 hover:text-white hover:underline transition-colors duration-300"
          >
            Pratik Ohol
          </a>
        </p>
      </div>
      {/* ===== END: ADDED SECTION ===== */}
      
    </footer>
  );
};

export default Footer;