// app/derbys/page.tsx
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import DerbyMagazine from "../components/DerbyMagazine";
import PageHeader from "../components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derby Magazine - Les derniers Derby Magazine à consulter en ligne",
  description:
    "Retrouvez les derniers Derby Magazine à consulter en ligne sur La Baule TV",
};

export default async function DerbysPage() {
  const client = createClient();
  const page = await client.getSingle("derbys");

  const pageHeader = {
    title: "Derby Magazine",
    description: "Retrouvez les derniers Derby Magazine à consulter en ligne",
  };

  // Filtrer tous les slices de type "magazine"
  const magazineSlices =
    (page.data.slices as Content.MagazineSlice[])?.filter(
      (slice) => slice.slice_type === "magazine"
    ) || [];

  return (
    <>
      <PageHeader pageHeader={pageHeader} />
      <div className="container min-h-screen mx-auto p-4 pt-8 md:pt-10">
        <DerbyMagazine magazineSlices={magazineSlices} />
      </div>
    </>
  );
}
