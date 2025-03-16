"use client";

import { useEffect } from "react";

export default function NewsIdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Ajouter une classe sur le body
		document.body.classList.add("news-id");
		return () => {
			// Supprimer la classe lorsque le composant est démonté
			document.body.classList.remove("news-id");
		};
	}, []);

	return <>{children}</>;
}
