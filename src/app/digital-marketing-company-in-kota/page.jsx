import marketingImg from "@/assets/marketing-team.jpg";
import seoImg from "@/assets/seoo.png";
import socialImg from "@/assets/social.png";
import ppcImg from "@/assets/ppc.png";
import webImg from "@/assets/web.png";
import contentImg from "@/assets/content.png";
import localImg from "@/assets/local.png";

export const metadata = {
  title: "Digital Marketing Company in Kota – Promodaddy Digital",
  description:
    "Looking for a Digital Marketing Company in Kota? Promodaddy Digital helps local businesses grow online, generate high-quality leads and build a strong digital presence.",
  alternates: {
    canonical: "https://yourwebsite.com/digital-marketing-company-in-kota",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why choose a digital marketing agency in Kota?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A local digital marketing agency in Kota understands the city’s audience, competition and search behavior, helping businesses get better visibility and leads.",
                },
              },
              {
                "@type": "Question",
                name: "What services does a digital marketing company in Kota offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A digital marketing company in Kota offers SEO, social media marketing, Google Ads, website design, content marketing and local SEO services.",
                },
              },
              {
                "@type": "Question",
                name: "How long does digital marketing take to show results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Ads can generate quick results, while SEO and content marketing usually take a few months for long-term growth.",
                },
              },
              {
                "@type": "Question",
                name: "Is digital marketing affordable for small businesses in Kota?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, digital marketing is flexible and scalable for small and medium businesses in Kota.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide local SEO services in Kota?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Promodaddy Digital provides local SEO services in Kota to help businesses rank in Google Maps and local listings.",
                },
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-6 py-32">

        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Digital Marketing Company in{" "}
            <span className="text-purple-500">Kota</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Promodaddy Digital helps Kota businesses grow online, generate leads
            and build strong digital presence.
          </p>
        </section>

        {/* About */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">
              About Our Digital Marketing Services in Kota
            </h2>
            <p className="text-gray-300">
              Promodaddy Digital is a performance-driven Digital Marketing Agency
              in Kota working with businesses of all sizes to build visibility,
              leads and conversions.
            </p>
          </div>
            <img
              src={marketingImg.src}
              alt="Digital marketing team"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover"
            />
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

        {/* Why Choose */}
        <section className="mb-24 bg-gradient-to-r from-purple-900 to-black p-10 rounded-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why Choose Promodaddy Digital?
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-200">
            <li>Local Kota expertise</li>
            <li>Transparent strategies</li>
            <li>Result-driven campaigns</li>
            <li>Continuous optimization</li>
          </ul>
        </section>

        {/* Industries */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            Industries We Serve in Kota
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Education", "Healthcare", "Retail", "Real Estate", "Startups"].map(
              (item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-purple-600 rounded-full text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-purple-700 to-indigo-700 p-12 rounded-3xl mb-24">
          <h2 className="text-3xl font-bold mb-4">
            Talk to Our Digital Marketing Experts in Kota
          </h2>
          <p className="mb-6 text-gray-200">
            Get a free consultation with Promodaddy Digital.
          </p>
          <button className="bg-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-900">
            Get Free Consultation
          </button>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            FAQs – Digital Marketing Services in Kota
          </h2>

          <div className="space-y-4">

            {[
              ["Why choose a digital marketing agency in Kota?", "A local agency understands Kota’s audience and competition better."],
              ["What services does a digital marketing company in Kota offer?", "SEO, Google Ads, social media, content marketing and local SEO."],
              ["How long does digital marketing take to show results?", "Ads show fast results while SEO takes time."],
              ["Is digital marketing affordable for small businesses?", "Yes, it is scalable and budget friendly."],
              ["Do you provide local SEO services in Kota?", "Yes, we specialize in Google Maps ranking."]
            ].map((faq, i) => (
              <details
                key={i}
                className="border border-purple-600 rounded-xl p-5 bg-[#0b0f1a]"
              >
                <summary className="font-semibold cursor-pointer">
                  {faq[0]}
                </summary>
                <p className="mt-3 text-gray-300">{faq[1]}</p>
              </details>
            ))}

          </div>
        </section>

        {/* Footer Line */}
        <section className="text-center font-bold text-xl text-purple-400">
          Promodaddy Digital – Your Trusted Digital Marketing Company in Kota for
          Sustainable Online Growth
        </section>

      </div>
    </main>
  );
}
