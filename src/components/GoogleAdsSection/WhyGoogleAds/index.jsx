"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const points = [
  "900+ million internet users in India actively search on Google",
  "Top 3 ad positions capture up to 46% of clicks for commercial searches",
  "Instant visibility — start getting leads from Day 1",
  "Full control over budget, targeting, and scaling",
  "Measurable ROI — every click, lead, and rupee tracked",
];

const WhyGoogleAds = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)] pointer-events-none" />

      <SharedLayout>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm mb-3">
              Why Google Ads?
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            India’s Most Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Lead Generation Tool
            </span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              When customers are searching, they already have intent. Google Ads places your business right in front of them at the exact moment they are ready to take action.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT - Points */}
            <div className="space-y-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
                >
                  <span className="text-purple-400 text-lg">✔</span>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT - Comparison */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                Google Ads vs SEO
              </h3>

              <div className="space-y-4 text-sm sm:text-base">

                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Results Speed</span>
                  <span className="text-white font-medium">Instant</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Traffic Type</span>
                  <span className="text-white font-medium">Paid (High Intent)</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Control</span>
                  <span className="text-white font-medium">Full Control</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Scalability</span>
                  <span className="text-white font-medium">Instant Scaling</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Long-Term Value</span>
                  <span className="text-white font-medium">Best with SEO</span>
                </div>

              </div>

              {/* Bottom note */}
              <p className="text-gray-500 text-xs mt-6">
                Smart businesses combine both — Google Ads for immediate leads, SEO for long-term growth.
              </p>

            </div>

          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default WhyGoogleAds;