import Script from "next/script";
import { InfluencerHero } from "@/components/InfluencerMarketing/InfluencerHero";
import {InfluencerAbout} from "@/components/InfluencerMarketing/InfluencerAbout";
import {InfluencerServices} from "@/components/InfluencerMarketing/InfluencerServices";
import {InfluencerIndustries} from "@/components/InfluencerMarketing/InfluencerIndustries";
import {InfluencerProcess} from "@/components/InfluencerMarketing/InfluencerProcess";
import {InfluencerWhyUs} from "@/components/InfluencerMarketing/InfluencerWhyUs";
import {InfluencerFAQ} from "@/components/InfluencerMarketing/InfluencerFAQ";
import {InfluencerCTA} from "@/components/InfluencerMarketing/InfluencerCTA";

export const metadata = {
  title: "Influencer Marketing Agency in India ",
  description:
    "Promodaddy Digital is an influencer marketing agency in India helping brands grow with Instagram influencers, YouTube creators, celebrity campaigns and ROI-focused creator collaborations.",
  alternates: {
    canonical: "/influencer-marketing",
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
      item: "https://www.promodaddy.in/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Influencer Marketing",
      item: "https://www.promodaddy.in/influencer-marketing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is influencer marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Influencer marketing means promoting your brand, product or service through social media creators who already have an engaged audience.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you use for influencer marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Promodaddy Digital works with Instagram, YouTube, Facebook and regional creators depending on the brand, audience and campaign goal.",
      },
    },
    {
      "@type": "Question",
      name: "Can influencer marketing generate leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, influencer marketing can generate leads when the campaign has a clear offer, CTA, landing page or WhatsApp enquiry funnel.",
      },
    },
  ],
};

export default function InfluencerMarketingPage() {
  return (
    <>
      <Script
        id="influencer-marketing-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="influencer-marketing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <InfluencerHero />
        <InfluencerAbout />
        <InfluencerServices />
        <InfluencerIndustries />
        <InfluencerProcess />
        <InfluencerWhyUs />
        <InfluencerFAQ />
        <InfluencerCTA />
      </main>
    </>
  );
}