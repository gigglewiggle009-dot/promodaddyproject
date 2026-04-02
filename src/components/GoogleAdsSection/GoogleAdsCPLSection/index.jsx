"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const benchmarkData = [
  {
    industry: "Real Estate",
    averageCpl: "Rs.150-300",
    campaignFocus:
      "Property inquiry campaigns, site visit bookings, project launch ads, RERA-compliant ad copies",
    targetKeywords: "'flats in [city]', 'property dealer near me'",
    highlight: true,
  },
  {
    industry: "Hotels & Hospitality",
    averageCpl: "Depends on city & season",
    campaignFocus:
      "Direct room booking campaigns, restaurant footfall ads, banquet & wedding event lead generation",
    targetKeywords: "hotel booking, banquet hall, restaurant near me",
  },
  {
    industry: "Coaching & Education",
    averageCpl: "Rs.300-500",
    campaignFocus:
      "Admission lead generation campaigns, course promotion, peak exam season targeting",
    targetKeywords: "IIT coaching, NEET coaching, foundation course",
  },
  {
    industry: "E-Commerce",
    averageCpl: "Varies by product category",
    campaignFocus:
      "Shopping Ads, Performance Max, product visibility campaigns for Indian online stores",
    targetKeywords: "high-intent product keywords",
  },
  {
    industry: "Healthcare",
    averageCpl: "Depends on specialty/location",
    campaignFocus:
      "Patient inquiry campaigns for clinics, hospitals, and doctors in India",
    targetKeywords: "clinic near me, doctor in [city], hospital in [city]",
  },
];

const GoogleAdsCPLSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              <span className="text-white">Google Ads </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Industry CPL Benchmarks
              </span>
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Priority-focused Google Ads industries for Promodaddy, with lead
              cost benchmarks and campaign focus areas.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <table className="min-w-[1100px] w-full border-collapse">
                <thead>
                <tr className="border-b border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-purple-800/40 to-indigo-900/40 backdrop-blur-sm">
                    
                    <th className="px-5 py-5 text-left text-sm font-semibold sm:text-base">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Industry
                    </span>
                    </th>

                    <th className="px-5 py-5 text-left text-sm font-semibold sm:text-base">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Average CPL
                    </span>
                    </th>

                    <th className="px-5 py-5 text-left text-sm font-semibold sm:text-base">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Campaign Focus
                    </span>
                    </th>

                    <th className="px-5 py-5 text-left text-sm font-semibold sm:text-base">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Target Keywords / Notes
                    </span>
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
                      className={`px-5 py-5 text-sm font-medium text-white sm:text-base ${
                        item.highlight ? "border-l-2 border-purple-400" : ""
                      }`}
                    >
                      {item.industry}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-300 sm:text-base">
                      {item.averageCpl}
                    </td>

                    <td className="px-5 py-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                      {item.campaignFocus}
                    </td>

                    <td className="px-5 py-5 text-sm font-medium leading-relaxed text-purple-300 sm:text-base">
                      {item.targetKeywords}
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

export default GoogleAdsCPLSection;