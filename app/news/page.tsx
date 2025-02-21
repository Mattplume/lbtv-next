import Link from "next/link";

const NewsPage: React.FC = () => {
	return (
		<>
			<div>NEWS PAGE</div>
			<div>
				<Link href="/news/45">Lien vers une page de News</Link>
			</div>
		</>
	);
};

export default NewsPage;
