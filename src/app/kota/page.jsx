import { KotaHeroSection } from "@/components/kota/KotaHeroSection";
import { KotaAboutSection } from "@/components/kota/KotaAboutSection";
import { KotaIndustriesSections } from "@/components/kota/KotaIndustriesSections";
import { KotaServicesSection } from "@/components/kota/KotaServicesSection";
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