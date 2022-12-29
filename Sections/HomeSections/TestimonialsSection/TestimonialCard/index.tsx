import Image from "next/image";
import { IconContainer } from "../../../../components";

const TestimonialCard = () => {
	return (
		<div className="relative pt-6 md:pt-10 w-fit">
			<div className="flex flex-col rounded-lg lg:rounded-2xl overflow-hidden">
				<div className="relative w-[200px] md:w-[250px] lg:w-[300px] xl:w-[467px] h-[300px] md:h-[350px] lg:h-[450px] xl:h-[650px]">
					<Image
						src="/Images/man.png"
						alt="an image of a man"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="absolute bottom-5 md:bottom-5 lg:bottom-10 xl:bottom-20 px-[14px] md:px-7">
					<p className="text-[12px] md:text-[13px] lg:text-[20px] xl:text-[28px] font-bold text-white pb-[2px]">Danny Brown</p>

					<p className="text-[9px] md:text-[10px] lg:text-[15px] xl:text-xl pb-2 md:pb-3 lg:pb-7 text-[#AFAFAF]">Danny Brown</p>

					<p className="text-[9px] md:text-[10px] lg:text-[15px] xl:text-xl text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
				</div>
				<div className="absolute -top-[4px] sm:top-0 lg:top-[2px] scale-[0.7] sm:scale-[0.9] lg:scale-[1] self-center">
					<IconContainer
						iconPath={"/Images/shield.svg"}
						size={80}
					></IconContainer>
				</div>
			</div>
		</div>
	);
};
export default TestimonialCard;
