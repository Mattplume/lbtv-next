"use client";

import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { VideoNews } from "@/app/types";

interface VideosListClientProps {
	playlistId: string;
}

export default function VideosListClient({
	playlistId,
}: VideosListClientProps) {
	const LIMIT = 30;
	const [videos, setVideos] = useState<VideoNews[]>([]);
	const [nextCursor, setNextCursor] = useState<string | null>(null);
	const [lastChunkCount, setLastChunkCount] = useState<number>(0);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	// Chargement initial des vidéos
	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await fetch(`/api/videos/${playlistId}`);
				if (!res.ok) {
					setErrorMessage("Erreur lors du chargement des vidéos");
					return;
				}

				const data = await res.json();
				setVideos(data.data);
				setLastChunkCount(data.data.length);
				setNextCursor(data.paging?.cursors?.after || null);
			} catch {
				setErrorMessage("Impossible de récupérer les vidéos");
			} finally {
				setLoading(false);
			}
		};

		fetchVideos();
	}, [playlistId]);

	const loadMoreVideos = async () => {
		if (!nextCursor) return;
		setLoadingMore(true);
		setErrorMessage(null);

		try {
			const res = await fetch(`/api/videos/${playlistId}?after=${nextCursor}`);
			if (!res.ok) {
				setErrorMessage("Erreur lors du chargement des vidéos");
				return;
			}

			const data = await res.json();
			const newChunkCount = data.data.length;
			setVideos((prev) => [...prev, ...data.data]);
			setLastChunkCount(newChunkCount);
			setNextCursor(data.paging?.cursors?.after || null);
		} catch {
			setErrorMessage("Erreur lors du chargement des vidéos");
		} finally {
			setLoadingMore(false);
		}
	};

	// Affichage du loader au chargement initial
	if (loading) {
		return (
			<div className="flex flex-col justify-center items-center h-full py-10">
				<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
				<p className="text-gray-600">Chargement des vidéos...</p>
			</div>
		);
	}

	// Afficher le bouton "Voir plus" seulement si on a récupéré 30 vidéos au dernier appel
	const showLoadMore = nextCursor !== null && lastChunkCount === LIMIT;

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			{errorMessage && (
				<div className="text-center text-red-500 mt-4">{errorMessage}</div>
			)}
			{showLoadMore && (
				<div className="flex justify-center mt-12">
					<button
						onClick={loadMoreVideos}
						disabled={loadingMore}
						className="bg-brandColor text-white px-4 py-2 rounded hover:opacity-90 transition duration-300"
					>
						{loadingMore ? (
							<span className="flex items-center gap-2">
								<div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
								Chargement...
							</span>
						) : (
							"Voir plus"
						)}
					</button>
				</div>
			)}
		</>
	);
}
