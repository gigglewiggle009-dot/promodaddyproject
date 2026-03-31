"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import {
  Search,
  MousePointerClick,
  Send,
  Share2,
  Youtube,
  Globe,
  FileText,
  MapPin,
  Star,
  Users,
} from "lucide-react";

const services = [
  {
    id: "seo-services",
    title: "SEO Services",
    short: "Rank higher on Google organically",
    icon: Search,
  },
  {
    id: "google-ads",
    title: "Google Ads / PPC",
    short: "Instant leads from Day 1",
    icon: MousePointerClick,
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    short: "Facebook & Instagram campaigns",
    icon: Send,
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    short: "Build loyal brand community",
    icon: Share2,
  },
  {
    id: "youtube-marketing",
    title: "YouTube Marketing",
    short: "Grow channel & run video ads",
    icon: Youtube,
  },
  {
    id: "website-development",
    title: "Website Development",
    short: "SEO-ready mobile-first sites",
    icon: Globe,
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    short: "Content that ranks & converts",
    icon: FileText,
  },
  {
    id: "local-seo",
    title: "Local SEO",
    short: "Dominate Google Maps results",
    icon: MapPin,
  },
  {
    id: "celebrity-pr",
    title: "Celebrity PR & Branding",
    short: "Media presence & reputation",
    icon: Star,
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    short: "Authentic brand collaborations",
    icon: Users,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              All{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                10 Services
              </span>{" "}
              — Quick Overview
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Click any service to jump to details below
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  key={index}
                  href={`#${service.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)]"
                >
                  {/* Icon Box */}
                  <div className="mb-5 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-white/[0.02] text-purple-300 transition duration-300 group-hover:scale-105 group-hover:border-purple-400/60 group-hover:text-purple-200">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-white transition duration-300 group-hover:text-purple-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-400">
                    {service.short}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesGrid;