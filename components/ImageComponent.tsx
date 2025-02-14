import Image from "next/image";
import { FC } from "react";

interface ImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	priority?: boolean;
}

const ImageComponent: FC<ImageProps> = ({
	src,
	alt,
	width,
	height,
	priority = false,
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			priority={priority}
			className="w-full h-auto"
		/>
	);
};

export default ImageComponent;
