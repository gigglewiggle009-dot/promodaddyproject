import { SocialMediaHero } from "@/components/SocialMediaMarketing/SocialMediaHero";
import {SocialMediaStats} from "@/components/SocialMediaMarketing/SocialMediaStats";
import {SocialMediaWhyImportant} from "@/components/SocialMediaMarketing/SocialMediaWhyImportant";
import {SocialMediaPlatformShowcase} from "@/components/SocialMediaMarketing/SocialMediaPlatformShowcase";
import {SocialMediaPricing} from "@/components/SocialMediaMarketing/SocialMediaPricing";
import {SocialMediaProcess} from "@/components/SocialMediaMarketing/SocialMediaProcess";
import {SocialMediaWhyChooseTable} from "@/components/SocialMediaMarketing/SocialMediaWhyChooseTable";
import {SocialMediaFAQ} from "@/components/SocialMediaMarketing/SocialMediaFAQ";
import {SocialMediaCTA} from "@/components/SocialMediaMarketing/SocialMediaCTA";
import {SocialMediaIndustryStrategy} from "@/components/SocialMediaMarketing/SocialMediaIndustryStrategy";

export const metadata = {
  title: "Social Media Marketing Services in India",
  description:
    "Promodaddy Digital offers social media marketing services in India to help brands grow their audience, improve engagement, and generate quality leads through strategic content and campaigns.",
  alternates: {
    canonical: "https://www.promodaddy.in/services/social-media-marketing-india",
  },
};

export default function Page() {
  return (
    <div className="bg-[#0b0b0b] text-white">
      <SocialMediaHero />
      <SocialMediaStats />
      <SocialMediaIndustryStrategy/>
      <SocialMediaWhyImportant />
      <SocialMediaPlatformShowcase />
      <SocialMediaPricing/>
      <SocialMediaProcess />
      <SocialMediaWhyChooseTable />
      <SocialMediaFAQ />
      <SocialMediaCTA />
    </div>
  );
}