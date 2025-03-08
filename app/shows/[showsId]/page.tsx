"use client";

import { formatVideoDuration } from "@/app/utils";
import VideoHeader from "@/app/components/VideoHeader";
import { useSearchParams } from "next/navigation";

export default function NewsPage() {
	const searchParams = useSearchParams();

	const description = searchParams.get("description") || "";
	const length = searchParams.get("length") || "0";
	const embedHtml = searchParams.get("embed_html") || "";
	const views = searchParams.get("views") || "0";
	const createdTime = searchParams.get("created_time") || "";

	const videoLength = formatVideoDuration(Number(length));
	const viewsInK = Math.round(Number(views) / 1000);

	return (
		<div className="news-id-page fixed inset-0 z-[1000] flex flex-col lg:flex-row bg-white">
			{/* Bloc vidéo : s'adapte à l'écran avec conservation du ratio */}
			<VideoHeader />
			<div className="relative w-full lg:w-[80%] flex justify-center items-center">
				<div className="relative h-full w-full max-w-[1280px]">
					<div className="w-full h-0 pb-[56.25%] relative">
						<div
							className="iframe-block absolute inset-0 w-full h-full"
							dangerouslySetInnerHTML={{ __html: embedHtml }}
						/>
					</div>
				</div>
			</div>

			{/* Bloc infos : toujours visible, s'adapte en mobile */}
			<div className="news-id-infos w-full lg:w-[20%] bg-white text-grey-600 px-4 pt-8 flex flex-col">
				<p className="text-gray-500 text-sm mb-2">{description}</p>
				<div className="text-gray-400 text-sm flex flex-col space-y-2">
					<span>📅 {new Date(createdTime).toLocaleDateString()}</span>
					<span>⏱️ {videoLength}</span>
					<span>👀 {viewsInK}k vues</span>
				</div>
			</div>
		</div>
	);
}
