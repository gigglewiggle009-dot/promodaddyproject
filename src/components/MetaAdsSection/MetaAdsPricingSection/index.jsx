"use client";

import React from "react";
import Link from "next/link";
import { SharedLayout } from "@/components/SharedComponent";

const pricingPlans = [
  {
    name: "Starter",
    fee: "Rs.3,500/month",
    bestFor: "Local businesses, brand awareness",
    adSpend: "Ad Spend: Rs.8,000/month",
  },
  {
    name: "Growth",
    fee: "Rs.7,000/month",
    bestFor: "E-commerce, coaching institutes, lead gen",
    adSpend: "Ad Spend: Rs.20,000/month",
    featured: true,
  },
  {
    name: "Pro",
    fee: "Rs.14,000/month",
    bestFor: "D2C brands, real estate, multi-product",
    adSpend: "Ad Spend: Rs.50,000/month",
  },
  {
    name: "Enterprise",
    fee: "Custom",
    bestFor: "National brands, large-scale campaigns",
    adSpend: "Ad Spend: Rs.1,00,000+",
  },
];

export const MetaAdsPricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_65%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Transparent Pricing
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Transparent{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meta Ads Pricing
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              No hidden fees. No lock-in. Cancel anytime with 30 days notice.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex min-h-[460px] flex-col rounded-[28px] border p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-purple-500/50 bg-gradient-to-b from-[#1a1330] via-[#15111f] to-[#100d18] shadow-[0_0_40px_rgba(139,92,246,0.18)]"
                    : "border-white/10 bg-gradient-to-b from-[#121019] to-[#0d0b12] hover:border-purple-500/30"
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-8 top-0 -translate-y-1/2">
                    <span className="rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-purple-500/20 sm:text-xs">
                      Most Popular
                    </span>
                  </div>
                )}

                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
                  {plan.name}
                </p>

                <div className="mb-5">
                  <h3 className="break-words text-3xl font-bold leading-tight sm:text-4xl xl:text-[3rem]">
                    {plan.fee}
                  </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {plan.bestFor}
                </p>

                <p className="mb-8 text-sm text-purple-300 sm:text-base">
                  {plan.adSpend}
                </p>

                <div className="mt-auto">
                  <Link href="/contact" className="block">
                    <button
                      className={`w-full rounded-2xl border px-5 py-4 text-sm font-semibold leading-snug transition-all duration-300 sm:text-base ${
                        plan.featured
                          ? "border-purple-500/40 bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25"
                          : "border-purple-500/20 bg-transparent text-white hover:border-purple-400/40 hover:bg-white/[0.04]"
                      }`}
                    >
                      Start Your Meta Ads Campaign
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsPricingSection;