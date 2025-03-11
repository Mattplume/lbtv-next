import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { VideoNews } from "@/app/types";
import { formatVideoDuration, timeAgo } from "../utils";

interface VideoCardProps {
	video: VideoNews;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
	const viewsInK = Math.round(video.views / 1000);
	const videoLength = formatVideoDuration(video.length);
	const timeAgoCreated = timeAgo(video.created_time);

	return (
		<Link
			href={{
				pathname: `/news/${video.id}`,
				query: {
					description: video.description,
					length: video.length,
					embed_html: video.embed_html,
					views: video.views,
					created_time: video.created_time,
				},
			}}
			className="flex md:block md:bg-white bg-opacity-20 md:rounded-xl overflow-hidden md:hover:shadow-cardShadow transition-shadow duration-500"
		>
			{/* Conteneur pour l'image en ratio 16:9 */}
			<div className="relative aspect-video rounded-md md:rounded-none max-w-[33%] w-[100%] min-w-[33%] md:w-full md:min-w-full">
				<Image
					src={video.thumbnails.data[0].uri}
					alt="Aperçu vidéo"
					fill
					className="object-cover relative rounded-md md:rounded-none"
					sizes="100%"
					priority
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
				<span className="text-gray-400 md:text-gray-400 text-xs">
					{viewsInK}k vues . {timeAgoCreated}
				</span>
			</div>
		</Link>
	);
};

export default VideoCard;
