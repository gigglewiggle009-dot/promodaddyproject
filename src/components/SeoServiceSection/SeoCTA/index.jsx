"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const SeoCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.16),_transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(91,39,247,0.04),transparent)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready to Rank on{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Page 1 of Google?
            </span>
          </h2>

          {/* Main content */}
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            Get your{" "}
            <span className="font-semibold text-purple-300">
              FREE SEO Audit
            </span>{" "}
            today — we will analyze your website, identify exactly what is
            holding back your rankings, and tell you what needs to be done to
            rank higher on Google.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            No cost. No commitment. No sales pressure. Just honest advice.
          </p>

          {/* CTA button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(139,92,246,0.30)] transition duration-300 hover:-translate-y-0.5 hover:from-purple-400 hover:via-violet-500 hover:to-indigo-500"
            >
              GET FREE SEO AUDIT →
            </Link>
          </div>

          {/* Contact info row */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+919602089182"
                className="group flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.08)] transition duration-300 group-hover:border-purple-400/50 group-hover:bg-white/[0.06] group-hover:text-purple-200">
                  <Phone size={20} />
                </div>
              </a>

              <a
                href="tel:+919602089182"
                className="mt-4 text-sm leading-7 text-gray-300 transition hover:text-purple-300 sm:text-base"
              >
                +91 9602089182
              </a>
              <a
                href="tel:+918690522210"
                className="text-sm leading-7 text-gray-300 transition hover:text-purple-300 sm:text-base"
              >
                +91 8690522210
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:promodaddydigital@gmail.com"
                className="group flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.08)] transition duration-300 group-hover:border-purple-400/50 group-hover:bg-white/[0.06] group-hover:text-purple-200">
                  <Mail size={20} />
                </div>
              </a>

              <a
                href="mailto:promodaddydigital@gmail.com"
                className="mt-4 text-sm leading-7 text-gray-300 transition hover:text-purple-300 sm:text-base"
              >
                promodaddydigital@gmail.com
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-col items-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kota+Rajasthan+India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.08)] transition duration-300 group-hover:border-purple-400/50 group-hover:bg-white/[0.06] group-hover:text-purple-200">
                  <MapPin size={20} />
                </div>
              </a>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                Offices: Kota, Rajasthan
                <br />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoCTA;