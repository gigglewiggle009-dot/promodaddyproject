import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import LetsCreate from "@/components/letscreate";

export const metadata = {
  title: "Contact PromoDaddy Digital | SEO & Digital Marketing Agency",
  description:
    "Contact PromoDaddy Digital for expert SEO, branding, website development, and digital marketing services. Let’s grow your business together.",
};

function page() {
  return (
    <div className="bg-[#050816] text-white">
      
      {/* CONTACT HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.10),transparent_30%),radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
                <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Connect
                </span>{" "}
                <span>with us</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-2xl mb-12">
                Our incredible team brings a world of creativity into your
                business. Contact us to know more about the best digital
                marketing strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 mt-1" strokeWidth={1.8} />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                      Phone Number
                    </h3>
                    <a href="tel:+919602089182" className="block text-gray-300 hover:text-white">
                      +91-9602089182
                    </a>
                    <a href="tel:+918690522210" className="block text-gray-300 hover:text-white">
                      +91-8690522210
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 mt-1" strokeWidth={1.8} />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                      Email
                    </h3>
                    <a href="mailto:info@promodaddy.in" className="block text-gray-300 hover:text-white">
                      info@promodaddy.in
                    </a>
                    <a href="mailto:promodaddydigital@gmail.com" className="block text-gray-300 hover:text-white">
                      promodaddydigital@gmail.com
                    </a>
                    
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4 max-w-4xl">
                <MapPin className="w-8 h-8 mt-1" strokeWidth={1.8} />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                    Address
                  </h3>
                  <a
                  href="https://www.google.com/maps?q=Plot%20No.%2026%20Mahaveer%20Nagar%20Vistar%20Yojana%20Kota%20Rajasthan%20324005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-lg leading-9 hover:text-white transition underline"
                >
                  Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota, Rajasthan 324005, India
                </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE BOX */}
            <div className="w-full">
              <div className="min-h-[420px] rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.25)] p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 blur-2xl opacity-40 mb-8" />
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    Let’s Talk Growth
                  </h2>
                  <p className="text-gray-300 leading-8 max-w-md mx-auto">
                    Reach out directly through phone, email, or visit our office.
                    We help brands grow with SEO, ads, branding and development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📍 GOOGLE MAP SECTION */}
      <section className="bg-[#050816] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Our Location
          </h2>

          <p className="text-gray-300 mb-6">
            Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota, Rajasthan 324005, India
          </p>

          <div className="w-full h-[350px] sm:h-[450px] rounded-xl overflow-hidden border border-white/10">
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
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build Something Powerful Together
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            At PromoDaddy Digital, we specialize in SEO, branding, website
            development, social media marketing, and performance advertising.
          </p>

          <p className="text-gray-300 leading-8 mb-6">
            We create customized strategies based on your goals to drive real,
            measurable growth and long-term success.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Why Work With PromoDaddy?
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            We combine creativity with data-driven strategies to deliver
            maximum ROI and business impact.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Ready to Grow Your Business?
          </h3>

          <p className="text-gray-300 leading-8">
            Contact us today and let’s turn your ideas into powerful digital
            growth.
          </p>
        </div>
      </section>

      <LetsCreate />
    </div>
  );
}

export default page;