import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FileAComplaintRadio from "../FileAComplaintRadio";
import SuccessModal from "../SuccessModal";

interface Page3Props {
	place: string;
	successModalShowing: boolean;
	setSuccessModalShowing: Dispatch<SetStateAction<boolean>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	setIsOpaque: Dispatch<SetStateAction<boolean>>;
	wantsRefund: boolean;
	wantsApology: boolean;
	wantsCompensation: boolean;
	wantsReplacement: boolean;
	termsAndConditions: boolean;
	setWantsApology: Dispatch<SetStateAction<boolean>>;
	setWantsCompensation: Dispatch<SetStateAction<boolean>>;
	setWantsReplacement: Dispatch<SetStateAction<boolean>>;
	setWantsRefund: Dispatch<SetStateAction<boolean>>;
	setTermsAndConditions: Dispatch<SetStateAction<boolean>>;
	handleCreate: () => void;
}

const Page3: React.FC<Page3Props> = ({ place, setCurrentPage, handleCreate, successModalShowing, setSuccessModalShowing, setIsOpaque, wantsRefund, wantsApology, wantsCompensation, wantsReplacement, setWantsRefund, setWantsApology, setWantsCompensation, setWantsReplacement, termsAndConditions, setTermsAndConditions }) => {
	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleCreate();
	};

	const onPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsOpaque(false);
		setTimeout(() => {
			setIsOpaque(true);
			setCurrentPage(2);
		}, 300);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={`mt-[90px] ${place === "dashboard" && "bg-white mt-0 lg:mt-0 px-3 lg:px-4 py-[27px] lg:py-[30.82px]"}`}>
			{successModalShowing && (
				<SuccessModal
					setSuccessModalShowing={setSuccessModalShowing}
					grievanceId="423576275442ecc"
				/>
			)}
			<div>
				<p className="text-[14px] lg:text-xl">Kindly let us know what you want the end of this process.</p>
			</div>
			<form action="">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] lg:gap-x-[36px] gap-y-[16px] lg:gap-y-[38px] mt-[19px] lg:mt-[40px]">
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"refund"}
							title={"A Refund"}
							description={"All expenses incurred will be returned to you"}
							value={wantsRefund}
							setValue={setWantsRefund}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"compensation"}
							title={"A Compensation"}
							description={"You will be compensated by the company"}
							value={wantsCompensation}
							setValue={setWantsCompensation}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"apology"}
							title={"An Apology"}
							description={"You will recieve a formal apology"}
							value={wantsApology}
							setValue={setWantsApology}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"replacement"}
							title={"A Replacement"}
							description={"Your item will be replaced with the right one"}
							value={wantsReplacement}
							setValue={setWantsReplacement}
						/>
					</div>
				</div>
				<div className="flex items-center space-x-2 lg:space-x-3 mt-[25.71px] lg:mt-[60px] w-full">
					<div
						onClick={() => setTermsAndConditions(!termsAndConditions)}
						style={{
							borderColor: termsAndConditions ? "#005cc8" : "#4f4f4f",
						}}
						className="transition-[80ms] cursor-pointer  w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]  border rounded-full bg-transparent flex items-center justify-center self-start sm:self-auto scale-[0.85]"
					>
						<div
							style={{ opacity: termsAndConditions ? 1 : 0 }}
							className="transition-[80ms] w-[12px] lg:w-[15px] h-[12px] lg:h-[15px] bg-[#005cc8] rounded-full"
						></div>
					</div>
					<p className="text-[14px] lg:text-lg self-start sm:self-auto">
						I agree with the <span className="text-eccblue"> Terms & Conditions</span>
					</p>
				</div>
				<div className="flex justify-center lg:justify-end space-x-[30px] lg:space-x-6 mt-10 lg:mt-0">
					<button
						onClick={onPrevious}
						className="text-xs sm:text-sm bg-eccblue rounded-lg font-regular sm:font-semibold text-white h-[35px] sm:h-[45px] w-[100px] sm:w-[131px] hover:scale-[0.95] hover:duration-100 hover:ease-in-out"
					>
						Previous
					</button>
					<button
						style={{ opacity: termsAndConditions && (wantsApology || wantsCompensation || wantsRefund || wantsReplacement) ? 1 : 0.6 }}
						onClick={onSubmit}
						disabled={!(termsAndConditions && (wantsApology || wantsCompensation || wantsRefund || wantsReplacement))}
						className="text-xs sm:text-sm bg-eccblue rounded-lg font-regular sm:font-semibold text-white h-[35px] sm:h-[45px] w-[100px] sm:w-[131px] hover:scale-[0.95] duration-200 hover:duration-100 ease-in-out"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default Page3;
