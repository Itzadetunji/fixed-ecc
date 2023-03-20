import { Dispatch, SetStateAction, useRef, useState } from "react";

interface Page2Props {
	place: string;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	setSelectedFiles: any;
	selectedFiles: any[];
	setIsOpaque: Dispatch<SetStateAction<boolean>>;
}

const Page2: React.FC<Page2Props> = ({ place, setCurrentPage, selectedFiles, setSelectedFiles, setIsOpaque }) => {
	const filePickerRef = useRef<HTMLInputElement>(null);

	const addDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = [...selectedFiles];
		if (e.target.files) files.push(e.target.files[0]);

		setSelectedFiles(files);
	};
	const onFileDelete = (currentItem: any) => {
		setSelectedFiles(selectedFiles.filter((item) => item != currentItem));
	};
	const onSubmit = () => {
		console.log(selectedFiles);
		setIsOpaque(false);
		setTimeout(() => {
			setIsOpaque(true);
			setCurrentPage(3);
		}, 300);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	const onPrevious = () => {
		setIsOpaque(false);
		setTimeout(() => {
			setIsOpaque(true);
			setCurrentPage(1);
		}, 300);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={`mt-[20px] lg:mt-[90px] ${place === "dashboard" && "bg-white mt-0 lg:mt-0 px-[15px] py-[20px] lg:py-[45px]"}`}>
			<p className="text-[14px] lg:text-xl">Kindly upload a document or picture that shows proof of payment or receipt of transaction.</p>
			<div className="mt-6">
				<div>
					<p className="text-[14px] lg:text-lg">Upload Documents</p>
				</div>
				<div className={`flex flex-col justify-center items-center w-full h-[162px] lg:h-[419px] rounded-xl bg-clearblue border-eccblue mt-[15px] lg:mt-6 border-2 border-dashed mx-auto select-none ${selectedFiles ? "" : "pt-[170px]"}`}>
					<img
						src="/icons/paste.svg"
						alt=""
						className="mx-auto cursor-pointer w-[41px] lg:w-[150px] h-[41px] lg:h-[150px]"
						onClick={() => filePickerRef.current!.click()}
					/>
					<input
						type="file"
						ref={filePickerRef}
						hidden
						onChange={addDocument}
						id="inputfile"
						multiple
						required={true}
					/>
					<div className="text-center mt-[16px] lg:mt-[22px]">
						<p className="text-[14px] lg:text-[20px] font-[500]">
							Click to upload your documents here {""}
							<span
								className="text-eccblue cursor-pointer"
								onClick={() => filePickerRef.current!.click()}
							>
								browse files
							</span>
						</p>
						<p className="text-[12px] lg:text-[18px] mt-[6px] lg:mt-[22px]">Supported format: JPEG, PNG, PDF</p>
					</div>
				</div>
				<p className="text-[14px] lg:text-xl mt-[16px] lg:mt-10 leading-[25px] lg:leading-[46px]">You can provide additional documents that can support your claim e.g screenshots of chats. You can upload multiple documents. Upload proof of payment/ receipt first </p>
				<div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-[27.34px]">
					{selectedFiles.length > 0 &&
						selectedFiles.map((item, index) => (
							<div
								key={index}
								className="bg-eccblue h-fit w-full mx-auto mt-[10px] lg:mt-[16px] rounded-lg lg:rounded-xl"
							>
								<div className="pt-[27px] pl-[20px] pr-[50px] relative">
									<div className="flex flex-row space-x-[14.22px] lg:space-x-[37px] justify-start items-center break-words">
										<img
											className="w-[12px] lg:w-[30px] h-[12px] lg:h-[30px] cursor-pointer"
											src="/icons/file-check.svg"
											alt=""
										/>
										<p className="text-[10px] lg:text-[20px] leading-[12px] lg:leading-[30px] font-[600] text-white">{item.name ? item.name : ""}</p>
									</div>
									<img
										src="/icons/close-1.svg"
										className=" absolute right-[25px] top-[33px] w-[11px] lg:w-[16px] xl:w-[18px] h-[11px]lg:h-[16px] xl:h-[18px] cursor-pointer"
										onClick={() => onFileDelete(item)}
										alt=""
									/>
									{/* <hr className="mt-[12.12px] border-[3.5px] rounded-full"/> */}
									<div className="w-full mt-[12.12px] bg-[#C5C5C5] h-[5px] rounded-full mb-[26px]">
										<div
											className="bg-white h-[5px] rounded-full"
											style={{ width: "70%" }}
										></div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className="flex justify-center lg:justify-end space-x-[30px] lg:space-x-6 mt-10 lg:mt-0">
				<button
					onClick={onPrevious}
					className="text-xs sm:text-sm bg-eccblue rounded-lg font-regular sm:font-semibold text-white h-[35px] sm:h-[45px] w-[100px] sm:w-[131px] hover:scale-[0.95] hover:duration-100 hover:ease-in-out"
				>
					Previous
				</button>
				<button
					style={{ opacity: selectedFiles.length > 0 ? 1 : 0.6 }}
					onClick={onSubmit}
					disabled={selectedFiles.length === 0}
					className="text-xs sm:text-sm bg-eccblue rounded-lg font-regular sm:font-semibold text-white h-[35px] sm:h-[45px] w-[100px] sm:w-[131px] hover:scale-[0.95] hover:duration-100 hover:ease-in-out"
				>
					Continue
				</button>
			</div>
		</div>
	);
};
export default Page2;
