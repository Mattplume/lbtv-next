import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Poster {
	url: string;
	alt?: string;
}

interface DerbyMagazineCardProps {
	poster: Poster;
	magazineUrl: string;
}

const DerbyMagazineCard: FC<DerbyMagazineCardProps> = ({
	poster,
	magazineUrl,
}) => {
	return (
		<Link
			href={magazineUrl}
			className="block"
			target="blank"
			rel="noopenner noreferer"
		>
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

export default DerbyMagazineCard;
