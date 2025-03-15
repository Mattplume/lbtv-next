"use client";

import { useEffect, useState } from "react";

type VideoComponentProps = {
	iframeUrl: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ iframeUrl }) => {
	const [videoUrl, setVideoUrl] = useState<string | null>(null);

	useEffect(() => {
		try {
			// Extraire l'URL de la vidéo depuis l'iframe
			const urlParams = new URLSearchParams(new URL(iframeUrl).search);
			const facebookVideoUrl = urlParams.get("href");

			if (facebookVideoUrl) {
				setVideoUrl(decodeURIComponent(facebookVideoUrl));
			}
		} catch (error) {
			console.error("Erreur lors de l'extraction de la vidéo :", error);
		}
	}, [iframeUrl]);

	return (
		<div className="iframe-container w-full h-full flex justify-center items-center">
			{videoUrl ? (
				<a
					href={videoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
				>
					📺 Voir la vidéo sur Facebook
				</a>
			) : (
				<p className="text-red-500">Impossible d'afficher la vidéo.</p>
			)}
		</div>
	);
};

export default VideoComponent;
