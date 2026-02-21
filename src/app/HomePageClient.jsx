'use client';
import React from "react";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import { Clients, Services, HomeBanner, TextMarque, HomeCarousel } from "@/components";

const HomePageClient = () => {
  return (
    <main>
      <HomeBanner />
      <TextMarque />
      <Services />
      <Clients />
      <UserRecommend />
      <HomeCarousel />
      <LetsCreate />
    </main>
  );
};

export default HomePageClient;