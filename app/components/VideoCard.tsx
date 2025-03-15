import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { VideoNews } from "@/app/types";
import { formatVideoDuration } from "../utils";

interface VideoCardProps {
	video: VideoNews;
	index: number;
	createdTime: string;
}

const VideoCard: FC<VideoCardProps> = ({ video, index, createdTime }) => {
	const viewsInK = Math.round(video.views / 1000);
	const videoLength = formatVideoDuration(video.length);
	console.log("video IMG URL", video.thumbnails);
	const optimizedImageUrl =
		video.thumbnails.data[0].uri + "&width=400&height=225";

	return (
		<Link
			href={{
				pathname: `/news/${video.id}`,
				query: {
					description: video.description,
					length: video.length,
					embed_html: video.embed_html,
					views: video.views,
					created_time: createdTime,
				},
			}}
			className="flex md:block md:bg-white bg-opacity-20 md:rounded-xl overflow-hidden md:hover:scale-105 md:hover:shadow-lg transition-all duration-500 ease-out"
		>
			{/* Conteneur pour l'image en ratio 16:9 */}
			<div className="relative aspect-video rounded-md md:rounded-none h-[100%] md:h-auto max-w-[240px] md:max-w-full w-full">
				<Image
					src={optimizedImageUrl}
					alt="Aperçu vidéo"
					unoptimized={true}
					fill
					className="object-cover relative rounded-md md:rounded-none"
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
					loading={index < 4 ? "eager" : "lazy"} // Les 4 premières images se chargent en priorité
					priority={index < 4} // Priorité aux premières vidéos
				/>
				<span className="absolute z-4 text-gray-200 text-xs bottom-1 right-1 bg-slate-700 bg-opacity-70 py-0.5 px-1 rounded-sm">
					{videoLength}
				</span>
			</div>

			{/* Contenu texte */}
			<div className="pl-4 md:p-4">
				{video.description && (
					<p className="text-gray-600 font-semibold text-sm line-clamp-3">
						{video.description.slice(0, 115).concat("...")}
					</p>
				)}
				<span className="text-gray-500 md:text-gray-400 text-xs">
					{viewsInK}k vues . {createdTime}
				</span>
			</div>
		</Link>
	);
};

export default VideoCard;
