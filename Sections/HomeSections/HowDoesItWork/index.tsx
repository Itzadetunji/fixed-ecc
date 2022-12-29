import Image from "next/image";
import { HowItWorksCard } from "../../../components";

const HowDoesItWork: React.FC = (props) => {
	return (
		<div className="mt-7 lg:mt-[119px] mb-[62px]">
			<div className="flex flex-col space-y-[30px] items-center justify-center mx-5">
				<div className="mx-[20px]">
					<p className="font-[600] text-[24px] md:text-[48px] leading-[72px] text-center">
						How Does It <span className="text-eccblue">Work?</span>
					</p>
					<p className="text-[16px] md:text-[24px] md:mx-0 leading-[18px] md:leading-[36px] text-center">You will only need to file a complaint and we will handle the remaining processes </p>
				</div>
				<div className="lg:pt-[85px] flex flex-col space-y-[20px] md:space-y-[30px] lg:space-y-[100px] px-[20px]">
					<div className="flex flex-col items-center lg:flex-row lg:space-x-[20px] space-y-[20px] md:space-y-[30px] lg:space-y-0 howItWorksContent1">
						<HowItWorksCard
							title={"File a Complaint"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"file"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"notify"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"speak"}
							bgIcon={"#fff"}
						/>
					</div>
					<div className="flex flex-col items-center lg:flex-row lg:space-x-[20px] space-y-[20px] md:space-y-[30px] lg:space-y-0 howItWorksContent2">
						<HowItWorksCard
							title={"Send legal notice"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"legal"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"time"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"court"}
							bgIcon={"#fff"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HowDoesItWork;
