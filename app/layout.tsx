import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import MainContainer from "@/app/components/MainContainer";
import ResponsiveHeader from "./components/ResponsiveHeader";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const description =
  "La première web TV de La Baule et de la presqu'ile de Guérande | Reportages, news, émissions, actualités et bons plans toute l'année";

export const metadata: Metadata = {
  metadataBase: new URL("https://labaule.tv"),
  title: "La Baule TV",
  description,
  openGraph: {
    title: "La Baule TV",
    description,
    url: "https://labaule.tv",
    siteName: "La Baule TV",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Baule TV",
    description,
  },
  alternates: {
    canonical: "https://labaule.tv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "La Baule TV",
              url: "https://labaule.tv",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://labaule.tv/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={DMSans.className}>
        <ResponsiveHeader />
        <MainContainer>{children}</MainContainer>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
