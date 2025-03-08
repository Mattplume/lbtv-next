"use client";
import { useRouter } from "next/navigation";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import ImageComponent from "./ImageComponent";

export default function VideoHeader() {
	const router = useRouter();
	const { currentWidth } = useWindowSize();

	return (
		<div className="video-header bg-darkColor w-full h-[50px] flex items-center px-4 justify-between">
			<button
				onClick={() => router.back()}
				className="flex w-full lg:w-[30%] h-[50px] items-center text-white font-bold hover:opacity-80 transition duration-300"
			>
				<div className="w-[30%] lg:w-auto flex justify-start">
					<svg
						height="26px"
						width="26px"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 185.343 185.343"
						xmlSpace="preserve"
						className="p-1.5 bg-brandColor rounded-sm mr-2 -rotate-180"
					>
						<g>
							<g>
								<path
									style={{ fill: "#FFFFFF" }}
									d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
								/>
							</g>
						</g>
					</svg>
				</div>
				{currentWidth && currentWidth > 1023 ? (
					<span className="text-sm font-bold">Revenir aux news</span>
				) : (
					<span className="text-sm font-bold w-[50%]">Plus de news</span>
				)}
				<div className="w-[30%]"></div>
			</button>
			{currentWidth && currentWidth > 1023 && (
				<Link
					href="/"
					aria-label="homepage logo"
					className="flex h-full items-center"
				>
					<ImageComponent
						src="/logo.png"
						alt="Logo de La Baule TV"
						width={130}
						height={35}
					/>
				</Link>
			)}
		</div>
	);
}
