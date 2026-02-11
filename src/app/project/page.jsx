"use client";
import { Project } from "@/components";
import { aboutbanner } from "@/assets";
import LetsCreate from "@/components/letscreate";
import Management from "@/components/management";
import { SmallBanner } from "@/components/SharedComponent";
import React from "react";

function page() {
  return (
    <>
      <SmallBanner
        sectionsName="Project"
        discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
        bannerImage={aboutbanner.src}
      />
      <Project />
      <Management />
      <LetsCreate />
    </>
  );
}

export default page;
