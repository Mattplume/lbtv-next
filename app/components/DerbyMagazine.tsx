import { FC } from "react";
import { Content } from "@prismicio/client";
import DerbyMagazineCard from "./DerbyMagazineCard";

interface DerbyMagazineProps {
	magazineSlices: Content.MagazineSlice[];
}

const DerbyMagazine: FC<DerbyMagazineProps> = ({ magazineSlices }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{magazineSlices.map((slice) => (
				<DerbyMagazineCard
					key={slice.id} // Utilisation de slice.id pour garantir l'unicité
					poster={slice.primary.poster} // Poster est un objet { url, alt? }
					magazineUrl={slice.primary.magazineurl} // Assure-toi que le champ s'appelle bien magazine_url dans Prismic
				/>
			))}
		</div>
	);
};

export default DerbyMagazine;
