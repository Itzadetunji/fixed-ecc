import Image from "next/image";
import React from "react";
import { IconContainer } from "../";

interface HowItWorksCardProps {
	title: string;
	description: string;
	icon: string;
	bgIcon: string;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title, description, icon, bgIcon }) => {
	return (
		<>
			<div className={`w-full max-w-[270px] md:max-w-[300px] xl:w-[395px] h-full lg:h-[380px] xl:h-[416px] flex flex-col items-center justify-center text-center px-5 lg:px-8 rounded-xl lg:pt-[77px] pb-0 lg:pb-24 relative howItWorksCard`}>
				<div className="w-[82px] md:w-[105px] lg:w-[120px] h-[82px] md:h-[105px] lg:h-[120px] relative lg:absolute lg:-top-[14%] z-10 border-white rounded-full border-[5px]">
					<Image
						src={`/icons/how-it-works-icons/${icon}.svg`}
						alt="how it works icon"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="hidden lg:block w-[64px] h-[64px] pointerShadow bg-white rounded-full absolute right-[-33px] z-[10]">
					<div className="flex items-center justify-center w-full h-full">
						<div className="relative w-[31px] h-[31px]">
							<Image
								src="/icons/how-it-works-icons/pointer.svg"
								alt="play icon"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
				<div className="text-[#000000DE] lg:text-white howItWorksCardText mt-9">
					<p className="text-[20px] md:text-[24px] font-[600]">{title}</p>
					<p className="text-base md:text-[20px] mt-3 lg:mt-10 leading-5 lg:leading-[30px]">{description}</p>
				</div>
			</div>
		</>
	);
};
