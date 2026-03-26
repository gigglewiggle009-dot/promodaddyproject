"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Search,
  Megaphone,
  Instagram,
  Facebook,
  Globe,
  Youtube,
  Star,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const services = [
  { title: "Search Engine Optimization (SEO)", description: "Rank on the first page of Google organically for long-term free traffic.", icon: Search },
  { title: "Google Ads / PPC", description: "Get instant high-intent leads. Pay only when customers click.", icon: Megaphone },
  { title: "Social Media Marketing", description: "Build a powerful brand presence on Instagram, Facebook, and YouTube.", icon: Instagram },
  { title: "Meta Ads (FB + Instagram)", description: "High-ROI performance marketing designed for sales and lead generation.", icon: Facebook },
  { title: "Website Development", description: "Fast, mobile-first, and SEO-ready websites that convert visitors into customers.", icon: Globe },
  { title: "YouTube Marketing", description: "Channel growth, video SEO, YouTube Ads", icon: Youtube },
  { title: "Celebrity PR & Branding", description: "Expert personal brand management for public figures and professionals.", icon: Star },
  { title: "Content Marketing", description: "SEO blogs, articles, and content strategy", icon: FileText },
  { title: "Local SEO", description: "Dominate Google Maps and attract local customers in your city.", icon: MapPin },
  { title: "Influencer Marketing", description: "Brand collaborations with trusted influencers", icon: Users },
];

export const ServiceAds = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black py-16 md:py-24 text-white">
      <SharedLayout>
        <div className="max-w-5xl mx-auto">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#f47c20]">
            What We Do
          </p>

          <h2 className="mb-1 text-4xl font-bold sm:text-5xl md:text-6xl">
            Our Services
          </h2>

          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
            We don&apos;t just provide services; we build growth engines for your business.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-xl border border-white/10 transition-all duration-300 hover:border-[#f47c20] hover:shadow-[0_0_25px_rgba(244,124,32,0.25)]"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-[#f47c20]/10 text-[#f47c20]">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-[#f47c20]">
                        {service.title}
                      </h3>
                    </div>

                    {/* ICON */}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#f47c20]" : "text-white/50"
                      }`}
                    />
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pl-[64px] text-white/70">
                        <p className="mb-3">{service.description}</p>

                        <Link
                          href="/service-ads"
                          className="text-sm font-medium text-[#f47c20] hover:underline"
                        >
                          Get Started →
                        </Link>
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