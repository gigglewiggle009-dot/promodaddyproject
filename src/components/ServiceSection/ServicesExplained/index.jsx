"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  MousePointerClick,
  Send,
  Share2,
  Youtube,
  Globe,
  FileText,
  MapPin,
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const servicesDetails = [
  {
    id: "seo-services",
    number: "01",
    label: "SEO Services",
    title: "SEO Services in India — Rank Higher, Get More Customers Organically",
    description:
      "In a country with 900+ million internet users, being on Google's first page is not optional — it is survival. Our SEO services in India are built to help businesses rank for high-intent keywords that bring real customers, not just traffic. We cover everything from keyword research and on-page optimization to technical SEO, link building, and Google My Business (GMB) management. Whether you are a local business in Kota or a brand targeting pan-India customers, we build SEO strategies that compound over time and deliver long-term organic growth.",
    points: [
      "Keyword Research & Competitor Analysis",
      "On-Page SEO — Title tags, meta, headings, content optimization",
      "Technical SEO — Site speed, crawlability, Core Web Vitals",
      "Local SEO & Google My Business (GMB) Optimization",
      "Link Building — High-quality backlinks from relevant sites",
      "Monthly SEO Reports with keyword ranking tracking",
      "E-commerce SEO for product pages and category rankings",
    ],
    cta: "Get Free SEO Audit",
    link: "/seo-services",
    icon: Search,
  },
  {
    id: "google-ads",
    number: "02",
    label: "Google Ads / PPC",
    title: "Google Ads Management in India — High-Converting PPC Campaigns",
    description:
      "Google Ads is the fastest way to reach customers who are actively searching for your product or service right now. Our Google Ads management service in India delivers high-converting campaigns that maximize your return on every rupee spent. We manage Search Ads, Display Ads, Shopping Ads, and Performance Max campaigns — all with complete transparency. You will see exactly where your budget is going, how many leads you are getting, and what your cost per lead is. No guesswork. No hidden charges. Just results.",
    points: [
      "Google Search Ads — Capture high-intent buyers instantly",
      "Display & Remarketing Ads — Re-engage website visitors",
      "Shopping Ads — For e-commerce product visibility",
      "Performance Max Campaigns — AI-powered full-funnel ads",
      "Landing Page Optimization for maximum conversions",
      "Weekly performance reports with CTR, CPC, ROAS data",
      "Budget management starting Rs.10,000/month ad spend",
    ],
    cta: "Start Your Google Ads Campaign",
    link: "/google-ads",
    icon: MousePointerClick,
  },
  {
    id: "meta-ads",
    number: "03",
    label: "Meta Ads",
    title: "Meta Ads Agency India — Facebook & Instagram Ads That Generate Leads",
    description:
      "With over 400 million Facebook users and 250 million Instagram users in India, Meta advertising is one of the most powerful ways to reach your exact target audience. Our Meta Ads service combines creative strategy with precision targeting to deliver leads, sales, and brand awareness at scale. Whether you want to generate leads for your coaching institute, drive sales for your e-commerce store, or build brand awareness for a new product launch — we create Meta Ad campaigns that speak to your audience in the right language, at the right time.",
    points: [
      "Facebook Lead Generation Ads — Low cost per lead",
      "Instagram Ads — Reels, Stories, and Feed campaigns",
      "Audience Targeting — Interest, behavior, lookalike audiences",
      "Retargeting Campaigns — Bring back website visitors",
      "Vernacular Ad Creatives — Hindi, regional language ads",
      "Festive & Seasonal Campaign Strategy (IPL, Diwali, etc.)",
      "Weekly ad performance reports with CPL and ROAS data",
    ],
    cta: "Launch Your Meta Ads Campaign",
    link: "/meta-ads",
    icon: Send,
  },
  {
    id: "social-media",
    number: "04",
    label: "Social Media Marketing",
    title: "Social Media Marketing Services in India — Build Your Brand Online",
    description:
      "Your customers are spending 3-4 hours daily on social media. Is your brand showing up? Our social media marketing services in India help businesses build a consistent, engaging, and conversion-focused presence across Instagram, Facebook, LinkedIn, and YouTube. We don't just post content. We build communities. Our team handles content strategy, creative design, caption writing, posting schedules, comment management, and monthly performance analysis — so your brand stays relevant, relatable, and growing every single day.",
    points: [
      "Platform Management — Instagram, Facebook, LinkedIn, YouTube",
      "Content Strategy & Monthly Content Calendar",
      "Creative Design — Posts, Reels, Stories, Carousels",
      "Caption Writing with SEO-optimized hashtags",
      "Community Management — Reply to comments and DMs",
      "Competitor Analysis and trend-based content ideas",
      "Monthly analytics report — reach, engagement, follower growth",
    ],
    cta: "Get Social Media Plan",
    link: "/social-media-marketing",
    icon: Share2,
  },
  {
    id: "youtube-marketing",
    number: "05",
    label: "YouTube Marketing",
    title: "YouTube Marketing Agency India — Grow Your Channel & Get More Views",
    description:
      "YouTube is India's #1 video platform with 467 million users — and it is also the world's second largest search engine. If your business is not on YouTube, you are invisible to millions of potential customers. Our YouTube marketing services help businesses and coaching institutes grow their channel organically through video SEO, and reach new audiences through targeted YouTube ad campaigns. From script writing and thumbnail design to video SEO and analytics — we handle everything.",
    points: [
      "YouTube Channel Setup & Optimization",
      "Video SEO — Titles, descriptions, tags, closed captions",
      "YouTube Ads — Skippable, Non-skippable, Bumper, Discovery",
      "Thumbnail Design that increases click-through rate",
      "Shorts Strategy — India's fastest growing video format",
      "Subscriber Growth & Community Tab Management",
      "Monthly YouTube analytics report",
    ],
    cta: "Grow My YouTube Channel",
    link: "/youtube-marketing",
    icon: Youtube,
  },
  {
    id: "website-development",
    number: "06",
    label: "Website Development",
    title: "Website Development Company in India — Fast, SEO-Ready, Mobile-Friendly Sites",
    description:
      "Your website is your most important digital asset. A slow, outdated, or poorly designed website can cost you leads every single day. Our website development service builds fast, mobile-friendly, SEO-optimized websites that not only look great — but actually convert visitors into customers. From business websites and landing pages to full e-commerce stores, we build every site with Google's Core Web Vitals standards in mind — ensuring fast load times, clean structure, and strong on-page SEO from Day 1.",
    points: [
      "Business Websites — Corporate, service, portfolio sites",
      "E-Commerce Development — Product pages, cart, payment gateway",
      "Landing Pages — High-conversion pages for ad campaigns",
      "Mobile-First Design — 80% of Indian users browse on mobile",
      "SEO-Optimized Structure — Built to rank from launch",
      "Fast Loading — Core Web Vitals compliant",
      "Post-launch support and maintenance",
    ],
    cta: "Get Website Quote",
    link: "/website-development",
    icon: Globe,
  },
  {
    id: "content-marketing",
    number: "07",
    label: "Content Marketing",
    title: "Content Marketing Services India — Content That Ranks and Converts",
    description:
      "Content is the foundation of all digital marketing. Good content brings organic traffic, builds trust, and converts readers into customers — without paying for every click. Our content marketing services help Indian businesses create blogs, website copy, and social media content that ranks on Google and speaks directly to their target audience. We combine SEO keyword research with expert writing to produce content that Google rewards and your customers actually want to read. No filler. No AI-generated fluff. Just genuine, helpful content that drives results.",
    points: [
      "SEO Blog Writing — Long-form articles that rank on Google",
      "Website Copywriting — Home, About, Service, Landing pages",
      "Social Media Content — Captions, carousels, Reels scripts",
      "Email Marketing Copy — Newsletters and drip campaigns",
      "Content Strategy & Editorial Calendar",
      "Keyword Research for every content piece",
      "Content Performance Tracking — traffic, rankings, conversions",
    ],
    cta: "Get Content Strategy Plan",
    link: "/content-marketing",
    icon: FileText,
  },
  {
    id: "local-seo",
    number: "08",
    label: "Local SEO",
    title: "Local SEO Services India — Rank on Google Maps & Local Search",
    description:
      "When a customer in your city searches 'best [your business] near me' — does your business show up? If not, you are losing leads to competitors every single day. Our Local SEO service ensures your business ranks at the top of Google Maps and local search results — exactly when nearby customers are ready to buy. We optimize your Google My Business (GMB) profile, build local citations, manage reviews, and target location-specific keywords. Whether you are in Kota, Jaipur, Mumbai, or Delhi — we make sure local customers find you first.",
    points: [
      "Google My Business (GMB) Setup & Full Optimization",
      "Google Maps Ranking — Top 3 Local Pack targeting",
      "Local Keyword Optimization — City + service combinations",
      "NAP Consistency — Name, Address, Phone across all directories",
      "Local Citation Building — Justdial, Sulekha, IndiaMART, etc.",
      "Review Management — Get more Google reviews",
      "Local SEO Reports — Rankings, calls, map views",
    ],
    cta: "Improve My Local SEO",
    link: "/local-seo",
    icon: MapPin,
  },
  {
    id: "celebrity-pr",
    number: "09",
    label: "Celebrity PR & Branding",
    title: "Celebrity PR & Personal Branding Agency India — Build Your Public Image",
    description:
      "In today's digital world, your personal brand is your greatest business asset. Whether you are a public figure, business leader, politician, or artist — how you appear online shapes how the world perceives you. Promodaddy Digital has managed PR campaigns and personal branding for national celebrities including Sonu Sood and Mohammad Shami, political leaders, and prominent business figures. We combine traditional PR strategy with digital reputation management to build a public image that commands trust, authority, and respect.",
    points: [
      "Personal Brand Strategy — Positioning and messaging",
      "Media Coverage & Press Release Distribution",
      "Social Media Brand Management for public figures",
      "Google Knowledge Panel Setup & Optimization",
      "Reputation Management — Control your online narrative",
      "Crisis Communication — Manage negative press",
      "Wikipedia & Digital Presence Building",
    ],
    cta: "Discuss My PR Strategy",
    link: "/celebrity-pr-and-branding",
    icon: Star,
  },
  {
    id: "influencer-marketing",
    number: "10",
    label: "Influencer Marketing",
    title: "Influencer Marketing Agency India — Authentic Brand Collaborations",
    description:
      "Indian consumers trust recommendations from people they follow more than traditional advertising. Influencer marketing is now one of the highest-ROI channels for brand awareness, product launches, and lead generation in India. Promodaddy Digital connects your brand with the right influencers — from mega influencers for mass reach to micro-influencers for niche, high-engagement audiences. We handle everything from influencer identification and outreach to campaign management and performance reporting.",
    points: [
      "Influencer Discovery — Right fit for your brand and audience",
      "Micro-Influencer Campaigns — High engagement, low cost",
      "Macro & Celebrity Influencer Campaigns — Mass reach",
      "Instagram Reels & YouTube Collab Campaigns",
      "Campaign Brief Writing & Content Approval",
      "Performance Tracking — Views, reach, conversions",
      "Vernacular Influencer Marketing — Regional language creators",
    ],
    cta: "Plan Influencer Campaign",
    link: "/influencer-marketing",
    icon: Users,
  },
];

export const ServicesExplained = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              All{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                10 Services
              </span>{" "}
              — Explained
            </h2>
            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Deep-dive into what we deliver and how it grows your business
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-8 md:space-y-10">
            {servicesDetails.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 border border-white/50 bg-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:border-purple-500/50 hover:bg-white/[0.03] md:p-8 lg:p-10"
                >
                  <div
                    className={`flex flex-col gap-8 lg:items-start ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Side badge */}
                    <div className="flex w-full shrink-0 flex-col items-center justify-start text-center lg:w-[180px]">
                      <div className="text-6xl font-bold leading-none text-purple-500/15 md:text-7xl">
                        {service.number}
                      </div>

                      <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-white/[0.02] text-purple-300 shadow-[0_0_25px_rgba(139,92,246,0.10)]">
                        <Icon size={28} strokeWidth={2} />
                      </div>

                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                        {service.label}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start gap-3 text-sm text-gray-200 sm:text-base"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-purple-400"
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(91,39,247,0.20)] transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
                        >
                          {service.cta}
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesExplained;