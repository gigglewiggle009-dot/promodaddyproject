"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const stats = [
  {
    number: "400M+",
    label: "Facebook Users in India",
  },
  {
    number: "250M+",
    label: "Instagram Users in India",
  },
  {
    number: "3x–5x",
    label: "Higher Conversions with Retargeting",
  },
  {
    number: "7 Days",
    label: "Algorithm Learning Phase",
  },
];

const points = [
  "India has 400 million+ Facebook users - largest in the world",
  "Instagram India: 250 million+ active users, growing 20% YoY",
  "Meta Ads reach 65%+ of Indian internet users aged 18-45",
  "Average CPM for India: Rs.80-200 - highly cost-efficient",
  "Lead gen ads: 60% lower CPL vs landing page campaigns",
  "Reels Ads now reach 40%+ more audience than regular video ads",
];

export const MetaAdsWhyUs = () => {
  return (
    <section className="bg-[#0b0b0b] text-white relative overflow-hidden">
      
      {/* Top Stats Strip */}
      <div className="border-y border-white/10 bg-[#0f172a]/70">
        <SharedLayout>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 md:py-12">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  {item.number}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </SharedLayout>
      </div>

      {/* Main Content */}
      <div className="relative py-16 sm:py-20">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_65%)] pointer-events-none" />

        <SharedLayout>
          <div className="max-w-6xl mx-auto">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Why Meta Ads Is India’s Most Powerful{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Brand & Lead Generation Platform
            </span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl mb-10">
              India has the world’s largest Facebook user base and one of the
              fastest-growing Instagram audiences. Meta’s advertising platform
              gives you unmatched ability to reach specific demographics,
              interests, and lookalike audiences - making it the go-to platform
              for B2C brand building and lead generation at scale.
            </p>

            {/* Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                >
                  <CheckCircle2 className="h-6 w-6 text-purple-400 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </SharedLayout>
      </div>
    </section>
  );
};

export default MetaAdsWhyUs;