"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const WhyChooseUsSectionKota = () => {
  const comparisonData = [
    {
      factor: "Pan-India Experience",
      promodaddy: "Mumbai + Kota offices",
      other: "Only local presence",
    },
    {
      factor: "Celebrity Campaigns",
      promodaddy: "Sonu Sood, Shami, T-Series",
      other: "No celebrity work",
    },
    {
      factor: "Transparent Reporting",
      promodaddy: "Weekly reports with numbers",
      other: "Monthly, vague updates",
    },
    {
      factor: "Performance Marketing",
      promodaddy: "ROI-focused, CPL tracking",
      other: "Impression-focused",
    },
    {
      factor: "Dedicated Account Manager",
      promodaddy: "Always assigned",
      other: "Sometimes assigned",
    },
    {
      factor: "Pricing Transparency",
      promodaddy: "From Rs.8,000/month",
      other: "Hidden charges common",
    },
    {
      factor: "Contract Lock-in",
      promodaddy: "No lock-in, flexible plans",
      other: "6-12 month contracts",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 md:py-24 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.10),_transparent_35%)] pointer-events-none" />

      <SharedLayout>
        <div className="relative">
          {/* Heading */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
            <p className="text-sm sm:text-base font-medium text-purple-400 mb-3">
              // Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Promodaddy
              </span>{" "}
              Over Other Kota Agencies?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
              Not all digital marketing agencies deliver the same level of
              strategy, reporting, and accountability. Here is the difference
              between working with Promodaddy Digital and the usual local setup.
            </p>
          </div>

          {/* Desktop / Tablet Table */}
          <div className="hidden md:block rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.08)]">
            {/* Header */}
            <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">
              <div className="col-span-4 px-6 lg:px-8 py-5 text-sm font-semibold text-gray-300">
                Factor
              </div>

              <div className="col-span-4 px-6 lg:px-8 py-5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border-l border-r border-white/10">
                Promodaddy Digital
              </div>

              <div className="col-span-4 px-6 lg:px-8 py-5 text-sm font-semibold text-gray-300">
                Other Local Agencies
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="col-span-4 px-6 lg:px-8 py-5 text-white font-medium">
                  {item.factor}
                </div>

                <div className="col-span-4 px-6 lg:px-8 py-5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-l border-r border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shrink-0">
                      <Check size={14} />
                    </span>
                    <p className="text-gray-100 leading-relaxed">
                      {item.promodaddy}
                    </p>
                  </div>
                </div>

                <div className="col-span-4 px-6 lg:px-8 py-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-gray-300 border border-white/10 shrink-0">
                      <X size={14} />
                    </span>
                    <p className="text-gray-400 leading-relaxed">
                      {item.other}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-white/10">
                  <h3 className="text-base font-semibold text-white">
                    {item.factor}
                  </h3>
                </div>

                <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shrink-0">
                      <Check size={14} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-purple-300 mb-1">
                        Promodaddy Digital
                      </p>
                      <p className="text-sm text-gray-100 leading-relaxed">
                        {item.promodaddy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-gray-300 border border-white/10 shrink-0">
                      <X size={14} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                        Other Local Agencies
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.other}
                      </p>
                    </div>
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