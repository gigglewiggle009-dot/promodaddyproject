import React from "react";
import Script from "next/script";
import { Phone, Mail, MapPin } from "lucide-react";
import LetsCreate from "@/components/letscreate";

export const metadata = {
  title: "Contact Promodaddy Digital | Digital Marketing Agency in India",
  description:
    "Contact Promodaddy Digital for SEO, Google Ads, Meta Ads, social media marketing, and branding services across India.",
  alternates: {
    canonical: "https://www.promodaddy.in/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Contact Promodaddy Digital | Digital Marketing Agency in India",
    description:
      "Contact Promodaddy Digital for SEO, Google Ads, Meta Ads, social media marketing, and branding services across India.",
    url: "https://www.promodaddy.in/contact",
    siteName: "Promodaddy Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Promodaddy Digital | Digital Marketing Agency in India",
    description:
      "Contact Promodaddy Digital for SEO, Google Ads, Meta Ads, social media marketing, and branding services across India.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Promodaddy Digital",
  url: "https://www.promodaddy.in/contact",
  description: "Contact page of Promodaddy Digital.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Promodaddy Digital",
  url: "https://www.promodaddy.in/",
  telephone: "+91-8690522210",
  email: "info@promodaddy.in",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8690522210",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

function page() {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Script
        id="contact-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="bg-[#050816] text-white">
        {/* CONTACT HERO SECTION */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.10),transparent_30%),radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* LEFT SIDE */}
              <div>
                <h1 className="mb-6 text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                    Connect
                  </span>{" "}
                  <span>with us</span>
                </h1>

                <p className="mb-12 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                  Our incredible team brings a world of creativity into your
                  business. Contact us to know more about the best digital
                  marketing strategies.
                </p>

                <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-8 w-8" strokeWidth={1.8} />
                    <div>
                      <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">
                        Phone Number
                      </h3>
                      <a
                        href="tel:+919602089182"
                        className="block text-gray-300 hover:text-white"
                      >
                        +91-9602089182
                      </a>
                      <a
                        href="tel:+918690522210"
                        className="block text-gray-300 hover:text-white"
                      >
                        +91-8690522210
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-8 w-8" strokeWidth={1.8} />
                    <div>
                      <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">
                        Email
                      </h3>
                      <a
                        href="mailto:info@promodaddy.in"
                        className="block text-gray-300 hover:text-white"
                      >
                        info@promodaddy.in
                      </a>
                      <a
                        href="mailto:promodaddydigital@gmail.com"
                        className="block text-gray-300 hover:text-white"
                      >
                        promodaddydigital@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex max-w-4xl items-start gap-4">
                  <MapPin className="mt-1 h-8 w-8" strokeWidth={1.8} />
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">
                      Address
                    </h3>
                    <a
                      href="https://www.google.com/maps?q=Plot%20No.%2026%20Mahaveer%20Nagar%20Vistar%20Yojana%20Kota%20Rajasthan%20324005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg leading-9 text-gray-300 underline transition hover:text-white"
                    >
                      Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota,
                      Rajasthan 324005, India
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE BOX */}
              <div className="w-full">
                <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.25)]">
                  <div className="text-center">
                    <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-40 blur-2xl" />
                    <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                      Let’s Talk Growth
                    </h2>
                    <p className="mx-auto max-w-md leading-8 text-gray-300">
                      Reach out directly through phone, email, or visit our
                      office. We help brands grow with SEO, ads, branding and
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOOGLE MAP SECTION */}
        <section className="bg-[#050816] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
              Our Location
            </h2>

            <p className="mb-6 text-gray-300">
              Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota, Rajasthan
              324005, India
            </p>

            <div className="h-[350px] w-full overflow-hidden rounded-xl border border-white/10 sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=Plot%20No.%2026%20Mahaveer%20Nagar%20Vistar%20Yojana%20Kota%20Rajasthan%20324005&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="bg-black py-20 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-3xl font-bold">
              Let’s Build Something Powerful Together
            </h2>

            <p className="mb-6 leading-8 text-gray-300">
              At PromoDaddy Digital, we specialize in SEO, branding, website
              development, social media marketing, and performance advertising.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              We create customized strategies based on your goals to drive real,
              measurable growth and long-term success.
            </p>

            <h3 className="mb-4 text-2xl font-semibold">
              Why Work With PromoDaddy?
            </h3>

            <p className="mb-6 leading-8 text-gray-300">
              We combine creativity with data-driven strategies to deliver
              maximum ROI and business impact.
            </p>

            <h3 className="mb-4 text-2xl font-semibold">
              Ready to Grow Your Business?
            </h3>

            <p className="leading-8 text-gray-300">
              Contact us today and let’s turn your ideas into powerful digital
              growth.
            </p>
          </div>
        </section>

        <LetsCreate />
      </main>
    </>
  );
}

export default page;