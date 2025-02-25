// app/components/VideoCard.tsx

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { VideoNews } from "@/app/types";

interface VideoCardProps {
	video: VideoNews;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
	console.log("VIDEO", video);
	return (
		<Link
			href={`/news/${video.id}`}
			className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
		>
			{/* Conteneur pour conserver le ratio 16:9 */}
			<div className="relative w-full" style={{ paddingTop: "56.25%" }}>
				<Image
					src={video.picture}
					alt={video.title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-4">
				<h2 className="text-xl font-semibold">{video.title}</h2>
				{video.description && (
					<p className="text-gray-600 mt-2 text-sm">{video.description}</p>
				)}
			</div>
		</Link>
	);
};

export default VideoCard;
