"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  BarChart3,
  TrendingUp,
  Users,
  Clapperboard,
  Music4,
  ChevronDown,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const services = [
  {
    icon: Play,
    title: "YouTube Views Campaign — 10M+ Views in 24 Hours",
    shortDescription:
      "Our flagship service. We deliver high-volume, fast-turnaround YouTube view campaigns that T-Series, Zee Music, and Sony Music have trusted for their most important launches.",
    points: [
      "10–20 million views within 24 hours — India's fastest",
      "India and worldwide audience targeting",
      "New song launch campaigns — views from Hour 1",
      "Film trailer views — trend-driving campaigns",
      "Sustained view campaigns — 7 to 30 days delivery",
      "Independent artist campaigns — zero to viral",
    ],
  },
  {
    icon: BarChart3,
    title: "YouTube Ads Management — India & Worldwide",
    shortDescription:
      "Precision-targeted YouTube Ads for music labels, businesses, real estate, hotels, and coaching institutes — in India and internationally.",
    points: [
      "Skippable In-Stream, Non-Skippable & Bumper Ads",
      "Discovery Ads — appear in YouTube search results",
      "Shorts Ads — for younger Indian audiences",
      "Masthead Ads — YouTube homepage takeover",
      "Music genre and artist interest targeting",
    ],
  },
  {
    icon: TrendingUp,
    title: "YouTube SEO — Video Ranking India",
    shortDescription:
      "Optimize your videos to rank in YouTube search and on Google — bringing organic views for months and years without paying per view.",
    points: [
      "Keyword research for YouTube India",
      "Video title optimization — search-friendly",
      "Description writing — 200–300 words, keyword-rich",
      "Tag strategy — broad, specific, competitor tags",
      "Chapter markers for improved watch time",
    ],
  },
  {
    icon: Users,
    title: "YouTube Channel Growth India",
    shortDescription:
      "We grow channels for independent artists, businesses, coaching institutes, real estate brands, and hotels using content strategy, SEO, and smart promotion.",
    points: [
      "Channel audit — full performance and gap analysis",
      "Channel optimization — banner, logo, about section",
      "Content strategy — topics that rank and grow",
      "Upload schedule — consistency plan for algorithm",
      "Playlist structure — improve session watch time",
    ],
  },
  {
    icon: Clapperboard,
    title: "YouTube Shorts Strategy India",
    shortDescription:
      "India is the #1 market for Shorts globally. We build Shorts strategies that drive subscriber growth and brand awareness in weeks — organically.",
    points: [
      "Shorts content calendar — 3–5 Shorts per week",
      "Hook writing — first 1–2 seconds that hook viewers",
      "Trending audio and format research — weekly update",
      "Shorts for music — song teasers, lyrics clips",
      "Shorts for business — product demos, tips",
      "Shorts-to-subscriber funnel — convert views to followers",
    ],
  },
  {
    icon: Music4,
    title: "Music Video Promotion — India & Worldwide",
    shortDescription:
      "Our experience with T-Series, Zee Music, and Sony Music gives us deep expertise in music industry campaigns — speed, scale, and trending momentum globally.",
    points: [
      "New song launch — India + worldwide audience reach",
      "Music video trending campaigns — YouTube trending tab",
      "Singer personal branding and channel growth",
      "Lyric video and behind-the-scenes promotion",
      "Collaboration video cross-promotion",
      "Independent artist launch — zero to viral strategy",
    ],
  },
];

export const YouTubeMarketingServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <div className="mx-auto mb-14 max-w-5xl text-center md:mb-16">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Our Complete YouTube Marketing Services —
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                India & Worldwide
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Every YouTube growth goal covered — views, ads, SEO, channel growth,
              Shorts strategy, and music video promotion built for India and global campaigns.
            </p>
          </div>

          {/* Accordion grid */}
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`rounded-[28px] border backdrop-blur-sm transition duration-300 ${
                    isOpen
                      ? "border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-indigo-500/10 shadow-[0_0_35px_rgba(91,39,247,0.10)]"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                          isOpen
                            ? "border-purple-400/30 bg-purple-500/10"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            isOpen ? "text-purple-300" : "text-purple-400"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="pr-2 text-xl font-semibold leading-snug text-white">
                            {service.title}
                          </h3>

                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-1 shrink-0"
                          >
                            <ChevronDown className="h-5 w-5 text-purple-300" />
                          </motion.div>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                          {service.shortDescription}
                        </p>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 border-t border-white/10 pt-5">
                                <ul className="space-y-3">
                                  {service.points.map((point, pointIndex) => (
                                    <li
                                      key={pointIndex}
                                      className="flex items-start gap-3 text-sm leading-7 text-white/78 sm:text-base"
                                    >
                                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};