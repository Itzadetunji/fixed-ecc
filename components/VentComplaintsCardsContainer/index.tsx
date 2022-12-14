import { VentComplaintsCard } from "../";
import { useState } from "react";

export const VentComplaintsCardsContainer: React.FC = (props) => {
	const [VentComplaintsCardInfo, setVentComplainsCardInfo] = useState([
		{
			id: 1,
			title: "E-COMMERCE COMPLAINTS ",
			description: "No delivery, blocked after payment no returns or replacement.",
		},
		{
			id: 2,
			title: "BANKING COMPLAINTS",
			description: "Failed transfers, unclear fees, wrong amount credited.",
		},
		{
			id: 3,
			title: "TRAVEL COMPLAINTS",
			description: "Flight cancelled, no refunds, over-billing.",
		},
		{
			id: 4,
			title: "INVESTMENT COMPLAINTS",
			description: "Ponzi scheme, breach of agreement, fake investments.",
		},
		{
			id: 5,
			title: "MEDICAL COMPLAINTS",
			description: "Medical Nagligence,unjustified/wrong treatment or diagnosis.",
		},
	]);
	return (
		<div className="flex flex-col gap-7 max-w-[472px] px-[20px]">
			{VentComplaintsCardInfo.map((VentComplaintCard) => (
				<VentComplaintsCard
					title={VentComplaintCard.title}
					description={VentComplaintCard.description}
					opacity={(100 - VentComplaintsCardInfo.indexOf(VentComplaintCard) * 19) / 100}
					key={VentComplaintCard.id}
				/>
			))}
		</div>
	);
};
