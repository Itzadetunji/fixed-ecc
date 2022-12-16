import type { NextPage } from "next";
import { Footer, NavBar } from "../../components";
import { useState } from "react";
import Menu from "components/MenuComp";
import { useRouter } from "next/router";
import { format } from "date-fns";

const WriteComplaintPreview: NextPage = () => {
	const [expand, setExpand] = useState(false);
	const router = useRouter();
	const date = router.query.date;
	const dateRange = router.query.dateRange;
	const email = router.query.email;
	const name = router.query.name;
	const phone = router.query.phone;
	const purchase = router.query.purchase;
	const complaintDetails = router.query.complaintDetails;
	const complaintEvidence = router.query.complaintEvidence;
	const purchasePlace = router.query.purchasePlace;
	const wantedAction = router.query.wantedAction;

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
					<div className="mt-[201px] mx-[100px]">
						<p className="text-[40px] text-center">Complaint Letter Tool</p>
						<div className="mt-[84px]">
							<div>
								<p className="text-7 font-medium">Review your complaint letter</p>
								<p className="mt-7 text-[17px] leading-[30px]">Your complaint letter has been generated based on the information you provided. Please review it carefully. Remember to provide the business with the evidence you listed in the letter. If you don’t have an email address for the business, you should be able to find one on their website or send it via their social media handle.</p>
							</div>
							<div className="mt-[26px]">
								<p className="text-[24px]">Complaint Subject</p>
								<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
									<p className="px-[20px] py-[29px] text-[17px]">Complaint about (SAMPLE) product or service name purchased on (SAMPLE) date from (SAMPLE) the place of purchase</p>
								</div>
							</div>
							<div className="mt-[66px]">
								<p className="text-[22px]">Complaint Content</p>
								<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
									<div className="px-[30px] pt-[37px] pb-[62px] text-[17px] flex flex-col space-y-[50px]">
										<p>To whom it may concern,</p>
										<p>{`On ${date}, I purchased ${purchase} product or service name from ${purchasePlace} the place of purchase.`}</p>
										<p>{complaintDetails}</p>
										<p>I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
										<p>{`${complaintEvidence}`}</p>
										<p>{wantedAction}</p>
										<p>
											{`If I do not hear from you within ${dateRange}, I will lodge a formal complaint with e-commerce complaints`} <span className="font-bold">(ecc)</span>
										</p>
										<p>{`You can contact me about this complaint via email at ${email} or call me on ${phone} phone number during business hours.`}</p>
										<p>Thank you for your assistance in this matter.</p>
										<div>
											<p>Regards,</p>
											<p>{name}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-[79px] mb-[100px]">
								<div className="flex flex-row justify-between text-white">
									<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
										<img
											src="/icons/arrow.svg"
											alt=""
										/>
										<p>Back</p>
									</div>
									<div className="flex space-x-[17px]">
										<div className="flex bg-eccblue text-center space-x-[20px] px-[20px] py-[22px] rounded-xl">
											<img
												src="/icons/email.svg"
												alt=""
											/>
											<p>Send as email</p>
										</div>
										<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
											<img
												src="/icons/copy.svg"
												alt=""
											/>
											<p>Copy</p>
										</div>
										<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
											<img
												src="/icons/print.svg"
												alt=""
											/>
											<p>Print</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default WriteComplaintPreview;
