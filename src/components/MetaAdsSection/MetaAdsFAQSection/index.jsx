"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";
import { metaAdsFaqs } from "@/components/MetaAdsSection/MetaAdsFAQData";

export const MetaAdsFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              <span className="text-white">
                Frequently Asked Questions About{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Meta Ads in India
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {metaAdsFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-purple-300"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsFAQSection;