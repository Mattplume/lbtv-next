import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
	const commonStyle =
		"text-nav-link flex h-full items-center text-white relative";
	const pathname = usePathname();

	return (
		<header className="fixed top-0 z-[1000] h-[70px] bg-darkColor w-full flex align-middle justify-center">
			<div className="header-inner flex justify-between w-[90%] xl:w-full xl:max-w-[1280px]">
				<nav className="flex justify-start align-middle h-[70px]">
					<div className="mr-20">
						<Link
							href="/"
							aria-label="homepage logo"
							className="flex h-full items-center"
						>
							<ImageComponent
								src="/logo.png"
								alt="Logo de La Baule TV"
								width={130}
								height={35}
							/>
						</Link>
					</div>
					<ul className="flex justify-end align-middle">
						<li className="nav-link flex h-full mr-8 relative">
							<Link
								href="/"
								aria-label="homepage"
								className={
									pathname === "/" ? `is-active ${commonStyle}` : commonStyle
								}
							>
								<span className="text-white">🏠 Accueil</span>
							</Link>
						</li>
						<li className="nav-link mr-8 relative">
							{" "}
							<Link
								href="/news"
								aria-label="news"
								className={
									pathname === "/news"
										? `is-active ${commonStyle}`
										: commonStyle
								}
							>
								<span className="text-white">📆 News</span>
							</Link>
						</li>
						<li className="nav-link mr-8 relative">
							{" "}
							<Link
								href="/shows"
								aria-label="émissions"
								className={
									pathname === "/shows"
										? `is-active ${commonStyle}`
										: commonStyle
								}
							>
								<span className="text-white">📺 Émissions</span>
							</Link>
						</li>
						<li className="nav-link relative">
							{" "}
							<Link
								href="/derbys"
								aria-label="derby-magazine"
								className={
									pathname === "/derbys"
										? `is-active ${commonStyle}`
										: commonStyle
								}
							>
								<span className="text-white">🗞️ Derby Mag</span>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="socials">
					<ul className="flex justify-start align-middle h-full">
						<li className="mr-4">
							<Link
								href="https://www.facebook.com/labauletv"
								aria-label="facebook-link"
								target="blank"
								rel="noopenner noreferrer"
							>
								<svg
									fill="#000000"
									width="20px"
									height="20px"
									viewBox="-7 -2 24 24"
									className={`${commonStyle} fill-white hover:fill-[#3b5998] duration-300 ease-out`}
								>
									<path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
								</svg>
							</Link>
						</li>
						<li className="mr-4">
							{" "}
							<Link
								href="https://www.tiktok.com/labauletv"
								aria-label="tiktok-link"
								target="blank"
								rel="noopenner noreferrer"
							>
								<svg
									width="20px"
									height="20px"
									viewBox="0 0 24 24"
									className={`${commonStyle} fill-white hover:fill-[#ff0050] duration-300 ease-out`}
								>
									<path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
								</svg>
							</Link>
						</li>
						<li className="mr-4">
							{" "}
							<Link
								href="https://www.instagram.com/labauletv/"
								aria-label="instagram-link"
								target="blank"
								rel="noopenner noreferrer"
							>
								<svg
									fill="#000000"
									width="20px"
									height="20px"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									data-name="Layer 1"
									className={`${commonStyle} fill-white hover:fill-[#C13584] duration-300 ease-out`}
								>
									<path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
								</svg>
							</Link>
						</li>
						<li>
							{" "}
							<Link
								href="https://www.facebook.com/labauletv"
								aria-label="tiktok-link"
								target="blank"
								rel="noopenner noreferrer"
							>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 76 76"
									version="1.1"
									baseProfile="full"
									className={`${commonStyle} fill-white hover:fill-[#0072b1] duration-300 ease-out`}
								>
									<path d="M 17.4167,30.0833L 26.9167,30.0833L 26.9167,58.5833L 17.4167,58.5833L 17.4167,30.0833 Z M 31.6667,30.0833L 41.1667,30.0833L 41.1667,33.5574C 44.1836,31.7521 47.7589,30.0833 50.6667,30.0833C 57,30.0833 58.5833,36.4167 58.5833,36.4167L 58.5833,58.5833L 49.0833,58.5833L 49.0833,39.5833C 47.8558,35.9009 44.7251,36.0249 41.1667,39.2176L 41.1667,58.5833L 31.6667,58.5833L 31.6667,30.0833 Z M 22.1667,17.4167C 24.79,17.4167 26.9167,19.5433 26.9167,22.1667C 26.9167,24.79 24.79,26.9167 22.1667,26.9167C 19.5433,26.9167 17.4167,24.79 17.4167,22.1667C 17.4167,19.5433 19.5433,17.4167 22.1667,17.4167 Z " />
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
