import { FooterList } from "../";
import Image from "next/image";

export const Footer: React.FC = (props) => {
	return (
		<footer
			data-aos="fade-up"
			className="flex flex-col pt-[60px] lg:pl-4 bg-clearblue gap-[36px] lg:gap-[70px] mt-[72px] mx-auto max-w-screen w-screen lg:w-[100%]"
		>
			<div className="flex flex-row justify-between ">
				<div className="flex-col w-[40%]  gap-[50px] hidden lg:flex">
					<img
						src="/Images/eccLogo-2.svg"
						className="w-[65px]"
						alt="ECC's Logo"
					/>
					<p className=" text-[16px] text-grey-200 leading-[37px] w-[528px]">ecommerce complaint is a consumer complaint platform for resolving disputes between consumers and brands. We are on a mission to make shopping experience better for consumers by empowering them with the tools and resources to avoid common scams and make online purchases as smooth as possible.</p>
					<div className="flex flex-row w-[156px] justify-between">
						<a href="https://www.instagram.com/ecommercecomplaint">
							<Image
								src="/../icons/instagram-icon.svg"
								alt="instagram link"
								width={100}
								height={100}
							/>
						</a>
						<a href="">
							<Image
								src="/../icons/facebook-icon.svg"
								alt="facebook icon"
								width={100}
								height={100}
							/>
						</a>
						<a href="">
							<Image
								src="/../icons/twitter-icon.svg"
								alt="twitter-icon"
								width={100}
								height={100}
							/>
						</a>
					</div>
				</div>
				<div className=" lg:w-[40%] w-full flex flex-col gap-[50px] lg:mx-0 mx-auto lg:gap-[30px]">
					<div className="flex flex-row w-[100%]   justify-around">
						<FooterList
							title="NAVIGATE THROUGH"
							items={[
								{ label: "Home", href: "/" },
								{ label: "Complaints", href: "/complaints" },
								{ label: "Latest Scams", href: "/latest" },
								{ label: "Statistics", href: "/statistics" },
								{ label: "Complaint letter", href: "/write-complaint" },
							]}
						/>

						<FooterList
							title="SUPPORT"
							items={[
								{ label: "Contact Us", href: "/" },
								{ label: "FAQs", href: "/faq" },
							]}
						/>
						<FooterList
							title="COMPANY"
							items={[
								{ label: "Terms of Service", href: "/t-and-c" },
								{ label: "Privacy Policy", href: "/t-and-c" },
							]}
						/>
					</div>
					<FooterList
						title=""
						items={[
							{ label: "Post a Complaint", href: "/write-complaint" },
							{ label: "Login/Signup", href: "/login" },
						]}
						areButtons={true}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-[15px] lg:gap-[23px] items-center justify-center w-[100%]">
				<p className="text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] ">
					Avoid getting scammed, Use <span className="text-eccgreen">Konfampay</span>
				</p>
				<button className="text-[10px] lg:text-[14px] px-[30px] py-[10px] lg:px-[30px] lg:py-[14px] text-center text-white mb-[24px] rounded-[8px] bg-eccgreen font-medium box-border w-[170px] block">Learn more</button>
			</div>
			<div className="flex-col gap-[30px] lg:hidden flex">
				<img
					src="/Images/eccLogo-2.svg"
					className="w-[35px] ml-4"
					alt="ECC's Logo"
				/>
				<p className=" text-[12px] text-grey-200 pl-4 leading-[19.4px] w-[100%]">ecommerce complaint is a consumer complaint platform for resolving disputes between consumers and brands. We are on a mission to make shopping experience better for consumers by empowering them with the tools and resources to avoid common scams and make online purchases as smooth as possible.</p>
				<div className="flex flex-row w-[110px] pl-4  justify-between">
					<a href="https://www.instagram.com/ecommercecomplaint">
						<Image
							src="/../icons/instagram-icon.svg"
							alt="instagram link"
							width={30}
							height={30}
						/>
					</a>
					<a href="">
						<Image
							src="/../icons/facebook-icon.svg"
							alt="facebook icon"
							width={30}
							height={30}
						/>
					</a>
					<a href="">
						<Image
							src="/../icons/twitter-icon.svg"
							alt="twitter-icon"
							width={30}
							height={30}
						/>
					</a>
				</div>
			</div>
			<div className="w-[100%]  mb-[54px]">
				<p className="text-center text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px]">&copy; Copyright 2022. E-commerce complaints, Nigeria.</p>
			</div>
		</footer>
	);
};
