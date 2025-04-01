import { FC } from "react";
import { Content } from "@prismicio/client";

type HomePageNewsCardProps = {
	title: string;
	description: string;
	iframeUrl: string;
	tag: string;
};

const HomePageNewsCard: FC<HomePageNewsCardProps> = ({
	title,
	description,
	iframeUrl,
	tag,
}) => {
	return (
		<div className="card bg-background lg:bg-white flex flex-col md:shadow-cardShadow lg:rounded-xl xl:max-w-[760px] md:max-w-[620px] first-of-type:mb-4 lg:first-of-type:mb-0">
			<div className="flex flex-col px-4 lg:pt-4 order-2 lg:order-1">
				<span className="text-[14px] font-semibold text-brandColor mb-1">
					{tag}
				</span>
				<h5 className="text-[22px] mb-2 font-bold uppercase text-darkColor">
					{title}
				</h5>
			</div>
			<div className="mb-4 lg:mb-0 w-full lg:max-w-[760px] order-1 lg:order-2">
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
		<div className="home-news-container w-full flex flex-col items-center lg:max-w-[60%] xl:max-w-[760px] md:max-w-[620px]">
			<h1 className="hidden lg:block text-brandColor text-left w-full mb-3">
				À la une
			</h1>
			<div className="flex flex-col gap-[24px] w-full">
				{newsBlockFirstSlice && (
					<HomePageNewsCard
						title={newsBlockFirstSlice.primary.newsblocktitlefirst ?? ""}
						tag={newsBlockFirstSlice.primary.newsblocktagfirst ?? ""}
						iframeUrl={newsBlockFirstSlice.primary.newsblockvideoiframe ?? ""}
						description={
							newsBlockFirstSlice.primary.newsblockdescriptionfirst ?? ""
						}
					/>
				)}
				{newsBlockSecondSlice && (
					<HomePageNewsCard
						title={newsBlockSecondSlice.primary.newsblocktitlesecond ?? ""}
						tag={newsBlockSecondSlice.primary.newsblocktagsecond ?? ""}
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
