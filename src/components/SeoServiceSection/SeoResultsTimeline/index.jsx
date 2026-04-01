"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import { CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    timeline: "Month 1-2",
    phase: "Foundation",
    happens:
      "Technical fixes, on-page optimization, keyword mapping, GMB setup, initial content creation",
  },
  {
    timeline: "Month 3-4",
    phase: "Early Growth",
    happens:
      "Long-tail keyword rankings start improving, organic traffic increases 20-40%, Google starts recognizing authority",
  },
  {
    timeline: "Month 4-6",
    phase: "Momentum",
    happens:
      "Top 10 rankings for target keywords, significant organic traffic increase, leads start coming from organic search",
  },
  {
    timeline: "Month 6-12",
    phase: "Dominance",
    happens:
      "Page 1 rankings for primary keywords, consistent monthly lead generation, ROI clearly visible",
  },
  {
    timeline: "Month 12+",
    phase: "Compounding",
    happens:
      "Rankings strengthen, traffic compounds, organic leads become primary growth channel",
  },
];

const caseStudies = [
  {
    title: "Coaching Institute, Kota",
    challenge: "Zero online visibility",
    solution: "Google Ads + Local SEO",
    result:
      "Top 3 for 'coaching institute Kota' in 90 days, 47 leads/month",
  },
  {
    title: "Real Estate Developer, Kota",
    challenge: "No organic traffic",
    solution: "SEO + Content Marketing",
    result: "340% organic traffic increase in 6 months",
  },
  {
    title: "Local Clinic, Kota",
    challenge: "Not visible on Google Maps",
    solution: "GMB + Local SEO",
    result: "Google Maps Top 3 achieved in 60 days",
  },
];

export const SeoResultsTimeline = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          <div className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              What SEO Results Can You{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Realistically Expect?
              </span>
            </h2>

            <p className="mt-4 text-sm italic text-gray-400 sm:text-base">
              We Believe in Honest Timelines — No Fake Promises
            </p>
          </div>

          {/* Same table for desktop + mobile */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.06)]">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white md:px-5">
                <div className="col-span-2">Timeline</div>
                <div className="col-span-2">Phase</div>
                <div className="col-span-8">What Happens</div>
              </div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-start border-b border-white/5 px-4 py-4 transition duration-300 last:border-b-0 hover:bg-white/[0.03] md:px-5 md:py-5"
                >
                  <div className="col-span-2 pr-3 text-sm font-semibold text-purple-300">
                    {item.timeline}
                  </div>

                  <div className="col-span-2 pr-3 text-sm font-semibold text-white md:text-base">
                    {item.phase}
                  </div>

                  <div className="col-span-8 text-sm leading-7 text-gray-400">
                    {item.happens}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case studies */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm leading-7">
                  <p className="text-gray-400">
                    <span className="font-semibold uppercase tracking-[0.08em] text-gray-500">
                      Challenge:
                    </span>{" "}
                    {item.challenge}
                  </p>

                  <p className="text-gray-400">
                    <span className="font-semibold uppercase tracking-[0.08em] text-gray-500">
                      Solution:
                    </span>{" "}
                    {item.solution}
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-purple-300"
                    />
                    <p className="text-sm leading-7 text-gray-200">
                      <span className="font-semibold text-purple-300">
                        Result:
                      </span>{" "}
                      {item.result}
                    </p>
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

export default SeoResultsTimeline;