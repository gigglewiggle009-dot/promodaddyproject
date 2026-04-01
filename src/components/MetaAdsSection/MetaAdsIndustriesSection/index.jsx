"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const industries = [
  {
    emoji: "🏠",
    title: "Real Estate",
    description:
      "Property lead generation, site visit campaigns, project launch awareness, WhatsApp click-to-chat inquiry ads. Target property buyers by income, location, and interest.",
    priority: "PRIORITY #1",
    cpl: "CPL target: Rs.800-1,500",
    featured: true,
  },
  {
    emoji: "🏨",
    title: "Hotels & Hospitality",
    description:
      "Room booking campaigns, restaurant promotion, wedding banquet lead generation, staycation packages, seasonal offers (IPL, Diwali, New Year). Reduce OTA dependency with direct Meta Ads.",
    priority: "Priority #2",
  },
  {
    emoji: "🎓",
    title: "Coaching & Education",
    description:
      "Admission lead generation, parent-focused ads for foundation courses, WhatsApp integration for instant inquiry. Specialists in Kota coaching institute campaigns.",
    priority: "Priority #3",
    cpl: "CPL target: Rs.300-500 per admission lead",
  },
  {
    emoji: "🛒",
    title: "E-Commerce / D2C",
    description:
      "Product catalog ads, Reels product demos, retargeting abandoned carts, festive sale campaigns. Drive purchases at the lowest cost per order.",
  },
  {
    emoji: "🏥",
    title: "Healthcare",
    description:
      "Patient inquiry campaigns, clinic awareness, doctor consultation booking campaigns. Compliant healthcare advertising with precise audience targeting.",
  },
];

export const MetaAdsIndustriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 sm:mb-14 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Industries </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400 max-w-3xl">
              From real estate developers in Rajasthan to coaching institutes in
              Kota - we run Meta Ads for India’s most results-driven industries
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-[24px] border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  item.featured
                    ? "border-purple-400/50 bg-white/[0.03] shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    : "border-white/10 bg-white/[0.02] hover:border-purple-500/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Priority badge */}
                {item.priority && (
                  <div
                    className={`mb-5 inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold ${
                      item.featured
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                        : "border border-purple-400/20 bg-purple-500/10 text-purple-300"
                    }`}
                  >
                    {item.priority}
                  </div>
                )}

                {/* Emoji */}
                <div className="mb-5 text-4xl leading-none">{item.emoji}</div>

                {/* Title */}
                <h3
                  className={`mb-4 text-2xl font-bold leading-snug ${
                    item.featured
                      ? "bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-8 text-gray-300">
                  {item.description}
                </p>

                {/* CPL badge */}
                {item.cpl && (
                  <div className="mt-6 inline-flex rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-3 text-sm sm:text-[15px] font-semibold text-purple-200">
                    {item.cpl}
                  </div>
                )}
              </div>
            ))}

            {/* Empty space filler for desktop balance if needed */}
            {industries.length % 3 === 2 && (
              <div className="hidden xl:block" aria-hidden="true" />
            )}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsIndustriesSection;