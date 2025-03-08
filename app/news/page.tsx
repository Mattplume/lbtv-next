import PageHeader from "../components/PageHeader";
import VideosListClient from "../components/VideosLIstClient";

export default function NewsPage() {
	const pageHeader = {
		title: "News",
		description:
			"Retrouvez les dernières actualités bauloises et de toute la presqu'île en vidéo",
	};

	return (
		<>
			<PageHeader pageHeader={pageHeader} />
			<div className="container mx-auto p-4 min-h-screen pt-8 md:pt-10">
				<VideosListClient playlistId="556385785339097" />
			</div>
		</>
	);
}
