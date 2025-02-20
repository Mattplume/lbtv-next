import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { createClient } from "@/prismicio";
import HomePageNews from "@/app/components/HomePageNews";
import { Content } from "@prismicio/client";
import Feed from "./components/FacebookFeed";

export default async function Page() {
	const client = createClient();
	const page = await client.getSingle("homepage");
	const lbtvSrc =
		"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flabauletv&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true";
	const lbSrc =
		"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FpageLABAULE&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true";

	const newsBlockFirstSlice = page.data.slices.find(
		(slice) => slice.slice_type === "news_block_first"
	) as Content.NewsBlockFirstSlice | undefined;

	const newsBlockSecondSlice = page.data.slices.find(
		(slice) => slice.slice_type === "news_block_second"
	) as Content.NewsBlockSecondSlice | undefined;

	return (
		<div className="w-full flex justify-between lg:max-w-[90%] md:pt-[64px] xl:max-w-[1280px] mx-auto pb-[100px]">
			<HomePageNews
				newsBlockFirstSlice={newsBlockFirstSlice!}
				newsBlockSecondSlice={newsBlockSecondSlice!}
			/>
			<div className="feed-container flex flex-col pt-4">
				<h3>La Baule sur les réseaux</h3>
				<div className="flex flex-col gap-[24px]">
					<Feed src={lbtvSrc} />
					<Feed src={lbSrc} />
				</div>
			</div>
		</div>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle("homepage");

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		openGraph: {
			title: isFilled.keyText(page.data.meta_title)
				? page.data.meta_title
				: undefined,
			description: isFilled.keyText(page.data.meta_description)
				? page.data.meta_description
				: undefined,
			images: isFilled.image(page.data.meta_image)
				? [asImageSrc(page.data.meta_image)]
				: undefined,
		},
	};
}
