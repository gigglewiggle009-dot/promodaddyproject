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
    subtitle: "Local businesses, small websites, new startups",
    features: [
      "On-page SEO",
      "GMB optimization",
      "5-8 keywords",
      "Monthly report",
      "Basic technical fixes",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "Rs.15,000",
    suffix: "/month",
    subtitle: "SMBs, coaching institutes, clinics, e-commerce",
    features: [
      "Everything in Starter",
      "Link building",
      "2 SEO blogs/month",
      "15-20 keywords",
      "Weekly updates",
      "Technical SEO",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "Rs.25,000",
    suffix: "/month",
    subtitle: "Competitive markets, large websites, e-commerce stores",
    features: [
      "Everything in Growth",
      "4 blogs/month",
      "30+ keywords",
      "Competitor tracking",
      "Full technical audit",
      "Priority support",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    featured: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
    suffix: "",
    subtitle: "Enterprises, pan-India multi-location, aggressive growth",
    features: [
      "Fully custom scope",
      "Based on your goals",
      "Timeline & market analysis",
      "Dedicated team",
      "Custom reporting",
      "Executive account manager",
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
    featured: false,
  },
];

export const SeoPricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              SEO Pricing in India —{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Transparent, No Hidden Charges
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              We believe pricing should be clear upfront. No surprises. No
              lock-in contracts. No hidden charges.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm transition duration-300 md:p-7 ${
                  plan.featured
                    ? "border-purple-400/50 bg-white/[0.05] shadow-[0_0_35px_rgba(139,92,246,0.14)]"
                    : "border-white/10 bg-white/[0.02] hover:border-purple-400/30 hover:bg-white/[0.03]"
                }`}
              >
                {/* Badge */}
                {plan.featured && plan.badge && (
                <div className="absolute top-0 left-0 w-full flex justify-center">
                    <span className="translate-y-[-50%] rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_20px_rgba(91,39,247,0.22)]">
                    {plan.badge}
                    </span>
                </div>
                )}

                {/* Plan name */}
                <p className="text-sm font-semibold uppercase tracking-[0.20em] text-purple-300">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-5 flex flex-wrap items-end gap-2">
                  <span className="text-4xl font-bold leading-none text-white sm:text-5xl">
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="pb-1 text-sm text-gray-400 sm:text-base">
                      {plan.suffix}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {plan.subtitle}
                </p>

                {/* Features */}
                <div className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-purple-300"
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

          {/* Bottom bar */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              <span className="font-semibold text-purple-300">
                ✅ All Plans Include:
              </span>{" "}
              No lock-in contract | Cancel with 30 days notice | Weekly/monthly
              transparent reporting | Dedicated account manager
            </p>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoPricing;