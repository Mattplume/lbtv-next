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
		<div className="card bg-background lg:bg-white flex flex-col lg:shadow-md lg:rounded-xl lg:max-w-[700px] w-full max-h-max first-of-type:mb-4 lg:first-of-type:mb-0">
			<div className="px-4 lg:p-4 order-2 lg:order-1">
				<h5 className="text-lg mb-2">{title}</h5>
			</div>
			<div className="mb-4 lg:mb-0 w-full lg:max-w-[700px] order-1 lg:order-2">
				<div
					dangerouslySetInnerHTML={{
						__html: iframeUrl,
					}}
					className="iframe-block relative pt-[56.25%]"
				/>
			</div>
			<div className="text-gray-600 px-4 lg:p-4 order-3">
				<p>{description}</p>
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
		<div className="home-news-container w-full flex flex-col items-center lg:max-w-[50%] xl:max-w-[700px]">
			<h1 className="hidden lg:block text-darkColor text-left w-full">
				À la une
			</h1>
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
							newsBlockSecondSlice.primary.newsblockdescriptionsecond ?? ""
						}
					/>
				)}
			</div>
		</div>
	);
};

export default HomePageNews;
