import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const WebsiteDevCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24 text-white md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.18),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <SharedLayout>
        <div className="relative mx-auto max-w-6xl text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Build a{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Website That Generates Leads?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
            Get a fast, SEO-ready and mobile responsive website designed to
            showcase your business, build trust and convert visitors into real
            enquiries.
          </p>

          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            No random templates. No slow pages. No confusing layout. Just a
            premium website built for growth.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:scale-[1.02] hover:opacity-90"
            >
              Get Free Website Consultation →
            </Link>
          </div>

          {/* Contact Details */}
          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            <div>
              <Phone
                size={18}
                className="mx-auto mb-5 text-purple-300"
              />
              <p className="text-sm leading-7 text-gray-200">
                +91 9602089182
                <br />
                +91 8690522210
              </p>
            </div>

            <div>
              <Mail
                size={18}
                className="mx-auto mb-5 text-purple-300"
              />
              <p className="text-sm leading-7 text-gray-200">
                promodaddydigital@gmail.com
              </p>
            </div>

            <div>
              <MapPin
                size={18}
                className="mx-auto mb-5 text-purple-300"
              />
              <p className="text-sm leading-7 text-gray-200">
                Offices: Kota, Rajasthan
                <br />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};