import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { VideoNews } from "@/app/types";
import { formatVideoDuration } from "../utils";

interface VideoCardProps {
	video: VideoNews;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
	const viewsInK = Math.round(video.views / 1000);
	const videoLength = formatVideoDuration(video.length);
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
			className="flex md:block md:bg-white md:rounded-lg md:shadow-md overflow-hidden md:hover:shadow-xl transition-shadow"
		>
			{/* Conteneur pour l'image en ratio 16:9 */}
			<div className="relative w-full aspect-video rounded-md md:rounded-none">
				<Image
					src={video.thumbnails.data[0].uri}
					alt="Aperçu vidéo"
					fill
					className="object-cover relative rounded-md md:rounded-none"
					sizes="100vw"
					priority
				/>
				<span className="absolute z-4 text-gray-300 text-xs bottom-1 right-1 bg-slate-700 bg-opacity-60 py-0.5 px-1 rounded-sm">
					{videoLength}
				</span>
			</div>

			{/* Contenu texte */}
			<div className="pl-4 md:p-4">
				{video.description && (
					<p className="text-gray-600 font-bold md:font-normal text-sm">
						{video.description.slice(0, 110).concat("...")}
					</p>
				)}
				<span className="text-gray-400 md:text-gray-800 text-xs">
					{viewsInK}k vues
				</span>
			</div>
		</Link>
	);
};

export default VideoCard;
