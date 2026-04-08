import { YouTubeMarketingHero } from "@/components/youtubeMarketing/YouTubeMarketingHero";
import { YouTubeMarketingWhyUs } from "@/components/youtubeMarketing/YouTubeMarketingWhyUs";
import { YouTubeMarketingProcess } from "@/components/youtubeMarketing/YouTubeMarketingProcess";
import { YouTubeMarketingIndustries } from "@/components/youtubeMarketing/YouTubeMarketingIndustries";
import { YouTubeMarketingServices } from "@/components/youtubeMarketing/YouTubeMarketingServices";
import { YouTubeMarketingResults } from "@/components/youtubeMarketing/YouTubeMarketingResults";
import {YouTubeMarketingComparison} from "@/components/YouTubeMarketing/YouTubeMarketingComparison";
import {YouTubeMarketingPricing} from "@/components/YouTubeMarketing/YouTubeMarketingPricing";
import { YouTubeMarketingFaq } from "@/components/youtubeMarketing/YouTubeMarketingFaq";
import { YouTubeMarketingCTA } from "@/components/youtubeMarketing/YouTubeMarketingCTA";

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