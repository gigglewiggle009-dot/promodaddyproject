// src/app/privacy-policy/page.jsx
import React from "react";
import LetsCreate from "@/components/letscreate";

export const metadata = {
  title: "Privacy Policy - PromoDaddy Digital",
  description:
    "Read the privacy policy of PromoDaddy Digital LLP and understand how we collect, store, and handle your personal data securely.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="px-4 py-16 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Promodaddy Digital LLP Privacy Policy</h1>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This privacy policy (“Policy”) relates to the manner Promodaddy Digital LLP (“we”, “us”, “our”) 
            uses, handles, and processes the data that you provide us in connection with using the products 
            or services we offer.
          </p>
          <p>
            By using this website or availing goods/services offered by us, you agree to the terms of this Policy 
            and consent to our use, storage, disclosure, and transfer of your data as described.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What Data Is Being Collected</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Contact information including address and email</li>
            <li>Demographic info, preferences, or interests</li>
            <li>Other info relevant/required for providing goods or services</li>
          </ul>
          <p>Note: “Personal Data” is defined under relevant Indian laws.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What We Do With the Data</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Internal record keeping</li>
            <li>Improving products or services</li>
            <li>Providing updates or special offers</li>
            <li>Communication and customer support</li>
            <li>Internal training and quality assurance</li>
          </ul>
        </section>
      </div>

      {/* Optional CTA */}
      <LetsCreate />
    </div>
  );
};

export default PrivacyPolicyPage;