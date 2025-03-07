"use client";

import { useState } from "react";
import VideoCard from "./VideoCard";
import { VideoNews } from "@/app/types";

interface VideosListClientProps {
	initialVideos: VideoNews[];
	playlistId: string;
	initialNextCursor: string | null;
}

export default function VideosListClient({
	initialVideos,
	playlistId,
	initialNextCursor,
}: VideosListClientProps) {
	// On suppose que l'API retourne 30 vidéos par appel.
	console.log("INITIAL VIDEOS", initialVideos);
	const LIMIT = 30;
	const [videos, setVideos] = useState<VideoNews[]>(initialVideos);
	const [nextCursor, setNextCursor] = useState<string | null>(
		initialNextCursor
	);
	const [lastChunkCount, setLastChunkCount] = useState<number>(
		initialVideos.length
	);
	const [loadingMore, setLoadingMore] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const loadMoreVideos = async () => {
		if (!nextCursor) return;
		setLoadingMore(true);
		setError(null);
		try {
			const res = await fetch(`/api/videos/${playlistId}?after=${nextCursor}`);
			if (!res.ok) {
				throw new Error("Erreur lors du chargement des vidéos");
			}
			const data = await res.json();
			const newChunkCount = data.data.length;
			// Ajoute les nouvelles vidéos à l'existant.
			setVideos((prev) => [...prev, ...data.data]);
			// Met à jour le nombre d'éléments récupérés dans ce lot.
			setLastChunkCount(newChunkCount);
			// Si le lot contient moins de LIMIT vidéos, il n'y a plus de vidéos à charger.
			if (newChunkCount < LIMIT) {
				setNextCursor(null);
			} else {
				setNextCursor(data.paging?.cursors?.after || null);
			}
		} catch (err) {
			let errMsg = "Erreur inconnue";
			if (err instanceof Error) {
				errMsg = err.message;
			} else {
				errMsg = String(err);
			}
			setError(errMsg);
		} finally {
			setLoadingMore(false);
		}
	};

	// Le bouton "Voir plus" ne s'affiche que si nextCursor existe et que le dernier lot contenait exactement LIMIT vidéos.
	const showLoadMore = nextCursor !== null && lastChunkCount === LIMIT;

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			{error && <div className="text-center text-red-500 mt-4">{error}</div>}
			{showLoadMore && (
				<div className="flex justify-center mt-12">
					<button
						onClick={loadMoreVideos}
						disabled={loadingMore}
						className="bg-brandColor text-white px-4 py-2 rounded hover:opacity-90 transition duration-300"
					>
						{loadingMore ? "Chargement..." : "Voir plus"}
					</button>
				</div>
			)}
		</>
	);
}
