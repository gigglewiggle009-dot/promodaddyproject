import Script from "next/script";
import { aboutbanner } from "@/assets";
import { Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import Director from "@/components/director";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import React from "react";

export const metadata = {
  title: "About Promodaddy Digital | Digital Marketing Agency in India",
  description:
    "Learn about Promodaddy Digital, a results-driven digital marketing agency in India offering SEO, Google Ads, Meta Ads, branding, and growth services.",
  alternates: {
    canonical: "https://www.promodaddy.in/about",
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
    title: "About Promodaddy Digital | Digital Marketing Agency in India",
    description:
      "Learn about Promodaddy Digital, a results-driven digital marketing agency in India offering SEO, Google Ads, Meta Ads, branding, and growth services.",
    url: "https://www.promodaddy.in/about",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Promodaddy Digital | Digital Marketing Agency in India",
    description:
      "Learn about Promodaddy Digital, a results-driven digital marketing agency in India offering SEO, Google Ads, Meta Ads, branding, and growth services.",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Promodaddy Digital",
  url: "https://www.promodaddy.in/about",
  description: "About Promodaddy Digital, a digital marketing agency in India.",
};

function page() {
  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <main className="bg-[#0b0b0b] text-white">
        <SmallBanner
          sectionsName="About Us"
          discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
          bannerImage={aboutbanner.src}
        />
        <NumberTalks />
        <Services />
        <Director />
        <LetsCreate />
      </main>
    </>
  );
}

export default page;