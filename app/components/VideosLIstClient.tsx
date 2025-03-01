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
	const [videos, setVideos] = useState<VideoNews[]>(initialVideos);
	const [nextCursor, setNextCursor] = useState<string | null>(
		initialNextCursor
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
				throw new Error("Erreur lors du chargement");
			}
			const data = await res.json();
			setVideos((prev) => [...prev, ...data.data]);
			setNextCursor(data.paging?.cursors?.after || null);
		} catch (err: any) {
			setError(err.message || "Erreur inconnue");
		} finally {
			setLoadingMore(false);
		}
	};

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
			{error && <div className="text-center text-red-500 mt-4">{error}</div>}
			{nextCursor && (
				<div className="flex justify-center mt-4">
					<button
						onClick={loadMoreVideos}
						disabled={loadingMore}
						className="bg-brandColor text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition"
					>
						{loadingMore ? "Chargement..." : "Voir plus"}
					</button>
				</div>
			)}
		</>
	);
}
