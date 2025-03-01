import { VideoNews } from "@/app/types";
import VideoCard from "./VideoCard";
import { getFacebookVideos } from "@/app/lib/facebook";

interface VideosListProps {
	playlistId: string;
	after: string;
}

export default async function VideosList({
	playlistId,
	after,
}: VideosListProps) {
	// Appel côté serveur pour récupérer les vidéos de la playlist, avec le curseur si présent
	const data = await getFacebookVideos(playlistId, after);
	const videos: VideoNews[] = data.data;
	const nextCursor: string | null = data.paging?.cursors?.after || null;

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			{nextCursor && (
				<div className="mt-4 flex justify-center">
					<a
						href={`/news?after=${nextCursor}`}
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
					>
						Voir plus
					</a>
				</div>
			)}
		</>
	);
}
