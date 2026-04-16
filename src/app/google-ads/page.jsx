import Script from "next/script";
import GoogleAdsHero from "@/components/GoogleAdsSection/GoogleAdsHero";
import WhyGoogleAds from "@/components/GoogleAdsSection/WhyGoogleAds";
import GoogleAdsServices from "@/components/GoogleAdsSection/GoogleAdsServices";
import GoogleAdsProcess from "@/components/GoogleAdsSection/GoogleAdsProcess";
import GoogleAdsResults from "@/components/GoogleAdsSection/GoogleAdsResults";
import GoogleAdsPricing from "@/components/GoogleAdsSection/GoogleAdsPricing";
import GoogleAdsWhyUs from "@/components/GoogleAdsSection/GoogleAdsWhyUs";
import { CaseStudiesSectionKota } from "@/components/KotaNew/CaseStudiesSectionKota";
import GoogleAdsFAQ from "@/components/GoogleAdsSection/GoogleAdsFAQ";
import GoogleAdsCTA from "@/components/GoogleAdsSection/GoogleAdsCTA";
import GoogleAdsCPLSection from "@/components/GoogleAdsSection/GoogleAdsCPLSection";
import { googleAdsFaqs } from "@/components/GoogleAdsSection/GoogleAdsFAQData";

export const metadata = {
  title: "Google Ads (PPC) Services in India | Promodaddy Digital",
  description:
    "Get high-quality leads and better ROI with Google Ads and PPC services in India by Promodaddy Digital.",
  alternates: {
    canonical: "https://www.promodaddy.in/google-ads",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Google Ads (PPC) Services in India | Promodaddy Digital",
    description:
      "Get high-quality leads and better ROI with Google Ads and PPC services in India by Promodaddy Digital.",
    url: "https://www.promodaddy.in/google-ads",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads (PPC) Services in India | Promodaddy Digital",
    description:
      "Get high-quality leads and better ROI with Google Ads and PPC services in India by Promodaddy Digital.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: googleAdsFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
      name: "Google Ads / PPC",
      item: "https://www.promodaddy.in/google-ads",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads / PPC Services",
  serviceType: "Google Ads Management",
  provider: {
    "@type": "Organization",
    name: "Promodaddy Digital",
    url: "https://www.promodaddy.in/",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://www.promodaddy.in/google-ads",
};

export default function GoogleAdsPage() {
  return (
    <>
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
      <Script
        id="google-ads-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <GoogleAdsHero />
        <WhyGoogleAds />
        <GoogleAdsServices />
        <GoogleAdsCPLSection />
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