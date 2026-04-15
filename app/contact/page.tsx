import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | Perficio Advisory Services",
  description: "Get in touch with Perficio Advisory Services in Mumbai, Agra, Delhi, or Ahmedabad for expert financial planning and taxation assistance.",
  alternates: {
    canonical: "https://www.perficios.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Perficio Advisory Services",
  "image": "https://www.perficios.com/perficio-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office no 23/24, A Wing, Mezzanine Floor, Satyam Shopping Centre, M.G.Road, Ghatkopar (East)",
    "addressLocality": "Mumbai",
    "postalCode": "400077",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.07166188214349",
    "longitude": "72.90562637519159"
  },
  "url": "https://www.perficios.com/contact",
  "telephone": "+91-9833892635",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUsClient />
    </>
  );
}