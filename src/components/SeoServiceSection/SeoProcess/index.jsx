"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const processSteps = [
  {
    number: "01",
    title: "FREE SEO AUDIT",
    description:
      "We analyze your entire website — current rankings, technical issues, on-page problems, backlink profile, and top 5 competitor comparison. Delivered within 48 hours. Zero cost, no obligation.",
  },
  {
    number: "02",
    title: "CUSTOM STRATEGY",
    description:
      "Based on your audit, business goals, and budget, we build a tailored SEO roadmap — target keywords, content plan, technical fix list, and link building timeline. Month-by-month action plan.",
  },
  {
    number: "03",
    title: "EXECUTE",
    description:
      "Our team implements the full strategy — on-page optimization, technical fixes, content creation, and link building. Campaigns active within 7 working days of strategy approval.",
  },
  {
    number: "04",
    title: "REPORT & OPTIMIZE",
    description:
      "Every month you receive a detailed report showing keyword rankings, organic traffic, backlinks acquired, leads generated, and next month's plan. We optimize continuously based on data.",
  },
];

export const SeoProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              How We Work — Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                4-Step SEO Process
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)] md:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-4xl font-bold leading-none text-purple-500/35 sm:text-5xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-purple-300 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoProcess;