import Script from "next/script";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import {
  GoToTop,
  SharedFooter,
  SharedHeader,
} from "@/components/SharedComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.promodaddy.in"), // ✅ MUST

  title: {
    default: "Digital Marketing Agency in India | Promodaddy Digital",
    template: "%s | Promodaddy Digital", // 🔥 SEO boost
  },

  description:
    "Promodaddy Digital is a leading digital marketing agency in India offering SEO, social media marketing, Google Ads, branding and website development services.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* ✅ Google Ads Global Site Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17867077048"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17867077048');
        `}
      </Script>

      <body className={inter.className}>
        <div className="relative overflow-hidden">
          <NextTopLoader
            color="#5B27F7"
            initialPosition={0.05}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #d8ae76,0 0 5px #d8ae76"
            zIndex={999}
            showAtBottom={false}
          />
          <SharedHeader />
          <main className="pt-[95px] sm:pt-[110px]">
            {children}
          </main>
          <SharedFooter />
          <GoToTop />
        </div>
      </body>
    </html>
  );
}
