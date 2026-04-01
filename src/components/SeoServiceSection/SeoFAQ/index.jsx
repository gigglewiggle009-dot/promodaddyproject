"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Plus, Minus } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqData = [
  {
    question: "How long does SEO take to show results in India?",
    answer:
      "Local SEO results typically start showing in 45-90 days. For competitive national keywords like 'SEO services India', expect 4-6 months for significant rankings. SEO is a long-term investment — results compound month over month and don't stop when you stop paying.",
  },
  {
    question: "How much does professional SEO cost in India?",
    answer:
      "Professional SEO services in India start from Rs.8,000/month for basic local SEO. Growth plans range from Rs.15,000-25,000/month. We offer fully transparent pricing with no hidden charges, no setup fees, and no long-term lock-in contracts.",
  },
  {
    question: "What is the difference between SEO and Google Ads?",
    answer:
      "Google Ads delivers instant results but you pay for every click — traffic stops immediately when your budget stops. SEO takes 3-6 months to build but then delivers free organic traffic permanently. The best strategy for Indian businesses combines both: ads for immediate leads, SEO for long-term organic growth.",
  },
  {
    question: "Can SEO work for my coaching institute in Kota?",
    answer:
      "Absolutely — we have helped coaching institutes in Kota rank in Google's Top 3 for admission-related searches within 90 days. The coaching market is highly competitive online, but most institutes have weak SEO — giving a significant opportunity to rank quickly with the right strategy.",
  },
  {
    question: "Do you offer SEO for e-commerce websites in India?",
    answer:
      "Yes — we specialize in e-commerce SEO including product page optimization, category page SEO, Google Shopping feed optimization, and schema markup for Indian e-commerce brands. We understand platforms like Shopify, WooCommerce, and custom builds.",
  },
  {
    question: "What reports do you provide with your SEO service?",
    answer:
      "Every client receives monthly detailed reports showing keyword rankings (all target keywords), organic traffic growth, backlinks acquired, technical issues resolved, and next month's action plan. Growth and Pro clients get weekly ranking updates. Full transparency always.",
  },
  {
    question: "Can I cancel the SEO service if I am not satisfied?",
    answer:
      "Yes — we have zero lock-in contracts. You can cancel with 30 days written notice at any time. We believe in earning your business every single month through results — not locking you into a contract you can't exit.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const SeoFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <Script id="seo-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Heading */}
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

          {/* FAQ items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
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