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
			<header className="fixed bg-darkColor left-0 right-0 z-50 w-100 flex flex-col justify-center p-[20px]">
				<div className="flex flex-row justify-between items-center">
					<div className="nav-empty w-[25%]"></div>
					<Link href="/">
						<ImageComponent
							src="/logo.png"
							alt="Logo de La Baule TV"
							width={80}
							height={30}
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
				{isMenuOpen && (
					<nav
						className={`pt-[40] pl-6 w-full  transition-transform duration-300 transform h-screen origin-top overflow-hidden 
						${isMenuOpen ? "mt-0" : "mt-[-100%]"}`}
					>
						<ul className="flex flex-col items-center py-4">
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/"
									onClick={() => setIsMenuOpen(false)}
								>
									<span className="text-white text-xl">🏠 Accueil</span>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									href=""
									className="flex flex-row w-full justify-between items-center"
								>
									<span className="text-white text-xl">📆 News</span>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/work-experience"
									onClick={() => setIsMenuOpen(false)}
								>
									{" "}
									<span className="text-white text-xl">🎥 Émissions</span>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/contact"
									onClick={() => setIsMenuOpen(false)}
								>
									{" "}
									<span className="text-white text-xl">🗞️ Derby Mag</span>
								</Link>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</>
	);
};

export default MobileHeader;
