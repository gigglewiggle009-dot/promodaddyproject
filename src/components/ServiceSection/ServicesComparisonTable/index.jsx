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
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              All Digital Marketing Services{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                — At a Glance
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Compare timelines, strengths, and ideal use-cases for every service
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.06)] md:block">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-white/10 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
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
                  className="grid grid-cols-4 items-center border-b border-white/5 px-6 py-5 transition duration-300 last:border-b-0 hover:bg-white/[0.03]"
                >
                  <div className="pr-4 text-base font-semibold text-white">
                    {item.service}
                  </div>

                  <div className="pr-4 text-sm leading-6 text-gray-300">
                    {item.bestFor}
                  </div>

                  <div className="pr-4">
                    <span className="inline-flex rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                      {item.timeline}
                    </span>
                  </div>

                  <div className="text-sm leading-6 text-gray-300">
                    {item.idealFor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 md:hidden">
            {servicesComparisonData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_20px_rgba(139,92,246,0.05)]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.service}
                </h3>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-purple-300">
                      Best For
                    </p>
                    <p className="mt-1 text-sm text-gray-300">{item.bestFor}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-purple-300">
                      Timeline
                    </p>
                    <div className="mt-1">
                      <span className="inline-flex rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                        {item.timeline}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-purple-300">
                      Ideal For
                    </p>
                    <p className="mt-1 text-sm text-gray-300">{item.idealFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesComparisonTable;