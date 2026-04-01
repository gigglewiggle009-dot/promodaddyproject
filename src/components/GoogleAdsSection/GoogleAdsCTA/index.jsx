"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const GoogleAdsCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#14101f] to-[#0d0b12] px-6 py-12 shadow-[0_0_60px_rgba(139,92,246,0.08)] sm:px-8 md:px-12 md:py-16">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_60%)]" />

            <div className="relative z-10 text-center">
              <p className="mb-3 text-sm font-medium text-purple-400">
                Ready to Scale?
              </p>

              <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Ready to Get More Leads Through{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Google Ads?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                Get a <span className="font-semibold text-white">FREE Google Ads Audit</span>{" "}
                — we’ll review your current campaigns or show you what is possible
                for your business. No cost. No commitment. Just clear strategy
                to improve leads, reduce wasted spend, and increase ROI.
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base">
                Our team will analyze your market, competitors, targeting, and
                campaign opportunities to recommend the right Google Ads strategy
                for faster growth.
              </p>

              {/* CTA button */}
              <div className="mt-8">
                <Link href="/contact">
                  <button className="rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 sm:px-10 sm:text-base">
                    START YOUR GOOGLE ADS CAMPAIGN →
                  </button>
                </Link>
              </div>

              {/* Contact blocks */}
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Phone */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(139,92,246,0.06)]">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>

                  <a
                    href="tel:+919602089182"
                    className="text-sm leading-relaxed text-gray-300 transition hover:text-white sm:text-base"
                  >
                    +91 9602089182
                  </a>
                  <a
                    href="tel:+918690522210"
                    className="mt-2 text-sm leading-relaxed text-gray-300 transition hover:text-white sm:text-base"
                  >
                    +91 8690522210
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(139,92,246,0.06)]">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>

                  <a
                    href="mailto:promodaddydigital@gmail.com"
                    className="text-sm leading-relaxed text-gray-300 transition hover:text-white sm:text-base"
                  >
                    promodaddydigital@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(139,92,246,0.06)]">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>

                  <a
                    href="https://maps.google.com/?q=Plot+No.+26,+Mahaveer+Nagar+Vistar+Yojana,+Kota,+Rajasthan+324005,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed text-gray-300 transition hover:text-white sm:text-base"
                  >
                    Plot No. 26, Mahaveer Nagar Vistar Yojana,
                    <br />
                    Kota, Rajasthan 324005, India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsCTA;