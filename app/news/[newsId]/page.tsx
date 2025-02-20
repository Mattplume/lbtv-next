export default function NewsDetailPage({
	params,
}: {
	params: { newsId: string };
}) {
	// Utilise params.newsId pour récupérer les données de la news
	return (
		<div className="p-4">
			<h1>Détail de la news {params.newsId}</h1>
			{/* Affiche ici le contenu de la news */}
		</div>
	);
}
