import { clientbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import React from "react";

export const metadata = {
  title: "Our Clients - PromoDaddy Digital",
  description:
    "Explore the brands and businesses that trust PromoDaddy Digital for SEO, branding, website development, and digital marketing services.",
};

function page() {
  return (
    <div>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Our Clients - Digital Marketing Clients of Promodaddy Digital
      </h1>

      <SmallBanner
        bannerImage={clientbanner.src}
        sectionsName="Clients"
        discriptions="We collaborate with ambitious brands to deliver innovative digital marketing and branding solutions."
      />

      {/* Client Logos / Images */}
      <UserRecommend />

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Growing Brands & Businesses
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            At PromoDaddy Digital, we partner with startups, entrepreneurs,
            and established businesses to build powerful digital experiences.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Industries We Serve
          </h3>

          <h3 className="text-2xl font-semibold mb-4">
            Why Clients Choose PromoDaddy
          </h3>
        </div>
      </section>

      <LetsCreate />
    </div>
  );
}

export default page;