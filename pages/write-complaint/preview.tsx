import type { NextPage } from "next";
import { Footer, NavBar } from "../../components";
import { useState, useRef } from "react";
import Menu from "components/MenuComp";
import { useRouter } from "next/router";
import { format } from "date-fns";
import ReactToPrint from "react-to-print";

const WriteComplaintPreview: NextPage = () => {
	let componentRef = null;
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
		<div className="w-screen">
			{expand && (
				<Menu
					expand={expand}
					setExpand={setExpand}
				/>
			)}
			{!expand && (
				<div className="w-full">
					<NavBar
						expand={expand}
						setExpand={setExpand}
					/>
					<div className="lg:mt-[201px] mt-[100px] lg:p-0 p-[20px] lg:mx-[100px]">
						<p className="text-[40px] text-center">Complaint Letter Tool</p>
						<div className="mt-[84px]">
							<div>
								<p className="text-7 font-medium">Review your complaint letter</p>
								<p className="mt-7 text-[17px] leading-[30px]">Your complaint letter has been generated based on the information you provided. Please review it carefully. Remember to provide the business with the evidence you listed in the letter. If you don’t have an email address for the business, you should be able to find one on their website or send it via their social media handle.</p>
							</div>
							<div className="mt-[26px]">
								<p className="text-[24px]">Complaint Subject</p>
								<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
									<p className="px-[20px] py-[29px] text-[17px]">{`Complaint about ${purchase} purchased on ${date} from ${purchasePlace}`}</p>
								</div>
							</div>
							<div className="mt-[66px]">
								<p className="text-[22px]">Complaint Content</p>
								<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
									<div
										ref={(el) => (componentRef = el)}
										className="px-[30px] pt-[37px] pb-[62px] text-[17px] flex flex-col space-y-[50px]"
									>
										<p>To whom it may concern,</p>
										<p>{`On ${date}, I purchased ${purchase} from ${purchasePlace}.`}</p>
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
									<div className="lg:flex flex-row  hidden bg-eccblue w-[120px] lg:space-x-[20px]  space-x-2  lg:px-[20px] lg:py-[22px] rounded-xl">
										<img
											className="w-[20px] h-[20px]"
											src="/icons/arrow.svg"
											alt=""
										/>
										<p>Back</p>
									</div>
									<div className="flex lg:w-auto w-full lg:justify-between justify-around  lg:space-x-[17px]">
										<div>
											<a
												onClick={() => {
													navigator.clipboard.writeText(componentRef.innerText);
													window.alert("letter copied to clipboard");
												}}
												href="https://mail.google.com/mail/u/0/#inbox?compose=new"
											>
												<div className="flex bg-eccblue text-center px-4 py-2 space-x-2 justify-center items-center lg:space-x-[20px] lg:px-[20px] lg:py-[22px] rounded-xl">
													<img
														className="w-[20px] h-[20px]"
														src="/icons/email.svg"
														alt=""
													/>
													<p className="lg:block hidden">Send as email</p>
													<p className="lg:hidden">Email</p>
												</div>
											</a>
										</div>
										<div
											onClick={() => {
												navigator.clipboard.writeText(componentRef.innerText);
												window.alert("letter copied to clipboard");
											}}
											className="flex bg-eccblue px-4 py-2 space-x-2 justify-center items-center lg:space-x-[20px] lg:px-[25px] lg:py-[22px] rounded-xl"
										>
											<img
												className="w-[20px] h-[20px]"
												src="/icons/copy.svg"
												alt=""
											/>
											<p>Copy</p>
										</div>

										<div>
											<ReactToPrint
												content={() => componentRef}
												trigger={() => {
													return (
														<div className="flex bg-eccblue  px-4 py-2 space-x-2 justify-center items-center lg:space-x-[20px] lg:px-[25px] lg:py-[22px] rounded-xl">
															<img
																className="w-[20px] h-[20px]"
																src="/icons/print.svg"
																alt=""
															/>
															<p>Print</p>
														</div>
													);
												}}
											/>
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
