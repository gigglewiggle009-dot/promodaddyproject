"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const points = [
  "10 to 20 million YouTube views delivered within 24 hours",
  "Campaigns for T-Series - India’s #1 YouTube channel (260M+ subscribers)",
  "Bollywood film trailer and song launch promotions",
  "500+ YouTube campaigns across music, entertainment and business",
  "India and worldwide YouTube campaigns successfully executed",
  "Projects for Zee Music Company and Sony Music India",
  "Independent singer growth campaigns - from zero to viral",
];

export const YouTubeMarketingWhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.06),_transparent_45%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Why Promodaddy Digital Is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                India’s #1 Choice
              </span>{" "}
              for YouTube Marketing
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/70 sm:text-lg">
              Most agencies treat YouTube marketing as a side service. For
              Promodaddy Digital, it is a core expertise and one of our strongest
              proof points for performance, scale, and campaign execution.
            </p>
          </div>

          {/* Main bordered box */}
          <div className="mx-auto mt-14 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 md:p-10 lg:p-12">
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              We have been trusted by India’s biggest music companies to execute
              their most critical YouTube campaigns where speed, scale, and results
              are non-negotiable. When major labels launch a new song, film track,
              or promotional video, they need a partner that can deliver momentum,
              visibility, and measurable reach. That partner is Promodaddy Digital.
            </p>

            {/* Bullet grid */}
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
              {points.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                  <p className="text-sm leading-7 text-white/80 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};