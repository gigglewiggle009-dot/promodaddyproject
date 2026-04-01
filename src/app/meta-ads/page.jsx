import React from "react";
import { MetaAdsHero } from "@/components/MetaAdsSection/MetaAdsHero";
import { MetaAdsWhyUs } from "@/components/MetaAdsSection/MetaAdsWhyUs";
import { MetaAdsServicesSection } from "@/components/MetaAdsSection/MetaAdsServicesSection";
import { MetaAdsCPLBenchmarksSection } from "@/components/MetaAdsSection/MetaAdsCPLBenchmarksSection";
import { MetaAdsTimelineSection } from "@/components/MetaAdsSection/MetaAdsTimelineSection";
import { MetaAdsIndustriesSection } from "@/components/MetaAdsSection/MetaAdsIndustriesSection";
import { MetaAdsComparisonSection } from "@/components/MetaAdsSection/MetaAdsComparisonSection";
import { MetaAdsPricingSection } from "@/components/MetaAdsSection/MetaAdsPricingSection";
import {MetaAdsFAQSection} from "@/components/MetaAdsSection/MetaAdsFAQSection";
import {MetaAdsFinalCTASection} from "@/components/MetaAdsSection/MetaAdsFinalCTASection";

export const metadata = {
  title: "Meta Ads Agency India — Facebook & Instagram Ads",
  description:
    "Promodaddy Digital is a leading Meta Ads agency in India. Facebook & Instagram ads for lead generation, brand awareness & sales. Lowest CPL. Free campaign audit.",
  alternates: {
    canonical: "https://www.promodaddy.in/meta-ads",
  },
};

export default function MetaAdsPage() {
  return (
    <main>
     <MetaAdsHero/>
     <MetaAdsWhyUs/>
     <MetaAdsServicesSection/>
     <MetaAdsCPLBenchmarksSection />
     <MetaAdsTimelineSection/>
     <MetaAdsIndustriesSection />
     <MetaAdsComparisonSection />
     <MetaAdsPricingSection />
     <MetaAdsFAQSection />
     <MetaAdsFinalCTASection />
    </main>
  );
}