// "use client";
import { Project } from "@/components";
import { aboutbanner } from "@/assets";
import LetsCreate from "@/components/letscreate";
import Management from "@/components/management";
import { SmallBanner } from "@/components/SharedComponent";
import React from "react";

export const metadata = {
  title: "Our Projects - PromoDaddy Digital",
  description:
    "Explore the projects delivered by PromoDaddy Digital, showcasing innovative solutions and transformative results for our clients.",
};

function page() {
  return (
    <>
      {/* Banner */}
      <SmallBanner
        sectionsName="Project"
        discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
        bannerImage={aboutbanner.src}
      />

      {/* Project Section */}
      <Project />

      {/* Management Section */}
      <Management />

      {/* SEO Content at bottom, above footer, WHITE background */}
      <section className="max-w-5xl mx-auto px-4 py-12 bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">Our Project Expertise</h2>
        <p className="mb-4">
          At PromoDaddy Digital, we have successfully delivered numerous projects across various domains, 
          including web development, digital marketing, branding, and creative solutions. Each project reflects 
          our commitment to innovation, quality, and measurable results.
        </p>
        <p className="mb-4">
          Our team works closely with clients to understand their objectives and provide tailored strategies 
          that drive growth and improve engagement. We combine technical expertise with creative thinking 
          to transform ideas into impactful solutions.
        </p>
        <p className="mb-4">
          By showcasing our portfolio, we aim to demonstrate the value we bring to organizations and how 
          our projects contribute to long-term success. Whether it’s enhancing user experience, boosting brand 
          presence, or creating scalable web solutions, PromoDaddy Digital delivers results that matter.
        </p>
        <p className="mb-4">
          Explore our projects and see how we transform challenges into opportunities, delivering innovative 
          and practical solutions for businesses across India and beyond.
        </p>
      </section>

      {/* Footer / CTA */}
      <LetsCreate />
    </>
  );
}

export default page;

// // "use client";
// import { Project } from "@/components";
// import { aboutbanner } from "@/assets";
// import LetsCreate from "@/components/letscreate";
// import Management from "@/components/management";
// import { SmallBanner } from "@/components/SharedComponent";
// import React from "react";

// export const metadata = {
//   title: "Our Projects - PromoDaddy Digital",
//   description:
//     "Explore the projects delivered by PromoDaddy Digital, showcasing innovative solutions and transformative results for our clients.",
// };

// function page() {
//   return (
//     <>
//       <SmallBanner
//         sectionsName="Project"
//         discriptions="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
//         bannerImage={aboutbanner.src}
//       />
//       <Project />
//       <Management />
//       <LetsCreate />
//     </>
//   );
// }

// export default page;
