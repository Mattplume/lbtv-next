import { Suspense } from "react";
import VideosListClient from "../components/VideosLIstClient";
import { getFacebookVideos } from "@/app/lib/facebook";
import PageHeader from "@/app/components/PageHeader";

export default async function NewsPage({
	searchParams,
}: {
	searchParams?: { after?: string };
}) {
	// Récupération côté serveur de la première page de vidéos
	const data = await getFacebookVideos(
		"1508652705876539",
		searchParams?.after || ""
	);
	console.log("DATA", data);
	const initialVideos = data.data;
	const initialNextCursor = data.paging?.cursors?.after || null;
	const pageHeader = {
		title: "Émissions",
		description:
			"Retrouvez toutes les émissions de La Baule TV : Destination La Baule, Les baulois dans les monde et La minute Bauloise",
	};

	return (
		<>
			<PageHeader pageHeader={pageHeader} />
			<div className="container mx-auto p-4 min-h-screen pt-8 md:pt-10">
				<Suspense
					fallback={
						<div className="flex justify-center items-center h-full py-10">
							<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
							<p className="text-gray-600">Chargement des news...</p>
						</div>
					}
				>
					<VideosListClient
						initialVideos={initialVideos}
						playlistId="1508652705876539"
						initialNextCursor={initialNextCursor}
					/>
				</Suspense>
			</div>
		</>
	);
}
