interface WayIdentifiedProps {
	number: number;
	title: string;
	text: string;
}

const WayIdentified: React.FC<WayIdentifiedProps> = ({ number, text, title }) => {
	return (
		<div className="flex flex-col space-y-3 sm:space-y-[27px] w-full">
			<div className="flex space-x-[18px] items-center">
				<div className="w-[45px] sm:w-11 h-[45px] sm:h-11 rounded-full bg-gradient-to-br from-eccblue to-[#073D79] text-xl sm:text-2xl font-semibold text-white flex items-center justify-center">{number}</div>
				<p className="text-base sm:text-2xl text-eccblue font-medium">{title}</p>
			</div>
			<p className="text-sm sm:text-xl xl:leading-[36px]">{text}</p>
		</div>
	);
};
export default WayIdentified;
