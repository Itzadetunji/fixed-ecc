import { VentComplaintsCard } from "../";
import { useState } from "react";

export const VentComplaintsCardsContainer: React.FC = (props) => {
	const [VentComplaintsCardInfo, setVentComplainsCardInfo] = useState([
		{
			id: 1,
			title: "E-COMMERCE COMPLAINTS ",
			description: "No delivery, blocked after payment no returns or replacement.",
			icon: "../icons/shopping-cart.svg",
		},
		{
			id: 2,
			title: "BANKING COMPLAINTS",
			description: "Failed transfers, unclear fees, wrong amount credited.",
			icon: "../icons/bank-icon.svg",
		},
		{
			id: 3,
			title: "TRAVEL COMPLAINTS",
			description: "Flight cancelled, no refunds, over-billing.",
			icon: "../icons/airplane-icon.svg",
		},
		{
			id: 4,
			title: "INVESTMENT COMPLAINTS",
			description: "Ponzi scheme, breach of agreement, fake investments.",
			icon: "../icons/wallet-icon.svg",
		},
		{
			id: 5,
			title: "MEDICAL COMPLAINTS",
			description: "Medical Nagligence,unjustified/wrong treatment or diagnosis.",
			icon: "../icons/health-icon.svg",
		},
	]);
	return (
		<div className="flex flex-col gap-3 mt-6 lg:gap-7 max-w-[472px] px-[20px]">
			{VentComplaintsCardInfo.map((VentComplaintCard) => (
				<VentComplaintsCard
					icon={VentComplaintCard.icon}
					title={VentComplaintCard.title}
					description={VentComplaintCard.description}
					opacity={1}
					key={VentComplaintCard.id}
				/>
			))}
		</div>
	);
};
