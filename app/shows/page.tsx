import PageHeader from "../components/PageHeader";
import VideosListClient from "../components/VideosLIstClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Émissions La Baule TV - Nos programmes et reportages",
  description:
    "Découvrez nos émissions et reportages exclusifs sur La Baule : interviews, documentaires, magazines et toute l'actualité en vidéo.",
};

export default function ShowsPage() {
  const pageHeader = {
    title: "Émissions",
    description:
      "Retrouvez toutes les émissions de La Baule TV : Destination La Baule, Les baulois dans les monde, Salut les baulois, La minute Bauloise, et bien d'autres encore !",
  };

  return (
    <>
      <PageHeader pageHeader={pageHeader} />
      <div className="container mx-auto min-h-screen p-4 pt-8 md:pt-10 xl:max-w-[1280px]">
        <VideosListClient playlistId="1508652705876539" />
      </div>
    </>
  );
}
