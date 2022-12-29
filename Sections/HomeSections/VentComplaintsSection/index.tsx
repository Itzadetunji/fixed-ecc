import React from "react";
import { VentComplaintsCardsContainer } from "../../../components";
import Link from "next/link";

const VentComplaintsSection: React.FC = (props) => {
	return (
		<>
			<section className="bg-gradient-to-br from-eccblue via-eccblue to-[#0953A4] pb-[61px] xl:pb-[90px] pt-6 lg:pt-[60px] xl:pt-[120px] gap-[100px]">
				<div className="container mx-auto flex flex-col lg:grid lg:grid-cols-[auto_500px] items-center lg:items-start justify-center -tracking-[0.02em]">
					<div
						data-aos="fade-up"
						className="xl:text-left mx-7"
					>
						<h1 className="text-[24px] md:text-[34px] lg:text-[56px] xl:text-[64px] poppinsFont text-white font-semibold lg:font-medium xl:max-w-[586px] xl:text-left">Vent out your Complaints, leave the rest to us...</h1>
						<div className="hidden lg:block">
							<p className="text-[16px] sm:text-[20px] xl:text-[25px] text-white max-w-[500px] mt-[15px] md:mt-[30px] xl:text-left">Get resolution with minimum efforts and reclaim your family time.</p>
							<Link href="/login">
								<button className="text-[#031830] py-[18px] sm:py-[26px] px-[30px] sm:px-[60px] text-[18px] font-semibold bg-white rounded-xl mt-[32px] mb-[32px]">Post a Complaint</button>
							</Link>
						</div>
					</div>
					<VentComplaintsCardsContainer />
					<div
						data-aos="fade-up"
						className="lg:hidden block mt-6 px-4"
					>
						<p className="text-[16px] sm:text-[19px] text-white">Get resolution with minimum efforts and reclaim your family time.</p>
						<Link href="/login">
							<button className="text-[#031830] py-4 px-3 text-[15px] font-semibold bg-white rounded-lg mt-4 mx-auto">Post a Complaint</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default VentComplaintsSection;
