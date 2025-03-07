// app/derbys/page.tsx
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import DerbyMagazine from "../components/DerbyMagazine";
import PageHeader from "../components/PageHeader";

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
			<div className="container mx-auto p-4 min-h-screen pt-8 md:pt-10">
				<DerbyMagazine magazineSlices={magazineSlices} />
			</div>
		</>
	);
}
