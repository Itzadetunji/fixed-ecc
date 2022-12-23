import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
	return (
		// <Carousel

		//
		//
		// >
		// 	<div className="w-full h-full">
		// 		<img src="assets/1.jpeg" />
		//
		// 	</div>
		// 	<div className="w-full h-full">
		// 		<img src="assets/1.jpeg" />
		//
		// 	</div>
		// 	<div className="w-full h-full">
		// 		<img src="assets/1.jpeg" />
		//
		// 	</div>
		// </Carousel>
		<Carousel
			showThumbs={false}
			showIndicators={false}
			showStatus={false}
			infiniteLoop={true}
			showArrows={false}
			autoPlay={true}
			interval={4000}
			axis="horizontal"
			verticalSwipe="natural"
		>
			<div>
				<p className="mt-4 font-semibold sm:text-[14px] px-[15px] sm:px-[0]">
					VENDOR DON BLOCK YOU AFTER YOU MAKE <br />
					PAYMENT ONLINE?
				</p>
			</div>
			<div>
				<p className="mt-4 font-semibold sm:text-[14px] px-[15px] sm:px-[0]">
					DEBITED FOR A TRANSFER AND RECIPIENT NOT
					<br />
					CREDITED?
				</p>
			</div>
			<div>
				<p className="mt-4 font-semibold sm:text-[14px] px-[15px] sm:px-[0]">
					WHAT I ORDERED VERSUS WHAT I GOT <br />
				</p>
			</div>
		</Carousel>
	);
};

export default Slider;
