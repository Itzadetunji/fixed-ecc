import { Scammer } from "./../../../types/complaintTypes.d";
interface ScamCardProps {
	data: Scammer;
}

const ScamCard: React.FC<ScamCardProps> = ({ data }) => {
	return (
		<div className="w-full h-[197px] bg-[#f9fafc] flex flex-col justify-center shadow-lg px-4">
			<div className="flex flex-col justify-start text-sm">
				<p className=" font-[600] text-[#1a1a1a]">{data.scammer}</p>
				<p className=" font-normal text-[#5b5959]  ">{data.bankAccountDetails.input1}</p>
			</div>
			<div className="w-full my-4 mx-auto border-solid border border-[#c1c1c1] bg-[#c1c1c1] h-0"></div>
			<div className="flex flex-row justify-between text-[14px]">
				<div>
					<p className="font-normal text-sm text-[#5b5959]">Social media handle</p>
					<p className="font-normal text-sm text-[#5b5959]">Phone number</p>
					<p className="font-normal text-sm text-[#5b5959]">Website</p>
				</div>
				<div>
					<p className="font-sans font-normal text-sm text-black">{data.socialMediaHandle.input1}</p>
					<p className="font-sans font-normal text-sm text-black">{data.phoneNumber.input1}</p>
					<p className="font-sans font-normal text-sm text-black">{data.website.input1}</p>
				</div>
			</div>
		</div>
	);
};

export default ScamCard;
