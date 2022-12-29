import React from "react";
import { IconContainer } from "../";

interface GoalCardProps {
	title: string;
	description: string;
	iconPath: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({ title, description, iconPath }) => {
	return (
		<div
			data-aos="zoom-in"
			className="relative lg:h-[280px] lg:w-[30%] max-w-[373px] rounded-[16px] bg-[#ECF4FE] pt-[59px] md:pt-[79px] pb-10 md:pb-[38px] px-[20px] mt-10 md:mt-[50px] -tracking-[0.02em]"
		>
			<div className="absolute -top-[20px] md:-top-[35px]">
				<IconContainer iconPath={iconPath} />
			</div>
			<h3 className="poppinsFont font-semibold text-[20px] lg:text-[23px]">{title}</h3>
			<p className="poppinsFont mt-[20px] text-base text-grey-200">{description}</p>
		</div>
	);
};
