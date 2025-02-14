import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 z-[1000] h-[65px] bg-darkColor w-full flex align-middle">
			<nav className="flex justify-start align-middle h-[65px]">
				<div className="mr-10">
					<Link href="/" aria-label="homepage logo">
						<ImageComponent
							src="/logo.png"
							alt="Logo de La Baule TV"
							width={100}
							height={30}
						/>
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
			<div className="socials">
				<ul className="flex justify-start align-middle">
					<li>
						<Link
							href="https://www.facebook.com/labauletv"
							aria-label="facebook-link"
							target="blank"
							rel="noopenner noreferrer"
						>
							<span>Facebook</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="news">
							<span>TikTok</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="émissions">
							<span>Instagram</span>
						</Link>
					</li>
					<li>
						{" "}
						<Link href="#" aria-label="derby-magazine">
							<span>LinkedIn</span>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
