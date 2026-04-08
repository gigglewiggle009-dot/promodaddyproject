"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Music4,
  Film,
  Mic2,
  Building2,
  Hotel,
  GraduationCap,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const industries = [
  {
    icon: Music4,
    title: "Music Labels (Our #1 Specialty)",
    description:
      "T-Series, Zee Music, Sony Music and large-scale song or music video campaigns. Fast traction, high-volume views, and strong launch momentum across India and worldwide audiences.",
    featured: true,
    badge: "Our #1",
  },
  {
    icon: Film,
    title: "Bollywood Films",
    description:
      "Trailer promotions, song launches, cast interview videos, teaser pushes, and film-related campaigns designed to create launch-week momentum and higher recall.",
  },
  {
    icon: Mic2,
    title: "Independent Singers & Artists",
    description:
      "YouTube growth campaigns for views, subscribers, reach, discoverability, and stronger digital presence for artists building from zero to visible.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property walkthrough videos, project launch films, site visit creatives, and location-based campaigns that help developers generate trust and qualified attention.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Room showcase videos, wedding venue promotions, restaurant campaigns, festive offers, and hospitality-focused visibility campaigns that improve reach and bookings.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education",
    description:
      "Lecture samples, result videos, admission campaigns, institute branding, and trust-building YouTube promotion for coaching businesses and education brands.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const YouTubeMarketingIndustries = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05),_transparent_44%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              From India’s biggest music labels to real estate developers and
              coaching institutes, we build YouTube campaigns that deliver reach,
              visibility, and growth across multiple industries.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22 }}
                  className={`group relative rounded-[28px] border p-6 backdrop-blur-sm transition duration-300 sm:p-7 ${
                    item.featured
                      ? "border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-indigo-500/10 shadow-[0_0_35px_rgba(91,39,247,0.10)]"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/25 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(91,39,247,0.08)]"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        item.featured
                          ? "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20"
                          : "bg-white/[0.04]"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          item.featured ? "text-purple-300" : "text-purple-400"
                        }`}
                      />
                    </div>

                    {item.badge && (
                      <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl font-semibold leading-snug ${
                      item.featured ? "text-purple-300" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </SharedLayout>
    </section>
  );
};