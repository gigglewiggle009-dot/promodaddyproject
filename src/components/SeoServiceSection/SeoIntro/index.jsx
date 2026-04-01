"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

export const SeoIntro = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20 relative overflow-hidden">

      {/* 🌌 MAIN PURPLE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)] pointer-events-none" />

      <SharedLayout>
        <div className="max-w-4xl mx-auto">

          {/* ✅ HEADING WITH BRAND GRADIENT */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
            What Is SEO and{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Why Does Your Business Need It?
            </span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            SEO (Search Engine Optimization) is the process of improving your
            website so it appears at the top of Google search results when
            potential customers search for your products or services.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Think about it — when was the last time you went to Page 2 of Google?
            Almost never. And your customers don’t either. If your business is
            not on Page 1, you are invisible to thousands of potential buyers
            every single day.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            SEO is not a one-time task. It is a long-term investment that keeps
            delivering results 24 hours a day, 7 days a week, without paying for
            every single click. Unlike Google Ads where traffic stops the moment
            you stop spending, SEO builds a permanent foundation of organic
            traffic that grows over time and compounds month after month.
          </p>

          {/* ✅ PREMIUM BRAND HIGHLIGHT BOX */}
          <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">

            <div className="bg-[#0b0b0b]/95 backdrop-blur rounded-xl p-5 relative overflow-hidden">

              {/* inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(139,92,246,0.15),_transparent_70%)] pointer-events-none" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
                According to industry data,{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                  53% of all website traffic comes from organic search.
                </span>{" "}
                For Indian businesses, this means millions of potential customers
                are searching for your services every day — the question is, are
                they finding you or your competitor?
              </p>

            </div>
          </div>

        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoIntro;