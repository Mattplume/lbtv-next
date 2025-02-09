import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 z-1000 h-[65px] bg-darkColor w-full flex justify-between align-middle">
			<nav className="flex justify-start align-middle h-[65px]">
				<div className="mr-10">
					<Link href="/" aria-label="homepage logo">
						<span>LA BAULE TV</span>
					</Link>
				</div>
				<ul className="flex justify-start align-middle">
					<li>
						<Link href="/" aria-label="homepage">
							<span>🏠 Accueil</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="news">
							<span>📆 News</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="émissions">
							<span>📺 Émissions</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="derby-magazine">
							<span>🗞️ Derby Mag</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
