import Script from "next/script";
import { HeroSectionKota } from "@/components/KotaNew/HeroSectionKota";
import { StatsSectionKota } from "@/components/KotaNew/StatsSectionKota";
import { AboutSectionKota } from "@/components/KotaNew/AboutSectionKota";
import { CitySectionKota } from "@/components/KotaNew/CitySectionKota";
import { IndustriesSectionKota } from "@/components/KotaNew/IndustriesSectionKota";
import { ServicesSectionKota } from "@/components/KotaNew/ServicesSectionKota";
import { OurProcessSectionKota } from "@/components/KotaNew/OurProcessSectionKota";
import { WhyChooseUsSectionKota } from "@/components/KotaNew/WhyChooseUsSectionKota";
import { CaseStudiesSectionKota } from "@/components/KotaNew/CaseStudiesSectionKota";
import { FaqSectionKota } from "@/components/KotaNew/FaqSectionKota";
import { kotaFaqs } from "@/components/KotaNew/KotaFAQData";

export const metadata = {
  title: "Digital Marketing Agency in Kota",
  description:
    "Promodaddy Digital is a trusted digital marketing agency in Kota offering SEO, Google Ads, Meta Ads, and social media marketing services.",
  alternates: {
    canonical: "https://www.promodaddy.in/digital-marketing-agency-in-kota",
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
    title: "Digital Marketing Agency in Kota | Promodaddy Digital",
    description:
      "Promodaddy Digital is a trusted digital marketing agency in Kota offering SEO, Google Ads, Meta Ads, and social media marketing services.",
    url: "https://www.promodaddy.in/digital-marketing-agency-in-kota",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Kota | Promodaddy Digital",
    description:
      "Promodaddy Digital is a trusted digital marketing agency in Kota offering SEO, Google Ads, Meta Ads, and social media marketing services.",
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
      name: "Kota",
      item: "https://www.promodaddy.in/digital-marketing-agency-in-kota",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Promodaddy Digital",
  url: "https://www.promodaddy.in/digital-marketing-agency-in-kota",
  telephone: "+91-8690522210",
  email: "info@promodaddy.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "Kota",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: kotaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function KotaNewPage() {
  return (
    <>
      <Script
        id="kota-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="kota-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="kota-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-black text-white">
        <HeroSectionKota />
        <StatsSectionKota />
        <AboutSectionKota />
        <CitySectionKota />
        <IndustriesSectionKota />
        <ServicesSectionKota />
        <OurProcessSectionKota />
        <WhyChooseUsSectionKota />
        <CaseStudiesSectionKota />
        <FaqSectionKota />
      </main>
    </>
  );
}