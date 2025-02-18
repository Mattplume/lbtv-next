import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { createClient } from "@/prismicio";
import HomePageNews from "@/app/components/HomePageNews";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Content } from "@prismicio/client";
import Feed from "./components/FacebookFeed";

export default async function Page() {
	const client = createClient();
	const page = await client.getSingle("homepage");

	const newsBlockFirstSlice = page.data.slices.find(
		(slice) => slice.slice_type === "news_block_first"
	) as Content.NewsBlockFirstSlice | undefined;

	const newsBlockSecondSlice = page.data.slices.find(
		(slice) => slice.slice_type === "news_block_second"
	) as Content.NewsBlockSecondSlice | undefined;

	return (
		<>
			<SliceZone
				slices={page.data.slices.filter(
					(slice) =>
						slice.slice_type !== "news_block_first" &&
						slice.slice_type !== "news_block_second"
				)}
				components={components}
			/>
			<HomePageNews
				newsBlockFirstSlice={newsBlockFirstSlice!}
				newsBlockSecondSlice={newsBlockSecondSlice!}
			/>
			<Feed />
		</>
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
