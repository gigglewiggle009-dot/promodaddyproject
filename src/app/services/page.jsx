import { ServicesHero } from "@/components/ServiceSection/ServicesHero";
// import { ServicesStats } from "@/components/services/ServicesStats";
// import { ServicesWhyPromodaddy } from "@/components/services/ServicesWhyPromodaddy";
import { ServicesGrid } from "@/components/ServiceSection/ServicesGrid";
import { ServicesExplained } from "@/components/ServiceSection/ServicesExplained";
import { ServicesComparisonTable } from "@/components/ServiceSection/ServicesComparisonTable";
import { ServicesPricing } from "@/components/ServiceSection/ServicesPricing";
import { ServicesIndustries } from "@/components/ServiceSection/ServicesIndustries";
import { ServicesProcess } from "@/components/ServiceSection/ServicesProcess";
import {CaseStudiesSectionKota } from "@/components/KotaNew/CaseStudiesSectionKota";
import {WhyChooseUsSectionKota} from "@/components/KotaNew/WhyChooseUsSectionKota";
// import { ServicesCaseStudies } from "@/components/ServiceSection/ServicesCaseStudies";
import { ServicesWhyChoose } from "@/components/ServiceSection/ServicesWhyChoose";
import { ServicesFAQ } from "@/components/ServiceSection/ServicesFAQ";
import { ServicesCTA } from "@/components/ServiceSection/ServicesCTA";
import React from "react";
export const metadata = {
  title: "Digital Marketing Services in India",
  description: "Promodaddy Digital offers SEO, Google Ads, Meta Ads, Social Media, YouTube Marketing, Website Development & more. Real results for Indian businesses. Get a free audit today.",
};

export default function ServicePage() {
  return (
    <main>
      <ServicesHero/>
      <ServicesWhyChoose />
      <ServicesGrid/>
      <ServicesExplained/>
      <ServicesComparisonTable />
      <ServicesPricing/>
      <ServicesIndustries/>
      <ServicesProcess />
      <CaseStudiesSectionKota />
      <WhyChooseUsSectionKota />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}

