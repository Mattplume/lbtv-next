import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import VideosListClient from "../components/VideosLIstClient";

export const metadata: Metadata = {
  title: "Actualités La Baule TV - Les dernières news de la presqu'île",
  description:
    "Suivez toute l'actualité de La Baule et de la presqu'île de Guérande : événements locaux, culture, sport, vie locale et reportages exclusifs.",
  openGraph: {
    title: "Actualités La Baule TV - Les dernières news de la presqu'île",
    description:
      "Suivez toute l'actualité de La Baule et de la presqu'île de Guérande : événements locaux, culture, sport, vie locale et reportages exclusifs.",
    url: "https://labaule.tv/news",
  },
};

export default function NewsPage() {
  const pageHeader = {
    title: "News",
    description:
      "Retrouvez les dernières actualités bauloises et de toute la presqu'île en vidéo",
  };

  return (
    <>
      <PageHeader pageHeader={pageHeader} />
      <div className="container mx-auto p-4 min-h-screen pt-8 md:pt-10 xl:max-w-[1280px]">
        <VideosListClient playlistId="556385785339097" />
      </div>
    </>
  );
}
