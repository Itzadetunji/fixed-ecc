const PageIndicator = ({ pageNumber, Message, isActive, PageSet }) => {
	return (
		<div
			onClick={() => {
				PageSet(pageNumber);
			}}
			className="flex flex-row gap-x-[7px] items-center font-medium cursor-pointer"
		>
			<p className={`w-8 lg:w-12 min-w-[32px] h-8 lg:h-12 flex items-center justify-center font-semibold rounded-full border border-solid text-xs sm:text-sm lg:text-lg ${isActive ? "border-white bg-white text-eccblue" : " border-slate-50 bg-eccblue text-white"} `}>{pageNumber}</p>
			<p className={`text-[14px] lg:text-lg ${isActive ? "text-white" : "text-slate-50"}`}>{Message}</p>
		</div>
	);
};

const PageSectionNav = ({ currentPage, setPage }) => {
	return (
		<div className="w-full py-[11px] px-[10px] lg:rounded-t-[20px] flex lg:flex-row space-y-[13px] justify-center items-center lg:justify-around flex-col h-[100px] bg-eccblue">
			<div className="flex-row flex w-full gap-x-[20px] justify-around select-none">
				<PageIndicator
					PageSet={setPage}
					pageNumber={1}
					Message="Complaint Info"
					isActive={1 <= currentPage ? true : false}
				/>
				<PageIndicator
					PageSet={setPage}
					pageNumber={2}
					Message="Upload Documents"
					isActive={2 <= currentPage ? true : false}
				/>
				<div className="lg:block hidden">
					<PageIndicator
						PageSet={setPage}
						pageNumber={3}
						Message="Resolution"
						isActive={3 <= currentPage ? true : false}
					/>
				</div>
			</div>
			<div className=" lg:w-[40%] flex w-full items-center justify-center lg:hidden">
				<PageIndicator
					PageSet={setPage}
					pageNumber={3}
					Message="Resolution"
					isActive={3 <= currentPage ? true : false}
				/>
				<pageIndicator />
			</div>
		</div>
	);
};
export default PageSectionNav;
