"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Heading */}
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Not Sure Which Service Is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Right for You?
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            Get a{" "}
            <span className="font-semibold text-purple-300">
              FREE Digital Marketing Audit
            </span>{" "}
            — No Cost. No Commitment. Just Honest Advice.
          </p>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Our experts will analyze your business, competitors, and recommend
            exact services that will grow your business fastest.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-purple-500/30"
            >
              BOOK FREE AUDIT →
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-300 transition group-hover:border-purple-400 group-hover:text-purple-400">
                  <Phone size={18} />
                </div>
                <p>+91 9602089182</p>
              </a>

              <a
                href="tel:+918690522210"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                +91 8690522210
              </a>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:promodaddydigital@gmail.com"
              className="group flex flex-col items-center justify-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-300 transition group-hover:border-purple-400 group-hover:text-purple-400">
                <Mail size={18} />
              </div>
              <p>promodaddydigital@gmail.com</p>
            </a>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps?q=Mahaveer+Nagar+Vistar+Yojana,+Kota,+Rajasthan+324005"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-purple-300 transition group-hover:border-purple-400 group-hover:text-purple-400">
                <MapPin size={18} />
              </div>
              <p className="text-center">
                Mahaveer Nagar Vistar Yojana,
                <br />
                Kota, Rajasthan — 324005
              </p>
            </a>

          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ServicesCTA;