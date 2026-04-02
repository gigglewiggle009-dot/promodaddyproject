"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const industryData = [
  {
    id: "real-estate",
    icon: "🏠",
    title: "Real Estate",
    priority: "PRIORITY #1",
    featured: true,
    description:
      "Project launch posts, property tour Reels, testimonial videos, sold-out announcements, site visit CTAs, construction update posts, area guide content, festive property offers.",
    strategy: [
      "Project launch campaigns — Instagram + Facebook + YouTube",
      "Property tour Reels — virtual walkthrough format",
      "Construction progress update posts — builds buyer confidence",
      "Buyer testimonial videos — real experiences shared",
      "Sold-out announcements — creates FOMO",
      "Site visit CTA posts",
      "Festive property offers — Diwali, New Year",
    ],
  },
  {
    id: "hotels",
    icon: "🏨",
    title: "Hotels & Hospitality",
    priority: "PRIORITY #2",
    description:
      "Room showcase Reels, restaurant food photography, event & wedding promotion, seasonal offer graphics, guest review sharing, travel influencer collabs.",
    strategy: [
      "Room showcase Reels — cinematic tours",
      "Food photography — chef specials",
      "Wedding promotions — banquet halls",
      "Seasonal offers — festive packages",
      "Guest reviews & testimonials",
      "Influencer collaborations",
    ],
  },
  {
    id: "coaching",
    icon: "🎓",
    title: "Coaching & Education",
    priority: "PRIORITY #3",
    description:
      "Result celebration posts, faculty introduction Reels, student testimonials, exam tips content, admission campaigns, campus tour videos.",
    strategy: [
      "Result posts — ranks & percentages",
      "Faculty reels — build trust",
      "Student testimonials",
      "Exam tips content",
      "Admission campaigns",
      "Campus tours",
    ],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce / D2C",
    description:
      "Product Reels, unboxing content, offer announcements, customer testimonials, festive sale campaigns.",
    strategy: [],
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare",
    description:
      "Doctor tips content, patient testimonials, clinic awareness posts, health awareness Reels.",
    strategy: [],
  },
];

export const SocialMediaIndustryStrategy = () => {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white">
      {/* SAME BACKGROUND AS YOUR OTHER SECTION */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))]" />

      <SharedLayout>
        <div className="relative z-10">

          {/* HEADING */}
          <div className="mb-14 max-w-4xl">
            <h2 className="text-4xl font-bold leading-tight">
              Industry-Specific{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Social Media Strategy
              </span>
            </h2>

            <p className="mt-4 text-gray-400 text-lg">
              Every industry needs a different growth strategy. We build content
              that actually converts.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industryData.map((item, index) => {
              const isOpen = openCards[item.id];
              const hasStrategy = item.strategy.length > 0;

              return (
                <div
                  key={index}
                  className={`relative rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    item.featured
                      ? "border-purple-400/50 bg-white/[0.03] shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                      : "border-white/10 bg-white/[0.02] hover:border-purple-500/20 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* PRIORITY */}
                  {item.priority && (
                    <div
                      className={`mb-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold ${
                        item.featured
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                          : "border border-purple-400/20 bg-purple-500/10 text-purple-300"
                      }`}
                    >
                      {item.priority}
                    </div>
                  )}

                  {/* ICON */}
                  <div className="text-4xl mb-4">{item.icon}</div>

                  {/* TITLE */}
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      item.featured
                        ? "bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 leading-7">{item.description}</p>

                  {/* STRATEGY */}
                  {hasStrategy && (
                    <>
                      <button
                        onClick={() => toggleCard(item.id)}
                        className="mt-5 text-purple-300 font-semibold flex items-center gap-2"
                      >
                        {isOpen ? "Hide strategy" : "Show strategy"}
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "mt-5 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-3 border-t border-white/10 pt-5">
                            {item.strategy.map((point, i) => (
                              <div key={i} className="flex gap-2 text-gray-300">
                                <CheckCircle2 size={16} className="text-purple-400 mt-1" />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
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

export default SocialMediaIndustryStrategy;