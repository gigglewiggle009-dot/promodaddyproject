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
    "India's top-rated digital marketing agency trusted by celebrities & businesses.SEO, Google Ads, Social Media & more. 160+ Happy Clients. 5.0 Stars. Free Consultation!",
};

export default function Page() {
  return <HomePageClient />;
}