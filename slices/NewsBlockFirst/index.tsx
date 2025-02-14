import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsBlockFirst`.
 */
export type NewsBlockFirstProps =
	SliceComponentProps<Content.NewsBlockFirstSlice>;

/**
 * Component for "NewsBlockFirst" Slices.
 */
const NewsBlockFirst: FC<NewsBlockFirstProps> = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<h3>{slice.primary.newsblocktitlefirst}</h3>
			<p>{slice.primary.newsblockdescriptionfirst}</p>
			{slice.primary.newsblockvideofirst}
		</section>
	);
};

export default NewsBlockFirst;
