import Script from "next/script";

import { WebsiteDevHero } from "@/components/WebsiteDevelopment/WebsiteDevHero";
import { WebsiteDevTypes } from "@/components/WebsiteDevelopment/WebsiteDevTypes";
import { WebsiteDevDifference } from "@/components/WebsiteDevelopment/WebsiteDevDifference";
import { WebsiteDevWhyUs } from "@/components/WebsiteDevelopment/WebsiteDevWhyUs";
import { WebsiteDevProcess } from "@/components/WebsiteDevelopment/WebsiteDevProcess";
import { WebsiteDevTechStack } from "@/components/WebsiteDevelopment/WebsiteDevTechStack";
import { WebsiteDevResults } from "@/components/WebsiteDevelopment/WebsiteDevResults";
import { WebsiteDevFAQ } from "@/components/WebsiteDevelopment/WebsiteDevFAQ";
import { WebsiteDevCTA } from "@/components/WebsiteDevelopment/WebsiteDevCTA";

export const metadata = {
  title: "Website Development Company in India",
  description:
    "Promodaddy Digital builds fast, SEO-friendly, mobile responsive websites for businesses, real estate, coaching, healthcare, hotels, e-commerce and custom web applications.",
  alternates: {
    canonical: "https://www.promodaddy.in/website-development",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Website Development Company in India | Promodaddy Digital",
    description:
      "Get high-converting, SEO-ready websites built with modern design, fast performance, and lead-focused strategy.",
    url: "https://www.promodaddy.in/website-development",
    siteName: "Promodaddy Digital",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does website development cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development cost depends on the type of website, number of pages, features, CMS, integrations and design complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Does Promodaddy build SEO-friendly websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Promodaddy Digital builds websites with SEO-friendly structure, fast loading speed, responsive design, metadata, schema and clean page hierarchy.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Promodaddy Digital builds e-commerce websites with product pages, cart, payment gateway, enquiry options and conversion-focused layouts.",
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
      name: "Website Development",
      item: "https://www.promodaddy.in/website-development",
    },
  ],
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Script
        id="website-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Script
        id="website-development-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <WebsiteDevHero />
        <WebsiteDevTypes />
        <WebsiteDevDifference/>
        <WebsiteDevWhyUs />
        <WebsiteDevProcess />
        <WebsiteDevTechStack />
        <WebsiteDevResults />
        <WebsiteDevFAQ />
        <WebsiteDevCTA />
      </main>
    </>
  );
}