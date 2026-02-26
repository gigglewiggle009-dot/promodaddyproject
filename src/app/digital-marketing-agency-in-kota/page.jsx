
import kotaImg from "@/assets/kotaimage.png";
import marketingImg from "@/assets/marketing-team.jpg";
import ecommerceImg from "@/assets/ecommerce.png";
import healthcareImg from "@/assets/healthcare.png";
import realEstateImg from "@/assets/real-estate.png";
import educationImg from "@/assets/education.png";
import hospitalityImg from "@/assets/hospitality.png";
import retailImg from "@/assets/retail.png";
import seoImg from "@/assets/seoo.png";
import socialImg from "@/assets/social.png";
import ppcImg from "@/assets/ppc.png";
import webImg from "@/assets/web.png";
import contentImg from "@/assets/content.png";
import localImg from "@/assets/local.png";

export const metadata = {
  title: "Digital Marketing Company in Kota",
  description:
    "Looking for the best digital marketing agency in Kota? We help businesses grow with SEO, social media marketing, PPC, branding and website development services.",
  alternates: {
    canonical: "https://yourwebsite.com/digital-marketing-agency-in-kota",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">

     {/* HERO SECTION */}
<section className="relative py-28 overflow-hidden">

  {/* 🔹 BACKGROUND VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero-bg.mp4" type="video/mp4" />
  </video>

  {/* 🔹 DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* 🔹 CONTENT */}
  <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-white">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-5xl font-semibold mb-6">
        Trusted Digital Marketing Agency in Kota for Sustainable Business Growth
      </h1>

      <p className="text-gray-300 mb-8 leading-relaxed">
        From coaching institutes to local businesses, we deliver data-backed
        digital marketing strategies that improve online visibility, build brand
        authority, and drive consistent business growth in Kota.
      </p>

      <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition">
        Talk to Our Experts
      </button>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg p-8">
      <h3 className="text-2xl font-medium mb-6">Get A Quote</h3>

      <input
        placeholder="Name*"
        className="w-full mb-4 px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
      />

      <input
        placeholder="Phone*"
        className="w-full mb-4 px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
      />

      <input
        placeholder="Email*"
        className="w-full mb-4 px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
      />

      <textarea
        placeholder="Message*"
        className="w-full mb-6 px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
      />

      <button className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition">
        Submit
      </button>
    </div>

  </div>
</section>

      {/* STATS ROW - IMPROVED DESIGN */}<section className="bg-gradient-to-r from-[#0a1a3a] to-[#0e2a5a] py-20">
  <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

    {[
      ["70+", "SEO Optimized Websites"],
      ["50+", "Brand & Logo Designs"],
      ["500+", "Satisfied Clients"],
      ["300000+", "Social Media Followers"],
    ].map((item, index) => (
      <div
        key={index}
        className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
      >
        <h3 className="text-4xl font-bold text-[#0a1a3a] group-hover:text-[#1d4ed8] transition">
          {item[0]}
        </h3>
        <p className="text-gray-600 mt-3 font-medium">
          {item[1]}
        </p>
      </div>
    ))}

  </div>
</section>

     {/* ABOUT SECTION - FIXED IMAGE HEIGHT */}
<section className="py-24">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-stretch">

    {/* IMAGE WRAPPER */}
    <div className="w-full h-[520px]">
      <img
        src={marketingImg.src}
        alt="Digital Marketing Company in Kota"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* CONTENT */}
    <div>
      <h2 className="text-4xl font-medium mb-6">
        Boost Your Brand With The Best Digital Marketing Company In Kota
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        Promodaddy Digital is a trusted digital marketing company in Kota,
        helping businesses strengthen their online presence and generate
        high-quality leads.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Our team combines creativity, data-driven insights, and the latest
        digital marketing tools to improve visibility, engagement, and
        conversions.
      </p>

      <p className="text-gray-400 leading-relaxed mb-8">
        Whether you run a coaching institute, healthcare clinic, real estate
        business, e-commerce store, or local service in Kota, we focus on
        long-term digital success.
      </p>

      <h3 className="text-xl font-medium mb-4">
        What Makes Us the Best
      </h3>

      <ul className="list-disc ml-5 space-y-2 text-gray-300">
        <li>Strong local market expertise in Kota</li>
        <li>Customized digital marketing strategies</li>
        <li>Data-driven decision making</li>
        <li>Advanced digital marketing tools</li>
        <li>Client-focused approach with measurable ROI</li>
      </ul>
    </div>

  </div>
</section>

      {/* KOTA CITY SECTION - IMAGE HEIGHT FIXED */}
<section className="bg-[#0c0f14] py-24">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-medium mb-6">
        Your Trusted Digital Marketing Partner in Kota
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        Kota is known for its fast-growing education sector, coaching
        institutes, and emerging businesses. In such a competitive market,
        having a strong digital presence is no longer optional — it is
        essential.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        As a leading digital marketing company in Kota, we help brands stand
        out with strategic SEO, high-performing Google Ads campaigns,
        conversion-focused website development, and powerful social media
        marketing strategies.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our goal is simple — generate qualified leads, increase brand
        authority, and deliver measurable business growth through
        data-backed marketing solutions.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full h-[520px]">
      <img
        src={kotaImg.src}
        alt="Kota City Digital Marketing"
        className="w-full h-full object-cover rounded-xl shadow-2xl"
      />
    </div>

  </div>
</section>

      {/* INDUSTRIES – WITH DETAILS */}
<section className="py-20 bg-[#0c0f14]">
  <h2 className="text-center text-4xl font-medium mb-12">
    Industries We Serve
  </h2>

  <div className="container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-6 gap-8">

    {[
      {
        title: "E-commerce",
        desc: "Helping online stores increase traffic, conversions, and sales through SEO, paid ads, and performance marketing.",
        img: ecommerceImg,
      },
      {
        title: "Healthcare",
        desc: "Driving patient inquiries and visibility for clinics, hospitals, and healthcare professionals.",
        img: healthcareImg,
      },
      {
        title: "Real Estate",
        desc: "Generating high-quality property leads using targeted ads and location-based SEO strategies.",
        img: realEstateImg,
      },
      {
        title: "Education",
        desc: "Supporting coaching institutes and educational brands in Kota with lead-focused digital campaigns.",
        img: educationImg,
      },
      {
        title: "Hospitality",
        desc: "Boosting bookings and brand visibility for hotels, resorts, and restaurants through digital marketing.",
        img: hospitalityImg,
      },
      {
        title: "Retail",
        desc: "Helping local and multi-store retailers grow footfall and online sales with digital strategies.",
        img: retailImg,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-black border border-gray-700 rounded-xl p-6 text-center shadow hover:shadow-xl transition"
      >

        {/* IMAGE */}
        <div className="w-full h-[120px] mb-4">
          <img
            src={item.img.src}
            alt={`${item.title} Digital Marketing`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-medium mb-3">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}
  </div>
</section>

     {/* Services */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-400">
            Our Digital Marketing Services in Kota
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

  {[
    [seoImg, "SEO Services", "Keyword research, on-page SEO, local SEO & GMB"],
    [socialImg, "Social Media Marketing", "Profile management & content strategy"],
    [ppcImg, "Google Ads / PPC", "High conversion paid campaigns"],
    [webImg, "Website Development", "Fast & responsive websites"],
    [contentImg, "Content Marketing", "SEO blogs & content"],
    [localImg, "Local SEO", "Google Maps ranking"],
  ].map((item, i) => (
    <div
      key={i}
      className="bg-gradient-to-br from-[#0b0f1a] to-[#130b2a] border border-purple-600 rounded-2xl p-6 hover:scale-105 transition text-center"
    >

      {/* IMAGE */}
      <img
        src={item[0].src}
        alt={item[1]}
        className="w-20 h-20 mx-auto mb-4 rounded-full bg-white p-3"
      />

      {/* TITLE */}
      <h3 className="font-bold text-lg mb-2 text-purple-400">
        {item[1]}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-sm">
        {item[2]}
      </p>

    </div>
  ))}

</div>

        </section>

      {/* FAQ */}
      <section className="py-24">
        <h2 className="text-center text-4xl font-medium mb-12">
          FAQs – Digital Marketing Company in Kota
        </h2>

        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          {[
            [
              "Why choose a digital marketing company in Kota?",
              "A local agency understands Kota’s competitive business market and audience behavior better.",
            ],
            [
              "What services do you offer?",
              "We offer SEO, PPC, social media marketing, branding and website development services.",
            ],
            [
              "How long does digital marketing take?",
              "Paid ads show quick results while SEO takes consistent effort over 3-6 months.",
            ],
            [
              "Is digital marketing affordable?",
              "Yes, digital marketing is scalable and cost-effective for startups and enterprises.",
            ],
            [
              "Do you provide local SEO in Kota?",
              "Yes, we help businesses rank on Google Search and Google Maps locally.",
            ],
          ].map((faq, i) => (
            <details
              key={i}
              className="border border-gray-700 rounded-md p-5 bg-black hover:border-pink-600 transition"
            >
              <summary className="cursor-pointer font-medium">
                {faq[0]}
              </summary>
              <p className="mt-3 text-gray-300">{faq[1]}</p>
            </details>
          ))}
        </div>
      </section>

    </main>
  );
}
