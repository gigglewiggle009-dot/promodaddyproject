"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SharedLayout } from "@/components/SharedComponent";

import facebookImg from "@/assets/facebook-social-showcase.png";
import youtubeImg from "@/assets/youtube-social-showcase.png";
import linkedinImg from "@/assets/linkedin-social-showcase.png";
import twitterImg from "@/assets/twitter-social-showcase.png";
import instareelImg from "@/assets/instareel-social-showcase.png";
import contentCreationImg from "@/assets/contentcreation-social-showcase.png";

const sections = [
  {
    id: "facebook-marketing-india",
    eyebrow: "Facebook Growth",
    title: "Facebook Marketing Agency India",
    highlight: "Page Management & Growth",
    description:
      "Facebook remains one of India’s largest platforms for local awareness, community engagement, event promotion, and lead generation. We build consistent brand presence with page strategy, post calendars, audience engagement, and campaign support.",
    points: [
      "Facebook Page setup and optimization",
      "Monthly content calendar and posting",
      "Community engagement and inbox handling",
      "Event and offer promotion creatives",
      "Performance tracking and monthly reports",
    ],
    image: facebookImg,
    alt: "Facebook marketing showcase for page growth and engagement strategy in India",
    reverse: false,
  },
  {
    id: "reels-marketing-india",
    eyebrow: "Short-Form Growth",
    title: "Reels Marketing Agency India",
    highlight: "India’s #1 Growth Format",
    description:
      "Reels is the fastest growing content format in India — delivering 2-3x more reach than static posts at zero extra cost. We create scroll-stopping short video content that builds brand awareness and drives engagement.",
    points: [
      "Reels content calendar — 8-12 Reels/month",
      "Hook scripting — first 1-3 seconds decide everything",
      "Trending audio research — weekly update on viral sounds",
      "Real Estate Reels — property tour format, before/after reveals",
      "Hotel Reels — room showcase, food videos, event highlights",
      "Performance tracking — views, shares, profile visits from Reels",
    ],
    image: instareelImg,
    alt: "Instagram Reels marketing showcase for short video growth strategy in India",
    reverse: true,
  },
  {
    id: "youtube-marketing-india",
    eyebrow: "Video Visibility",
    title: "YouTube Marketing in India",
    highlight: "Channel Growth & Strategy",
    description:
      "YouTube helps brands build long-term visibility and trust. We help with channel optimization, Shorts strategy, thumbnails, titles, descriptions, publishing workflows, and audience growth planning for sustainable discovery.",
    points: [
      "Channel optimization and branding",
      "Shorts strategy and publishing plan",
      "Title, description, and thumbnail guidance",
      "Video content planning",
      "Subscriber and engagement growth tracking",
    ],
    image: youtubeImg,
    alt: "YouTube marketing showcase for channel optimization and growth in India",
    reverse: false,
  },
  {
    id: "linkedin-marketing-india",
    eyebrow: "B2B Positioning",
    title: "LinkedIn Marketing Agency India",
    highlight: "Authority & Lead Generation",
    description:
      "For B2B brands, founders, consultants, and real estate decision-makers, LinkedIn is one of the strongest platforms for trust and lead generation. We help build authority through profile strategy, content direction, and growth systems.",
    points: [
      "Company and founder profile optimization",
      "Thought leadership content planning",
      "LinkedIn lead generation strategy",
      "Post and carousel content support",
      "Monthly analytics and growth review",
    ],
    image: linkedinImg,
    alt: "LinkedIn marketing showcase for B2B authority building and lead generation in India",
    reverse: true,
  },
  {
    id: "twitter-marketing-india",
    eyebrow: "Real-Time Reach",
    title: "Twitter/X Marketing in India",
    highlight: "Audience Engagement & Visibility",
    description:
      "Twitter/X works best for fast-moving conversations, brand voice, and ongoing visibility. We help create consistent posting strategies, conversation hooks, trend-aware content, and engagement systems that keep your brand active and relevant.",
    points: [
      "Content themes and posting structure",
      "Trend-based visibility strategy",
      "Brand voice and copy direction",
      "Conversation engagement support",
      "Growth tracking and reporting",
    ],
    image: twitterImg,
    alt: "Twitter X marketing showcase for real-time engagement and visibility in India",
    reverse: false,
  },
  {
    id: "content-creation-india",
    eyebrow: "Creative Production",
    title: "Content Creation",
    highlight: "Graphics, Hindi/Vernacular & Captions",
    description:
      "Our in-house content team creates on-trend, brand-aligned content in English and Hindi — stopping the scroll and driving engagement for businesses across Tier 1, 2, and 3 cities in India.",
    points: [
      "Graphic design — posts, carousels, infographics",
      "Reels scripting and editing guidance",
      "Caption writing with strategic hashtags",
      "Brand guideline adherence — consistent look and feel",
      "Festive content — IPL, Diwali, Holi, Eid, New Year",
      "Hindi/vernacular content for Rajasthan + Hindi belt markets",
    ],
    image: contentCreationImg,
    alt: "Content creation showcase for graphics Hindi vernacular posts and captions in India",
    reverse: true,
  },
];

