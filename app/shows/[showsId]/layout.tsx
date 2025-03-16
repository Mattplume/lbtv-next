"use client";

import { useEffect } from "react";

export default function NewsIdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Ajouter une classe sur le body
		document.body.classList.add("video-page-id");
		return () => {
			// Supprimer la classe lorsque le composant est démonté
			document.body.classList.remove("video-page-id");
		};
	}, []);

	return <>{children}</>;
}
