"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    factor: "Music Label Experience",
    promodaddy:
      "T-Series, Zee Music, Sony Music — proven at India’s highest level",
    others: "No major music label work",
  },
  {
    factor: "Speed",
    promodaddy: "10-20M views in 24 hours — fastest delivery in India",
    others: "Days or weeks for same result",
  },
  {
    factor: "India + Worldwide",
    promodaddy: "Campaigns executed in India and internationally",
    others: "India only or no global experience",
  },
  {
    factor: "Scale",
    promodaddy: "500+ YouTube campaigns across music, business, entertainment",
    others: "Limited campaign portfolio",
  },
  {
    factor: "Full YouTube Suite",
    promodaddy: "Views + Ads + SEO + Channel Growth + Shorts + Music Promo",
    others: "1-2 services only",
  },
  {
    factor: "Bollywood Experience",
    promodaddy: "Film trailer and song launch campaigns",
    others: "No entertainment industry experience",
  },
  {
    factor: "Independent Artist Growth",
    promodaddy: "Help emerging artists from zero to viral",
    others: "Only established clients",
  },
  {
    factor: "Transparent Reporting",
    promodaddy: "Daily reports for views, weekly for ads and SEO",
    others: "Monthly or no reporting",
  },
  {
    factor: "Based in India",
    promodaddy: "Kota & Mumbai — deep understanding of Indian audience",
    others: "Foreign agency or no local team",
  },
  {
    factor: "No Lock-in Contracts",
    promodaddy: "Flexible — per campaign or monthly retainer",
    others: "Long-term contracts mandatory",
  },
];

export const YouTubeMarketingComparison = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05),_transparent_45%)]" />
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Promodaddy Digital
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Not all agencies understand YouTube at scale. This comparison makes
              the gap painfully obvious, which is rare and refreshing.
            </p>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto max-w-6xl"
          >
            <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <table className="w-full min-w-[980px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="px-6 py-5 text-base font-semibold text-white/80">
                      Factor
                    </th>

                    <th className="px-6 py-5 text-base font-semibold text-purple-400">
                      <div className="flex items-center gap-2">
                        <span>Promodaddy Digital</span>
                        <CheckCircle2 className="h-5 w-5 text-purple-400" />
                      </div>
                    </th>

                    <th className="px-6 py-5 text-base font-semibold text-white/60">
                      <div className="flex items-center gap-2">
                        <span>Other Agencies</span>
                        <XCircle className="h-5 w-5 text-pink-400" />
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 transition duration-300 last:border-b-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-5 text-base font-semibold leading-7 text-white">
                        {row.factor}
                      </td>

                      <td className="px-6 py-5 text-base leading-7 text-white/78">
                        {row.promodaddy}
                      </td>

                      <td className="px-6 py-5 text-base leading-7 text-white/55">
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-sm text-white/45 md:hidden">
              Swipe horizontally to view the full table.
            </p>
          </motion.div>
        </div>
      </SharedLayout>
    </section>
  );
};