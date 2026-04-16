import Script from "next/script";
import { SocialMediaHero } from "@/components/SocialMediaMarketing/SocialMediaHero";
import { SocialMediaStats } from "@/components/SocialMediaMarketing/SocialMediaStats";
import { SocialMediaWhyImportant } from "@/components/SocialMediaMarketing/SocialMediaWhyImportant";
import { SocialMediaPlatformShowcase } from "@/components/SocialMediaMarketing/SocialMediaPlatformShowcase";
import { SocialMediaPricing } from "@/components/SocialMediaMarketing/SocialMediaPricing";
import { SocialMediaProcess } from "@/components/SocialMediaMarketing/SocialMediaProcess";
import { SocialMediaWhyChooseTable } from "@/components/SocialMediaMarketing/SocialMediaWhyChooseTable";
import { SocialMediaFAQ } from "@/components/SocialMediaMarketing/SocialMediaFAQ";
import { SocialMediaCTA } from "@/components/SocialMediaMarketing/SocialMediaCTA";
import { SocialMediaIndustryStrategy } from "@/components/SocialMediaMarketing/SocialMediaIndustryStrategy";
import { socialMediaFaqs } from "@/components/SocialMediaMarketing/SocialMediaFAQData";

export const metadata = {
  title: "Social Media Marketing Services in India | Promodaddy Digital",
  description:
    "Grow your brand, engagement, and leads with social media marketing services in India by Promodaddy Digital.",
  alternates: {
    canonical: "https://www.promodaddy.in/social-media-marketing-india",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Social Media Marketing Services in India | Promodaddy Digital",
    description:
      "Grow your brand, engagement, and leads with social media marketing services in India by Promodaddy Digital.",
    url: "https://www.promodaddy.in/social-media-marketing-india",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services in India | Promodaddy Digital",
    description:
      "Grow your brand, engagement, and leads with social media marketing services in India by Promodaddy Digital.",
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
      name: "Social Media Marketing",
      item: "https://www.promodaddy.in/social-media-marketing-india",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Services",
  serviceType: "Social Media Marketing",
  provider: {
    "@type": "Organization",
    name: "Promodaddy Digital",
    url: "https://www.promodaddy.in/",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://www.promodaddy.in/social-media-marketing-india",
  telephone: "+91-8690522210",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: socialMediaFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <Script
        id="social-media-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="social-media-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="social-media-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <SocialMediaHero />
        <SocialMediaStats />
        <SocialMediaIndustryStrategy />
        <SocialMediaWhyImportant />
        <SocialMediaPlatformShowcase />
        <SocialMediaPricing />
        <SocialMediaProcess />
        <SocialMediaWhyChooseTable />
        <SocialMediaFAQ />
        <SocialMediaCTA />
      </main>
    </>
  );
}