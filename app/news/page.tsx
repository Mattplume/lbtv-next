// Exemple pour la page News (app/news/page.tsx)
import { getFacebookVideos } from "@/app/lib/facebook";
import VideoCard from "../components/VideoCard";
import { VideoNews } from "@/app/types";

export default async function NewsPage() {
	// Remplacez "NEWS_PLAYLIST_ID" par l'ID de votre playlist Facebook pour les news
	const data = await getFacebookVideos("556385785339097");
	console.log("DATA", data);
	const videos: VideoNews[] = data.data; // Adapté à la structure de la réponse Facebook

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">Les News</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			{/* Ici, vous pouvez gérer la pagination en récupérant data.paging.cursors.after */}
		</div>
	);
}
