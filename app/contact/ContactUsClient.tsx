'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUsClient: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [popup, setPopup] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({ show: false, success: true, message: '' });

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Something went wrong');

      setPopup({ show: true, success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setPopup({ show: true, success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred.' });
    }

    setTimeout(() => setPopup((prev) => ({ ...prev, show: false })), 3000);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {popup.show && (
          <div className="fixed top-5 right-5 z-50 bg-white border rounded-lg shadow-lg p-4 flex items-center gap-3 animate-bounce-in">
            {popup.success ? <AiOutlineCheckCircle className="text-green-500 text-2xl" /> : <AiOutlineCloseCircle className="text-red-500 text-2xl" />}
            <span className="text-sm text-gray-800 font-medium">{popup.message}</span>
          </div>
        )}

        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
            Contact <span className="text-red-700">Perficio</span>
          </h1>
        </div>

        <section id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100" style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}>
          <div className="space-y-8 text-justify">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4 font-poppins">Our Details</h2>
              <p className="text-gray-700 text-lg font-inter mb-2">We&apos;re always ready to listen.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4" aria-hidden="true">📍</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 font-poppins">Visit Us</h3>
                  <address className="text-gray-700 font-inter not-italic">
                    Office no 23/24 | A Wing | Mezzanine Floor | Satyam Shopping Centre | M.G.Road | Ghatkopar (East) | Mumbai-400 077
                    <br />T: 022 49764411
                  </address>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4" aria-hidden="true">📞</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 font-poppins">Call Us</h3>
                  <p className="text-gray-700 font-inter">
                    <a href="tel:+9102249764411" className="hover:underline">+91 022 49764411</a><br />
                    Available Mon-Fri, 10 AM - 7 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-3xl mr-4" aria-hidden="true">📧</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 font-poppins">Email Us</h3>
                  <p className="text-gray-700 font-inter">
                    <a href="mailto:info@perficio.com" className="hover:underline">info@perficio.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 sm:p-8 rounded-lg shadow-inner border border-orange-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 font-poppins text-center lg:text-left">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Form fields same as before, simplified for SEO focus */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-poppins mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-orange-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-poppins mb-2">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-orange-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-poppins mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-orange-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-poppins mb-2">Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 border border-orange-300 rounded-md" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md shadow-md transition transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-xl shadow-lg border border-orange-100" style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }}>
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6 font-poppins">Find Us on the Map</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden border border-orange-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.822606552278!2d72.90562637519159!3d19.07166188214349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d0d3d52d9%3A0xc3f8f1722e96d11!2sSatyam%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1719152341549!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Satyam Shopping Centre, Ghatkopar"></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsClient;
