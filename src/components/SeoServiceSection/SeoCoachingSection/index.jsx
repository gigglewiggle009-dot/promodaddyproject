"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const strategyPoints = [
  "Rank for 'best [subject] coaching in [city]' keyword combinations",
  "Google Maps Top 3 optimization for 'coaching near me' searches",
  "Faculty profile pages — build individual teacher authority",
  "Student result pages — powerful trust signal for Google",
  "YouTube SEO for faculty lecture videos — India's #1 study platform",
  "WhatsApp integration — convert organic traffic to direct inquiries",
  "Admission season content strategy — peak traffic in March-May",
];

export const SeoCoachingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              Specialized SEO for{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Coaching Institutes in India
              </span>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                Kota is India's coaching capital. But Allen, Resonance, and
                Bansal are not your only competition — thousands of small and
                mid-size coaching institutes across India are fighting for the
                same students online. Most of them are invisible on Google.
              </p>

              <p className="text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                Promodaddy Digital has worked extensively in the Kota education
                market. We understand the coaching institute admission cycle,
                the parent&apos;s search journey, and exactly what it takes to
                rank when someone searches &apos;best IIT coaching in Kota&apos;
                or &apos;NEET coaching near me&apos;.
              </p>
            </div>
          </div>

          {/* Strategy box */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.08)] md:mt-10 md:p-8">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Our Coaching Institute SEO Strategy
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
              {strategyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm leading-7 text-gray-300 sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-purple-400"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoCoachingSection;