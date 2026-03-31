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
      "1 Platform",
      "Basic SEO",
      "Monthly report",
      "Email support",
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
      "3 Platforms",
      "Advanced SEO",
      "Google Ads (up to Rs.25k budget)",
      "Weekly reports",
      "Priority support",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "pricing",
    subtitle: "For established brands",
    features: [
      "All Platforms",
      "Full SEO Suite",
      "Celebrity PR",
      "Influencer campaigns",
      "Daily reports",
      "Dedicated manager",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: false,
  },
];

export const ServicesPricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-14">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Transparent Pricing.{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                No Hidden Charges.
              </span>
            </h2>

            <p className="mt-4 text-sm text-gray-400 sm:text-base md:text-lg">
              Choose a plan that fits your growth stage
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm transition duration-300 md:p-8 ${
                  plan.featured
                    ? "border-purple-400/50 bg-white/[0.05] shadow-[0_0_30px_rgba(139,92,246,0.14)]"
                    : "border-white/10 bg-white/[0.02] hover:border-purple-400/30 hover:bg-white/[0.03]"
                }`}
              >
                {/* Featured badge */}
                {plan.featured && plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(91,39,247,0.22)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-bold leading-none text-white sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-gray-400 sm:text-base">
                    {plan.suffix}
                  </span>
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
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href={plan.buttonLink}
                    className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(91,39,247,0.22)] hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
                        : "border border-purple-400/30 bg-white/[0.02] text-purple-200 hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 sm:text-base">
              Not sure which plan fits?{" "}
              <Link
                href="/contact"
                className="font-semibold text-purple-300 transition hover:text-purple-200"
              >
                Get a free consultation.
              </Link>
            </p>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesPricing;