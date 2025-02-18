"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";

const ResponsiveHeader = () => {
	const [currentWidth, setCurrentWidth] = useState<number>(768);

	useEffect(() => {
		const handleResize = () => {
			setCurrentWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Appel initial

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return currentWidth > 1023 ? <Header /> : <MobileHeader />;
};

export default ResponsiveHeader;
