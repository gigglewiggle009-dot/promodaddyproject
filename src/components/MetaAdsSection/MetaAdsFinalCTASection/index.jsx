"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const MetaAdsFinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-5xl text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Get More Leads Through{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meta Ads?
            </span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Get a FREE Meta Ads audit. We’ll review your campaigns and recommend
            a data-driven strategy to maximize ROI on Facebook & Instagram.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link href="/contact">
              <button className="rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 sm:px-10 sm:text-base">
                Get Free Meta Ads Audit →
              </button>
            </Link>
          </div>

          {/* Contact Row */}
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-white/[0.03] text-purple-300">
                <Phone size={20} />
              </div>
              <p className="text-base text-white leading-relaxed">
                +91 9602089182 <br />
                +91 8690522210
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-white/[0.03] text-purple-300">
                <Mail size={20} />
              </div>
              <p className="text-base text-white break-all sm:break-normal">
                promodaddydigital@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-white/[0.03] text-purple-300">
                <MapPin size={20} />
              </div>
              <p className="text-base text-white leading-relaxed">
                Mahaveer Nagar Vistar Yojana,
                <br />
                Kota, Rajasthan - 324005
              </p>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsFinalCTASection;