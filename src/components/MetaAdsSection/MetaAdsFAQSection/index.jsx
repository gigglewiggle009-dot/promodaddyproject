"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqs = [
  {
    question: "How much does Meta Ads management cost in India?",
    answer:
      "Meta Ads management fees start from Rs.3,000/month plus your ad spend. Minimum recommended ad spend is Rs.8,000-10,000/month to gather enough data for optimization. Total monthly starting investment: Rs.11,000-13,000/month.",
  },
  {
    question:
      "What is a good CPL (cost per lead) for Facebook Ads in India?",
    answer:
      "CPL varies by industry. Coaching institutes: Rs.300-600. Real estate: Rs.800-1,800. Healthcare: Rs.200-500. E-commerce: Rs.150-400. We set CPL targets based on your industry benchmarks and optimize weekly toward the target.",
  },
  {
    question:
      "Instagram Reels vs Facebook Feed — which works better in India?",
    answer:
      "For brand awareness and youth audiences — Reels is significantly better, with 2-3x more reach at lower cost. For lead generation and older demographics — Facebook Feed and Lead Ads still outperform. We use both together for best results.",
  },
  {
    question:
      "Can Hindi/vernacular language ads work better than English?",
    answer:
      "Yes — for Tier 2 and Tier 3 Indian cities, Hindi ads consistently deliver 30-40% lower CPL than English. For Rajasthan, UP, Bihar, MP — Hindi is almost always preferred. We create bilingual campaigns and let data decide which performs better.",
  },
  {
    question: "Do you run WhatsApp Click-to-Chat ads?",
    answer:
      "Yes — Click-to-WhatsApp ads are one of our specialties for Indian clients. This format works exceptionally well for coaching admissions, real estate inquiries, and any service where a personal conversation drives conversion.",
  },
  {
    question:
      "How long does it take to see results from Meta Ads?",
    answer:
      "Leads start coming from Day 1 of campaign launch. However, the Meta algorithm needs 50+ conversion events per ad set to exit the learning phase — typically 7-14 days. After the learning phase, campaigns perform at peak efficiency.",
  },
  {
    question:
      "Can I get Meta Ads for my coaching institute admissions?",
    answer:
      "Absolutely — we have run multiple coaching admission campaigns with CPL targets of Rs.300-500. We understand the parent-student dynamic, peak admission season (Feb-June), and the specific messaging that converts for education in India.",
  },
];

export const MetaAdsFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">
                Frequently Asked Questions About{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Meta Ads in India
              </span>
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180 text-purple-300" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-sm sm:text-base leading-relaxed text-gray-300">
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