// "use client";
// import LetsCreate from "@/components/letscreate";
// import UserRecommend from "@/components/ourClient";
// import {
//   Clients,
//   Services,
//   HomeBanner,
//   TextMarque,
//   HomeCarousel,
// } from "@/components";

// const page = () => {
//   return (
//     <>
//       <HomeBanner />
//       <TextMarque />
//       <Services />
//       <Clients />
//       <UserRecommend />
//       <HomeCarousel />
//       <LetsCreate />
//     </>
//   );
// };

// export default page;


// No "use client" here — server component
import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "PromoDaddy Digital - Best Digital Marketing Agency in India",
  description:
    "Promodaddy Digital - a results-driven digital marketing agency in India, helping brands grow through SEO, Google Ads, social media and lead generation",
};

export default function Page() {
  return <HomePageClient />;
}