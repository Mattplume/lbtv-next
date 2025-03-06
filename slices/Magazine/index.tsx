import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { Content } from "@prismicio/client";

interface MagazineSliceProps {
	slice: Content.MagazineSlice;
}

const Magazine: FC<MagazineSliceProps> = ({ slice }) => {
	const { poster, magazine_url } = slice.primary;
	return (
		<Link href={magazine_url} className="block">
			<div className="relative h-0 pb-[60%] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
				<Image
					src={poster.url}
					alt={poster.alt || "Poster du magazine"}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
		</Link>
	);
};

export default Magazine;
