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
			className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
		>
			{/* Conteneur pour l'image en ratio 16:9 */}
			<div className="relative w-full aspect-video">
				<Image
					src={video.thumbnails.data[0].uri}
					alt="Aperçu vidéo"
					fill
					className="object-cover relative"
					sizes="100vw"
					priority
				/>
				<span className="absolute z-10 text-gray-300 text-xs bottom-1 right-1 bg-slate-700 bg-opacity-60 py-0.5 px-1 rounded-sm">
					{videoLength}
				</span>
			</div>

			{/* Contenu texte */}
			<div className="p-4">
				{video.description && (
					<p className="text-gray-600 text-sm">
						{video.description.slice(0, 110).concat("...")}
					</p>
				)}
				<span className="text-gray-800 text-xs">{viewsInK}k vues</span>
			</div>
		</Link>
	);
};

export default VideoCard;
