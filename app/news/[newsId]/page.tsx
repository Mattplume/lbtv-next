// app/news/[newsId]/page.tsx
import NewsPageClient from "./newsPageClient";
import { SearchParamsType } from "@/app/types";

// Nous déclarons ici que params est une promesse renvoyant un objet { newsId: string }
export default async function NewsPageServer({
	params,
	searchParams,
}: {
	params: Promise<{ newsId: string }>;
	searchParams: SearchParamsType;
}) {
	// On résout params pour obtenir l'objet
	await params;

	// Extraction des données depuis searchParams
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

	// Calcul du ratio naturel à partir de embedHtml
	const naturalRatio = getNaturalRatio(embedHtml);

	return (
		<NewsPageClient
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
	return 16 / 9; // Fallback à 16:9 si non défini
}
