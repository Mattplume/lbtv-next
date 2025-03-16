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
		<div className="news-id-page fixed inset-0 z-[1000] flex flex-col lg:flex-row bg-white pb-8 md:pb-0">
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
			{/* Bloc infos */}
			<div className="news-id-infos w-full lg:w-[25%] bg-white text-grey-600 px-4 pt-4 lg:pt-4 flex flex-col">
				<div className="bg-background rounded-lg h-full md:mb-4 p-4">
					<div className="text-darkColor text-sm flex items-center mb-1 font-semibold">
						<span className="mr-2">{viewsInK}k vues</span>
						<span>{createdTime}</span>
					</div>
					<p className="text-gray-600 text-sm mb-2">{description}</p>
				</div>
			</div>
		</div>
	);
}