function ShowcaseRow({ section, index }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { amount: 0.22 });
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      imageControls.start("visible");
    } else {
      textControls.start(section.reverse ? "hiddenRight" : "hiddenLeft");
      imageControls.start(section.reverse ? "hiddenLeft" : "hiddenRight");
    }
  }, [isInView, textControls, imageControls, section.reverse]);

  const textVariants = {
    hiddenLeft: { opacity: 0, x: -90, y: 20 },
    hiddenRight: { opacity: 0, x: 90, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hiddenLeft: { opacity: 0, x: -120, scale: 0.92, rotate: -2 },
    hiddenRight: { opacity: 0, x: 120, scale: 0.92, rotate: 2 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const isReverse = section.reverse;

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 items-center gap-10 lg:gap-16 ${
        isReverse
          ? "lg:grid-cols-[1.05fr_0.95fr]"
          : "lg:grid-cols-[0.95fr_1.05fr]"
      }`}
    >
      <motion.div
        className={isReverse ? "lg:order-2" : "lg:order-1"}
        variants={textVariants}
        initial={isReverse ? "hiddenRight" : "hiddenLeft"}
        animate={textControls}
      >
        <div className="max-w-[620px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            {section.eyebrow}
          </p>

          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {section.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              {section.highlight}
            </span>
          </h3>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            {section.description}
          </p>

          <div className="mt-8 space-y-4">
            {section.points.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 backdrop-blur-sm transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.04]"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-purple-400"
                />
                <p className="text-sm leading-7 text-gray-200 sm:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(91,39,247,0.22)] transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
            >
              Discuss This Service
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`relative ${isReverse ? "lg:order-1" : "lg:order-2"}`}
        variants={imageVariants}
        initial={isReverse ? "hiddenLeft" : "hiddenRight"}
        animate={imageControls}
      >
        <div className="relative mx-auto max-w-[640px]">
          <div className="absolute inset-0 rounded-[36px] bg-purple-500/15 blur-[110px]" />
          <div className="absolute -right-4 top-8 h-24 w-24 rounded-full bg-pink-500/10 blur-[60px]" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <motion.div
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Image
                src={section.image}
                alt={section.alt}
                className="h-auto w-full rounded-[24px] object-cover"
                priority={index < 2}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const SocialMediaPlatformShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_70%)]" />

      <SharedLayout>
        <div className="relative z-10">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-purple-500/30 bg-white/[0.03] px-4 py-2 text-sm font-medium text-purple-300">
              Platform-Wise Social Media Services
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Our Social Media Marketing{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Services by Platform
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Explore our platform-specific social media services including
              Facebook marketing, Reels marketing, YouTube growth, LinkedIn lead
              generation, Twitter/X engagement, and content creation in English
              and Hindi for Indian businesses.
            </p>
          </div>

          <div className="space-y-24">
            {sections.map((section, index) => (
              <ShowcaseRow key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};