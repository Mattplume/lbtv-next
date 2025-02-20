const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="pt-[70px] flex flex-col justify-center">{children}</div>
	);
};

export default MainContainer;
