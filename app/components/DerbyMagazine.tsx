import { FC } from "react";
import { Content } from "@prismicio/client";
import DerbyMagazineCard from "./DerbyMagazineCard";

interface DerbyMagazineProps {
	magazineSlices: Content.MagazineSlice[];
}

const DerbyMagazine: FC<DerbyMagazineProps> = ({ magazineSlices }) => {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-12 items-center">
			{magazineSlices.map((slice) => (
				<DerbyMagazineCard
					key={slice.id}
					poster={slice.primary.poster}
					magazineUrl={slice.primary.magazineurl}
				/>
			))}
		</div>
	);
};

export default DerbyMagazine;
