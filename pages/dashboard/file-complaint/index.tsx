import NavWrapper from "./../../../components/DashboardNav/NavWrapper";
import PageSectionNav from "../../../components/FileAComplaintComponents/PageSectionNav";

import type { NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext, useEffect } from "react";
import { createComplaint } from "api/complaints";
import Page1 from "../../../components/FileAComplaintComponents/Page1";
import Page2 from "../../../components/FileAComplaintComponents/Page2";
import Page3 from "../../../components/FileAComplaintComponents/Page3";
import { SideNavContext } from "components/Contexts/SideNavContext";
import { ComplaintContext } from "components/Contexts/ComplaintContext";
import { motion } from "framer-motion";
import DashboardSection from "components/FileAComplaintComponents/DashboardSection";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

const FileComplaint: NextPage = () => {
	const { userComplaints, postUserComplaints, createResult } = useContext(ComplaintContext);
	const [cookie, setCookie] = useCookies();
	const { Open } = useContext(SideNavContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [productCategory, setProductCategory] = useState("");
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
			userId: cookie.user.userId,
			title: titleOfComplaint,
			transactionLocation: placeOfTransaction,
			brandName: companyName,
			productCategory: productCategory,
			brandBankAccountNumber: accountNumber,
			brandBankAccountName: accountName,
			brandBank: bankName,
			socialMediaHandle: brandHandle,
			amountLost: amountLost,
			resolution: { refund: wantsRefund, compensation: wantsCompensation, apology: wantsApology, replacement: wantsReplacement },
			description: complaintDetails,
			isScam: isScam,
			supportingDocuments: selectedFiles,
		};
		if (!isScam) {
			delete payload.brandBankAccountName;
			delete payload.brandBankAccountNumber;
			delete payload.brandBank;
		}
		postUserComplaints(payload);
		if (createResult.error) {
			toast.error(createResult.message);
		} else setSuccessModalShowing(true);
		console.log(createResult);
	};

	const handleSubmit = (event) => {
		console.log(1);
		event.preventDefault();
	};
	return (
		<NavWrapper>
			<div className={` ${Open && `h-screen overflow-hidden`}`}>
				<ToastContainer />

				<PageSectionNav
					setPage={setCurrentPage}
					currentPage={currentPage}
				/>
				<DashboardSection place="main" />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isOpaque ? 1 : 0 }}
				>
					<form onSubmit={handleSubmit}>
						{currentPage == 1 && (
							<Page1
								place="dashboard"
								accountName={accountName}
								setAccountName={setAccountName}
								accountNumber={accountNumber}
								setAccountNumber={setAccountNumber}
								bankName={bankName}
								setBankName={setBankName}
								setCurrentPage={setCurrentPage}
								productCategory={productCategory}
								setProductCategory={setProductCategory}
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
								place="dashboard"
								setCurrentPage={setCurrentPage}
								selectedFiles={selectedFiles}
								setSelectedFiles={setSelectedFiles}
								setIsOpaque={setIsOpaque}
							/>
						)}
						{currentPage == 3 && (
							<Page3
								handleCreate={handleCreate}
								successModalShowing={successModalShowing}
								setSuccessModalShowing={setSuccessModalShowing}
								setCurrentPage={setCurrentPage}
								setIsOpaque={setIsOpaque}
								place="dashboard"
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
					</form>
				</motion.div>
			</div>
		</NavWrapper>
	);
};

export default FileComplaint;
