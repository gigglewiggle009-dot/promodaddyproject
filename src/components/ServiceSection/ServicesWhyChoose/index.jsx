"use client";

import React from "react";
import { BarChart3, ShieldCheck, Target } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const features = [
  {
    title: "Data-Driven",
    description: "Every decision backed by analytics and real numbers",
    icon: BarChart3,
  },
  {
    title: "Fully Transparent",
    description: "Weekly reports — you always know where your money goes",
    icon: ShieldCheck,
  },
  {
    title: "ROI Focused",
    description: "We measure success in leads and revenue, not impressions",
    icon: Target,
  },
];

export const ServicesWhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Why{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                500+ Businesses
              </span>{" "}
              Trust Promodaddy Digital
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center">
            <p className="text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
              We are not just another digital marketing agency in India.
              Promodaddy Digital is a results-driven team that has managed
              campaigns for national celebrities including Sonu Sood and
              Mohammad Shami, executed projects connected with T-Series and Zee
              Music, and delivered consistent growth for businesses across Kota,
              Mumbai, Jaipur, Delhi and pan-India.
            </p>

            <p className="text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              Every service we offer is backed by data, transparency, and a
              commitment to real ROI — not just impressions and vanity metrics.
              We work with businesses of all sizes — from local shops in Kota to
              national brands across India.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)]"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-white/[0.02] text-purple-300 transition duration-300 group-hover:border-purple-400/50 group-hover:text-purple-200">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesWhyChoose;