"use client";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import {
  Clients,
  Services,
  HomeBanner,
  TextMarque,
  HomeCarousel,
} from "@/components";

const page = () => {
  return (
    <>
      <HomeBanner />
      <TextMarque />
      <Services />
      <Clients />
      <UserRecommend />
      <HomeCarousel />
      <LetsCreate />
    </>
  );
};

export default page;
