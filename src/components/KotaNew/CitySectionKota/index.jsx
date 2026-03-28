"use client";

import React from "react";
import kotaImg from "@/assets/kotaimage.png";
import { SharedLayout } from "@/components/SharedComponent";

export const CitySectionKota = () => {
  return (
    <section className="bg-[#0c0f14] py-16 sm:py-20 md:py-24 text-white">
      <SharedLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 sm:mb-6 leading-snug">
              Your Trusted Digital Marketing Partner in Kota
            </h2>

            {/* Para 1 */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Kota is known for its fast-growing education sector, coaching
              institutes, and emerging businesses. In such a competitive market,
              having a strong digital presence is no longer optional — it is
              essential.
            </p>

            {/* Para 2 */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              As a leading digital marketing company in Kota, we help brands stand
              out with strategic SEO, high-performing Google Ads campaigns,
              conversion-focused website development, and powerful social media
              marketing strategies.
            </p>

            {/* Para 3 (NEW) */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Kota mein sirf coaching nahi hoti — yahan real estate, healthcare,
              retail aur hospitality bhi tezi se grow kar raha hai. Promodaddy
              Digital in har sector mein kaam karta hai. Hamare paas Kota ka local
              knowledge hai aur Mumbai jaisi pan-India execution capability —
              yeh combination kisi aur agency ke paas nahi.
            </p>

            {/* Para 4 */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our goal is simple — generate qualified leads, increase brand
              authority, and deliver measurable business growth through
              data-backed marketing solutions.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
            <img
              src={kotaImg.src}
              alt="Kota City Digital Marketing"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </SharedLayout>
    </section>
  );
};