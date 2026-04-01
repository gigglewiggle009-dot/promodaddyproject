"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const processSteps = [
  {
    step: "Week 1",
    title: "Strategy, Setup & Tracking",
    description:
      "We start by understanding your business goals, researching high-intent keywords, writing ad copy, setting up campaign structure, and configuring accurate conversion tracking.",
  },
  {
    step: "Week 2",
    title: "Campaign Launch",
    description:
      "Your Google Ads campaigns go live with carefully planned targeting, bidding, and messaging. We begin collecting real market data from clicks, impressions, and conversions.",
  },
  {
    step: "Week 3-4",
    title: "Optimization Begins",
    description:
      "We remove wasted spend, pause underperforming keywords, improve ad copy, refine targeting, and push more budget toward the best-performing audiences and search terms.",
  },
  {
    step: "Month 2+",
    title: "Scaling for Better ROI",
    description:
      "Once strong performance patterns are clear, we scale the campaigns, improve cost efficiency, lower CPL where possible, and focus on long-term lead volume and profitability.",
  },
];

const GoogleAdsProcess = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)] pointer-events-none" />

      <SharedLayout>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-purple-400 text-sm mb-3">
              Our Process
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              How We Turn Ad Spend Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Measurable Growth
              </span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              A successful Google Ads campaign is not just about launching ads.
              It is about building the right strategy, tracking every action,
              and continuously optimizing performance to increase ROI over time.
            </p>
          </div>

          {/* Process timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Step label */}
                <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs sm:text-sm text-purple-300 mb-5">
                  {item.step}
                </div>

                {/* Connector line desktop */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-11 -right-3 w-6 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70" />
                )}

                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsProcess;