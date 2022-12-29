import React, { useEffect } from "react";
import { GoalCard } from "../../../components";

const OurGoalsSection: React.FC = (props) => {
	const goalCardInfo = [
		{
			title: "Protect our customers",
			description: "Safety & security tips, scam watch, guidelines to protect users from fraud and put an end to inustice.",
			iconPath: "/Images/shield.svg",
		},
		{
			title: "Help our customers",
			description: "Reach decision maker, send email, get attention from brand via social campaigns.",
			iconPath: "/Images/question.svg",
		},
		{
			title: "Fight for our customers",
			description: "Take legal action and approach Consumer forum with experienced lawyers.",
			iconPath: "/Images/sword.svg",
		},
	];
	return (
		<div>
			<h1
				data-aos="fade-up"
				className="text-xl -tracking-[0.02em] px-[20px] lg:leading-[52.2px] lg:text-[32px] font-semibold lg:font-medium poppinsFont max-w-[800px] text-center mx-auto mt-8 md:mt-[72px] mb-4 md:mb-[60px] xl:mb-[90px] uppercase"
			>
				We are solely bent on redefining customer-buyer relationships in Nigeria.
			</h1>
			<div className="md:mt-[50px] flex flex-col lg:flex-row justify-center items-center px-5 md:px-[30px] lg:px-0 gap-[20px] mb-6 md:mb-12 lg:mb-[114px]">
				{goalCardInfo.map((card, index) => (
					<GoalCard
						title={card.title}
						description={card.description}
						iconPath={card.iconPath}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};
export default OurGoalsSection;
