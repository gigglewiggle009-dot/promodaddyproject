import { YouTubeMarketingHero } from "@/components/YouTubeMarketing/YouTubeMarketingHero";
import { YouTubeMarketingWhyUs } from "@/components/YouTubeMarketing/YouTubeMarketingWhyUs";
import { YouTubeMarketingProcess } from "@/components/YouTubeMarketing/YouTubeMarketingProcess";
import { YouTubeMarketingIndustries } from "@/components/YouTubeMarketing/YouTubeMarketingIndustries";
import { YouTubeMarketingServices } from "@/components/YouTubeMarketing/YouTubeMarketingServices";
import { YouTubeMarketingResults } from "@/components/YouTubeMarketing/YouTubeMarketingResults";
import {YouTubeMarketingComparison} from "@/components/YouTubeMarketing/YouTubeMarketingComparison";
import {YouTubeMarketingPricing} from "@/components/YouTubeMarketing/YouTubeMarketingPricing";
import { YouTubeMarketingFaq } from "@/components/YouTubeMarketing/YouTubeMarketingFaq";
import { YouTubeMarketingCTA } from "@/components/YouTubeMarketing/YouTubeMarketingCTA";

export const metadata = {
  title: "YouTube Marketing Agency India",
  description:
    "Promodaddy Digital is a leading YouTube marketing agency in India helping music labels, brands, films, and creators grow views, reach, and subscribers with powerful campaign strategies.",
};

export default function YouTubeMarketingAgencyIndiaPage() {
  return (
    <>
      <YouTubeMarketingHero />
      <YouTubeMarketingWhyUs />
      <YouTubeMarketingProcess />
      <YouTubeMarketingIndustries />
      <YouTubeMarketingServices />
      <YouTubeMarketingResults />
      <YouTubeMarketingComparison/>
      <YouTubeMarketingPricing/>
      <YouTubeMarketingFaq />
      <YouTubeMarketingCTA />
    </>
  );
}