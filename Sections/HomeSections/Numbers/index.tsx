import React from "react";

const index: React.FC = () => {
	return (
		<div className="bg-[#010C18] pb-10 sm:pb-[60px] md:pb-20 lg:h-[687px] w-full -tracking-[0.02em]">
			<p
				data-aos="fade-up"
				className="text-[26px] px-5 sm:text-[35px] md:text-[40px] text-white text-center font-bold pt-6 md:pt-12 lg:pt-[88px] lg:uppercase"
			>
				Our Numbers speak Highly of us
			</p>
			<div className="md:space-x-10 lg:space-x-[120px] xl:space-x-[182px] flex md:flex-row flex-col gap-8 mx-auto items-center justify-center mt-[21px] md:mt-[100px] lg:mt-[122px]">
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-black text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">75K+</p>
					<p className="text-[#FFFFFFA6] text-center font-normal text-[15px] lg:text-[20px]">
						Complaints filled <br />
						by customers
					</p>
				</div>
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-black text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">56K+</p>
					<p className="text-[#FFFFFFA6] text-center font-normal text-[15px] lg:text-[20px]">
						Complains resolved <br /> by companies
					</p>
				</div>
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-black text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">200K+</p>
					<p className="text-[#FFFFFFA6] text-center font-normal text-[15px] lg:text-[20px]">
						Ever Ready Law <br /> Practitioners
					</p>
				</div>
			</div>
		</div>
	);
};

export default index;
