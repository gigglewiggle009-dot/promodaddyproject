"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import {
  Target,
  BarChart3,
  Eye,
  TrendingUp,
  MessageCircleMore,
  Zap,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Facebook Lead Generation Ads",
    description:
      "Capture high-quality leads directly on Facebook without a landing page. Users fill a pre-populated form in 2 taps - ideal for coaching institutes, real estate, healthcare, and service businesses targeting Indian consumers.",
    points: [
      "Instant Form setup & optimization",
      "CRM / WhatsApp integration for instant lead alerts",
      "Lookalike audience from existing customers",
      "A/B testing - audience, creative, headline",
      "CPL tracking and weekly reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Instagram Shopping & Catalogue Ads",
    description:
      "For product-based businesses - run dynamic catalogue ads that automatically show the right products to users most likely to buy. Highest ROI format for Indian D2C and e-commerce brands on Instagram.",
    points: [
      "Facebook / Instagram catalogue setup",
      "Dynamic Product Ads (DPA) - auto-personalized",
      "Collection & Carousel ad formats",
      "Instagram Shopping integration",
      "Purchase conversion optimization",
    ],
  },
  {
    icon: Eye,
    title: "Reels & Video Ads",
    description:
      "Instagram and Facebook Reels are India’s highest-reach ad format in 2024-25. We craft scroll-stopping video ad concepts, write scripts, and set up campaigns optimized for video views and website clicks.",
    points: [
      "Reel ad concept & scripting",
      "Aspect ratio optimization (9:16, 1:1, 16:9)",
      "Hook + CTA copywriting",
      "Reach & frequency campaign setup",
      "Brand awareness + retargeting funnel",
    ],
  },
  {
    icon: TrendingUp,
    title: "Retargeting & Remarketing Campaigns",
    description:
      "Re-engage users who visited your website, watched your videos, or interacted with your Facebook/Instagram page but didn’t convert. Retargeting delivers 3-5x higher conversion rates at lower costs.",
    points: [
      "Facebook Pixel / CAPI setup & verification",
      "Website visitor retargeting segmentation",
      "Video view retargeting (25%, 50%, 75%)",
      "Page engager audience campaigns",
      "Multi-step warm audience funnel",
    ],
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp Ads & Click-to-Message",
    description:
      "India’s most popular communication platform - Meta Ads can drive users directly to WhatsApp chat with your business. Perfect for coaching institutes, real estate, and local service businesses.",
    points: [
      "Click-to-WhatsApp campaign setup",
      "WhatsApp Business API integration guidance",
      "Automated welcome message templates",
      "Lead qualification chatbot coordination",
      "Cost per conversation tracking",
    ],
  },
  {
    icon: Zap,
    title: "Meta Ads for Coaching Institutes",
    description:
      "Coaching institutes in Kota and across India need hyper-targeted Meta campaigns that reach both students and parents. Our team has managed admission-season campaigns with CPLs as low as Rs.40",
    points: [
      "Student vs parent audience segmentation",
      "Admission season burst campaign planning",
      "Competitor audience targeting",
      "WhatsApp lead capture funnel",
      "Free counselling session lead campaigns",
    ],
  },
];

export const MetaAdsServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(139,92,246,0.10),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.04),transparent_30%,transparent_70%,rgba(168,85,247,0.04))] pointer-events-none" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 sm:mb-14 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">Our Complete </span>
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Meta Ads Services in India
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400 max-w-3xl mx-auto">
              We offer full-funnel Facebook and Instagram advertising services
              covering every stage of the customer journey - from awareness and
              engagement to lead generation, remarketing, and direct conversions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group h-full rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/25 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-purple-300">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-[28px] leading-snug font-bold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-base leading-8 text-gray-300">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-purple-500/40 via-pink-500/20 to-transparent" />

                  {/* Label */}
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                    What&apos;s Included
                  </p>

                  {/* Points */}
                  <ul className="space-y-4">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-purple-300"
                        />
                        <span className="text-sm sm:text-[15px] leading-7 text-gray-200">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MetaAdsServicesSection;