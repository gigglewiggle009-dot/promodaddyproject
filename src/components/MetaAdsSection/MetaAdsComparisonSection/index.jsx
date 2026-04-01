"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    parameter: "Best for",
    promodaddy: "B2C, local & national brands",
    generic: "Generic approach",
  },
  {
    parameter: "Audience Targeting",
    promodaddy: "3-layer: Interest + Lookalike + Retargeting",
    generic: "Basic interest only",
  },
  {
    parameter: "Creative Strategy",
    promodaddy: "Full brief, copy + concept",
    generic: "Generic templates",
  },
  {
    parameter: "Pixel / CAPI Setup",
    promodaddy: "Full technical setup included",
    generic: "Often skipped",
  },
  {
    parameter: "WhatsApp Integration",
    promodaddy: "Included for lead campaigns",
    generic: "Not offered",
  },
  {
    parameter: "Reporting",
    promodaddy: "Weekly transparent reports",
    generic: "Monthly summary only",
  },
  {
    parameter: "Contract",
    promodaddy: "No lock-in, cancel anytime",
    generic: "6–12 month contracts",
  },
];

export const MetaAdsComparisonSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 sm:mb-12 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Why Promodaddy vs </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Other Meta Ads Agencies
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400">
              Here&apos;s what separates us from generic digital marketing vendors
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#060b18]">
                  <th className="px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-300">
                    Parameter
                  </th>
                  <th className="px-6 py-5 text-left text-sm sm:text-base font-semibold text-yellow-400">
                    Promodaddy Digital
                  </th>
                  <th className="px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-300">
                    Generic Agency
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.03] ${
                      index % 2 === 1 ? "bg-white/[0.02]" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-5 text-sm sm:text-base font-medium text-white whitespace-nowrap">
                      {item.parameter}
                    </td>

                    <td className="px-6 py-5 text-sm sm:text-base text-white">
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-yellow-400"
                        />
                        <span className="leading-relaxed">{item.promodaddy}</span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm sm:text-base text-gray-300">
                      <div className="flex items-start gap-3">
                        <XCircle
                          size={18}
                          className="mt-1 shrink-0 text-gray-500"
                        />
                        <span className="leading-relaxed">{item.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            On mobile, swipe horizontally to view the full comparison table.
          </p>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsComparisonSection;