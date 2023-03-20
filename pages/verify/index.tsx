import type { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { states } from "../../components/Data/VerificationData/StatesAndLga.js";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { validateVerifyInputs } from "../../components/Verification/FormValidation";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { verifyAccount, sendEmail, checkVerified } from "api/users.js";
import VerificationInputGroup from "../../components/Verification/VerificationInputGroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginInputGroup } from "../../components/Login/LoginInputGroup";
import { AsyncSubmitButton } from "../../components";

const VerificationPage: NextPage = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dob, setDob] = useState("");
	const [state, setState] = useState("");
	const [NIN, setNIN] = useState("");
	const [address, setAddress] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [loading, setLoading] = useState(false);

	const inputContainerRef = useRef<null | HTMLInputElement>(null);

	const [errors, setErrors] = useState({
		phoneNumber: "",
		dob: "",
		state: "",
		NIN: "",
		address: "",
		firstName: "",
		lastName: "",
		middleName: "",
	});

	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const router = useRouter();

	//check if the user details are in the cookies. If not redirect the user to the login page
	const user = router.query.id;
	useEffect(() => {
		if (!cookies.user.userId && !user) {
			router.replace("/login");
		}
	}, []);
	const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		const valid_characters = "1234567890";
		if (valid_characters.includes(e.target.value[e.target.value.length - 1]) || e.target.value == "") setPhoneNumber(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const { error } = validateVerifyInputs({
			phoneNumber,
			dob,
			state,
			NIN,
			address,
			firstName,
			lastName,
			middleName,
		});

		if (error) {
			const { details } = error;
			const errors = {
				phoneNumber: details.find((item: any) => item.path[0] == "phoneNumber") ? details.find((item: any) => item.path[0] == "phoneNumber")!.message : "",
				dob: details.find((item: any) => item.path[0] == "dob") ? details.find((item: any) => item.path[0] == "dob")!.message : "",
				state: details.find((item: any) => item.path[0] == "state") ? details.find((item: any) => item.path[0] == "state")!.message : "",
				NIN: details.find((item: any) => item.path[0] == "NIN") ? details.find((item: any) => item.path[0] == "NIN")!.message : "",
				address: details.find((item: any) => item.path[0] == "address") ? details.find((item: any) => item.path[0] == "address")!.message : "",
				photoIdUrl: details.find((item: any) => item.path[0] == "photoIdUrl") ? details.find((item: any) => item.path[0] == "photoIdUrl")!.message : "",
				firstName: details.find((item: any) => item.path[0] == "firstName") ? details.find((item: any) => item.path[0] == "firstName")!.message : "",
				lastName: details.find((item: any) => item.path[0] == "lastName") ? details.find((item: any) => item.path[0] == "lastName")!.message : "",
				middleName: details.find((item: any) => item.path[0] == "middleName") ? details.find((item: any) => item.path[0] == "middleName")!.message : "",
			};
			const firstError = details[0].path[0];
			console.log(firstError);
			if (firstError != "photoIdUrl") {
				console.log(firstError);
				inputContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
			}
			setErrors(errors);
		}
		if (!error) {
			setErrors({
				phoneNumber: "",
				dob: "",
				state: "",
				NIN: "",
				address: "",
				firstName: "",
				lastName: "",
				middleName: "",
			});
			const payload = { dob, phoneNumber, address, NIN, state, firstName, lastName, middleName };

			try {
				setLoading(true);
				const res = await verifyAccount(payload, user);
				if (res.status >= 400 && res.message) {
					toast.error(res.message);
				} else if (res.status < 400) {
					setCookie("user", res.message);
					const verificationStatus = await checkVerified(user);
					console.log(!verificationStatus.message.emailVerified);
					if (!verificationStatus.message.emailVerified) {
						router.replace({ pathname: "/verify_email", query: { id: user } });
					} else {
						router.replace("/login");
					}
				}
			} catch (err: any) {
				toast.error("Something went wrong on the server");
			} finally {
				setLoading(false);
			}
		}
	};
	return (
		<div className="overflow-hidden">
			<ToastContainer />
			<div className="w-screen h-screen poppinsFont hidden lg:grid grid-cols-[47%_53%]">
				<div className="relative h-screen w-full bg-gradient-to-br from-eccblue to-[#073D79]">
					<img
						className="absolute bottom-0 z-10 w-[208.8px] xl:w-[261px]"
						src="/Images/triangle.svg"
					/>
					<img
						className="absolute bottom-0 ml-[100px] w-[300px] xl:w-[374px]"
						src="/Images/triangle2.svg"
					/>
					<img
						className="w-[98px] ml-[50px] pt-[55px]"
						src="/Images/whiteEccLogo.svg"
					/>
					<div className="ml-[50px] mt-[120px] text-white">
						<p className="text-[40px] xl:text-[40px] font-bold">Verify yourself </p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Verify yourself using the kyc so that we can verify your identity</p>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					className="w-full px-[90px] flex flex-col overflow-y-auto py-[73px]"
				>
					<p className="text-[40px] font-medium text-center mb-4">Verify yourself</p>
					<div className="flex w-full flex-col gap-y-4">
						<VerificationInputGroup
							label="First Name"
							placeholder="Enter First Name"
							value={firstName}
							setValue={setFirstName}
							type="text"
							errorMessage={errors.firstName}
						/>
						<VerificationInputGroup
							label="Last Name"
							placeholder="Enter Last Name"
							value={lastName}
							setValue={setLastName}
							type="text"
							errorMessage={errors.lastName}
						/>
						<VerificationInputGroup
							label="Middle Name (Optional)"
							placeholder="Enter Middle Name"
							value={middleName}
							setValue={setMiddleName}
							type="text"
							errorMessage={errors.middleName}
						/>
						<VerificationInputGroup
							label="Phone Number"
							placeholder="Enter Phone Number"
							value={phoneNumber}
							setValue={setPhoneNumber}
							maxlength={11}
							type="text"
							onChange={onPhoneNumberChange}
							errorMessage={errors.phoneNumber}
						/>
						<div className="flex lg:flex-row flex-col gap-x-4 w-full">
							<div className="w-1/2 ">
								<VerificationInputGroup
									label="Date Of Birth"
									placeholder="DD/MM/YYYY"
									value={dob}
									setValue={setDob}
									type="date"
									max={`${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`}
									errorMessage={errors.dob}
								/>
							</div>
							<div className="flex flex-col w-1/2">
								<p className="text-[14px] lg:text-[20px]">State</p>
								<select
									value={state}
									onChange={(e) => setState(e.target.value)}
									style={{ color: state ? "black" : "#9ca3af" }}
									className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[23px] px-[20px] h-full max-h-[73px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[18.5px] w-full focus:border-[#0B63C5] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
								>
									<option
										value=""
										selected
									>
										Choose State
									</option>
									{states.map((state, index) => (
										<option
											key={index}
											className="text-black"
											value={state.name}
										>
											{state.name}
										</option>
									))}
								</select>
								{errors.state && (
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
									>
										{errors.state}
									</motion.p>
								)}
							</div>
						</div>

						<VerificationInputGroup
							label="Address"
							placeholder="Enter Valid Address"
							value={address}
							setValue={setAddress}
							type="text"
							className="col-span-2"
							errorMessage={errors.address}
						/>
						<VerificationInputGroup
							label="National Identification Number (NIN)"
							placeholder="Enter NIN"
							value={NIN}
							setValue={setNIN}
							maxlength={11}
							type="text"
							errorMessage={errors.NIN}
						/>
					</div>
					<AsyncSubmitButton
						onSubmit={onSubmit}
						text="Continue"
						loading={loading}
					/>
					{/* <div
						onClick={onSubmit}
						className="my-[63px] mx-[12.5px] lg:mx-auto rounded-[12px] bg-[#0B63C5] lg:w-full transition-[150ms] active:scale-95 "
					>
						<p className="text-center text-white text-[20px] font-[600] flex items-center justify-center py-[14.5px] cursor-pointer">Continue</p>
					</div> */}
				</motion.div>
			</div>
			{/*Start of mobile design*/}
			<div className="lg:hidden bg-eccblue w-full h-full min-h-screen poppinsFont pb-[70px] relative flex flex-col ">
				<Link href={"/"}>
					<img
						className="absolute w-[50px] left-[15px] top-[30px]"
						src="/Images/whiteEccLogo.svg"
					/>
				</Link>
				<div className="pl-[17px] w-full py-[30px]">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">Verify Yourself</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">Verify yourself using the kyc jgkfdgjrggjfg iufejf</p>
					</div>
				</div>

				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto pt-[40px] pb-[45px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">Verify Yourself</p>

							<form className="mt-[15px]">
								<div className="flex flex-col gap-y-[35px]">
									<LoginInputGroup
										label="First Name"
										placeholder="Enter Password"
										value={firstName}
										setValue={setFirstName}
										type="text"
										errorMessage={errors.firstName}
									/>
									<LoginInputGroup
										label="Last Name"
										placeholder="Enter Last Name"
										value={lastName}
										setValue={setLastName}
										type="text"
										errorMessage={errors.lastName}
									/>
									<LoginInputGroup
										label="Middle Name"
										placeholder="Enter Middle Name"
										value={middleName}
										setValue={setMiddleName}
										type="text"
										errorMessage={errors.middleName}
									/>
									<LoginInputGroup
										label="Phone Number"
										placeholder="Enter Phone Number"
										value={phoneNumber}
										setValue={setPhoneNumber}
										type="text"
										errorMessage={errors.phoneNumber}
									/>

									<div className="flex lg:flex-row flex-row gap-x-4 w-full">
										<div className="w-1/2 ">
											<VerificationInputGroup
												label="Date Of Birth"
												placeholder="DD/MM/YYYY"
												value={dob}
												setValue={setDob}
												type="date"
												max={`${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`}
												errorMessage={errors.dob}
											/>
										</div>
										<div className="flex flex-col w-1/2">
											<p className="text-[14px] lg:text-[20px]">State</p>
											<select
												value={state}
												onChange={(e) => setState(e.target.value)}
												style={{ color: state ? "black" : "#9ca3af" }}
												className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[23px] px-[20px] h-full max-h-[73px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[18.5px] w-full focus:border-[#0B63C5] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
											>
												<option
													value=""
													selected
												>
													Choose State
												</option>
												{states.map((state, index) => (
													<option
														key={index}
														className="text-black"
														value={state.name}
													>
														{state.name}
													</option>
												))}
											</select>
											{errors.state && (
												<motion.p
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
												>
													{errors.state}
												</motion.p>
											)}
										</div>
									</div>
									<LoginInputGroup
										label="Address"
										placeholder="Enter Address"
										value={address}
										setValue={setAddress}
										type="text"
										errorMessage={errors.address}
									/>
									<LoginInputGroup
										label="National Identity Number(NIN)"
										placeholder="Enter NIN"
										value={NIN}
										setValue={setNIN}
										type="text"
										errorMessage={errors.NIN}
									/>

									<div className="mt-[30px]">
										<AsyncSubmitButton
											onSubmit={onSubmit}
											text="Continue"
											loading={loading}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<img
					className="absolute bottom-0"
					src="/Images/polygons.svg"
				/>
			</div>
		</div>
	);
};

export default VerificationPage;
