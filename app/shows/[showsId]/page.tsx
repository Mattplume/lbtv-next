// app/shows/[showsId]/page.tsx
import ShowPageClient from "./showPageClient";

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
	return 16 / 9; // Fallback si les attributs ne sont pas disponibles
}

export default async function ShowsPageServer({
	searchParams,
}: {
	params: { showsId: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	// Récupération des données depuis la query string
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

	// Calcul du ratio naturel basé sur l'embed HTML
	const naturalRatio = getNaturalRatio(embedHtml);

	// Transmission des props au composant client
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
