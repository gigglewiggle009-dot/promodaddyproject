"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const timelineData = [
  {
    label: "Week 1",
    text: "Pixel setup, audience research, creative brief, campaign architecture planning",
  },
  {
    label: "Week 2",
    text: "Campaigns go live. Learning phase begins. Initial impressions and clicks collected.",
  },
  {
    label: "Week 3–4",
    text: "First optimization round - pause underperformers, scale winners, refine audiences",
  },
  {
    label: "Month 2",
    text: "CPL improves 20-40%, lookalike audiences refining, retargeting funnel active",
  },
  {
    label: "Month 3+",
    text: "Fully optimized - stable CPL, scaling budget on best performing ad sets",
  },
];

export const MetaAdsTimelineSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10 max-w-6xl">
          {/* Heading */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Realistic Results - </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                What You Can Expect
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400 max-w-3xl">
              Month-by-month progress when you start Meta Ads with Promodaddy
            </p>
          </div>

          {/* Timeline Rows */}
          <div className="space-y-4">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-purple-500/25 hover:bg-white/[0.04] hover:shadow-[0_0_24px_rgba(139,92,246,0.08)]"
              >
                <div className="flex flex-col gap-3 px-5 py-5 sm:px-6 md:flex-row md:items-center md:gap-6 md:py-6">
                  {/* Left label */}
                  <div className="md:w-[150px] md:min-w-[150px]">
                    <span className="inline-flex items-center rounded-md bg-purple-500/10 px-3 py-1.5 text-sm sm:text-base font-semibold text-yellow-400">
                      {item.label}
                    </span>
                  </div>

                  {/* Right text */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-gray-200">
                      {item.text}
                    </p>
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

export default MetaAdsTimelineSection;