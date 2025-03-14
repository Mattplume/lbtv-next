"use client";

import { useState, useEffect, useRef } from "react";
import { formatVideoDuration } from "@/app/utils";
import VideoHeader from "@/app/components/VideoHeader";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function NewsPage() {
	const searchParams = useSearchParams();

	const description = searchParams.get("description") || "";
	const length = searchParams.get("length") || "0";
	const embedHtml = searchParams.get("embed_html") || "";
	const views = searchParams.get("views") || "0";
	const createdTime = searchParams.get("created_time") || "";

	const videoLength = formatVideoDuration(Number(length));
	const viewsInK = Math.round(Number(views) / 1000);

	// On utilise react-responsive pour vérifier si on est sur desktop
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	const [remainingHeight, setRemainingHeight] = useState<number | null>(null);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	useEffect(() => {
		if (!isDesktop) return;

		const calculateRemainingHeight = () => {
			const videoContainerElement = document.getElementById("video-container");
			if (videoContainerElement) {
				const videoContainerHeight = videoContainerElement.offsetHeight;
				const screenHeight = window.innerHeight;
				setRemainingHeight(screenHeight - videoContainerHeight);
			}
		};

		calculateRemainingHeight();
		window.addEventListener("resize", calculateRemainingHeight);

		return () => {
			window.removeEventListener("resize", calculateRemainingHeight);
		};
	}, [isDesktop]);

	// 🎯 Détection du mode plein écran
	useEffect(() => {
		if (!isDesktop) return;

		const handleFullscreenChange = () => {
			if (document.fullscreenElement) {
				console.log("Mode plein écran activé :", document.fullscreenElement);
			} else {
				console.log("Sortie du mode plein écran.");
			}
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
		document.addEventListener("mozfullscreenchange", handleFullscreenChange);

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullscreenChange
			);
			document.removeEventListener(
				"mozfullscreenchange",
				handleFullscreenChange
			);
		};
	}, [isDesktop]);

	// 🎯 Extraire l'URL de l'iframe (YouTube, Vimeo, etc.)
	const extractIframeSrc = (html: string): string => {
		const match = html.match(/src="([^"]+)"/);
		return match ? match[1] : "";
	};

	const iframeSrc = extractIframeSrc(embedHtml);

	return (
		<div className="news-id-page md:fixed inset-0 z-[1000] flex flex-col lg:flex-row bg-white">
			{/* Bloc vidéo */}
			<div className="w-full lg:w-[75%]">
				<VideoHeader />
				<div
					id="video-container"
					className="relative flex justify-center items-center"
				>
					<div className="relative h-full w-full">
						<div className="w-full h-0 pb-[56.25%] relative">
							{iframeSrc ? (
								<iframe
									ref={iframeRef}
									src={iframeSrc}
									title="Vidéo"
									allow="fullscreen"
									className="absolute inset-0 w-full h-full"
								/>
							) : (
								<p className="text-center text-gray-500">
									Erreur : Impossible de charger la vidéo
								</p>
							)}
						</div>
					</div>
				</div>
				{remainingHeight !== null && remainingHeight > 0 && (
					<div
						className="w-full lg:w-[100%] bg-darkColor text-white px-4 py-2"
						style={{ height: `${remainingHeight}px` }}
					></div>
				)}
			</div>

			{/* Bloc infos */}
			<div className="news-id-infos w-full lg:w-[25%] bg-white text-grey-600 px-4 pt-8 lg:pt-4 flex flex-col">
				<p className="text-gray-500 text-sm mb-2">{description}</p>
				<div className="text-gray-400 text-sm flex flex-col space-y-2">
					<span>📅 {createdTime}</span>
					<span>⏱️ {videoLength}</span>
					<span>👀 {viewsInK}k vues</span>
				</div>
			</div>
		</div>
	);
}
