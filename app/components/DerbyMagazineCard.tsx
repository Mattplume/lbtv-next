import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export interface DerbysMagazineCardProps {
	poster: string;
	alt: string;
	magazineUrl: string;
}

const DerbysMagazineCard: FC<DerbysMagazineCardProps> = ({
	poster,
	alt,
	magazineUrl,
}) => {
	return (
		<Link href={magazineUrl} className="block">
			<div className="relative h-0 pb-[60%] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
				<Image
					src={poster}
					alt={alt || "Poster du magazine"}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
		</Link>
	);
};

export default DerbysMagazineCard;
