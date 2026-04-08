"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqs = [
  {
    question: "How to get YouTube views fast in India?",
    answer:
      "Promodaddy Digital delivers 10 to 20 million YouTube views within 24 hours using our proven campaign infrastructure trusted by T-Series, Zee Music, and Sony Music. We combine targeted promotion and YouTube Ads for rapid, high-volume view delivery.",
  },
  {
    question: "Which is the best YouTube marketing agency in India?",
    answer:
      "Promodaddy Digital is India’s #1 choice for YouTube marketing and one of the few agencies with experience executing large-scale campaigns for T-Series, Zee Music, and Sony Music, while also serving businesses, real estate developers, and independent artists across India.",
  },
  {
    question: "Can you deliver 10 million YouTube views in 24 hours?",
    answer:
      "Yes. We have delivered 10 to 20 million YouTube views within 24 hours for major campaigns, including launches for T-Series and Zee Music. This is one of our strongest capabilities and a major reason clients choose us.",
  },
  {
    question: "Do you run YouTube campaigns internationally and worldwide?",
    answer:
      "Yes. Promodaddy Digital has executed both India and worldwide YouTube campaigns. Whether you need Indian audience targeting or international reach, we have the campaign infrastructure to deliver in both markets.",
  },
  {
    question: "How much does YouTube marketing cost in India?",
    answer:
      "YouTube Ads management starts from ₹3,000 per month. Channel growth packages start from ₹8,000 per month. Views campaign pricing depends on volume, timeline, and geographic targeting, so we provide custom quotes based on your campaign goals.",
  },
  {
    question: "Can you promote an independent singer on YouTube?",
    answer:
      "Yes. We help independent artists grow their YouTube channel through views campaigns, video SEO, channel optimization, and Shorts strategy. We have supported artists from zero visibility to strong viral reach in India.",
  },
  {
    question: "Is YouTube views promotion safe?",
    answer:
      "We use platform-compliant methods and real audience targeting, not bot traffic or fake views. Our campaigns are designed to be safe, sustainable, and aligned with YouTube’s platform standards, which is why major labels trust our execution.",
  },
  {
    question: "Where is Promodaddy Digital based?",
    answer:
      "Promodaddy Digital has offices in Kota, Rajasthan and Mumbai, Maharashtra, serving clients across India and internationally for YouTube marketing, digital advertising, and complete digital marketing services.",
  },
];

export const YouTubeMarketingFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05),_transparent_45%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-14 max-w-5xl text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked Questions About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                YouTube Marketing in India
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Straight answers, because vague agency talk is one of civilization’s
              worst habits.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-5xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  viewport={{ once: true, amount: 0.12 }}
                  className={`overflow-hidden rounded-[24px] border backdrop-blur-sm transition duration-300 ${
                    isOpen
                      ? "border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-indigo-500/10 shadow-[0_0_30px_rgba(91,39,247,0.10)]"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <h3 className="text-base font-semibold leading-7 text-white sm:text-lg">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-purple-300" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="text-sm leading-8 text-white/75 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};