"use client";

import React from "react";
import { motion } from "framer-motion";
import { SharedLayout } from "@/components/SharedComponent";

const resultsData = [
  {
    client: "T-Series",
    about: "India’s #1 YouTube channel - 260M+ subscribers",
    campaign: "Large-scale song campaign - India",
    result: "10M+ views in 24 hours",
  },
  {
    client: "Zee Music Company",
    about: "Major Bollywood music label",
    campaign: "Music video views - India",
    result: "Rapid delivery for new launch",
  },
  {
    client: "Sony Music India",
    about: "International music powerhouse",
    campaign: "YouTube promotion campaign",
    result: "High-volume campaign execution",
  },
  {
    client: "Bollywood Films",
    about: "Film production houses",
    campaign: "Trailer + song - India",
    result: "Trending launch momentum",
  },
  {
    client: "Worldwide Campaigns",
    about: "International music & brand clients",
    campaign: "Global YouTube campaigns",
    result: "India + worldwide reach",
  },
  {
    client: "Independent Artists",
    about: "Emerging singers - India",
    campaign: "Channel growth + views",
    result: "Zero to viral strategy",
  },
];

export const YouTubeMarketingResults = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.08),_transparent_42%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-14 max-w-5xl text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Real YouTube Campaigns We Have Delivered -
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                India & Worldwide
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              T-Series + Zee Music + Sony Music + worldwide campaigns. Real execution,
              real scale, and the kind of delivery most agencies only write in fake pitch decks.
            </p>
          </motion.div>

          {/* Highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-10 max-w-6xl rounded-[30px] border border-purple-500/30 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 p-8 text-center shadow-[0_0_35px_rgba(91,39,247,0.10)] backdrop-blur-sm sm:p-10 md:mb-12 md:p-12"
          >
            <h3 className="text-4xl font-bold leading-tight text-purple-400 sm:text-5xl md:text-6xl">
              10-20 Million Views
            </h3>

            <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              in 24 Hours
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/75 sm:text-lg">
              Our fastest achievement, delivering 10 to 20 million YouTube views within
              a single 24-hour window for major song launches. We have executed these
              campaigns for India’s biggest music labels and have the speed, infrastructure,
              and expertise to repeat this at scale.
            </p>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto max-w-6xl"
          >
            <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <table className="min-w-[980px] w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="px-6 py-5 text-base font-semibold text-purple-400">
                      Client
                    </th>
                    <th className="px-6 py-5 text-base font-semibold text-purple-400">
                      About
                    </th>
                    <th className="px-6 py-5 text-base font-semibold text-purple-400">
                      Campaign
                    </th>
                    <th className="px-6 py-5 text-base font-semibold text-purple-400">
                      Result
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {resultsData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 transition duration-300 last:border-b-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-5 text-base font-semibold text-white">
                        {row.client}
                      </td>

                      <td className="px-6 py-5 text-base leading-7 text-white/72">
                        {row.about}
                      </td>

                      <td className="px-6 py-5 text-base leading-7 text-white/72">
                        {row.campaign}
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 whitespace-nowrap">
                          {row.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Helper note for mobile */}
            <p className="mt-4 text-center text-sm text-white/45 md:hidden">
              Swipe horizontally to view the full table.
            </p>
          </motion.div>
        </div>
      </SharedLayout>
    </section>
  );
};