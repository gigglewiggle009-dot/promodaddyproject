"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import {
  SearchCheck,
  Lightbulb,
  Rocket,
  BarChart3,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "FREE AUDIT",
    description:
      "Analyze website, competitors & current digital presence — zero cost.",
    icon: SearchCheck,
  },
  {
    step: "02",
    title: "CUSTOM STRATEGY",
    description:
      "Tailored plan for your business — SEO, Ads, social, or all three.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "EXECUTE",
    description:
      "Campaigns live within 7 working days. No delays, no excuses.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "REPORT & SCALE",
    description:
      "Weekly transparent reports — leads, clicks, rankings, ROI.",
    icon: BarChart3,
  },
];

export const ServicesProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              How We Work —{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Simple 4-Step Process
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              A transparent growth process built for speed, clarity, and measurable results
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="space-y-6 md:hidden">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 text-sm font-bold text-purple-300">
                        {item.step}
                      </div>

                      {index !== processSteps.length - 1 && (
                        <div className="mt-3 h-12 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-70" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-purple-300">
                        <Icon size={20} />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout */}
          <div className="relative hidden md:block">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-[38px] h-[2px] bg-gradient-to-r from-purple-500/20 via-pink-500/40 to-indigo-500/20" />

            <div className="grid grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="relative text-center">
                    {/* Step Number Circle */}
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/40 bg-[#0b0b0b] text-lg font-bold text-purple-300 shadow-[0_0_25px_rgba(139,92,246,0.14)]">
                      {item.step}
                    </div>

                    {/* Icon Box */}
                    <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-purple-300 transition duration-300 hover:border-purple-400/40 hover:bg-white/[0.05]">
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[250px] text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesProcess;