"use client";
import { servicebanner } from "@/assets";
import { Clients, Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        sectionsName="Service"
        discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
        bannerImage={servicebanner.src}
      />
      <Clients />
      <LetsCreate />
    </div>
  );
}

export default page;
