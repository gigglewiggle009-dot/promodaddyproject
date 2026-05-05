"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const faqs = [
  {
    question: "What is influencer marketing?",
    answer:
      "Influencer marketing is a digital marketing strategy where brands promote products, services or campaigns through influencers, creators, YouTubers or celebrities who already have an engaged audience.",
  },
  {
    question: "Which platforms are best for influencer marketing in India?",
    answer:
      "Instagram, YouTube, Facebook, Reels and Shorts work well depending on your business goal. Instagram is strong for visibility, while YouTube is better for detailed trust-building and long-term discovery.",
  },
  {
    question: "Do you provide micro influencers and celebrity influencers?",
    answer:
      "Yes. Promodaddy Digital works with micro influencers, macro influencers, regional creators, YouTubers and celebrity influencers based on your campaign goal, audience and budget.",
  },
  {
    question: "Can influencer marketing generate leads?",
    answer:
      "Yes. Influencer marketing can generate leads when the campaign has a clear CTA, offer, landing page, WhatsApp funnel or enquiry process. Without that, it becomes just another pretty post floating into the internet swamp.",
  },
  {
    question: "How do you select the right influencers for a brand?",
    answer:
      "We check niche relevance, audience quality, engagement rate, content style, location, brand fit and campaign objective before shortlisting influencers.",
  },
  {
    question: "Is influencer marketing useful for local businesses?",
    answer:
      "Yes. Local influencer campaigns can work well for real estate, hotels, restaurants, coaching institutes, salons, clinics, retail stores and events.",
  },
];

export const InfluencerFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.08),_transparent_50%)]" />

      <SharedLayout>
        <div className="relative">
          <div className="mx-auto mb-14 max-w-5xl text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Influencer Marketing
              </span>
            </h2>
          </div>

          <div className="mx-auto max-w-5xl space-y-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition hover:border-purple-400/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  >
                    <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                      {item.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-gray-400 transition duration-300 ${
                        isOpen ? "rotate-180 text-purple-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-7">
                      <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
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