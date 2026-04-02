"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const pricingPlans = [
  {
    name: "Starter",
    price: "Rs.8,000",
    suffix: "/month",
    subtitle: "Perfect for small businesses",
    features: [
      "2 platforms",
      "12 posts/month",
      "Local businesses, new brands, and small businesses that need a consistent social media presence without overcomplicating the strategy.",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "Rs.15,000",
    suffix: "/month",
    subtitle: "For growing businesses",
    features: [
      "3 platforms",
      "20 posts/month",
      "Best for real estate, hotels, coaching institutes, clinics, and growing SMBs that want stronger visibility, engagement, and lead flow.",
    ],
    buttonText: "Choose Growth",
    buttonLink: "/contact",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "Rs.25,000",
    suffix: "/month",
    subtitle: "For scaling brands",
    features: [
      "5 platforms",
      "35 posts/month",
      "Built for growing brands, enterprises, and multi-location businesses that need more aggressive content, platform management, and reporting.",
    ],
    buttonText: "Go Pro",
    buttonLink: "/contact",
    featured: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
    suffix: "",
    subtitle: "For custom requirements",
    features: [
      "Any",
      "Custom",
      "Perfect for large brands, celebrities, political campaigns, education groups, hospitality chains, and national-level promotions.",
    ],
    buttonText: "Request Quote",
    buttonLink: "/contact",
    featured: false,
  },
];

const includedFeatures = [
  "Content calendar",
  "Graphic design",
  "Caption writing",
  "Hashtag research",
  "Community management",
  "Monthly analytics report",
  "Dedicated account manager",
];

export const SocialMediaPricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.04),transparent_25%,transparent_75%,rgba(91,39,247,0.03))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
              Packages & Pricing
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Transparent Social Media Marketing{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Packages for India
            </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Transparent pricing because Indian clients want to understand the
              investment before they contact. No hidden fees. No lock-in. Clear
              deliverables, platform coverage, and scalable monthly plans.
            </p>

            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Cancel anytime with 30 days notice.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex h-full flex-col rounded-[28px] border p-7 backdrop-blur-sm transition duration-300 md:p-8 ${
                  plan.featured
                    ? "border-purple-400/50 bg-white/[0.06] shadow-[0_0_35px_rgba(139,92,246,0.16)]"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.04]"
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                <span className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Most Popular
                </span>
                )}

                {/* Plan Name */}
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-300">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-bold leading-none text-white sm:text-5xl">
                    {plan.price}
                  </span>
                  {plan.suffix ? (
                    <span className="pb-1 text-sm text-gray-400 sm:text-base">
                      {plan.suffix}
                    </span>
                  ) : null}
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-base text-gray-300">{plan.subtitle}</p>

                {/* Features */}
                <div className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-gray-200 sm:text-base"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-purple-400"
                      />
                      <span className="leading-7">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href={plan.buttonLink}
                    className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold transition duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_12px_30px_rgba(91,39,247,0.24)] hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
                        : "border border-purple-400/20 bg-white/[0.02] text-white hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-white/[0.05]"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Included Section */}
          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-purple-400" />
              <p className="text-lg font-semibold text-white">All Plans Include:</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {includedFeatures.map((feature, index) => (
                <span
                  key={index}
                  className="rounded-full border border-purple-400/25 bg-white/[0.02] px-4 py-2 text-sm font-medium text-purple-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SocialMediaPricing;