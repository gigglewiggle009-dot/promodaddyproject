import React from 'react';

export const metadata = {
  title: "Instant Service Delivery - PromoDaddy Digital",
  description: "Most of our services start instantly. Get 24/7 support and a 7-day money-back guarantee if you're not satisfied.",
};

const Page = () => {
  return (
    <div className="px-4 py-16 bg-black">

      <div className="p-6 mb-4 bg-gray-800 rounded-lg">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Instant Service Delivery
        </h2>

        <p className="mb-4 text-gray-300">
          Most of our services start instantly except a few services that may take
          24–48 hours to begin. Once your order is confirmed, our team immediately
          initiates the process to ensure fast execution and timely delivery.
          If you do not receive your service within the expected time frame,
          please contact our support team and we will resolve the issue promptly.
        </p>

        <p className="mb-4 text-gray-300">
          We operate 24 hours a day to provide continuous support and assistance.
          Our goal is to deliver reliable, efficient, and high-quality digital
          marketing services that help businesses grow without unnecessary delays.
          Whether it is SEO optimization, branding, paid advertising, or website
          development, we prioritize speed along with performance.
        </p>

        <h3 className="mt-6 mb-3 text-lg font-semibold text-white">
          24/7 Customer Support
        </h3>

        <p className="mb-4 text-gray-300">
          Our dedicated support team is available around the clock to assist you
          with any queries, updates, or technical concerns. We believe strong
          communication builds trust and ensures smooth service execution.
          If you need order updates, campaign insights, or clarification regarding
          your project, our team is always ready to help.
        </p>

        <h3 className="mt-6 mb-3 text-lg font-semibold text-white">
          7-Day Money-Back Guarantee
        </h3>

        <p className="mb-4 text-gray-300">
          We stand behind the quality of our work. If you are not satisfied with
          our service, you may request a refund within 7 days of purchase, subject
          to our refund policy terms. Our objective is to create risk-free
          opportunities for businesses to experience our expertise and results.
        </p>

        <h3 className="mt-6 mb-3 text-lg font-semibold text-white">
          Fast & Reliable Digital Marketing Solutions
        </h3>

        <p className="text-gray-300">
          At PromoDaddy Digital, we combine speed with strategic execution.
          From campaign setup to optimization and reporting, our processes are
          structured to deliver measurable outcomes efficiently. Explore our
          services today and experience instant execution backed by professional
          expertise and performance-driven strategies.
        </p>
      </div>

    </div>
  );
};

export default Page;