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
		<div className="md:max-w-[400px] w-full max-w-[90%] rounded-lg shadow-md hover:shadow-xl transition">
			<Link
				href={magazineUrl}
				className="flex items-center w-full"
				target="blank"
				rel="noopenner noreferer"
			>
				<Image
					src={poster.url}
					alt={poster.alt || "Poster du magazine"}
					width="1000"
					height="700"
					className="object-cover max-w-full rounded-lg"
				/>
			</Link>
		</div>
	);
};

export default DerbyMagazineCard;
