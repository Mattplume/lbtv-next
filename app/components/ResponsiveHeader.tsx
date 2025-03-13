"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";

const ResponsiveHeader = () => {
	const [currentWidth, setCurrentWidth] = useState<number>(768);
	const pathname = usePathname();

	// 🛠️ useEffect DOIT être appelé, même si on cache le header après
	useEffect(() => {
		const handleResize = () => {
			setCurrentWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Appel initial

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// 🚀 Cacher les headers sur /news/[newsId]
	if (pathname.startsWith("/news/")) {
		return null;
	}

	return currentWidth > 1023 ? <Header /> : <MobileHeader />;
};

export default ResponsiveHeader;
