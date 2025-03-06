import { FC } from "react";
import { Content } from "@prismicio/client";
import DerbysMagazineCard from "./DerbyMagazineCard";

interface DerbyMagazineProps {
	magazineSlices: Content.MagazineSlice[];
}

const DerbyMagazine: FC<DerbyMagazineProps> = ({ magazineSlices }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{magazineSlices.map((slice) => {
				// On suppose que slice.id existe
				return (
					<DerbysMagazineCard
						key={slice.id}
						poster={slice.primary.poster.url}
						alt={slice.primary.poster.alt || ""}
						magazineUrl={slice.primary.magazine_url}
					/>
				);
			})}
		</div>
	);
};

export default DerbyMagazine;
