// app/news/[newsId]/page.tsx
import { SearchParamsType, PagePropsType } from "@/app/types";
import ShowPageClient from "./showPageClient";

export default async function ShowPageServer<
	T extends SearchParamsType,
	U extends PagePropsType,
>({ params, searchParams }: { params: U["params"]; searchParams: T }) {
	// S'assurer que params est résolu (pour satisfaire la contrainte de type)
	await Promise.resolve(params);

	const embedHtml =
		typeof searchParams.embed_html === "string" ? searchParams.embed_html : "";
	const description =
		typeof searchParams.description === "string"
			? searchParams.description
			: "";
	const views =
		typeof searchParams.views === "string" ? searchParams.views : "0";
	const createdTime =
		typeof searchParams.created_time === "string"
			? searchParams.created_time
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
