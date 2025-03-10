// app/components/PageHeader.tsx
import { PageHeaderInfos } from "../types";

interface PageHeaderProps {
	pageHeader: PageHeaderInfos;
}

const PageHeader = ({ pageHeader }: PageHeaderProps) => {
	const { title, description } = pageHeader;
	return (
		<div className="page-header w-full md:shadow-cardShadow flex justify-center bg-white">
			<div className="w-full md:max-w-[90%] xl:max-w-[1280px] pt-6 pb-4 md:pb-8 px-5 md:px-0">
				<div className="header-infos md:border-b md:border-gray-200">
					<h1 className="text-brandColor mb-1">{title}</h1>
					<p className="text-gray-400 font-light mb-2">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
