"use client";

import React, { useState } from "react";
import { SharedLayout } from "@/components/SharedComponent";

const faqData = [
  {
    question: "Which is the best digital marketing agency in India for ROI-driven growth?",
    answer:
      "Promodaddy Digital is a top-rated agency trusted by Bollywood stars, cricketers, and 500+ businesses across India for delivering measurable revenue and brand growth.",
  },
  {
    question: "How long does it take to see results from digital marketing services?",
    answer:
      "While SEO typically takes 3 to 6 months for organic ranking, our performance marketing services like Google Ads and Meta Ads can generate high-quality leads from the very first day of the campaign.",
  },
  {
    question: "Does Promodaddy Digital work with startups and small businesses?",
    answer:
      "Yes, we specialize in helping startups build their brand from zero and provide tailored digital setups for SMEs to scale effectively in the Indian market.",
  },
  {
    question: "What digital marketing services do you offer for Pan-India clients?",
    answer:
      "We are a full-service agency providing SEO, Google Ads, Social Media Marketing, Website Development, Celebrity PR, and Influencer Marketing across Kota, Jaipur, Delhi, and Mumbai.",
  },
  {
    question: "Why should I choose Promodaddy Digital over other marketing companies?",
    answer:
      "We offer celebrity-level expertise, transparent weekly reporting, and a proven track record of managing high-profile digital presences with over 12 years of industry experience.",
  },
  {
    question: "Do you provide industry-specific marketing strategies?",
    answer:
      "Absolutely. We create custom growth engines for various sectors, including Coaching Institutes, Hospitals, E-commerce brands, Real Estate, and Political Campaigns.",
  },
];

export const HomeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#0b0b0b] text-white py-16 sm:py-20 md:py-24 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* subtle glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)] pointer-events-none" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              Frequently Asked Questions about Digital Marketing
            </h2>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-5">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <article key={faq.question}>
                  {/* QUESTION */}
                  <h3 id={questionId} className="m-0">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className={`w-full flex items-center justify-between gap-4 text-left px-6 py-5 rounded-2xl border transition-all duration-300
                      ${
                        isOpen
                          ? "border-yellow-400 bg-[#0f1629] shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
                          : "border-yellow-500/70 bg-[#0b1024] hover:border-yellow-400 hover:bg-[#10182e] hover:shadow-[0_0_10px_rgba(234,179,8,0.15)]"
                      }`}
                    >
                      <span className="text-base sm:text-lg md:text-xl pr-4">
                        {index + 1}. {faq.question}
                      </span>

                      {/* ICON */}
                      <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-white/30 text-white text-xl font-semibold transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {/* ANSWER */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};