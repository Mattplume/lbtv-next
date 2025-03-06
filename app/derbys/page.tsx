import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function DerbysPage() {
	const client = createClient();
	const page = await client.getSingle("derbys");

	return (
		<div className="container mx-auto p-4 min-h-screen">
			<h1 className="text-3xl font-bold mb-6">Derbys Magazine</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<SliceZone slices={page.data.slices} components={components} />
			</div>
		</div>
	);
}
