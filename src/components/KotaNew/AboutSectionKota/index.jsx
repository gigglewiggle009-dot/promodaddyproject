"use client";

import React from "react";
import marketingImg from "@/assets/marketing-team.jpg";
import { SharedLayout } from "@/components/SharedComponent";
import {
  Trophy,
  MapPin,
  BarChart3,
  GraduationCap,
  BadgeIndianRupee,
  Rocket,
} from "lucide-react";

export const AboutSectionKota = () => {
  const features = [
    {
      icon: Trophy,
      text: "Campaigns for Sonu Sood, Mohammad Shami & T-Series",
    },
    {
      icon: MapPin,
      text: "Office in Kota — we know this market personally",
    },
    {
      icon: BarChart3,
      text: "Weekly transparent reports — no hidden numbers",
    },
    {
      icon: GraduationCap,
      text: "Specialists in Coaching Institute admission lead generation",
    },
    {
      icon: BadgeIndianRupee,
      text: "Packages starting Rs.8,000/month — no long-term lock-in",
    },
    {
      icon: Rocket,
      text: "Google Ads campaigns live within 7 working days",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.10),transparent_30%)] pointer-events-none" />

      <SharedLayout>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT IMAGE SIDE */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-blue-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl">
              <img
                src={marketingImg.src}
                alt="Digital Marketing Company in Kota"
                className="w-full h-[320px] sm:h-[420px] lg:h-[560px] object-cover"
              />
            </div>

            {/* Floating Badge 1 */}
            {/* <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Trusted Growth
              </p>
              <p className="text-sm sm:text-base font-semibold text-white">
                Local Expertise + National Execution
              </p>
            </div> */}

            {/* Floating Badge 2 */}
            {/* <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-3 shadow-2xl">
              <p className="text-xs text-white/80 uppercase tracking-wider">
                Fast Launch
              </p>
              <p className="text-sm sm:text-base font-semibold text-white">
                Ads Live in 7 Days
              </p>
            </div> */}
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div className="relative">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-sm text-purple-300 font-medium">
                  Why Businesses Choose Promodaddy
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-semibold mb-5 sm:mb-6 leading-tight">
                Boost Your Brand With the Best Digital Marketing Company in Kota
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                Promodaddy Digital is a trusted digital marketing company in Kota,
                helping local businesses, coaching institutes, clinics, and brands
                build a powerful online presence and generate high-quality leads.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                Our team combines local Kota market knowledge with pan-India
                campaign experience — from Google Ads and SEO to social media and
                performance marketing. We don't just run campaigns. We deliver
                measurable business growth.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Whether you run a coaching institute, healthcare clinic, real
                estate business, e-commerce store, or local service in Kota — we
                focus on one thing: results that matter to your business.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-white">
                What Makes Promodaddy the Best Digital Marketing Agency in Kota
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 transition duration-300 hover:border-purple-500/40 hover:bg-white/[0.04] hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20">
                        <Icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-gray-300 group-hover:text-white transition">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};