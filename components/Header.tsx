import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Header: React.FC = () => {
	const navLinkClasses =
		"flex h-full items-center text-navLink hover:text-navLinkHover transition-colors duration-300";

	return (
		<header className="fixed top-0 z-[1000] h-[65px] bg-darkColor w-full flex align-middle">
			<div className="header-inner flex justify-between max-w-[1280px] mx-auto w-full md:max-w-[90%]">
				<nav className="flex justify-start align-middle h-[65px]">
					<div className="mr-10">
						<Link
							href="/"
							aria-label="homepage logo"
							className="flex h-full items-center"
						>
							<ImageComponent
								src="/logo.png"
								alt="Logo de La Baule TV"
								width={100}
								height={30}
							/>
						</Link>
					</div>
					<ul className="flex justify-start align-middle">
						<li className="flex h-full mr-6">
							<Link href="/" aria-label="homepage" className={navLinkClasses}>
								<span>🏠 Accueil</span>
							</Link>
						</li>
						<li className="mr-6">
							{" "}
							<Link
								href="#"
								aria-label="news"
								className="flex h-full items-center"
							>
								<span className={navLinkClasses}>📆 News</span>
							</Link>
						</li>
						<li className="mr-6">
							{" "}
							<Link
								href="#"
								aria-label="émissions"
								className="flex h-full items-center"
							>
								<span className={navLinkClasses}>📺 Émissions</span>
							</Link>
						</li>
						<li>
							{" "}
							<Link
								href="#"
								aria-label="derby-magazine"
								className="flex h-full items-center"
							>
								<span className={navLinkClasses}>🗞️ Derby Mag</span>
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
			</div>
		</header>
	);
};

export default Header;
