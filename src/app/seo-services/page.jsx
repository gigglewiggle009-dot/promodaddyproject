import React from "react";
import { SeoHero } from "@/components/SeoServiceSection/SeoHero";
import { SeoIntro } from "@/components/SeoServiceSection/SeoIntro";
import { SeoCompleteServices } from "@/components/SeoServiceSection/SeoCompleteServices";
import { SeoProcess } from "@/components/SeoServiceSection/SeoProcess";
import { SeoResultsTimeline } from "@/components/SeoServiceSection/SeoResultsTimeline";
import { SeoCoachingSection } from "@/components/SeoServiceSection/SeoCoachingSection";
import { SeoWhyChoose } from "@/components/SeoServiceSection/SeoWhyChoose";
import { SeoPricing } from "@/components/SeoServiceSection/SeoPricing";
import { SeoFAQ } from "@/components/SeoServiceSection/SeoFAQ";
import { SeoCTA } from "@/components/SeoServiceSection/SeoCTA";

export const metadata = {
  title: "SEO Services in India",
  description:
    "Professional SEO services in India for local businesses, coaching institutes, e-commerce brands and growing companies. Get a free SEO audit today.",
  alternates: {
    canonical: "https://www.promodaddy.in/seo-services",
  },
};

export default function SeoServicesPage() {
  return (
    <main>
      <SeoHero />
      <SeoIntro />
      <SeoCompleteServices />
      <SeoProcess />
      <SeoResultsTimeline />
      <SeoCoachingSection />
      <SeoWhyChoose />
      <SeoPricing />
      <SeoFAQ />
      <SeoCTA />
    </main>
  );
}