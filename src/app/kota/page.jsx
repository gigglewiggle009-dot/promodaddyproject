import { KotaHeroSection } from "@/components/kota/KotaHeroSection";
import { KotaAboutSection } from "@/components/kota/KotaAboutSection";
import { KotaIndustriesSection } from "@/components/kota/KotaIndustriesSection";
import { KotaServicesSection } from "@/components/kota/KotaServicesSection";
import { KotaFaqSection } from "@/components/kota/KotaFaqSection";
import {ContactDetails} from "@/components/ContactDetails"

export default function KotaPage() {
  return (
    <main className="bg-black text-white">
      <KotaHeroSection />
      <KotaAboutSection />
      <KotaIndustriesSection />
      <KotaServicesSection />
      <KotaFaqSection />
      <ContactDetails/>
    </main>
  );
}