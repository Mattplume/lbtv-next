"use client";

import { useState } from "react";
import Link from "next/link";
import ImageComponent from "./ImageComponent";

const MobileHeader: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="fixed bg-darkColor top-0 left-0 right-0 w-100 flex flex-col justify-center px-[20px] h-[70px] z-[6]">
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
							className="flex flex-row justify-between items-center"
							href="/"
							onClick={() => setIsMenuOpen(false)}
						>
							<span className="text-white text-2xl">🏠 Accueil</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							href="/news"
							className="flex flex-row w-full justify-between items-center"
						>
							<span className="text-white text-2xl">📆 News</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							className="flex flex-row justify-between items-center"
							href="/shows"
							onClick={() => setIsMenuOpen(false)}
						>
							{" "}
							<span className="text-white text-2xl">🎥 Émissions</span>
						</Link>
					</li>
					<li className="w-full mb-3">
						<Link
							className="flex flex-row justify-between items-center"
							href="/derbys"
							onClick={() => setIsMenuOpen(false)}
						>
							{" "}
							<span className="text-white text-2xl">🗞️ Derby Mag</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MobileHeader;
