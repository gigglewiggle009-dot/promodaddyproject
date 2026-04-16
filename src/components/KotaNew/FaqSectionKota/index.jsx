"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import { kotaFaqs } from "@/components/KotaNew/KotaFAQData";

export const FaqSectionKota = () => {
  return (
    <section className="bg-black py-16 text-white sm:py-20 md:py-24">
      <SharedLayout>
        <h2 className="mb-10 text-center text-2xl font-medium text-purple-400 sm:mb-12 sm:text-3xl md:text-4xl">
          FAQs – Digital Marketing Company in Kota
        </h2>

        <div className="mx-auto max-w-4xl space-y-4">
          {kotaFaqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-700 bg-[#0b0f1a] p-5 transition duration-300 hover:border-pink-500 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white sm:text-base md:text-lg">
                <span>{faq.question}</span>
                <span className="text-xl text-purple-400 transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </SharedLayout>
    </section>
  );
};

export default FaqSectionKota;