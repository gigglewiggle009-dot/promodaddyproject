"use client";

import React from "react";
import Link from "next/link";
import { SharedLayout } from "@/components/SharedComponent";

export const SeoHero = () => {
  return (
    <section className="bg-[#0b0b0b] text-white pt-28 pb-20 relative overflow-hidden">
      
      {/* 🔮 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)] pointer-events-none" />

      <SharedLayout>
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs sm:text-sm border border-yellow-500/30 rounded-full bg-yellow-500/10 text-yellow-400">
            🚀 India's #1 SEO Agency
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            SEO Services in India —{" "}
            <span className="text-yellow-400">Rank Higher on Google</span>,{" "}
            Get More Customers Organically
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            In a country with 900+ million internet users, being on Google’s first page is not optional — it is survival. Promodaddy Digital offers data-driven SEO services in India that help businesses rank for high-intent keywords, attract real customers, and grow revenue without depending on paid ads.
          </p>

          {/* CTA */}
          <Link href="/contact">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
              Get Your Free SEO Audit — Zero Cost →
            </button>
          </Link>

        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoHero;