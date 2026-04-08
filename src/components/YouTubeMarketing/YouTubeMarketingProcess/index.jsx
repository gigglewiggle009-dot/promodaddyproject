"use client";

import React from "react";
import { motion } from "framer-motion";
import { SharedLayout } from "@/components/SharedComponent";

const steps = [
  {
    number: "01",
    title: "Campaign Strategy",
    description:
      "We understand your goal - views, trending, channel growth, or brand awareness. We define target audience, geography (India / worldwide), and success metrics.",
  },
  {
    number: "02",
    title: "Audience Targeting",
    description:
      "We identify the right audience - music fans, regional demographics, age groups, interest clusters, India-specific or worldwide targeting as required.",
  },
  {
    number: "03",
    title: "Campaign Launch",
    description:
      "Campaigns go live with speed. For views campaigns, delivery can begin within hours. For ad campaigns, activation happens quickly after approval.",
  },
  {
    number: "04",
    title: "Real-Time Optimization",
    description:
      "We monitor campaign performance closely, pause weak segments, improve winning audiences, and maintain speed with better quality delivery.",
  },
  {
    number: "05",
    title: "Reporting",
    description:
      "You get clear reporting for views, reach, engagement, and impact. No vague nonsense, just transparent numbers and campaign insights.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const YouTubeMarketingProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.06),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.08),_transparent_42%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-14 max-w-5xl text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              How Our YouTube Campaign Works -
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                5 Simple Steps
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              When you see massive view numbers, you naturally want to know how.
              Here’s our proven process for planning, launching, optimizing, and
              reporting YouTube campaigns properly for actual results.
            </p>
          </motion.div>

          {/* Desktop layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:grid lg:grid-cols-5 lg:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[62%] top-[34px] h-[2px] w-[76%] bg-gradient-to-r from-purple-500/70 via-pink-500/50 to-indigo-500/70" />
                )}

                {/* Number circle */}
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20 text-2xl font-bold text-white shadow-[0_0_35px_rgba(91,39,247,0.18)] backdrop-blur-sm">
                  {step.number}
                </div>

                {/* Title */}
               <h3 className="mt-6 text-xl font-semibold text-purple-400">
                {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-white/70 xl:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile / tablet layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 lg:hidden"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20 text-lg font-bold text-white shadow-[0_0_25px_rgba(91,39,247,0.16)]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                        {step.title}
                      </span>
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/70 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-indigo-500/50" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SharedLayout>
    </section>
  );
};