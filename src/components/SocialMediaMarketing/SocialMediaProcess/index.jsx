"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const processSteps = [
  {
    number: "01",
    title: "FREE AUDIT",
    description:
      "We analyze your current social media profiles, competitor accounts, and audience insights — at zero cost.",
  },
  {
    number: "02",
    title: "STRATEGY",
    description:
      "Custom content strategy for your brand — platform selection, content types, posting schedule, and tone of voice.",
  },
  {
    number: "03",
    title: "EXECUTE",
    description:
      "Content creation and posting begins within 7 working days. Consistent, on-brand content goes live every week.",
  },
  {
    number: "04",
    title: "REPORT & GROW",
    description:
      "Monthly analytics report — reach, engagement, follower growth, leads. We optimize every month based on data.",
  },
];

export const SocialMediaProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.03),transparent_25%,transparent_75%,rgba(91,39,247,0.03))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-purple-300">
              OUR PROCESS
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
              How We Work{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                in 4 Clear Steps
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              From first meeting to measurable results, our social media
              marketing process is built to keep execution smooth, transparent,
              and growth-focused.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)] md:p-7"
              >
                <div className="flex items-start gap-6">
                  <span className="min-w-[56px] text-5xl font-bold leading-none text-purple-700 sm:text-6xl">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-purple-200 sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
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

export default SocialMediaProcess;