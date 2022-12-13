import { Dispatch, SetStateAction } from "react";
interface ButtonProps {
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
	maxNumber: number;
	listLength: number;
}

const PreviousNextButton: React.FC<ButtonProps> = ({ pageNumber, setPageNumber, maxNumber, listLength }) => {
	return (
		<div className="flex flex-row gap-x-4 lg:gap-x-6 lg:text-[18px] text-[14px] font-semibold w-full justify-end">
			<button
				className="cursor-pointer rounded-md w-[100px] h-[30px] lg:w-[142px] lg:rounded-[12px] lg:h-[40px] border border-solid border-eccblue bg-clearblue text-eccblue"
				disabled={pageNumber === 1}
				onClick={() => {
					setPageNumber(pageNumber--);
				}}
			>
				Previous
			</button>
			<button
				className="cursor-pointer rounded-md w-[100px] h-[30px] lg:w-[144px] lg:h-[40px] lg:rounded-[12px] border border-solid border-eccblue bg-eccblue text-white"
				disabled={listLength < maxNumber * pageNumber}
				onClick={() => {
					setPageNumber(pageNumber++);
				}}
			>
				Next
			</button>
		</div>
	);
};

export default PreviousNextButton;
