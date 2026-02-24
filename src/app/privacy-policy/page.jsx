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

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            At Promodaddy Digital LLP, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy (“Policy”) explains how we collect, use, disclose, and safeguard the information you provide 
            when using our website, products, or services.
          </p>
          <p className="mb-4">
            By accessing or using our services, you consent to the practices outlined in this Policy. 
            We ensure that your personal information is handled securely and in accordance with applicable Indian laws and regulations.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What Data Is Being Collected</h2>
          <p className="mb-4">
            We collect information to provide a personalized and efficient experience. The types of data we collect include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact details including email, phone number, and postal address</li>
            <li>Demographic information, preferences, or interests</li>
            <li>Information provided voluntarily through forms, surveys, or communications</li>
            <li>Technical information like IP address, browser type, and usage patterns</li>
          </ul>
          <p className="mb-4">
            Note: “Personal Data” is defined under relevant Indian laws such as the Information Technology Act, 2000.
          </p>
        </section>

        {/* Use of Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What We Do With the Data</h2>
          <p className="mb-4">
            Your information is used to enhance your experience and provide high-quality services. Specific purposes include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Internal record keeping and operational purposes</li>
            <li>Improving our products, services, and website functionality</li>
            <li>Providing updates, promotions, and special offers</li>
            <li>Communication, customer support, and responding to inquiries</li>
            <li>Training and quality assurance for our staff</li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies, web beacons, and other tracking technologies to enhance your browsing experience, 
            analyze website traffic, and understand user preferences. You may disable cookies via your browser settings, 
            but some features may not function properly.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or request deletion of your personal data. 
            To exercise these rights, please contact us at <strong>info@promodaddy.in</strong>. 
            We are committed to responding to all requests promptly in accordance with Indian privacy regulations.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
          <p className="mb-4">
            We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy, 
            comply with legal obligations, resolve disputes, and enforce agreements. After the retention period, 
            the data is securely deleted or anonymized.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices 
            of these external websites. We encourage you to read their privacy policies when visiting these sites.
          </p>
        </section>

        {/* Updates to Policy */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Policy Updates</h2>
          <p className="mb-4">
            This Privacy Policy may be updated periodically to reflect changes in our practices, legal requirements, or services. 
            We recommend reviewing this page regularly to stay informed about how your data is protected.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding your personal data or this Privacy Policy, 
            you may contact us at:
          </p>
          <p>Email: <strong>info@promodaddy.in</strong></p>
          <p>Address: Promodaddy Digital LLP, Kota, Rajasthan, India</p>
        </section>
      </div>

      {/* Optional CTA */}
      <LetsCreate />
    </div>
  );
};

export default PrivacyPolicyPage;


// // src/app/privacy-policy/page.jsx
// import React from "react";
// import LetsCreate from "@/components/letscreate";

// export const metadata = {
//   title: "Privacy Policy - PromoDaddy Digital",
//   description:
//     "Read the privacy policy of PromoDaddy Digital LLP and understand how we collect, store, and handle your personal data securely.",
// };

// const PrivacyPolicyPage = () => {
//   return (
//     <div className="bg-black text-white">
//       <div className="px-4 py-16 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Promodaddy Digital LLP Privacy Policy</h1>

//         <section className="mb-12">
//           <h2 className="text-xl font-semibold mb-4">Introduction</h2>
//           <p className="mb-4">
//             This privacy policy (“Policy”) relates to the manner Promodaddy Digital LLP (“we”, “us”, “our”) 
//             uses, handles, and processes the data that you provide us in connection with using the products 
//             or services we offer.
//           </p>
//           <p>
//             By using this website or availing goods/services offered by us, you agree to the terms of this Policy 
//             and consent to our use, storage, disclosure, and transfer of your data as described.
//           </p>
//         </section>

//         <section className="mb-12">
//           <h2 className="text-xl font-semibold mb-4">What Data Is Being Collected</h2>
//           <ul className="list-disc pl-6 mb-4">
//             <li>Name</li>
//             <li>Contact information including address and email</li>
//             <li>Demographic info, preferences, or interests</li>
//             <li>Other info relevant/required for providing goods or services</li>
//           </ul>
//           <p>Note: “Personal Data” is defined under relevant Indian laws.</p>
//         </section>

//         <section className="mb-12">
//           <h2 className="text-xl font-semibold mb-4">What We Do With the Data</h2>
//           <ul className="list-disc pl-6 mb-4">
//             <li>Internal record keeping</li>
//             <li>Improving products or services</li>
//             <li>Providing updates or special offers</li>
//             <li>Communication and customer support</li>
//             <li>Internal training and quality assurance</li>
//           </ul>
//         </section>
//       </div>

//       {/* Optional CTA */}
//       <LetsCreate />
//     </div>
//   );
// };

// export default PrivacyPolicyPage;
