import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import LatestScamStep from "../../components/LatestScams/LatestScamsStep";
import { Footer, KonfamPayCallout, NavBar } from "../../components/";
import WayIdentified from "../../components/LatestScams/WayIdentified";
import ScamData from "../../components/LatestScams/ScamData";
import SearchResultIndicator from "../../components/LatestScams/SearchResultIndicator";
import PaginationSection from "../../components/LatestScams/PaginationSection";
import ScamCard from "../../components/LatestScams/ScamCard";
import Menu from "components/MenuComp";

const LatestScams: NextPage = () => {
	const [scamData, setScamData] = useState(ScamData);
	const [searchResults, setSearchResults] = useState(scamData);
	const [searchText, setSearchText] = useState("");
	const [areSearchResults, setAreSearchResults] = useState(false);
	const [resultIndicatorShowing, setResultIndicatorShowing] = useState(false);
	const [currentSearchPage, setCurrentSearchPage] = useState(1);
	const pageSize = true;
	const [expand, setExpand] = useState(false);
	const maxResultsPerPage = 20;
	const maxResultsPerSmallPage = 6;
	const getMatches = (obj) => {
		const arrayOfItems: string[] = Object.values(obj);

		return arrayOfItems.some((item) => item.toLowerCase().includes(searchText.toLowerCase()));
	};
	const handleSearch = () => {
		setResultIndicatorShowing(true);

		const result = scamData.filter((item) => getMatches(item.phoneNumber) || getMatches(item.socialMediaHandle) || getMatches(item.bankAccountDetails) || getMatches(item.website) || item.scammer.toLowerCase().includes(searchText.toLowerCase()));

		if (result.length !== 0 && searchText.length !== 0) {
			setSearchResults(result);
			setAreSearchResults(true);
		} else {
			setAreSearchResults(false);
			setSearchResults(scamData);
		}

		// scamData.forEach(item => )
	};
	return (
		<div>
			{expand && (
				<Menu
					expand={expand}
					setExpand={setExpand}
				/>
			)}
			{!expand && (
				<div className="poppinsFont">
					<NavBar
						expand={expand}
						setExpand={setExpand}
					/>
					<div className="relative w-full mt-[73px] bg-darkblue pt-[30px] sm:pt-[50px] lg:pt-[115px] text-white text-center">
						<>
							<div className="mx-[49px]">
								<p className="text-2xl sm:text-5xl max-w-[563px] mx-auto font-semibold">
									Be Informed, stay woke, <br /> stay smart!
								</p>
							</div>
							<div className="mx-[34px] mt-2 sm:mt-11">
								<p className="max-w-[1000px] text-[15px] sm:text-2xl font-medium -tracking-[0.02em] mx-auto"> Search through over 10,000 scam details. They have scammed millions of Naira from Nigerian buyers. Beware of them and do not trust them or buy anything from them</p>
							</div>
						</>
						<div className="relative mx-auto w-[209px] sm:w-[592px] h-[147.51px] sm:h-[384.9px]">
							<Image
								src="/Images/searchingImage.png"
								alt="an image of a  man searching"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="w-full px-[18px] sm:px-7 md:px-[50px] lg:px-[100px] absolute -bottom-[52px]">
							<div className="bg-white relative flex flex-row items-center space-x-2 sm:space-x-8 max-w-[1160px] mx-auto pl-2.5 pr-4 sm:pl-14 py-[24px] sm:min-h-[106px] rounded sm:rounded-lg lg:rounded-xl shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.1)]">
								<div
									className="relative w-5 sm:w-10 h-5 sm:h-10"
									onClick={handleSearch}
								>
									<Image
										src="/Images/searchIcon.svg"
										alt="search icon"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<input
									type="text"
									onKeyDown={(e) => {
										e.key == "Enter" ? handleSearch() : "";
									}}
									value={searchText}
									onChange={(e) => setSearchText(e.target.value)}
									className="sm:pr-[209px] flex-grow focus:outline-none text-[14px] sm:text-[20px] placeholder:text-sm sm:placeholder:text-[20px]  placeholder:font-light sm:placeholder:font-normal placeholder:text-black placeholder:opacity-[0.62] text-black"
									placeholder="Search for phone number, e.t.c"
								/>
								<button
									onClick={handleSearch}
									className="m-0 absolute right-7 top-6 hidden sm:block py-[14.5px] px-[48px] bg-[#0A5EBC] rounded-xl active:scale-95 transition-[100ms]"
								>
									Search
								</button>
							</div>
						</div>
					</div>
					<div className="lg:px-[100px] mt-[90px] lg:mt-[100px]">
						{resultIndicatorShowing && (
							<SearchResultIndicator
								setIsShowing={setResultIndicatorShowing}
								areSearchResults={areSearchResults}
							/>
						)}

						<div className="w-full px-[24px] mt-7 mb-2  flex justify-between lg:hidden">
							<p className="font-sans text-eccblue text-left text-sm sm:text-lg">{`showing ${maxResultsPerSmallPage} of ${searchResults.length} results`}</p>
							<div
								className="relative w-[24px] sm:w-[30px] h-[24px] sm:h-[30px]"
								onClick={() => {
									searchResults.sort();
								}}
							>
								<Image
									src="/icons/filter_list_icon.svg"
									alt="filter icon"
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</div>
						{searchResults.length !== 0 && (
							<>
								<div className="lg:block hidden mx-auto mt-[40px]">
									<table className="mx-auto w-full rounded-t-[10px] overflow-hidden">
										<thead className="bg-eccblue text-white  ">
											<tr className="">
												<th className="py-[16px]">Count</th>
												<th>Social Media Handle</th>
												<th>Bank Account Details</th>
												<th>Website</th>
												<th>Phone Number</th>
											</tr>
										</thead>

										<tbody>
											{searchResults.slice(maxResultsPerPage * (currentSearchPage - 1), maxResultsPerPage * currentSearchPage).map((item, index) => (
												<tr
													className="text-center border-2 border-l-0 border-r-0 border-b-[#E6E7E9]"
													key={index}
												>
													<td className="py-[16px]">{searchResults.indexOf(item) + 1}</td>
													<td className="border-b-[#E6E7E9]">{item.socialMediaHandle.input1}</td>
													<td>{item.bankAccountDetails.input1}</td>
													<td>{item.website.input1}</td>
													<td>{item.phoneNumber.input1}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className="lg:hidden sm:grid grid-cols-2 gap-x-3 sm:mx-4">
									{searchResults.slice(maxResultsPerSmallPage * (currentSearchPage - 1), maxResultsPerSmallPage * currentSearchPage).map((item, index) => (
										<div
											key={index}
											className="flex flex-col items-center mb-5"
										>
											<ScamCard data={item} />
										</div>
									))}
								</div>
								<div className="lg:block hidden">
									<PaginationSection
										pageSize={false}
										searchResults={searchResults}
										maxResultsPerPage={maxResultsPerPage}
										currentSearchPage={currentSearchPage}
										setCurrentSearchPage={setCurrentSearchPage}
										numberOfPages={Math.ceil(searchResults.length / maxResultsPerPage)}
									/>
								</div>
								<div className="lg:hidden">
									<PaginationSection
										pageSize={pageSize}
										searchResults={searchResults}
										maxResultsPerPage={maxResultsPerSmallPage}
										currentSearchPage={currentSearchPage}
										setCurrentSearchPage={setCurrentSearchPage}
										numberOfPages={Math.ceil(searchResults.length / maxResultsPerSmallPage)}
									/>
								</div>
							</>
						)}
					</div>
					<div className="mt-12 w-full bg-clearblue pt-[46px] px-4 sm:px-8 md:px-12 lg:px-24">
						<div className="max-w-[1231px] mx-auto">
							<h1 className="text-[22px] px-[40px] sm:px-0 sm:text-[40px] max-w-[500px] text-center mx-auto font-semibold leading-[27px] sm:leading-[50px]">
								How we have identified these <span className="text-eccblue">scams</span>
							</h1>
							<div className="flex flex-col sm:flex-row sm:space-x-[31px] space-y-2 sm:space-y-0 items-center mt-5 sm:mt-[144px]">
								<div className="w-8 sm:w-24 shrink-0 h-8 sm:h-24 bg-danger rounded sm:rounded-xl flex items-center justify-center self-start sm:self-auto">
									<div className="relative w-3.5 sm:w-[46px] h-3.5 sm:h-[46px]">
										<Image
											src="/Images/pencilIcon.svg"
											alt="pencil icon"
											layout="fill"
											objectFit="contain"
										/>
									</div>
								</div>
								<p className="text-sm sm:text-xl xl:leading-[31px] text-danger font-semibold lg:font-medium">The list is compiled based on inputs from our users. If you are a website or phone owner and think that your details are wrongly included please contact us so that we can remove you. We have taken below factors into consideration while categorizing a website as Scam</p>
							</div>
							<section className="flex flex-col space-y-7 sm:space-y-[73px] mt-[29px] sm:mt-[98px] pb-3 sm:pb-[109px]">
								<WayIdentified
									number={1}
									title={"RECIEVE COMPLAINT"}
									text={"When a consumer files a complaint about a scam, the first step in the investigation process is for ecommerce complaint to gather all relevant information from the consumer. This may include details about the alleged scammer's profile, the nature of the scam, and any evidence the consumer has collected, such as messages or financial transactions"}
								/>
								<WayIdentified
									number={2}
									title={"INVESTIGATE"}
									text={"Next, ecommerce complaint will conduct its own investigation into the alleged scammer's activity online. This may involve reviewing the alleged scammer's profile and posts, searching for similar complaints or reports about the alleged scammer, and contacting the person or brand to notify them about the complaint."}
								/>
								<div>
									<WayIdentified
										number={3}
										title={"DECISION MAKING"}
										text={`Next, ecommerce complaint will conduct its own investigation into the alleged scammer's activity online. This may involve reviewing the alleged scammer's profile and posts, searching for similar complaints or reports about the alleged scammer, and contacting the person or brand to notify them about the complaint.`}
									/>
									<div className="text-sm sm:text-xl mt-5 xl:mt-6 w-full">Overall, the process of investigating a consumer complaint about a scam online involves gathering information, conducting an investigation, and taking appropriate action against the scammer to protect consumers and prevent further scams.</div>
								</div>
							</section>
						</div>
					</div>
					<section className="pt-7 sm:pt-[88px] pb-7 sm:pb-[93px] px-6 sm:px-24  mb-7 text-center">
						<h1 className="text-[22px] text-center mx-auto sm:text-[48px] max-w-[290px] sm:max-w-none font-semibold">
							How to <span className="text-eccblue">stay away</span> from scams
						</h1>
						<div className="mt-7 flex flex-col space-y-5">
							<LatestScamStep
								number={"1"}
								text={"If in doubt, always reach out to us via all available channels, we can help you verify a business or brand, also explore using the search option on our website. check for reviews online, read comments."}
							/>
							<LatestScamStep
								number={"2"}
								text={"Be cautious of offers that seem too good to be true. If an offer seems too good to be true, it probably is. Scammers often use the pricing tactics lure victims in by offering outrageous discounts on items."}
							/>
							<LatestScamStep
								number={"3"}
								text={"Don't give out personal information. Be careful not to reveal personal information, such as your Bank Verification number, bank account number, or debit card number, to anyone."}
							/>
							<LatestScamStep
								number={"4"}
								text={`Scammers are usually very desperate; they will say or do anything to try to get you to make payment. Always make payments for items at your own pace, when a vendor or brand is offering you mouth-watering deals to get you to make payment almost immediately, it is usually a red flag. "AWOOF DEY PURGE BELLE!!"`}
							/>
							<LatestScamStep
								number={"X"}
								text={"By following these tips, you can reduce the risk of being scammed online. It's also a good idea to regularly monitor your bank for any unauthorized charges. If you suspect that you have been a victim of a scam, contact us, your bank or the financial institution involved immediately."}
							/>
						</div>
					</section>
					<KonfamPayCallout />
					<Footer />
				</div>
			)}
		</div>
	);
};
export default LatestScams;
