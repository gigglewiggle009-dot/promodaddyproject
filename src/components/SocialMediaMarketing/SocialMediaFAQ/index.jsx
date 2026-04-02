"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqData = [
  {
    question: "How many posts per month do you create?",
    answer:
      "Starter plan includes 12 posts per month. Growth includes 20 posts per month. Pro includes 35 posts per month. This includes a mix of feed posts, Stories, and Reels across your chosen social media platforms.",
  },
  {
    question: "Do you create Reels content for Instagram?",
    answer:
      "Yes. Reels scripting, trending audio suggestions, structure, and editing guidance are included. As a dedicated Reels marketing agency in India, we prioritize this format because it gets 2-3x more reach than static posts.",
  },
  {
    question: "How long does it take to grow followers on Instagram?",
    answer:
      "Organic follower growth usually takes 3-6 months of consistent posting. In the first 60 days, the focus is on improving content quality, engagement rate, and platform consistency. Followers grow naturally as Reels and strong content start reaching wider audiences.",
  },
  {
    question: "Can you manage social media for my real estate business?",
    answer:
      "Yes. Real estate is one of our strongest specialties. We create project launch campaigns, property tour Reels, construction updates, buyer testimonials, and content that generates site visit inquiries while building long-term developer brand trust.",
  },
  {
    question: "Do you handle social media for hotels and restaurants?",
    answer:
      "Yes. We manage room showcase Reels, food photography posts, wedding venue promotions, festival campaigns, seasonal offers, and hospitality-focused content designed to increase direct bookings and footfall.",
  },
  {
    question: "Can you create Hindi content for Rajasthan markets?",
    answer:
      "Absolutely. Hindi content for Rajasthan, UP, MP, and other Hindi-belt markets often delivers 2x higher engagement than English-only content. We create bilingual social media content as part of our Growth and Pro plans.",
  },
  {
    question: "Do you manage LinkedIn for B2B companies?",
    answer:
      "Yes. Our LinkedIn marketing service for B2B companies is included in Growth and Pro plans. This includes thought leadership content, company page management, founder branding support, and LinkedIn Lead Gen campaigns for professional service businesses.",
  },
];

const relatedLinks = [
  {
    label: "Related Service",
    title: "Meta Ads India",
    description: "Organic vs paid social — combine for best results",
    href: "/meta-ads",
  },
  {
    label: "Related Service",
    title: "Content Marketing",
    description: "Content creation that ranks and converts",
    href: "/seo-services-in-india",
  },
  {
    label: "Explore More",
    title: "View All Services",
    description: "YouTube, SEO, Website Development & more",
    href: "/services",
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

export const SocialMediaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20 lg:py-24">
      <Script id="social-media-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.03),transparent_25%,transparent_75%,rgba(91,39,247,0.03))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Related service cards */}
          <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                {/* Glow layer */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-xl" />

                {/* Radial accent */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.15),_transparent_60%)]" />

                {/* Border overlay */}
                <div className="absolute inset-[1px] rounded-2xl border border-white/10 transition group-hover:border-purple-400/40" />

                <div className="relative z-10">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    {item.label}
                  </p>

                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold leading-tight text-white transition group-hover:text-purple-300">
                      {item.title}
                    </h3>
                    <ArrowRight
                      size={20}
                      className="text-purple-400 transition duration-300 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-gray-400 transition group-hover:text-gray-300 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ heading */}
          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Frequently Asked Questions About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Social Media Marketing in India
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              Clear answers on posting frequency, Reels, follower growth,
              real estate, hotels, Hindi content, and LinkedIn management.
            </p>
          </div>

          {/* FAQ items */}
          <div className="mx-auto max-w-5xl space-y-4">
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

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-white/[0.02] text-purple-300 transition duration-300">
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

export default SocialMediaFAQ;