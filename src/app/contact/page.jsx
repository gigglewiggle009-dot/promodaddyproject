import { contactbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import Contact from "@/components/clnt";
import LetsCreate from "@/components/letscreate";
import React from "react";

export const metadata = {
  title: "Contact PromoDaddy Digital | SEO & Digital Marketing Agency",
  description:
    "Contact PromoDaddy Digital for expert SEO, branding, website development, and digital marketing services. Let’s grow your business together.",
};

function page() {
  return (
    <div>
      <SmallBanner
        bannerImage={contactbanner.src}
        sectionsName="Contact Us"
        discriptions="Let’s discuss how we can grow your business with strategic digital marketing solutions."
      />

      <Contact />

      {/* SEO Content Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build Something Powerful Together
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            At PromoDaddy Digital, we specialize in delivering result-driven
            digital marketing services including search engine optimization
            (SEO), branding, website development, social media marketing, and
            performance advertising. Whether you're a startup looking to
            establish your online presence or an established business aiming to
            scale, our team is ready to help.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            We believe every business deserves a customized marketing strategy.
            That’s why we take the time to understand your industry, target
            audience, and growth goals before crafting a solution that drives
            measurable results. From increasing website traffic to generating
            qualified leads, our digital strategies are designed for long-term
            success.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Why Work With PromoDaddy?
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            Our approach combines creativity, data analysis, and performance
            tracking to ensure every campaign delivers maximum ROI. We focus on
            transparency, innovation, and measurable growth. When you partner
            with PromoDaddy, you gain a team committed to helping your brand
            stand out in today’s competitive digital landscape.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Ready to Grow Your Business?
          </h3>

          <p className="text-gray-300 leading-8">
            Fill out the contact form above or reach out to us directly to
            discuss your project. Let’s transform your ideas into powerful
            digital experiences that drive real business growth.
          </p>
        </div>
      </section>

      <LetsCreate />
    </div>
  );
}

export default page;