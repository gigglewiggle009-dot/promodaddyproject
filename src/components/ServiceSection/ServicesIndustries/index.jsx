"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import {
  GraduationCap,
  Building2,
  HeartPulse,
  ShoppingCart,
  Utensils,
  Landmark,
} from "lucide-react";

const industries = [
  {
    title: "Coaching & Education",
    desc: "Admission lead generation, YouTube growth, Google Ads — lowest CPL in Kota market.",
    icon: GraduationCap,
    highlight: true,
  },
  {
    title: "Real Estate",
    desc: "Property inquiry campaigns via Meta Ads, Google Search, and landing pages.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "Patient inquiry campaigns, GMB optimization, clinic visibility.",
    icon: HeartPulse,
  },
  {
    title: "E-Commerce",
    desc: "Product page SEO, Google Shopping Ads, Meta catalog ads.",
    icon: ShoppingCart,
  },
  {
    title: "Hospitality",
    desc: "Hotel & restaurant bookings via Google Ads, Instagram, and local SEO.",
    icon: Utensils,
  },
  {
    title: "Political Campaigns",
    desc: "End-to-end election digital strategy — social, video, targeted ads.",
    icon: Landmark,
  },
];

export const ServicesIndustries = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Industries{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                We Serve
              </span>{" "}
              Across India
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Deep domain expertise across multiple industries
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`group relative rounded-xl border transition duration-300 p-6 
                  ${
                    item.highlight
                      ? "border-yellow-400 bg-yellow-400/5 shadow-[0_0_25px_rgba(250,204,21,0.15)]"
                      : "border-white/20 bg-white/[0.02] hover:border-purple-400/50 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* ICON BOX */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-md border 
                    ${
                      item.highlight
                        ? "border-yellow-400 text-yellow-400"
                        : "border-white/20 text-purple-300 group-hover:text-purple-400"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* FEATURE TAG */}
                  {item.highlight && (
                    <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide text-yellow-400 border border-yellow-400 px-2 py-[2px] rounded">
                      FEATURED
                    </span>
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

export default ServicesIndustries;