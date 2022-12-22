import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface SearchResultIndicatorProps {
	areSearchResults: boolean;
	setIsShowing: Dispatch<SetStateAction<boolean>>;
}
const SearchResultIndicator: React.FC<SearchResultIndicatorProps> = ({ areSearchResults, setIsShowing }) => {
	const closeResultIndicator = () => {
		setIsShowing(false);
	};

	return (
		<div className="lg:w-full w-[90%] mx-auto ">
			{!areSearchResults && (
				<div
					onClick={() => closeResultIndicator()}
					className="w-full py-4 px-5  flex space-x-3 bg-warn-bg rounded-xl border flex-row justify-between items-center border-warn-border text-warn-text"
				>
					<p className="text-[15px] sm:text-[18px] -tracking-[0.01em]">No item on our list match your search. Make sure you enter the correct keyword</p>
					<div className="relative cursor-pointer w-[23px] h-[23px]">
						<Image
							src="/icons/orangeXIcon.svg"
							alt="orange X Icon"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			)}
			{areSearchResults && (
				<div
					onClick={() => closeResultIndicator()}
					className="w-full py-4 px-5  flex space-x-3 flex-row justify-between items-center  bg-complaint-success-bg rounded-xl border border-complaint-success-border"
				>
					<p className="text-complaint-success-text -tracking-[0.01em] text-[15px] sm:text-[18px]">Your search succesfully made a match on our list. It has been highlighted on our list</p>
					<div className="relative cursor-pointer w-[23px] h-[23px]">
						<Image
							src="/icons/greenXIcon.svg"
							alt="orange X Icon"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			)}
		</div>
	);
};
export default SearchResultIndicator;
