import { FC } from "react";

type FeedProps = {
	src: string;
};

const Feed: FC<FeedProps> = ({ src }) => {
	console.log("Chargement du feed Facebook avec l'URL :", src);
	return (
		<div className="feed-card bg-white p-6 rounded-xl md:shadow-cardShadow max-h-fit">
			<iframe
				src={src}
				width="350"
				height="480"
				style={{ border: "none", overflow: "hidden", maxHeight: "500px" }}
				allowFullScreen={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default Feed;
