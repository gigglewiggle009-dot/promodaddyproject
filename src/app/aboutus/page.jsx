"use client";
import { aboutbanner } from "@/assets";
import { Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import Director from "@/components/director";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        sectionsName="About Us"
        discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
        bannerImage={aboutbanner.src}
      />
      <NumberTalks />
      <Services />
      <Director />
      <LetsCreate />
    </div>
  );
}

export default page;
