import { aboutbanner } from "@/assets";
import { Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import Director from "@/components/director";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import React from "react";
export const metadata = {
  title: "About PromoDaddy Digital | Marketing Agency India",
  description:
    "Learn about PromoDaddy Digital, a creative digital agency delivering innovative solutions and immersive user experiences that drive results.",
};

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
