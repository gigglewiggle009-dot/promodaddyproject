"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const resultStats = [
  {
    number: "2Cr+",
    label: "Google Ad Spend Managed",
  },
  {
    number: "8x",
    label: "ROAS Achieved for D2C Campaigns",
  },
  {
    number: "₹340",
    label: "Average Coaching Lead CPL",
  },
  {
    number: "30-60 Days",
    label: "Optimization Window for Strong Results",
  },
];

const resultHighlights = [
  {
    title: "Coaching Institute Campaigns",
    description:
      "Admission-focused Google Ads campaigns designed for coaching institutes in Kota and across India, with parent-student targeting and seasonal strategy planning.",
  },
  {
    title: "E-Commerce Growth Campaigns",
    description:
      "Search, Shopping, and Performance Max campaigns built to improve product visibility, scale conversions, and drive stronger return on ad spend.",
  },
  {
    title: "Lead Generation for Service Businesses",
    description:
      "Campaign structures focused on high-intent keywords, lower cost per lead, and better conversion tracking for local and national service brands.",
  },
];

const GoogleAdsResults = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.10),_transparent_65%)] pointer-events-none" />

      <SharedLayout>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-purple-400 text-sm mb-3">
              Realistic Results
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Real Numbers. Real Campaigns.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Real ROI.
              </span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              We focus on metrics that actually matter to your business:
              cost per lead, return on ad spend, conversion tracking, and
              long-term campaign efficiency. No vague promises. No vanity-only reporting.
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {resultStats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-center hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">
                  {item.number}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Lower Highlight Blocks */}
          <div className="grid md:grid-cols-3 gap-6">
            {resultHighlights.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 hover:border-purple-500/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsResults;