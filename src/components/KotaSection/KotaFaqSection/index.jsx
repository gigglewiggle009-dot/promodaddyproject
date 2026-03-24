"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqs = [
  {
    question: "Why choose a digital marketing agency in Kota?",
    answer:
      "A local agency understands Kota's competitive market, especially the coaching sector, better than an outsider. We know the local audience, local competitors, and local seasonality, giving your business an edge that a generic agency usually cannot provide.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically shows meaningful results in 3 to 6 months with consistent effort. However, local SEO for Kota businesses can start showing improvements in Google Maps rankings within 4 to 8 weeks after proper optimization.",
  },
  {
    question: "Do you work with coaching institutes in Kota?",
    answer:
      "Yes, coaching institute marketing is one of our core specialties in Kota. We have helped coaching centers improve visibility, generate more leads, and increase student admissions through targeted digital campaigns.",
  },
  {
    question: "What is the cost of digital marketing in Kota?",
    answer:
      "Packages start from ₹5,000/month. We customize based on your budget and goals. Whether you need basic social media management or a full-stack digital campaign, we have plans that fit every budget.",
  },
  {
    question: "Do you provide Google Maps / Local SEO in Kota?",
    answer:
      "Yes, we specialize in Google Business Profile optimization and local SEO for Kota businesses. We help your business appear in the top 3 of Google Maps for relevant local searches.",
  },
];

export const KotaFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 text-white sm:py-15 lg:py-10">
      <SharedLayout>
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="text-center">
            <p className="font-assistant text-sm uppercase tracking-[0.32em] text-[#5b27f7]">
              FAQs
            </p>

            <h2 className="mt-4 font-roobert text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[58px]">
              Frequently Asked{" "}
              <span className="text-[#5b27f7]">Questions</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-assistant text-base leading-7 text-white/60 sm:text-lg">
              Common questions businesses ask before choosing digital marketing
              services in Kota.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden border transition duration-300 ${
                    isOpen
                      ? "border-[#5b27f7]/60 bg-[#0b0b12]"
                      : "border-white/10 bg-[#050505] hover:border-[#5b27f7]/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-roobert text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-white/70 transition duration-300 ${
                        isOpen ? "rotate-180 text-[#5b27f7]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 sm:px-6">
                        <p className="font-assistant text-sm leading-7 text-white/65 sm:text-base">
                          {faq.answer}
                        </p>
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