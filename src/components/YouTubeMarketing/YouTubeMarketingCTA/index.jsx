"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const YouTubeMarketingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Launch India’s Next Big{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              YouTube Campaign?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
            Whether you are a music label launching a new song, an artist building
            a YouTube channel, or a business using YouTube for leads, Promodaddy
            Digital has the speed, scale, and experience to deliver results.
          </p>

          {/* Trust Line */}
          <p className="mt-5 text-sm font-semibold leading-7 text-purple-300 sm:text-base">
            Trusted by T-Series. Trusted by Zee Music. Trusted by Sony Music.
            <br />
            India + Worldwide Campaigns. Based in Kota & Mumbai.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-purple-500/30"
            >
              START YOUR YOUTUBE CAMPAIGN →
            </Link>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-10 grid gap-6 text-sm text-gray-300 sm:grid-cols-3">
            {/* PHONE */}
            <div className="flex flex-col items-center justify-center gap-2">
              <a
                href="tel:+919602089182"
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center text-purple-300 transition group-hover:text-purple-400">
                  <Phone size={18} />
                </div>
                <p>+91 9602089182</p>
              </a>

              <a
                href="tel:+918690522210"
                className="text-gray-300 transition hover:text-purple-400"
              >
                +91 8690522210
              </a>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:promodaddydigital@gmail.com"
              className="group flex flex-col items-center justify-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center text-purple-300 transition group-hover:text-purple-400">
                <Mail size={18} />
              </div>
              <p>promodaddydigital@gmail.com</p>
            </a>

            {/* LOCATION */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center text-purple-300">
                <MapPin size={18} />
              </div>
              <p className="text-center">
                Kota, Rajasthan
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

export default YouTubeMarketingCTA;