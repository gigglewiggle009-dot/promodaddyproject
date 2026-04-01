"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const services = [
  {
    title: "Google Search Ads",
    description:
      "Search Ads appear when users actively search for your product or service on Google. These campaigns capture the highest purchase intent and help you generate qualified leads fast.",
    points: [
      "Buyer-intent keyword research",
      "High-converting ad copywriting",
      "Bid strategy optimization",
      "Negative keyword management",
      "Quality Score improvements",
      "Landing page recommendations",
    ],
  },
  {
    title: "Display & Remarketing Ads",
    description:
      "Bring back visitors who explored your website but did not convert. Display and remarketing campaigns help your brand stay visible across Google’s massive ad network.",
    points: [
      "Website visitor remarketing",
      "Custom audience targeting",
      "Banner creative coordination",
      "Frequency control",
      "Cross-device targeting",
      "Brand recall campaigns",
    ],
  },
  {
    title: "Google Shopping Ads",
    description:
      "Perfect for e-commerce businesses in India. Shopping Ads show your product image, price, and store name directly in search results, increasing clicks and conversion intent.",
    points: [
      "Merchant Center setup",
      "Product feed optimization",
      "Shopping campaign structure",
      "Performance Max support",
      "Competitor price visibility",
      "E-commerce conversion tracking",
    ],
  },
  {
    title: "Performance Max Campaigns",
    description:
      "Performance Max helps you reach customers across Search, Display, YouTube, Gmail, and Maps using Google’s AI-powered automation and conversion-focused targeting.",
    points: [
      "Asset group creation",
      "Audience signals setup",
      "Headline and description testing",
      "Creative optimization",
      "GA4 integration",
      "Weekly performance improvements",
    ],
  },
  {
    title: "Google Ads for Coaching Institutes",
    description:
      "This is where Promodaddy has a real edge. We create high-converting admission campaigns for coaching institutes in Kota and across India with tailored targeting for parents, students, and specific courses.",
    points: [
      "Admission lead generation strategy",
      "Parent vs student targeting",
      "WhatsApp lead capture integration",
      "Course-specific campaign structure",
      "Seasonal admission campaign planning",
      "Competitor conquest campaigns",
    ],
    featured: true,
  },
];

const GoogleAdsServices = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.10),_transparent_65%)] pointer-events-none" />

      <SharedLayout>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-purple-400 text-sm mb-3">
              Our Google Ads Services
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Campaign Types Built to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Maximize ROI
              </span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              From Search Ads to Performance Max, we build Google Ads campaigns
              that are structured for visibility, clicks, leads, and revenue.
              Every campaign is tailored to your business model, budget, and
              growth stage.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl border p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                  service.featured
                    ? "border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-white/[0.03] to-indigo-500/10 shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                }`}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs sm:text-sm text-purple-300 mb-5">
                    Kota Specialty
                  </div>
                )}

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
                  {/* Left */}
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-300 transition group-hover:border-purple-500/20"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default GoogleAdsServices;