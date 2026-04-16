"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";
import { socialMediaFaqs } from "@/components/SocialMediaMarketing/SocialMediaFAQData";

const relatedLinks = [
  {
    label: "Related Service",
    title: "Meta Ads India",
    description: "Organic vs paid social - combine for best results",
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

export const SocialMediaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.03),transparent_25%,transparent_75%,rgba(91,39,247,0.03))]" />

      <SharedLayout>
        <div className="relative z-10">
          <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.15),_transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-[1px] rounded-2xl border border-white/10 transition group-hover:border-purple-400/40" />

                <div className="relative z-10">
                  <p className="mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent">
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

          <div className="mx-auto max-w-5xl space-y-4">
            {socialMediaFaqs.map((item, index) => {
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