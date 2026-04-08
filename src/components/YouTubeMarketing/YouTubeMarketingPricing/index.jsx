"use client";

import React from "react";
import { motion } from "framer-motion";
import { SharedLayout } from "@/components/SharedComponent";
import Link from "next/link";

const viewPlans = [
  {
    name: "Starter",
    range: "1L - 5L Views",
    description: "New artists, small launches",
    buttonText: "Get Custom Quote",
    featured: false,
  },
  {
    name: "Growth",
    range: "5L - 50L Views",
    description: "Mid-size music campaigns",
    buttonText: "Get Custom Quote",
    featured: false,
  },
  {
    name: "Premium",
    range: "50L - 1Cr Views",
    description: "Major label launches",
    buttonText: "Get Custom Quote",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    range: "1Cr+ Views",
    description: "T-Series scale - India + Worldwide",
    buttonText: "Get Custom Quote",
    featured: false,
  },
];

const adsPlans = [
  {
    name: "Starter",
    description: "Local businesses, single campaign",
    price: "₹3,000/month + ₹10,000 ad spend",
  },
  {
    name: "Growth",
    description: "Real estate, hotels, music ads",
    price: "₹6,000/month + ₹25,000 ad spend",
  },
  {
    name: "Pro",
    description: "Large brands, film promotions",
    price: "₹12,000/month + ₹60,000 ad spend",
  },
];

const seoPlans = [
  {
    name: "Starter",
    description: "Channel audit + SEO + upload strategy",
    price: "₹8,000/month",
  },
  {
    name: "Growth",
    description: "Growth + Shorts strategy + community",
    price: "₹15,000/month",
  },
  {
    name: "Pro",
    description: "Full strategy + content + cross-platform",
    price: "₹25,000/month",
  },
];

export const YouTubeMarketingPricing = () => {
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
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-14 max-w-5xl text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              YouTube Marketing{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </motion.div>

          {/* Views Campaigns */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-semibold text-purple-400 sm:text-3xl">
              YouTube Views Campaigns
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {viewPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.15 }}
                  className={`rounded-[28px] border p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 sm:p-7 ${
                    plan.featured
                      ? "border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-pink-500/8 to-indigo-500/10 shadow-[0_0_35px_rgba(91,39,247,0.12)]"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/25 hover:bg-white/[0.05]"
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-5 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-purple-200">
                      {plan.badge}
                    </div>
                  )}

                  <h4 className="text-2xl font-bold text-white">{plan.name}</h4>

                  <p className="mt-4 text-3xl font-bold text-purple-400">
                    {plan.range}
                  </p>

                  <p className="mt-4 min-h-[48px] text-base leading-7 text-white/70">
                    {plan.description}
                  </p>

                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_25px_rgba(91,39,247,0.18)] hover:opacity-95"
                        : "border border-purple-500/30 bg-white/[0.02] text-purple-300 hover:border-purple-400/40 hover:bg-white/[0.05]"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom pricing columns */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            {/* Ads Management */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <h3 className="mb-6 text-center text-2xl font-semibold text-purple-400 sm:text-3xl">
                YouTube Ads Management
              </h3>

              <div className="space-y-4">
                {adsPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition duration-300 hover:border-purple-500/25 hover:bg-white/[0.05] sm:px-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {plan.name}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/65 sm:text-base">
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-lg font-bold text-purple-400 sm:text-xl">
                          {plan.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Channel Growth & SEO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <h3 className="mb-6 text-center text-2xl font-semibold text-purple-400 sm:text-3xl">
                Channel Growth & SEO
              </h3>

              <div className="space-y-4">
                {seoPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition duration-300 hover:border-purple-500/25 hover:bg-white/[0.05] sm:px-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {plan.name}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/65 sm:text-base">
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-lg font-bold text-purple-400 sm:text-xl">
                          {plan.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};