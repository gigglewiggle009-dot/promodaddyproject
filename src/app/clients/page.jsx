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
      <SmallBanner
        bannerImage={clientbanner.src}
        sectionsName="Clients"
        discriptions="We collaborate with ambitious brands to deliver innovative digital marketing and branding solutions."
      />

      {/* Client Logos / Images */}
      <UserRecommend />

      {/* NEW SEO Content Section (Added After Images) */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Growing Brands & Businesses
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            At PromoDaddy Digital, we partner with startups, entrepreneurs,
            and established businesses to build powerful digital experiences.
            Our clients trust us for result-driven SEO strategies, branding,
            website development, performance marketing, and social media
            marketing services that drive measurable growth.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            We take time to understand each client’s business model, audience,
            and competitive landscape. This allows us to design customized
            digital marketing campaigns that increase brand awareness,
            generate qualified leads, and improve overall ROI.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Industries We Serve
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            Our expertise spans across industries such as real estate,
            e-commerce, healthcare, education, startups, and service-based
            businesses. Whether it's local SEO optimization or building a
            conversion-focused website, we ensure every brand stands out in
            today’s competitive digital landscape.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Why Clients Choose PromoDaddy
          </h3>

          <p className="text-gray-300 leading-8">
            Clients choose PromoDaddy because of our transparent communication,
            innovative approach, and performance-driven mindset. We combine
            creativity with analytics to deliver measurable digital growth.
            Our mission is not just to provide services — but to build
            long-term partnerships that help businesses scale confidently.
          </p>
        </div>
      </section>

      <LetsCreate />
    </div>
  );
}

export default page;