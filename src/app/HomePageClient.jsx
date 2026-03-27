'use client';
import React from "react";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import { CelebrityClients } from "@/components/CelebrityClients";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { WhyPromodaddy } from "@/components/WhyPromodaddy";
import { Achievements } from "@/components/Achievements";
import { OurProcess } from "@/components/OurProcess";
import { AboutSection } from "@/components/AboutSection";
import {TrustedClientsKeywords} from "@/components/TrustedClientsKeywords";
import { Clients, Services, HomeBanner, TextMarque, HomeCarousel } from "@/components";
import { AwardsSection } from "@/components/AwardsSection";
import {ContactDetails} from "@/components/ContactDetails";
import { ServiceAds } from "@/components/ServiceAds";
import {HomeFaqSection} from "@/components/HomeFaqSection";
import Script from "next/script";

const HomePageClient = () => {
  return (
    <main>
      
      <HomeBanner />
      {/* <AboutSection/> */}
      <TextMarque />
      <TrustedClientsKeywords/>
      <CelebrityClients />
      <ServiceAds/>
      <IndustriesWeServe/>
      <Achievements/>
      <WhyPromodaddy />
      <AwardsSection/>
      <OurProcess/>
      {/* <Services /> */}
      <HomeFaqSection/>
      {/* <Clients /> */}
      {/* <ContactDetails/> */}
      {/* <UserRecommend /> */}
      {/* <HomeCarousel /> */}
      <LetsCreate />
      <Script id="faq-schema" type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best digital marketing agency in India for ROI-driven growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promodaddy Digital is a top-rated agency trusted by Bollywood stars and 500+ businesses."
      }
    }
  ]
}`}
</Script>
    </main>
  );
};

export default HomePageClient;