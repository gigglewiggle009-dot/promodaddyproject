// "use client";
import { clientbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import React from "react";

export const metadata = {
  title: "Our Clients - PromoDaddy Digital",
  description:
    "See the clients we have worked with at PromoDaddy Digital, a creative digital agency delivering innovative solutions and immersive user experiences.",
};

function page() {
  return (
    <div>
      <SmallBanner
        bannerImage={clientbanner.src}
        sectionsName="Client"
        discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
      />
      <UserRecommend />
      <LetsCreate />
    </div>
  );
}

export default page;
