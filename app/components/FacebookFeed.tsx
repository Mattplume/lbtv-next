import { FC } from "react";

type FeedProps = {
	src: string;
};

const Feed: FC<FeedProps> = ({ src }) => {
	return (
		<div className="feed-card bg-white p-6 rounded-xl shadow-md">
			<iframe
				src={src}
				width="350"
				height="500"
				style={{ border: "none", overflow: "hidden" }}
				frameBorder="0"
				allowFullScreen={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default Feed;
