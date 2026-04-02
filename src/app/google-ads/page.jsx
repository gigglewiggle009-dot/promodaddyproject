import Script from "next/script";
import GoogleAdsHero from "@/components/GoogleAdsSection/GoogleAdsHero";
import WhyGoogleAds from "@/components/GoogleAdsSection/WhyGoogleAds";
import GoogleAdsServices from "@/components/GoogleAdsSection/GoogleAdsServices";
import GoogleAdsProcess from "@/components/GoogleAdsSection/GoogleAdsProcess";
import GoogleAdsResults from "@/components/GoogleAdsSection/GoogleAdsResults";
import GoogleAdsPricing from "@/components/GoogleAdsSection/GoogleAdsPricing";
import GoogleAdsWhyUs from "@/components/GoogleAdsSection/GoogleAdsWhyUs";
import {CaseStudiesSectionKota } from "@/components/KotaNew/CaseStudiesSectionKota";
import GoogleAdsFAQ from "@/components/GoogleAdsSection/GoogleAdsFAQ";
import GoogleAdsCTA from "@/components/GoogleAdsSection/GoogleAdsCTA";
import GoogleAdsCPLSection from "@/components/GoogleAdsSection/GoogleAdsCPLSection";

export const metadata = {
  title: "Google Ads Management in India | Promodaddy Digital",
  description:
    "Promodaddy Digital offers expert Google Ads management in India — Search, Display, Shopping & Performance Max campaigns. Real ROI, transparent pricing. Free audit today.",
  alternates: {
    canonical: "https://www.promodaddy.in/google-ads",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Google Ads management cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Management fees start from Rs.3,000 per month plus your ad spend budget. We recommend a minimum ad spend of Rs.10,000 per month to see meaningful results. Total monthly investment starts from Rs.13,000 per month.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads can start delivering visibility and clicks from Day 1 after campaigns go live. However, strong performance usually improves within 30 to 60 days as data is collected and campaigns are optimized.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good ROAS for Google Ads in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A healthy ROAS for Indian businesses is generally around 4x to 6x for e-commerce and lead generation campaigns. Coaching institutes often focus on cost per admission lead in the range of Rs.300 to Rs.500.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run Google Ads for coaching institutes in Kota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Promodaddy Digital specializes in Google Ads campaigns for coaching institutes in Kota. We understand admission season cycles, parent-student targeting, and course-specific lead generation strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide weekly reports for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every client receives weekly performance reports covering impressions, clicks, CTR, CPC, conversions, cost per lead, and ROAS, along with monthly strategy reviews.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Google Ads and SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads provides instant visibility through paid placements and stops when the budget stops. SEO takes longer to build but generates long-term organic traffic. Many businesses benefit most from using both together.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel Google Ads management anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There are no long lock-in contracts. Clients can cancel with notice, and the Google Ads account remains theirs.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.promodaddy.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.promodaddy.in/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Ads / PPC",
      item: "https://www.promodaddy.in/google-ads",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Google Ads Management",
  name: "Google Ads Management in India",
  provider: {
    "@type": "Organization",
    name: "Promodaddy Digital",
    url: "https://www.promodaddy.in",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://www.promodaddy.in/google-ads",
  description:
    "Promodaddy Digital provides Google Ads management in India including Search Ads, Display Ads, Shopping Ads, Performance Max campaigns, and Google Ads for coaching institutes.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <Script
        id="google-ads-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="google-ads-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="google-ads-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <GoogleAdsHero />
        <WhyGoogleAds />
        <GoogleAdsServices />
        <GoogleAdsCPLSection/>
        <GoogleAdsProcess />
        <GoogleAdsResults />
        <GoogleAdsPricing />
        <GoogleAdsWhyUs />
        <CaseStudiesSectionKota />
        <GoogleAdsFAQ />
        <GoogleAdsCTA />
      </main>
    </>
  );
}