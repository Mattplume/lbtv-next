const Feed: React.FC = () => {
	return (
		<div>
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flabauletv&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true"
				width="350"
				height="500"
				style={{ border: "none", overflow: "hidden" }}
				frameBorder="0"
				allowFullScreen={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default Feed;
