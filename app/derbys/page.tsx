import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import DerbyMagazine from "../components/DerbyMagazine";

export default async function DerbysPage() {
	const client = createClient();
	const page = await client.getSingle("derbys");

	// Filtrer tous les slices de type "magazine"
	const magazineSlices =
		(page.data.slices as Content.MagazineSlice[])?.filter(
			(slice) => slice.slice_type === "magazine"
		) || [];

	return (
		<div className="container mx-auto p-4 min-h-screen">
			<h1 className="text-3xl font-bold mb-6">Derbys Magazine</h1>
			<DerbyMagazine magazineSlices={magazineSlices} />
		</div>
	);
}
