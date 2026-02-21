// "use client";
import { servicebanner } from "@/assets";
import { Clients, Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import React from "react";

export const metadata = {
  title: "Our Services - PromoDaddy Digital",
  description: "Discover the wide range of services offered by PromoDaddy Digital, delivering innovative solutions for your business.",
};

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
