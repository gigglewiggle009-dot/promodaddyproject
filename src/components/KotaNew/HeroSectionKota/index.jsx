"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SharedLayout } from "@/components/SharedComponent";

export const HeroSectionKota = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setStatusMessage("Please fill all fields.");
      return;
    }

    const whatsappNumber = "918690522210";

    const text = `🚀 New Lead from Website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    setStatusMessage("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      <SharedLayout>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center text-white">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 sm:mb-6 leading-tight">
              Digital Marketing Agency in Kota, Rajasthan — Where Local
              Businesses Come to Grow Online
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              From coaching institutes to real estate brands — we run SEO,
              Google Ads & social media campaigns that bring actual leads, not
              just traffic. Local team. Proven results. No lock-in contracts.
            </p>

            <Link href="/contact">
  <button
    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium text-white 
    bg-gradient-to-r from-purple-500 to-indigo-600 
    hover:from-purple-600 hover:to-indigo-700 
    transition-all duration-300 
    shadow-lg shadow-purple-500/20 
    hover:shadow-purple-500/40"
  >
    Get Your FREE Audit Today →
  </button>
</Link>
          </div>

          {/* RIGHT FORM */}
          <div
            id="hero-quote-form"
            className="relative bg-black/60 backdrop-blur-xl rounded-xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          >
            {/* GLOW BORDER */}
            <div className="absolute inset-0 rounded-xl border border-purple-500/20 pointer-events-none animate-pulse" />

            <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
              Get A Quote
            </h3>

            <form onSubmit={handleSubmit}>
              
              {/* INPUT STYLE */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="w-full mb-3 sm:mb-4 px-4 py-3 bg-transparent border border-white/20 rounded-md text-white text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 hover:border-white/40"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                required
                className="w-full mb-3 sm:mb-4 px-4 py-3 bg-transparent border border-white/20 rounded-md text-white text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 hover:border-white/40"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="w-full mb-3 sm:mb-4 px-4 py-3 bg-transparent border border-white/20 rounded-md text-white text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 hover:border-white/40"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                required
                rows="4"
                className="w-full mb-4 sm:mb-6 px-4 py-3 bg-transparent border border-white/20 rounded-md text-white text-sm sm:text-base outline-none resize-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 hover:border-white/40"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                Submit
              </button>

              {statusMessage && (
                <p className="mt-4 text-sm text-gray-300">{statusMessage}</p>
              )}
            </form>
          </div>

        </div>
      </SharedLayout>
    </section>
  );
};