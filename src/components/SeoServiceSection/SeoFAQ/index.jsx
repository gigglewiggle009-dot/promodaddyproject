"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";
import { seoFaqs } from "@/components/SeoServiceSection/SeoFAQData";

export const SeoFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              Frequently Asked Questions About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                SEO Services in India
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Clear answers on timelines, pricing, reporting, e-commerce SEO,
              and coaching institute SEO.
            </p>
          </div>

          <div className="space-y-4">
            {seoFaqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:border-purple-400/30"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <h3 className="text-sm font-semibold leading-6 text-white sm:text-base md:text-lg">
                      {item.question}
                    </h3>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-white/[0.02] text-purple-300">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-gray-300 sm:px-6 sm:text-base">
                        {item.answer}
                      </div>
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

export default SeoFAQ;