import TestimonialCard from "./TestimonialCard";

const index: React.FC = () => {
	return (
		<div className="relative xl:w-full object-cover pb-10 lg:pb-[54px] bg-hourglass overflow-hidden -tracking-[0.02em]">
			<div className="pl-5 sm:pl-10 lg:pl-[60px] xl:pl-[140px] pt-10 xl:pt-[72px]">
				<div data-aos="fade-up">
					<p className="uppercase tracking-[0.12em] text-[18px] lg:text-[22px] xl:text-[24px]">Testimonials</p>
					<p className="font-semibold text-[20px] md:text-[30px] xl:text-[40px]">Testimonies from vindicated customers</p>
				</div>
				<div
					data-aos="fade-up"
					className="pr-7 mt-8 lg:mt-10 flex flex-row gap-3 lg:gap-9 relative testimonialCarousel"
				>
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
				</div>
			</div>
		</div>
	);
};

export default index;
