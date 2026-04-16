"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";
import { googleAdsFaqs } from "@/components/GoogleAdsSection/GoogleAdsFAQData";

const GoogleAdsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Frequently Asked Questions
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Questions Businesses Ask Before Starting{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Google Ads
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
              Clear answers to common questions about Google Ads management,
              pricing, results, reporting, and campaign strategy.
            </p>
          </div>

          <div className="space-y-4">
            {googleAdsFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold leading-relaxed text-white sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-purple-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] border-t border-white/10"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 py-5 text-sm leading-relaxed text-gray-400 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsFAQ;