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
  metadataBase: new URL("https://www.promodaddy.in"),

  title: {
    default: "Digital Marketing Agency in India | Promodaddy Digital",
    template: "%s | Promodaddy Digital",
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
      <head>

    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Promodaddy Digital" />
    <meta name="geo.position" content="25.1383032,75.8316644" />
    <meta name="ICBM" content="25.1383032,75.8316644" />
    
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Promodaddy Digital",
              url: "https://www.promodaddy.in/",
              logo: "https://www.promodaddy.in/logo.png",
              description:
                "Promodaddy Digital is a results-driven digital marketing agency in India offering SEO, social media marketing, PPC, and performance marketing services.",
              telephone: "+91-8690522210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot No. 26, Mahaveer Nagar Vistar Yojana",
                addressLocality: "Kota",
                addressRegion: "Rajasthan",
                postalCode: "324005",
                addressCountry: "IN",
              },
              areaServed: "India",
              sameAs: [
                "https://www.instagram.com/promodaddy_/",
                "https://www.facebook.com/promodaddydigital",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.promodaddy.in/#localbusiness",
              name: "Promodaddy Digital",
              image: "https://www.promodaddy.in/logo.png",
              url: "https://www.promodaddy.in/",
              telephone: "+91-8690522210",
              priceRange: "₹₹",
              description:
                "Promodaddy Digital is a leading digital marketing agency in India offering SEO, social media marketing, PPC, and performance marketing services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot No. 26, Mahaveer Nagar Vistar Yojana",
                addressLocality: "Kota",
                addressRegion: "Rajasthan",
                postalCode: "324005",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.1383032,
                longitude: 75.8316644,
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [
                "https://www.instagram.com/promodaddy_/",
                "https://www.facebook.com/promodaddydigital",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* Google Ads Global Site Tag */}
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
          <main className="pt-[95px] sm:pt-[110px]">{children}</main>
          <SharedFooter />
          <GoToTop />
        </div>
      </body>
    </html>
  );
}