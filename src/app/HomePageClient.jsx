'use client';
import React from "react";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import { CelebrityClients } from "@/components/CelebrityClients";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { WhyPromodaddy } from "@/components/WhyPromodaddy";
import { Achievements } from "@/components/Achievements";
import { OurProcess } from "@/components/OurProcess";
import { Clients, Services, HomeBanner, TextMarque, HomeCarousel } from "@/components";

const HomePageClient = () => {
  return (
    <main>
      <HomeBanner />
      <TextMarque />
      <CelebrityClients />
      <WhyPromodaddy />
      <IndustriesWeServe/>
      <Achievements/>
      <OurProcess/>
      <Services />
      <Clients />
      {/* <UserRecommend /> */}
      <HomeCarousel />
      <LetsCreate />
    </main>
  );
};

export default HomePageClient;