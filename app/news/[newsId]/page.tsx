// app/news/[newsId]/page.tsx
import { SearchParamsType, PagePropsType } from "@/app/types";
import NewsPageClient from "./newsPageClient";

interface NewsPageProps {
	params: PagePropsType;
	searchParams: SearchParamsType;
}

export default function NewsPageServer({ searchParams }: NewsPageProps) {
	const embedHtml = searchParams.embed_html || "";
	const description = searchParams.description || "";
	const views = searchParams.views || "0";
	const createdTime = searchParams.created_time || "";

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

// Fonction pour extraire le ratio naturel de la vidéo
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
