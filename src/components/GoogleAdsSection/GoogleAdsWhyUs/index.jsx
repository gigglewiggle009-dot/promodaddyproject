"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    factor: "Campaign Strategy",
    promodaddy: "Built around ROI, lead quality, and business goals",
    others: "Generic setup with little business-specific planning",
  },
  {
    factor: "Reporting",
    promodaddy: "Transparent weekly performance reports",
    others: "Vague updates with limited real insights",
  },
  {
    factor: "Optimization",
    promodaddy: "Continuous bid, keyword, and conversion optimization",
    others: "Basic management after campaign launch",
  },
  {
    factor: "Pricing Transparency",
    promodaddy: "Clear management fee and ad spend expectations",
    others: "Hidden charges or unclear pricing structure",
  },
  {
    factor: "Coaching Industry Expertise",
    promodaddy: "Specialized campaign understanding for Kota coaching market",
    others: "No real niche strategy for coaching admissions",
  },
  {
    factor: "Contracts",
    promodaddy: "Flexible plans focused on performance",
    others: "Rigid contracts with less accountability",
  },
];

const GoogleAdsWhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Why Choose Promodaddy
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Why Businesses Prefer{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Promodaddy Digital
              </span>{" "}
              for Google Ads
            </h2>

            <p className="mx-auto mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Not all Google Ads agencies manage campaigns the same way. The
              difference is usually in strategy, reporting, optimization, and
              how seriously they treat your money.
            </p>
          </div>

          {/* Same table on desktop + mobile */}
          <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/[0.03]">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04]">
                <div className="p-4 text-base font-semibold text-white sm:p-6 sm:text-lg">
                  Factor
                </div>
                <div className="border-l border-white/10 p-4 text-base font-semibold text-purple-300 sm:p-6 sm:text-lg">
                  Promodaddy Digital
                </div>
                <div className="border-l border-white/10 p-4 text-base font-semibold text-gray-300 sm:p-6 sm:text-lg">
                  Other Agencies
                </div>
              </div>

              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-b border-white/10 last:border-b-0"
                >
                  <div className="p-4 text-sm font-medium text-white sm:p-6 sm:text-base">
                    {item.factor}
                  </div>

                  <div className="flex items-start gap-3 border-l border-white/10 p-4 sm:p-6">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                    <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                      {item.promodaddy}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 border-l border-white/10 p-4 sm:p-6">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                      {item.others}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsWhyUs;