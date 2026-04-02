"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    factor: "Industry Expertise",
    promodaddy:
      "Real estate, hotels, coaching — we know your industry's content needs",
    others: "Generic one-size-fits-all content",
  },
  {
    factor: "Reels Specialists",
    promodaddy: "Dedicated Reels strategy — India’s highest reach format",
    others: "Basic static posts only",
  },
  {
    factor: "Hindi Content",
    promodaddy: "Vernacular content for Tier 2/3 markets — 2x engagement",
    others: "English-only content",
  },
  {
    factor: "Transparent Pricing",
    promodaddy: "Clear packages from Rs.8,000/month — no hidden charges",
    others: "Hidden pricing, vague quotes",
  },
  {
    factor: "No Lock-in",
    promodaddy: "Month-to-month — cancel with 30 days notice",
    others: "6-12 month mandatory contracts",
  },
  {
    factor: "Celebrity Experience",
    promodaddy:
      "Worked with Sonu Sood, Mohammad Shami — national scale campaigns",
    others: "No notable client experience",
  },
  {
    factor: "Multi-Platform",
    promodaddy:
      "Instagram + Facebook + LinkedIn + YouTube — all managed together",
    others: "Usually 1-2 platforms only",
  },
  {
    factor: "Weekly Reports",
    promodaddy: "Regular updates — you always know what’s happening",
    others: "Monthly only, often vague",
  },
];

export const SocialMediaWhyChooseTable = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Promodaddy Digital
              </span>{" "}
              as Your Social Media Agency in India?
            </h2>

            <p className="mt-4 text-sm text-gray-400 sm:text-base md:text-lg">
              Here’s what separates us from generic digital marketing vendors.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.06)]">
            <div className="min-w-[980px]">
              {/* Header */}
              <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold">
                <div className="col-span-3 text-white">Factor</div>

                <div className="col-span-5 flex items-center gap-2 text-white">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Promodaddy Digital
                  </span>
                  <CheckCircle2 size={18} className="text-purple-300" />
                </div>

                <div className="col-span-4 flex items-center gap-2 text-white">
                  <span className="text-gray-300">Other Agencies</span>
                  <XCircle size={18} className="text-red-400" />
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-start border-b border-white/5 px-5 py-5 transition duration-300 last:border-b-0 hover:bg-white/[0.03]"
                >
                  {/* Factor */}
                  <div className="col-span-3 pr-4 text-base font-semibold text-white">
                    {item.factor}
                  </div>

                  {/* Promodaddy */}
                  <div className="col-span-5 pr-4">
                    <div className="flex items-start gap-3 text-sm leading-7 text-gray-300">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-yellow-400"
                      />
                      <span>{item.promodaddy}</span>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="col-span-4">
                    <div className="flex items-start gap-3 text-sm leading-7 text-gray-400">
                      <XCircle
                        size={18}
                        className="mt-1 shrink-0 text-red-400"
                      />
                      <span>{item.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                value: "5000+",
                label: "Projects Delivered",
              },
              {
                value: "1600+",
                label: "Five-Star Reviews",
              },
              {
                value: "Worked with Sonu Sood, Mohammad Shami",
                label: "",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                  ⚡
                </div>

                {/* Text */}
                <div>
                  <p className="text-base font-semibold text-white">
                    {item.value}
                  </p>
                  {item.label && (
                    <p className="text-sm text-gray-400">
                      {item.label}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile hint */}
          <p className="mt-4 text-center text-xs text-gray-500 md:hidden">
            Swipe horizontally to view the full comparison table
          </p>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SocialMediaWhyChooseTable;