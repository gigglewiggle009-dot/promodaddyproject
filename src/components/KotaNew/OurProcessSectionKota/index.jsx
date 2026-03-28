"use client";

import React from "react";
import {
  ClipboardList,
  Lightbulb,
  Layers3,
  SmilePlus,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const OurProcessSectionKota = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList size={34} strokeWidth={2.2} />,
      title: "FREE AUDIT",
      desc: "We analyze your website, competitors, and current digital presence — at zero cost to you.",
    },
    {
      number: "02",
      icon: <Lightbulb size={34} strokeWidth={2.2} />,
      title: "CUSTOM STRATEGY",
      desc: "We build a tailored plan for your Kota business — SEO, Ads, social, or all three.",
    },
    {
      number: "03",
      icon: <Layers3 size={34} strokeWidth={2.2} />,
      title: "EXECUTE",
      desc: "Campaigns go live within 7 working days. No delays, no excuses.",
    },
    {
      number: "04",
      icon: <SmilePlus size={34} strokeWidth={2.2} />,
      title: "REPORT",
      desc: "Weekly transparent reports with real numbers — leads, clicks, rankings, and ROI.",
    },
  ];

  return (
    <section className="relative bg-[#050505] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.10),_transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.10),_transparent_30%)] pointer-events-none" />

      <SharedLayout>
        <div className="relative">
          {/* Heading */}
          <div className="text-center mb-14 sm:mb-16 md:mb-20">
            <p className="text-sm sm:text-base font-medium text-blue-400 mb-3">
              // Our Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              How We Work {" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Simple 4-Step Process
              </span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="group text-center flex flex-col items-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_35px_rgba(99,102,241,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(139,92,246,0.45)]">
                    {item.icon}
                  </div>

                  {/* Step badge */}
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#081131] border border-white/15 flex items-center justify-center text-sm font-semibold text-white shadow-lg">
                    {item.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};