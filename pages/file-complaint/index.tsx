import type { NextPage } from "next";
import FileAComplaintProcess from "../../components/FileAComplaintComponents/FileAComplaintProcess";
import { useState, useEffect } from "react";
import { NavBar } from "../../components";
import { Footer } from "../../components/";
import Page1 from "../../components/FileAComplaintComponents/Page1";
import Page2 from "../../components/FileAComplaintComponents/Page2";
import Page3 from "../../components/FileAComplaintComponents/Page3";
import ComplaintLetterSection from "../../components/FileAComplaintComponents/ComplaintLetterSection";
import { motion } from "framer-motion";
import Menu from "./../../components/MenuComp/index";

const Index: NextPage = () => {
	const [productCategory, setProductCategory] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [titleOfComplaint, setTitleOfComplaint] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [placeOfTransaction, setPlaceOfTransaction] = useState("");
	const [amountLost, setAmountLost] = useState("");
	const [complaintDetails, setComplaintDetails] = useState("");
	const [brandContact, setBrandContact] = useState("");
	const [brandHandle, setBrandHandle] = useState("");
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [wantsRefund, setWantsRefund] = useState(false);
	const [wantsCompensation, setWantsCompensation] = useState(false);
	const [wantsApology, setWantsApology] = useState(false);
	const [wantsReplacement, setWantsReplacement] = useState(false);
	const [termsAndConditions, setTermsAndConditions] = useState(false);
	const [isOpaque, setIsOpaque] = useState(true);
	const [accountName, setAccountName] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [bankName, setBankName] = useState("");
	const [expand, setExpand] = useState(false);
	const [isScam, setIsScam] = useState(false);
	const [successModalShowing, setSuccessModalShowing] = useState(false);
	useEffect(() => {
		if (successModalShowing == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [successModalShowing]);

	const handleCreate = () => {
		const payload = {
			title: titleOfComplaint,
			transactionLocation: placeOfTransaction,
			companyName: companyName,
			productCategory: productCategory,
			brandBankAccountNumber: accountNumber,
			brandBankAccountName: accountName,
			brandBank: bankName,
			socialMediaHandle: brandHandle,
			amountLost: amountLost,
			resolution: { refund: wantsRefund, compensation: wantsCompensation, apology: wantsApology, replacement: wantsReplacement },
			description: complaintDetails,
			isScam: isScam,
			selectedFiles: selectedFiles,
		};
		console.log(payload);
		setSuccessModalShowing(true);
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
				<div>
					<NavBar
						expand={expand}
						setExpand={setExpand}
					/>

					<ComplaintLetterSection place="main" />
					<div className="px-[13px] lg:px-[100px] mt-[72px] mb-[147px] max-w-[1536px] mx-auto">
						<div className="mx-auto text-center w-fit">
							<p className="text-[20px] lg:text-[40px] font-[500]">File a Complaint</p>
							<p className="text-eccblue text-[12px] lg:w-full lg:text-[20px] mt-[8px] lg:mt-[20px]">Allow ecommerce complaint help you in your fight aginst online fraud </p>
						</div>
						<div className="mt-[35px] lg:mt-[90px] mx-auto">
							<div className="flex flex-wrap space-x-[15.06px] lg:space-y-0 lg:space-x-[100px] items-center justify-center">
								<FileAComplaintProcess
									number={1}
									text={"Complaint Info"}
									active={currentPage >= 1}
								/>
								<FileAComplaintProcess
									number={2}
									text={"Upload Document"}
									active={currentPage >= 2}
								/>
								<FileAComplaintProcess
									number={3}
									text={"Resolution"}
									active={currentPage >= 3}
								/>
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: isOpaque ? 1 : 0 }}
						>
							{currentPage == 1 && (
								<Page1
									productCategory={productCategory}
									setProductCategory={setProductCategory}
									place="main"
									accountName={accountName}
									setAccountName={setAccountName}
									accountNumber={accountNumber}
									setAccountNumber={setAccountNumber}
									bankName={bankName}
									setBankName={setBankName}
									setCurrentPage={setCurrentPage}
									titleOfComplaint={titleOfComplaint}
									setTitleOfComplaint={setTitleOfComplaint}
									companyName={companyName}
									setCompanyName={setCompanyName}
									placeOfTransaction={placeOfTransaction}
									setPlaceOfTransaction={setPlaceOfTransaction}
									amountLost={amountLost}
									setAmountLost={setAmountLost}
									complaintDetails={complaintDetails}
									setComplaintDetails={setComplaintDetails}
									brandContact={brandContact}
									setBrandContact={setBrandContact}
									brandHandle={brandHandle}
									setBrandHandle={setBrandHandle}
									setIsOpaque={setIsOpaque}
									isScam={isScam}
									setIsScam={setIsScam}
								/>
							)}
							{currentPage == 2 && (
								<Page2
									place="main"
									setCurrentPage={setCurrentPage}
									selectedFiles={selectedFiles}
									setSelectedFiles={setSelectedFiles}
									setIsOpaque={setIsOpaque}
								/>
							)}
							{currentPage == 3 && (
								<Page3
									setSuccessModalShowing={setSuccessModalShowing}
									successModalShowing={successModalShowing}
									handleCreate={handleCreate}
									setCurrentPage={setCurrentPage}
									setIsOpaque={setIsOpaque}
									place="main"
									wantsRefund={wantsRefund}
									setWantsRefund={setWantsRefund}
									wantsCompensation={wantsCompensation}
									setWantsCompensation={setWantsCompensation}
									wantsApology={wantsApology}
									setWantsApology={setWantsApology}
									wantsReplacement={wantsReplacement}
									setWantsReplacement={setWantsReplacement}
									termsAndConditions={termsAndConditions}
									setTermsAndConditions={setTermsAndConditions}
								/>
							)}
						</motion.div>
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Index;
