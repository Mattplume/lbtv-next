import { FC } from "react";
import { Content } from "@prismicio/client";
import DerbyMagazineCard from "./DerbyMagazineCard";

interface DerbyMagazineProps {
	magazineSlices: Content.MagazineSlice[];
}

const DerbyMagazine: FC<DerbyMagazineProps> = ({ magazineSlices }) => {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-8 items-center">
			{magazineSlices.map((slice) => (
				<DerbyMagazineCard
					key={slice.id}
					poster={{
						url: slice.primary.poster.url || "",
						alt: slice.primary.poster.alt || "Poster du magazine",
					}}
					magazineUrl={slice.primary.magazineurl ?? ""}
				/>
			))}
		</div>
	);
};

export default DerbyMagazine;
