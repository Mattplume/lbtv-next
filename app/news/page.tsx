import { Suspense } from "react";
import { getFacebookVideos } from "@/app/lib/facebook";
import VideoCard from "../components/VideoCard";
import { VideoNews } from "@/app/types";

async function VideosList() {
	try {
		const data = await getFacebookVideos("556385785339097");
		const videos: VideoNews[] = data.data;
		console.log("DATA", data);

		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
		);
	} catch (error) {
		console.error("Erreur lors de la récupération des vidéos :", error);
		return (
			<div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
				❌ Impossible de récupérer les vidéos. Veuillez réessayer plus tard.
			</div>
		);
	}
}

export default function NewsPage() {
	return (
		<div className="container mx-auto p-4 min-h-screen">
			<h1 className="text-3xl font-bold mb-6">Les News</h1>

			<Suspense
				fallback={
					<div className="text-center py-10 w-full h-full flex flex-col items-center justify-center">
						<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-6"></div>
						<p className="mt-2 text-gray-600">Chargement des vidéos...</p>
					</div>
				}
			>
				<VideosList />
			</Suspense>
		</div>
	);
}
