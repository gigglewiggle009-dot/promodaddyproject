"use client";
import React from "react";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import { CelebrityClients } from "@/components/CelebrityClients";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { WhyPromodaddy } from "@/components/WhyPromodaddy";
import { Achievements } from "@/components/Achievements";
import { OurProcess } from "@/components/OurProcess";
import { AboutSection } from "@/components/AboutSection";
import { TrustedClientsKeywords } from "@/components/TrustedClientsKeywords";
import {
  Clients,
  Services,
  HomeBanner,
  TextMarque,
  HomeCarousel,
} from "@/components";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactDetails } from "@/components/ContactDetails";
import { ServiceAds } from "@/components/ServiceAds";
import { HomeFaqSection } from "@/components/HomeFaqSection";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best digital marketing agency in India for ROI-driven growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Promodaddy Digital is a top-rated agency trusted by Bollywood stars, cricketers, and 500+ businesses across India for delivering measurable revenue and brand growth.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from digital marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While SEO typically takes 3 to 6 months for organic ranking, our performance marketing services like Google Ads and Meta Ads can generate high-quality leads from the very first day of the campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Does Promodaddy Digital work with startups and small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in helping startups build their brand from zero and provide tailored digital setups for SMEs to scale effectively in the Indian market.",
      },
    },
    {
      "@type": "Question",
      name: "What digital marketing services do you offer for Pan-India clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a full-service agency providing SEO, Google Ads, Social Media Marketing, Website Development, Celebrity PR, and Influencer Marketing across Kota, Jaipur, Delhi, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose Promodaddy Digital over other marketing companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer celebrity-level expertise, transparent weekly reporting, and a proven track record of managing high-profile digital presences with over 12 years of industry experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide industry-specific marketing strategies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We create custom growth engines for various sectors, including Coaching Institutes, Hospitals, E-commerce brands, Real Estate, and Political Campaigns.",
      },
    },
  ],
};

const HomePageClient = () => {
  return (
    <main>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <HomeBanner />
      {/* <AboutSection /> */}
      <TextMarque />
      <TrustedClientsKeywords />
      <CelebrityClients />
      <ServiceAds />
      <IndustriesWeServe />
      <Achievements />
      <WhyPromodaddy />
      <AwardsSection />
      <OurProcess />
      {/* <Services /> */}
      <HomeFaqSection />
      {/* <Clients /> */}
      {/* <ContactDetails /> */}
      {/* <UserRecommend /> */}
      {/* <HomeCarousel /> */}
      <LetsCreate />
    </main>
  );
};

export default HomePageClient;