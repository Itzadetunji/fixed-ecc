import Link from "next/link";
interface Props {
	place: string;
}

const DashboardSection: React.FC<Props> = ({ place }) => {
	return (
		<div className={`md:h-[150px] lg:h-fit w-full bg-darkblue`}>
			<div className="relative px-[10px] xl:px-[38.5px] flex flex-row justify-between leading-[14.1px] lg:leading-[37px] text-[12px] font-medium lg:w-full max-w-[1600px] mx-auto">
				<div className="w-[64.3%] lg:w-full text-[12px] lg:text-[12px] xl:text-[20px] pb-[10px] lg:pb-0 lg:mb-[27.55px] mb-[10px]">
					<div className="text-white pt-[17px] lg:pt-[27px] leading-[14.1px] lg:leading-[26.82px] flex-wrap">
						Always try to resolve a problem with a business before seeking help from <br /> ecommerce complaint . You can do this by writing a complaint letter.
						<p className="lg:block hidden text-[#FCB714] leading-[26.82px]">Don’t worry you just have to fill in little details. We will finish it up for you!!</p>
					</div>
					<p className="lg:hidden block text-[#FCB714] mt-[6px] lg:mt-[10px] leading-[15.1px] lg:leading-[37px] flex-wrap">Don’t worry you just have to fill in little details. We will finish it up for you!!</p>
				</div>
				<div className="absolute h-[170px] lg:block hidden right-0 top-0 lg:right-1">
					<img
						className="w-[210px] h-[130px]  "
						src="/Images/handShake.png"
					/>
				</div>
			</div>
			<div className="text-end relative ">
				<Link href="/write-complaint">
					<button className="bg-white py-[10px] lg:py-[17px] px-[11.5px] m-[50px] mt-0 lg:my-[10px] lg:mx-[30px] lg:px-[21px] text-[15px] lg:text-[18px] font-semibold rounded-[8.7px] lg:rounded-xl ">Write a complaint letter</button>
				</Link>
			</div>
		</div>
	);
};
export default DashboardSection;
