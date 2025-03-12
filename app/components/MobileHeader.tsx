"use client";

import { useState } from "react";
import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { usePathname } from "next/navigation";

const MobileHeader: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="fixed bg-darkColor top-0 left-0 right-0 w-100 flex flex-col justify-center px-[20px] h-[70px] z-[1000]">
				<div className="flex flex-row justify-between items-center h-full">
					<div className="nav-empty w-[25%]"></div>
					<Link href="/" className="h-full flex items-center">
						<ImageComponent
							src="/logo.png"
							alt="Logo de La Baule TV"
							width={150}
							height={38}
						/>
					</Link>

					<div
						id="menutoggle"
						className="flex flex-col justify-center items-end gap-2 w-[25%]"
						onClick={toggleMenu}
					>
						<div
							className={`bg-white h-0.5 w-5 transition-transform duration-300 ${
								isMenuOpen ? "rotate-45 translate-y-1" : ""
							}`}
						></div>
						<div
							className={`bg-white h-0.5 w-5 transition-transform duration-300 ${
								isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						></div>
					</div>
				</div>
			</header>
			<nav
				className={`fixed pt-[120px] pl-12 w-full bg-darkColor z-[5] transition-[margin-top] duration-500 transform h-screen
						${isMenuOpen ? "mt-0 " : "mt-[-200%]"}`}
			>
				<ul className="flex flex-col items-center py-4">
					<li className="w-full mb-3">
						<Link
							className={`flex flex-row justify-between items-center ${pathname === "/" ? "is-active" : ""}`}
							href="/"
							onClick={() => setIsMenuOpen(false)}
						>
							<span className="text-nav-link-mobile relative text-white text-[1.5rem] my-[3.5px]">
								🏠 Accueil
							</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							href="/news"
							onClick={() => setIsMenuOpen(false)}
							className={`flex flex-row justify-between items-center ${pathname === "/news" ? "is-active" : ""}`}
						>
							<span className="text-nav-link-mobile relative text-white text-[1.5rem] my-[3.5px]">
								📆 News
							</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							className={`flex flex-row justify-between items-center ${pathname === "/shows" ? "is-active" : ""}`}
							href="/shows"
							onClick={() => setIsMenuOpen(false)}
						>
							{" "}
							<span className="text-nav-link-mobile relative text-white text-[1.5rem] my-[3.5px]">
								📺 Émissions
							</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							className={`flex flex-row justify-between items-center ${pathname === "/derby" ? "is-active" : ""}`}
							href="/derbys"
							onClick={() => setIsMenuOpen(false)}
						>
							{" "}
							<span className="text-nav-link-mobile relative text-white text-[1.5rem] my-[3.5px]">
								🗞️ Derby Mag
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MobileHeader;
