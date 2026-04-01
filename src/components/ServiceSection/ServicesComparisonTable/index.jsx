"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const servicesComparisonData = [
  {
    service: "SEO Services",
    bestFor: "Long-term organic traffic",
    timeline: "45-90 days",
    idealFor: "All businesses",
  },
  {
    service: "Google Ads / PPC",
    bestFor: "Instant leads & sales",
    timeline: "From Day 1",
    idealFor: "Lead gen, ecom",
  },
  {
    service: "Meta Ads",
    bestFor: "Lead gen & brand awareness",
    timeline: "From Day 1",
    idealFor: "B2C, coaching",
  },
  {
    service: "Social Media Marketing",
    bestFor: "Brand building & community",
    timeline: "30-60 days",
    idealFor: "All businesses",
  },
  {
    service: "YouTube Marketing",
    bestFor: "Video reach & authority",
    timeline: "60-90 days",
    idealFor: "Coaching, D2C",
  },
  {
    service: "Website Development",
    bestFor: "Professional online presence",
    timeline: "2-4 weeks",
    idealFor: "New businesses",
  },
  {
    service: "Content Marketing",
    bestFor: "Organic traffic & authority",
    timeline: "60-120 days",
    idealFor: "B2B, SaaS",
  },
  {
    service: "Local SEO",
    bestFor: "Local & Google Maps ranking",
    timeline: "45-90 days",
    idealFor: "Local business",
  },
  {
    service: "Celebrity PR & Branding",
    bestFor: "Public image & media authority",
    timeline: "30-60 days",
    idealFor: "Public figures",
  },
  {
    service: "Influencer Marketing",
    bestFor: "Mass reach & brand trust",
    timeline: "1-4 weeks",
    idealFor: "D2C, lifestyle",
  },
];

export const ServicesComparisonTable = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl leading-tight">
              All Digital Marketing Services{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                — At a Glance
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Compare timelines, strengths, and ideal use-cases for every service
            </p>
          </div>

          {/* Same Table for Desktop + Mobile */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.06)]">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-white/10 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:px-6 sm:text-sm">
                <div>Service</div>
                <div>Best For</div>
                <div>Timeline</div>
                <div>Ideal For</div>
              </div>

              {/* Rows */}
              <div>
                {servicesComparisonData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 items-center border-b border-white/5 px-4 py-4 transition duration-300 last:border-b-0 hover:bg-white/[0.03] sm:px-6 sm:py-5"
                  >
                    <div className="pr-4 text-sm font-semibold text-white sm:text-base">
                      {item.service}
                    </div>

                    <div className="pr-4 text-xs leading-6 text-gray-300 sm:text-sm">
                      {item.bestFor}
                    </div>

                    <div className="pr-4">
                      <span className="inline-flex rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold text-purple-300 sm:text-xs">
                        {item.timeline}
                      </span>
                    </div>

                    <div className="text-xs leading-6 text-gray-300 sm:text-sm">
                      {item.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional small helper text for mobile */}
          <p className="mt-4 text-center text-xs text-gray-500 md:hidden">
            Swipe left/right to view full table
          </p>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesComparisonTable;