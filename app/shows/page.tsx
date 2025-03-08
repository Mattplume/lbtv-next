import PageHeader from "../components/PageHeader";
import VideosListClient from "../components/VideosListClient";

export default function ShowsPage() {
	const pageHeader = {
		title: "Émissions",
		description:
			"Retrouvez toutes les émissions de La Baule TV : Destination La Baule, Les baulois dans les monde et La minute Bauloise",
	};

	return (
		<>
			<PageHeader pageHeader={pageHeader} />
			<div className="container mx-auto p-4 min-h-screen pt-8 md:pt-10">
				<VideosListClient playlistId="1508652705876539" />
			</div>
		</>
	);
}
