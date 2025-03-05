"use client";
import { useRouter } from "next/navigation";

export default function VideoHeader() {
	const router = useRouter();

	return (
		<div className="video-header bg-darkColor w-full h-[50px] flex items-center px-4 justify-between border-b-[0.5px] border-solid border-b-gray-500">
			<button
				onClick={() => router.back()}
				className="flex w-full h-[50px] items-center text-white font-bold hover:opacity-80 transition duration-300"
			>
				<div className="w-[30%] flex justify-start">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
						<g id="Arrow / Arrow_Left_LG">
							<path
								id="Vector"
								d="M3 12L8 17M3 12L8 7M3 12H21"
								stroke="#FFFFFF"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</svg>
				</div>

				<span className="text-sm font-bold w-[50%]">Plus de news</span>
				<div className="w-[30%]"></div>
			</button>
		</div>
	);
}
