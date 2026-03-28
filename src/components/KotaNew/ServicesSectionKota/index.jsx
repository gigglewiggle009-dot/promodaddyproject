"use client";

import React from "react";
import seoImg from "@/assets/seoo.png";
import socialImg from "@/assets/social.png";
import ppcImg from "@/assets/ppc.png";
import webImg from "@/assets/web.png";
import contentImg from "@/assets/content.png";
import localImg from "@/assets/local.png";
import celebrityImg from "@/assets/celebrity.png";
import metaAdsImg from "@/assets/meta-ads.png";
import youtubeImg from "@/assets/youtube.png";
import influencerImg from "@/assets/influencer.png";
import { SharedLayout } from "@/components/SharedComponent";

export const ServicesSectionKota = () => {
  const services = [
    {
      img: seoImg,
      title: "SEO Services",
      desc: `Rank on Google when Kota customers search for your business. 
We offer complete SEO services in Kota — keyword research, 
on-page optimization, technical SEO, and Google My Business 
(GMB) management. Long-term organic growth, zero paid traffic dependency.`,
    },
    {
      img: ppcImg,
      title: "Google Ads / PPC",
      desc: `Get instant leads with our Google Ads management in Kota. 
We create high-conversion PPC campaigns for local businesses, 
coaching institutes, and real estate brands — with full 
transparency, weekly reports, and guaranteed ROI tracking. 
Every rupee is accounted for.`,
    },
    {
      img: metaAdsImg,
      title: "Meta Ads (Facebook & Instagram)",
      desc: `Reach your exact target audience in Kota and across India 
with precision-targeted Meta Ads. We run Facebook and 
Instagram ad campaigns for lead generation, brand awareness, 
and product sales — optimized for the lowest cost per lead.`,
    },
    {
      img: youtubeImg,
      title: "YouTube Marketing",
      desc: `YouTube is India's #1 video platform. We help Kota businesses 
and coaching institutes grow their YouTube channel, rank 
videos on search, and run YouTube ad campaigns that build 
authority and drive qualified traffic to your website.`,
    },
    {
      img: socialImg,
      title: "Social Media Marketing",
      desc: `Build a loyal audience on Instagram, Facebook, and LinkedIn 
with our social media marketing services in Kota. We handle 
content creation, posting strategy, community management, 
and paid promotions — so your brand stays active and relevant 24/7.`,
    },
    {
      img: webImg,
      title: "Website Development",
      desc: `Your website is your #1 sales tool. We design fast, mobile-friendly, 
SEO-optimized websites for businesses in Kota — built to rank 
on Google and convert visitors into paying customers.`,
    },
    {
      img: celebrityImg,
      title: "Celebrity PR & Personal Branding",
      desc: `Stand out with powerful personal branding and PR campaigns. 
Having worked with Sonu Sood, Mohammad Shami, and political 
leaders, we know how to build public trust and media presence.`,
    },
    {
      img: influencerImg,
      title: "Influencer Marketing",
      desc: `Partner with the right influencers to reach your target 
audience authentically. We connect Kota businesses with 
local and national influencers — real followers, real results.`,
    },
    {
      img: contentImg,
      title: "Content Marketing",
      desc: `Good content builds trust before a customer even calls you. 
We create SEO-optimized blogs, landing pages, and social content 
that ranks on Google and generates inbound leads organically.`,
    },
    {
      img: localImg,
      title: "Local SEO",
      desc: `When someone in Kota searches "best [your business] near me" — 
are you showing up? We optimize your Google Maps and GMB profile 
so you rank at the top locally.`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <SharedLayout>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-center text-purple-400">
          Our Digital Marketing Services in Kota
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-[#0b0f1a] to-[#130b2a] border border-purple-600 rounded-2xl p-6 text-center transition duration-300 hover:scale-105 hover:border-pink-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl"></div>

              {/* IMAGE */}
              <img
                src={item.img.src}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-white p-3 relative z-10"
              />

              {/* TITLE */}
              <h3 className="font-bold text-lg mb-3 text-purple-400 relative z-10">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SharedLayout>
    </section>
  );
};