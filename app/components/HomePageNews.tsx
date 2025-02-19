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
		<div className="bg-white shadow-md rounded-xl max-w-[700px] w-full max-h-max">
			<div className="p-4">
				<h5 className="text-lg mb-2">{title}</h5>
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: iframeUrl,
				}}
				className="w-full h-full"
			/>
			<div>
				<p className="text-gray-600 p-4">{description}</p>
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
		<div className="home-news-container flex flex-col items-center">
			<h1 className="text-darkColor text-left w-full">À la une</h1>
			<div className="flex flex-col gap-[24px]">
				{newsBlockFirstSlice && (
					<HomePageNewsCard
						title={newsBlockFirstSlice.primary.newsblocktitlefirst ?? ""}
						iframeUrl={newsBlockFirstSlice.primary.newsblockvideoiframe ?? ""}
						description={
							newsBlockFirstSlice.primary.newsblockdescriptionfirst ?? ""
						}
					/>
				)}
				{newsBlockSecondSlice && (
					<HomePageNewsCard
						title={newsBlockSecondSlice.primary.newsblocktitlesecond ?? ""}
						iframeUrl={newsBlockSecondSlice.primary.newsblockvideosecond ?? ""}
						description={
							newsBlockSecondSlice.primary.newsblocktitlesecond ?? ""
						}
					/>
				)}
			</div>
		</div>
	);
};

export default HomePageNews;
