import { HeroSectionKota } from "@/components/KotaNew/HeroSectionKota";
import {StatsSectionKota} from "@/components/KotaNew/StatsSectionKota";
import { AboutSectionKota } from "@/components/KotaNew/AboutSectionKota";
import { CitySectionKota } from "@/components/KotaNew/CitySectionKota";
import { IndustriesSectionKota } from "@/components/KotaNew/IndustriesSectionKota";
import { ServicesSectionKota } from "@/components/KotaNew/ServicesSectionKota";
import { OurProcessSectionKota } from "@/components/KotaNew/OurProcessSectionKota";
import {WhyChooseUsSectionKota} from "@/components/KotaNew/WhyChooseUsSectionKota";
import {CaseStudiesSectionKota } from "@/components/KotaNew/CaseStudiesSectionKota";
import { FaqSectionKota } from "@/components/KotaNew/FaqSectionKota";
// import { ContactDetailsKota } from "@/components/ContactDetailsKota";

export const metadata = {
  title: "Digital Marketing Agency in Kota | Promodaddy Digital",
  description:
    "Promodaddy Digital — top-rated Digital Marketing Agency in Kota. SEO, Google Ads & social media for coaching institutes, businesses & brands. Real results, local expertise.",
  alternates: {
    canonical: "https://yourwebsite.com/digital-marketing-agency-in-kota",
  },
};

export default function KotaNewPage() {
  return (
    <main className="bg-black text-white">
      <HeroSectionKota />
      <StatsSectionKota />
      <AboutSectionKota />
      <CitySectionKota />
      <IndustriesSectionKota />
      <ServicesSectionKota />
      <OurProcessSectionKota />
      <WhyChooseUsSectionKota />
      <CaseStudiesSectionKota />
      <FaqSectionKota />
      {/* <ContactDetailsKota /> */}
    </main>
  );
}