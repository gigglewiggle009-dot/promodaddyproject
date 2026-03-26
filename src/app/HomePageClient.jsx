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


const HomePageClient = () => {
  return (
    <main>
      
      <HomeBanner />
      {/* <AboutSection/> */}
      <TextMarque />
      <TrustedClientsKeywords/>
      <CelebrityClients />
      <WhyPromodaddy />
      <IndustriesWeServe/>
      <Achievements/>
      <AwardsSection/>
      <OurProcess/>
      <ServiceAds/>
      {/* <Services /> */}
      <HomeFaqSection/>
      {/* <Clients /> */}
      {/* <ContactDetails/> */}
      {/* <UserRecommend /> */}
      {/* <HomeCarousel /> */}
      <LetsCreate />
    </main>
  );
};

export default HomePageClient;