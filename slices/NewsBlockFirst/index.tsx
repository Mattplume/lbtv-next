import { FC } from "react";
import { Content } from "@prismicio/client";

type HomePageNewsProps = {
	newsBlockFirstSlice: Content.NewsBlockFirstSlice;
	newsBlockSecondSlice: Content.NewsBlockSecondSlice;
};

const HomePageNews: FC<HomePageNewsProps> = ({
	newsBlockFirstSlice,
	newsBlockSecondSlice,
}) => {
	return (
		<section>
			{newsBlockFirstSlice && (
				<div>
					<h2>{newsBlockFirstSlice.primary.newsblocktitlefirst}</h2>
					{/* Affichez les autres champs de la slice news_block_first ici */}
				</div>
			)}
			{newsBlockSecondSlice && (
				<div>
					<h2>{newsBlockSecondSlice.primary.newsblocktitlesecond}</h2>
					{/* Affichez les autres champs de la slice news_block_second ici */}
				</div>
			)}
		</section>
	);
};

export default HomePageNews;
