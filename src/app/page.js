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
  title: "PromoDaddy Digital - Creative Digital Agency",
  description:
    "PromoDaddy Digital provides innovative digital solutions, immersive user experiences, and tailored services for clients.",
};

export default function Page() {
  return <HomePageClient />;
}