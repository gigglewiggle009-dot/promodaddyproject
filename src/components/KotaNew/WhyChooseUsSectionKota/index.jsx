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
    <section className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.10),_transparent_35%)]" />

      <SharedLayout>
        <div className="relative">
          {/* Heading */}
          <div className="mb-10 max-w-3xl sm:mb-12 md:mb-14">
            <p className="mb-3 text-sm font-medium text-purple-400 sm:text-base">
              {"// Why Choose Us"}
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Promodaddy
              </span>{" "}
              Over Other Kota Agencies?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
              Not all digital marketing agencies deliver the same level of
              strategy, reporting, and accountability. Here is the difference
              between working with Promodaddy Digital and the usual local setup.
            </p>
          </div>

          {/* Same Table for Desktop + Mobile */}
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.08)]">
            <div className="min-w-[900px] overflow-hidden rounded-3xl">
              {/* Header */}
              <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">
                <div className="col-span-4 px-4 py-4 text-xs font-semibold text-gray-300 sm:px-6 lg:px-8 lg:py-5 lg:text-sm">
                  Factor
                </div>

                <div className="col-span-4 border-l border-r border-white/10 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 px-4 py-4 text-xs font-semibold text-white sm:px-6 lg:px-8 lg:py-5 lg:text-sm">
                  Promodaddy Digital
                </div>

                <div className="col-span-4 px-4 py-4 text-xs font-semibold text-gray-300 sm:px-6 lg:px-8 lg:py-5 lg:text-sm">
                  Other Local Agencies
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 border-b border-white/10 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.02]"
                >
                  <div className="col-span-4 px-4 py-4 text-sm font-medium text-white sm:px-6 lg:px-8 lg:py-5 lg:text-base">
                    {item.factor}
                  </div>

                  <div className="col-span-4 border-l border-r border-white/10 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                        <Check size={14} />
                      </span>
                      <p className="text-sm leading-relaxed text-gray-100 lg:text-base">
                        {item.promodaddy}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300">
                        <X size={14} />
                      </span>
                      <p className="text-sm leading-relaxed text-gray-400 lg:text-base">
                        {item.other}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile helper text */}
          <p className="mt-4 text-center text-xs text-gray-500 md:hidden">
            Swipe left/right to view full table
          </p>
        </div>
      </SharedLayout>
    </section>
  );
};

export default WhyChooseUsSectionKota;