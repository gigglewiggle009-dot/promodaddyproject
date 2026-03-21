"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const services = [
  {
    title: "SEO Services",
    description: "Rank on Google organically — free traffic forever",
  },
  {
    title: "Google Ads / PPC",
    description: "Instant leads — pay only when someone clicks",
  },
  {
    title: "Social Media Marketing",
    description: "Build brand on Instagram, Facebook, YouTube",
  },
  {
    title: "Meta Ads (FB + Instagram)",
    description: "High-ROI paid campaigns for leads & sales",
  },
  {
    title: "Website Development",
    description: "Fast, SEO-ready, mobile-first websites",
  },
  {
    title: "YouTube Marketing",
    description: "Channel growth, video SEO, YouTube Ads",
  },
  {
    title: "Celebrity PR & Branding",
    description: "Personal brand management for public figures",
  },
  {
    title: "Content Marketing",
    description: "SEO blogs, articles, and content strategy",
  },
  {
    title: "Local SEO",
    description: "Google Maps ranking for local businesses",
  },
  {
    title: "Influencer Marketing",
    description:
      "Brand collaborations with trusted influencers",
  },
];

export const ServiceAds = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black py-15 text-white md:py-28">
      <SharedLayout>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#f47c20]">
            What We Do
          </p>

          <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Services
          </h2>

          <div className="space-y-4">
  {services.map((service, index) => {
    const isOpen = activeIndex === index;

    return (
      <div
        key={index}
        className="group rounded-md border border-white/10 transition-all duration-300 hover:border-[#f47c20] hover:shadow-[0_0_25px_rgba(244,124,32,0.25)]"
      >
        <button
          onClick={() => toggle(index)}
          className="flex w-full items-center justify-between px-6 py-6 text-left"
        >
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-[#f47c20]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-[#f47c20]">
              {service.title}
            </h3>
          </div>

          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#f47c20]" : "text-white/60"
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-6 pb-6 pl-[64px] text-white/70">
            <p className="mb-4 leading-relaxed">
              {service.description}
            </p>

            <Link
              href="/service-ads"
              className="text-sm font-medium text-[#f47c20] hover:underline"
            >
              Get Started →
            </Link>
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