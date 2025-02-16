import { FC } from "react";
import { Content } from "@prismicio/client";

type HomePageNewsCardProps = {
	title: string;
	description: string;
	iframeUrl: string;
};

const HomePageNewsCard: FC<HomePageNewsCardProps> = ({
	title,
	description,
	iframeUrl,
}) => {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden">
			<div className="p-4">
				<h3 className="text-lg font-bold mb-2">{title}</h3>
				<div
					dangerouslySetInnerHTML={{
						__html: iframeUrl,
					}}
				/>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
};

type HomePageNewsProps = {
	newsBlockFirstSlice: Content.NewsBlockFirstSlice;
	newsBlockSecondSlice: Content.NewsBlockSecondSlice;
};

const HomePageNews: FC<HomePageNewsProps> = ({
	newsBlockFirstSlice,
	newsBlockSecondSlice,
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{newsBlockFirstSlice && (
				<HomePageNewsCard
					title={newsBlockFirstSlice.primary.newsblocktitlefirst}
					iframeUrl={newsBlockFirstSlice.primary.newsblockvideoiframe}
					description={newsBlockFirstSlice.primary.newsblockdescriptionfirst}
				/>
			)}
			{newsBlockSecondSlice && (
				<HomePageNewsCard
					title={newsBlockSecondSlice.primary.newsblocktitlesecond}
					iframeUrl={newsBlockSecondSlice.primary.newsblockvideosecond}
					description={newsBlockSecondSlice.primary.newsblocktitlesecond}
				/>
			)}
		</div>
	);
};

export default HomePageNews;
