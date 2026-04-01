"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const MetaAdsHero = () => {
  return (
    <section className="bg-[#0b0b0b] text-white pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.05),transparent_40%,transparent_60%,rgba(168,85,247,0.05))] pointer-events-none" />

      <SharedLayout>
        {/* Breadcrumb */}
        <div className="mb-10 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2 text-gray-600">/</span>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <span className="mx-2 text-gray-600">/</span>
          <span className="text-purple-400">Meta Ads India</span>
        </div>

        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs sm:text-sm border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-400">
            ◎ Meta Ads Management India
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            <span className="text-white">Meta Ads Agency India -</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Facebook & Instagram Ads
              <br />
              That Generate Real Leads
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mb-10">
            With 400+ million Facebook users and 250+ million Instagram users in
            India, Meta advertising is one of the most powerful ways to reach
            your exact target audience. Promodaddy Digital creates
            precision-targeted Meta Ad campaigns that speak to your audience in
            their language, at the right time, on the right platform — at the
            lowest possible cost per lead.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
                Start Your Meta Ads Campaign — Free Audit →
              </button>
            </Link>

            <a href="tel:+918690522210" className="w-full sm:w-auto">
              <button className="w-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] text-white font-medium px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3">
                <Phone size={18} />
                +91 86905 22210
              </button>
            </a>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsHero;