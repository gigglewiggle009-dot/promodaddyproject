"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Plus, Minus } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqData = [
  {
    question: "Which digital marketing service is best for my business?",
    answer:
      "It depends on your goal. For instant leads: Google Ads or Meta Ads. For long-term organic growth: SEO. For brand building: Social Media + Content Marketing. We recommend a free audit to suggest the right mix.",
  },
  {
    question: "How much do digital marketing services cost in India?",
    answer:
      "Packages start from Rs.8,000/month. Pricing depends on services and scale. Flexible plans, no long-term lock-in contracts.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Google Ads and Meta Ads deliver results from Day 1. SEO and content marketing take 45-90 days for significant organic growth.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes — flexible packages for small businesses, startups, and local businesses across India. Packages from Rs.8,000/month.",
  },
  {
    question: "Can I get multiple services as a package?",
    answer:
      "Absolutely. Bundled packages — SEO + Google Ads + Social Media — available at better pricing. Contact us for a custom quote.",
  },
  {
    question: "Do you provide performance reports?",
    answer:
      "Yes — weekly or monthly reports with clear metrics: leads, rankings, traffic, CTR, ROAS, and more. Full transparency.",
  },
  {
    question: "Do you work outside Kota?",
    answer:
      "Yes — pan-India from our offices in Kota (Rajasthan) and Mumbai. Active projects in Jaipur, Delhi, and across India.",
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

export const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <Script id="services-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Frequently Asked Questions About Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Marketing Services
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Clear answers about pricing, timelines, services, and reporting
            </p>
          </div>

          {/* FAQ List */}
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

export default ServicesFAQ;