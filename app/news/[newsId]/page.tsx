// app/news/[newsId]/page.tsx
import { SearchParamsType, PagePropsType } from "@/app/types";
import NewsPageClient from "./newsPageClient";

export default function NewsPageServer({
	searchParams,
}: {
	params: PagePropsType;
	searchParams: SearchParamsType;
}) {
	// Vérification et récupération des paramètres d'URL
	const embedHtml = searchParams.embed_html ?? "";
	const description = searchParams.description ?? "";
	const views = searchParams.views ?? "0";
	const createdTime = searchParams.created_time ?? "";

	// Calcul du ratio naturel de la vidéo
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

// Fonction pour calculer le ratio d'affichage de la vidéo
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
	return 16 / 9; // Fallback
}
