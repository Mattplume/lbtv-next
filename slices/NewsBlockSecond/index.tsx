import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsBlockSecond`.
 */
export type NewsBlockSecondProps =
	SliceComponentProps<Content.NewsBlockSecondSlice>;

/**
 * Component for "NewsBlockSecond" Slices.
 */
const NewsBlockSecond: FC<NewsBlockSecondProps> = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		></section>
	);
};

export default NewsBlockSecond;
