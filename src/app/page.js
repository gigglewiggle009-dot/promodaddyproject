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
  title: "PromoDaddy Digital - Best Digital Marketing Agency in India | Trusted by Sonu Sood, Mohammad Shami",
  description:
    "Promodaddy Digital – Trusted digital marketing agency in India offering celebrities & SEO, Google Ads & social media marketing. 160+ happy clients. Free consultation!",
    alternates: {
    canonical: "www.promodaddy.in",
  },
};

export default function Page() {
  return <HomePageClient />;
}