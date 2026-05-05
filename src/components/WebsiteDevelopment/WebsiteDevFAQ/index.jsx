"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqs = [
  {
    question: "How much does website development cost in India?",
    answer:
      "Website development cost depends on the type of website, number of pages, design complexity, CMS, features, integrations and SEO requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic business website usually takes 7 to 15 days. Larger websites, e-commerce websites or custom web applications can take 20 to 45 days depending on features.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every website we build is fully responsive for mobile, tablet and desktop devices.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Yes. We create websites with clean heading structure, SEO metadata, fast loading speed, schema markup, image alt text and search-friendly page architecture.",
  },
  {
    question: "Can you add blog or CMS features?",
    answer:
      "Yes. We can integrate CMS platforms like Sanity so your team can easily publish blogs, edit content and manage website updates.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide support for website updates, bug fixes, new pages, speed improvements and ongoing technical changes.",
  },
];

export const WebsiteDevFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Questions Businesses Ask Before Starting{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Website Development
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
              Clear answers to common questions about website design,
              development cost, timelines, SEO, CMS, maintenance and support.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:border-purple-400/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                  >
                    <span className="text-base font-semibold leading-7 text-white sm:text-lg">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-purple-400 transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 pb-6 pt-1 sm:px-8">
                      <p className="text-sm leading-7 text-gray-400 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};