import React from "react";
import Script from "next/script";
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
import { seoFaqs } from "@/components/SeoServiceSection/SeoFAQData";

export const metadata = {
  title: "SEO Services in India | Promodaddy Digital",
  description:
    "Professional SEO services in India for local businesses, coaching institutes, e-commerce brands and growing companies. Get a free SEO audit today.",
  alternates: {
    canonical: "https://www.promodaddy.in/seo-services",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "SEO Services in India | Promodaddy Digital",
    description:
      "Professional SEO services in India for local businesses, coaching institutes, e-commerce brands and growing companies. Get a free SEO audit today.",
    url: "https://www.promodaddy.in/seo-services",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in India | Promodaddy Digital",
    description:
      "Professional SEO services in India for local businesses, coaching institutes, e-commerce brands and growing companies. Get a free SEO audit today.",
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
      name: "SEO Services",
      item: "https://www.promodaddy.in/seo-services",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in India",
  serviceType: "Search Engine Optimization",
  provider: {
    "@type": "Organization",
    name: "Promodaddy Digital",
    url: "https://www.promodaddy.in/",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://www.promodaddy.in/seo-services",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SeoServicesPage() {
  return (
    <>
      <Script
        id="seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
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
    </>
  );
}