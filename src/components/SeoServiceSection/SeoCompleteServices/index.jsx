"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  Settings,
  MapPin,
  Link2,
  Globe,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const seoServices = [
  {
    icon: Search,
    title: "Keyword Research & Competitor Analysis",
    description:
      "The foundation of every successful SEO campaign is knowing exactly what your customers are searching for. We conduct in-depth keyword research to find high-intent, low-competition keywords that your business can realistically rank for on Google India. We also analyze your top 5 competitors.",
    points: [
      "Find high-value keywords with buyer intent specific to Indian market",
      "Identify long-tail keywords with low competition",
      "Map keywords to right pages",
      "Track competitor keyword gaps",
      "Build 6-month keyword targeting roadmap",
      "Search volume analysis in Indian metro + Tier 2/3 cities",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO Optimization",
    description:
      "On-page SEO means optimizing every element on your website pages so Google clearly understands what each page is about and ranks it higher. We audit every page systematically and fix what is holding your rankings back.",
    points: [
      "Title tag and meta description optimization",
      "H1, H2, H3 heading structure",
      "Keyword placement naturally within content",
      "Image optimization — compression, WebP format, ALT text",
      "Internal linking structure",
      "URL structure cleanup",
      "Content optimization aligned to search intent",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Technical SEO ensures that Google can crawl, index, and understand your website properly. Many Indian websites lose significant rankings because of technical problems invisible to the naked eye but very visible to Google.",
    points: [
      "Website speed optimization — Core Web Vitals",
      "Mobile-friendliness audit and fixes",
      "XML sitemap creation and Google Search Console submission",
      "Robots.txt configuration",
      "Canonical tags — fixing duplicate content",
      "Broken link audit",
      "HTTPS security verification",
      "Schema markup implementation",
      "Crawl error identification and resolution",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO & Google My Business Optimization",
    description:
      "If you run a local business in Kota, Jaipur, Mumbai, Delhi, or anywhere across India — Local SEO is the single most powerful tool to get more customers calling your phone or walking through your door.",
    points: [
      "Google My Business (GMB) complete setup and full optimization",
      "Google Maps Top 3 Local Pack targeting",
      "Local keyword optimization — city + service combinations",
      "NAP consistency across Justdial, Sulekha, IndiaMART",
      "Local citation building on 30+ Indian directories",
      "Google review management",
      "Location-specific landing pages for multi-city businesses",
    ],
  },
  {
    icon: Link2,
    title: "Link Building",
    description:
      "Backlinks are one of Google's top 3 ranking signals. The more high-quality, relevant websites that link to you, the more Google trusts your site. We only build genuine, white-hat backlinks from relevant Indian and international websites.",
    points: [
      "Guest posting on relevant Indian industry websites",
      "Indian business directory submissions",
      "Broken link building outreach",
      "Resource page link building",
      "Competitor backlink gap analysis",
      "PR-based link acquisition",
      "Monthly backlink report with domain authority tracking",
    ],
  },
  {
    icon: Globe,
    title: "Content SEO",
    description:
      "Google's core mission is to show users the most helpful, relevant content. We create content that is written for humans first and optimized for Google second — because that is exactly what Google's Helpful Content Update rewards.",
    points: [
      "SEO blog strategy — topics that rank AND convert",
      "Long-form pillar content targeting high-volume keywords",
      "Service page content optimization",
      "FAQ content targeting People Also Ask",
      "Content refresh strategy",
      "Monthly content calendar with keyword targets",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    description:
      "E-commerce SEO is a specialized discipline — optimizing hundreds of product pages so they rank on Google and bring in buyers actively ready to purchase. India's e-commerce market is growing rapidly, and SEO builds long-term organic growth.",
    points: [
      "Product page optimization — titles, descriptions, structured data",
      "Category page SEO",
      "Google Shopping feed optimization",
      "Schema markup for products",
      "E-commerce site speed optimization for mobile-first indexing",
      "Duplicate content fixes for filters and pagination",
    ],
  },
];

export const SeoCompleteServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Our Complete{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                SEO Services in India
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              We offer end-to-end SEO services covering every aspect of search
              engine optimization — from technical fixes to content strategy to
              link building. Whether you are a local business in Kota or a brand
              targeting pan-India customers, we have the right solution.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)] md:p-7"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-white/[0.03] text-purple-300 transition duration-300 group-hover:border-purple-400/40 group-hover:text-purple-200">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-purple-500/20 via-white/10 to-transparent" />

                  {/* Included title */}
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-purple-300">
                    What&apos;s Included
                  </p>

                  {/* Points */}
                  <div className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-purple-400"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-purple-200 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-white/[0.05] hover:text-white"
            >
              Not sure which plan? Talk to us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoCompleteServices;