import React from "react";
import Script from "next/script";
import { MetaAdsHero } from "@/components/MetaAdsSection/MetaAdsHero";
import { MetaAdsWhyUs } from "@/components/MetaAdsSection/MetaAdsWhyUs";
import { MetaAdsServicesSection } from "@/components/MetaAdsSection/MetaAdsServicesSection";
import { MetaAdsCPLBenchmarksSection } from "@/components/MetaAdsSection/MetaAdsCPLBenchmarksSection";
import { MetaAdsTimelineSection } from "@/components/MetaAdsSection/MetaAdsTimelineSection";
import { MetaAdsIndustriesSection } from "@/components/MetaAdsSection/MetaAdsIndustriesSection";
import { MetaAdsComparisonSection } from "@/components/MetaAdsSection/MetaAdsComparisonSection";
import { MetaAdsPricingSection } from "@/components/MetaAdsSection/MetaAdsPricingSection";
import { MetaAdsFAQSection } from "@/components/MetaAdsSection/MetaAdsFAQSection";
import { MetaAdsFinalCTASection } from "@/components/MetaAdsSection/MetaAdsFinalCTASection";
import { metaAdsFaqs } from "@/components/MetaAdsSection/MetaAdsFAQData";

export const metadata = {
  title: "Meta Ads Services in India | Promodaddy Digital",
  description:
    "Run high-converting Facebook and Instagram campaigns with Meta Ads services in India by Promodaddy Digital.",
  alternates: {
    canonical: "https://www.promodaddy.in/meta-ads",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Meta Ads Services in India | Promodaddy Digital",
    description:
      "Run high-converting Facebook and Instagram campaigns with Meta Ads services in India by Promodaddy Digital.",
    url: "https://www.promodaddy.in/meta-ads",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Services in India | Promodaddy Digital",
    description:
      "Run high-converting Facebook and Instagram campaigns with Meta Ads services in India by Promodaddy Digital.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.promodaddy.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.promodaddy.in/service",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meta Ads",
      item: "https://www.promodaddy.in/meta-ads",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads Services",
  serviceType: "Facebook and Instagram Ads Management",
  provider: {
    "@type": "Organization",
    name: "Promodaddy Digital",
    url: "https://www.promodaddy.in/",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://www.promodaddy.in/meta-ads",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: metaAdsFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function MetaAdsPage() {
  return (
    <>
      <Script
        id="meta-ads-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="meta-ads-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="meta-ads-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <MetaAdsHero />
        <MetaAdsWhyUs />
        <MetaAdsServicesSection />
        <MetaAdsCPLBenchmarksSection />
        <MetaAdsTimelineSection />
        <MetaAdsIndustriesSection />
        <MetaAdsComparisonSection />
        <MetaAdsPricingSection />
        <MetaAdsFAQSection />
        <MetaAdsFinalCTASection />
      </main>
    </>
  );
}