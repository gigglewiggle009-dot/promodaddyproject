import { KotaHeroSection } from "@/components/Kota/KotaHeroSection";
import { KotaAboutSection } from "@/components/Kota/KotaAboutSection";
import { KotaIndustriesSections } from "@/components/Kota/KotaIndustriesSections";
import { KotaServicesSection } from "@/components/Kota/KotaServicesSection";
import { KotaFaqSection } from "@/components/kota/KotaFaqSection";
import {ContactDetails} from "@/components/ContactDetails"

export default function KotaPage() {
  return (
    <main className="bg-black text-white">
      <KotaHeroSection />
      <KotaAboutSection />
      <KotaIndustriesSections />
      <KotaServicesSection />
      <KotaFaqSection />
      <ContactDetails/>
    </main>
  );
}