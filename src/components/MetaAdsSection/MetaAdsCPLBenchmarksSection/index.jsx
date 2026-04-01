"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const benchmarkData = [
  {
    industry: "Real Estate",
    averageCpl: "Rs.300–500",
    bestFormat: "Lead Ads + WhatsApp",
    targetCpl: "Rs.250–400",
    highlight: true,
    // badge: "#1",
  },
  {
    industry: "Hotels & Hospitality",
    averageCpl: "Rs.400–900",
    bestFormat: "Lead Ads + Reels",
    targetCpl: "Rs.350–800",
  },
  {
    industry: "Coaching Institutes",
    averageCpl: "Rs.150–350",
    bestFormat: "Lead Ads + Reels",
    targetCpl: "Rs.100–300",
  },
  {
    industry: "Healthcare / Clinics",
    averageCpl: "Rs.80–200",
    bestFormat: "Lead Ads + Stories",
    targetCpl: "Rs.70–150",
  },
  {
    industry: "E-Commerce",
    averageCpl: "Rs.50–150",
    bestFormat: "Catalog + Reels",
    targetCpl: "Rs.30–100",
  },
  {
    industry: "Local Services",
    averageCpl: "Rs.30–120",
    bestFormat: "Lead Ads + WhatsApp",
    targetCpl: "Rs.20–100",
  },
];

export const MetaAdsCPLBenchmarksSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">India-Specific </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                CPL Benchmarks
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400 max-w-3xl">
              Average Cost Per Lead across industries in India - and what we
              target for you
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#060b18]">
                  <th className="px-5 py-5 text-left text-sm sm:text-base font-semibold text-white">
                    Industry
                  </th>
                  <th className="px-5 py-5 text-left text-sm sm:text-base font-semibold text-gray-300">
                    Average CPL (India)
                  </th>
                  <th className="px-5 py-5 text-left text-sm sm:text-base font-semibold text-gray-300">
                    Best Ad Format
                  </th>
                  <th className="px-5 py-5 text-left text-sm sm:text-base font-semibold text-purple-300">
                    Our Target CPL
                  </th>
                </tr>
              </thead>

              <tbody>
                {benchmarkData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.03] ${
                      item.highlight ? "bg-white/[0.05]" : "bg-transparent"
                    }`}
                  >
                    <td
                      className={`px-5 py-5 text-sm sm:text-base font-medium text-white ${
                        item.highlight ? "border-l-2 border-purple-400" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.badge && (
                          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 px-2 text-xs font-bold text-white shadow-md">
                            {item.badge}
                          </span>
                        )}
                        <span>{item.industry}</span>
                      </div>
                    </td>

                    <td className="px-5 py-5 text-sm sm:text-base text-gray-300">
                      {item.averageCpl}
                    </td>

                    <td className="px-5 py-5 text-sm sm:text-base text-gray-300">
                      {item.bestFormat}
                    </td>

                    <td className="px-5 py-5 text-sm sm:text-base font-semibold text-purple-300">
                      {item.targetCpl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsCPLBenchmarksSection;