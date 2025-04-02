// app/news/[newsId]/page.tsx
import ShowPageClient from "./showPageClient";
import { PagePropsType, SearchParamsType } from "@/app/types";

type PageProps = {
	params: Promise<PagePropsType>;
	searchParams: Promise<SearchParamsType>;
};

export default async function NewsPageServer({
	params,
	searchParams,
}: PageProps) {
	// Résoudre params et searchParams pour obtenir des objets
	await Promise.resolve(params);
	const resolvedSearchParams = await Promise.resolve(searchParams);

	const embedHtml =
		typeof resolvedSearchParams.embed_html === "string"
			? resolvedSearchParams.embed_html
			: "";
	const description =
		typeof resolvedSearchParams.description === "string"
			? resolvedSearchParams.description
			: "";
	const views =
		typeof resolvedSearchParams.views === "string"
			? resolvedSearchParams.views
			: "0";
	const createdTime =
		typeof resolvedSearchParams.created_time === "string"
			? resolvedSearchParams.created_time
			: "";

	const naturalRatio = getNaturalRatio(embedHtml);

	return (
		<ShowPageClient
			embedHtml={embedHtml}
			naturalRatio={naturalRatio}
			description={description}
			views={views}
			createdTime={createdTime}
		/>
	);
}

function getNaturalRatio(embedHtml: string): number {
	const widthMatch = embedHtml.match(/width=["'](\d+)["']/);
	const heightMatch = embedHtml.match(/height=["'](\d+)["']/);
	if (widthMatch && heightMatch) {
		const width = parseInt(widthMatch[1], 10);
		const height = parseInt(heightMatch[1], 10);
		if (width > 0 && height > 0) {
			return width / height;
		}
	}
	return 16 / 9; // Fallback à 16:9
}
