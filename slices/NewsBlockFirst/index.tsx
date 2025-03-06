import { FC } from "react";
import { Content } from "@prismicio/client";

type HomePageNewsProps = {
	newsBlockFirstSlice: Content.NewsBlockFirstSlice;
	newsBlockSecondSlice: Content.NewsBlockSecondSlice;
};

const HomePageNews: FC<HomePageNewsProps> = () => {
	return <section></section>;
};

export default HomePageNews;
