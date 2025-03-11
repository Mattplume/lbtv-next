import PageHeader from "../components/PageHeader";
import VideosListClient from "../components/VideosLIstClient";

export default function ShowsPage() {
	const pageHeader = {
		title: "Émissions",
		description:
			"Retrouvez toutes les émissions de La Baule TV : Destination La Baule, Les baulois dans les monde et La minute Bauloise",
	};

	return (
		<>
			<PageHeader pageHeader={pageHeader} />
			<div className="container mx-auto min-h-screen p-4 pt-8 md:pt-10 xl:max-w-[1280px]">
				<VideosListClient playlistId="1508652705876539" />
			</div>
		</>
	);
}
