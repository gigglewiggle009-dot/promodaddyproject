import { KotaHeroSection } from "@/components/kota/KotaHeroSection";
import { KotaAboutSection } from "@/components/kota/KotaAboutSection";
import { KotaIndustriesSection } from "@/components/kota/KotaIndustriesSection";
import { KotaServicesSection } from "@/components/kota/KotaServicesSection";
import { KotaFaqSection } from "@/components/kota/KotaFaqSection";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata = {
  title: "Digital Marketing Agency in Kota",
  description:
    "Promodaddy Digital is a digital marketing agency in Kota offering SEO, Google Ads, social media marketing, and lead generation services for local businesses.",
};

export default function KotaPage() {
  return (
    <main className="bg-black text-white">
      <KotaHeroSection />
      <KotaAboutSection />
      <KotaIndustriesSection />
      <KotaServicesSection />
      <KotaFaqSection />
      <ContactDetails />
    </main>
  );
}