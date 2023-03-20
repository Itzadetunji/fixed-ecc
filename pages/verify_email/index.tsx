import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { AsyncSubmitButton } from "../../components";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import Popup, { ErrorPopUp, ResendCodeSuccessfulPopUp } from "../../components/Login/recoverPopUps";
import client from "../api/Services/AxiosClient";
import Joi from "joi";
import jwtDecode from "jwt-decode";
import { checkVerified, sendEmail, verifyEmail } from "api/users";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateCode = (payload: { code: string }) => {
	const schema = Joi.object({
		code: Joi.string().length(4).required().label("Code"),
	});
	return schema.validate(payload);
};

const RecoverPage: NextPage = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [backendError, setBackendError] = useState("");
	const [popup, setPopup] = useState(false);
	const [code, setCode] = useState("");
	const [resendText, setResendText] = useState("");
	const [validationError, setError] = useState("");
	const [resendButtonDisabled, setResendButtonDisabled] = useState(false);

	const router = useRouter();
	//check if the user details are in the cookies. If not redirect the user to the login page
	const user = router.query.id;
	useEffect(() => {
		if (!cookies.user.userId && !user) {
			router.replace("/login");
		}
	}, []);

	const changeValue = ({ currentTarget: input }: { currentTarget: any }) => {
		if ("0123456789".includes(input.value[input.value.length - 1]) || input.value == "") setCode(input.value);
	};

	const resendCode = async () => {
		try {
			setResendButtonDisabled(true);
			const res = await sendEmail(user);
			if (res.status < 400) {
				toast.success(res.message);
				setResendText(res.message);
			} else {
				toast.error(res.message);
				setResendText(res.message);
			}
		} catch (err: any) {
			toast.error("Something went wrong. Could not send code");
		} finally {
			setResendButtonDisabled(false);
		}
	};

	const onSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
			setLoading(true);
			console.log(code);
			const payload = { code: code };
			const { error } = validateCode(payload);
			if (error) {
				setError(error.details[0].message);
			} else {
				setError("");
				const res = await verifyEmail(user, payload);

				if (res.status >= 400) {
					setBackendError(res.message);
					toast.error(res.message);
				}
				if (res.status < 400) {
					toast.success(res.message);
					try {
						const verificationStatus = await checkVerified(user);
						if (!verificationStatus.message.acountVerified) {
							router.replace({ pathname: "/verify", query: { id: user } });
						} else {
							router.replace("/login");
						}
					} catch (error) {
						toast.error("an error occured checking your verification status");
					}
				}

				setBackendError("");
			}
		} catch (err: any) {
			toast.error("An error occured when verifying the OTP. Kindly try again later");
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!cookies.user) router.push("/login");
		else if (cookies.user && !cookies.user.emailVerified) setEmail(cookies.user.email);
		else if (cookies.user && !cookies.user.accountVerified) {
			router.push("/verify");
		}
	}, []);
	return (
		<>
			<ToastContainer />
			<div className="w-screen h-screen poppinsFont hidden lg:grid grid-cols-[47%_53%] overflow-hidden">
				<div className="relative h-screen w-full bg-gradient-to-br from-eccblue to-[#073D79]">
					<img
						className="absolute bottom-0 z-10 w-[208.8px] xl:w-[261px]"
						src="/Images/triangle.svg"
					/>
					<img
						className="absolute bottom-0 ml-[100px] w-[300px] xl:w-[374px]"
						src="/Images/triangle2.svg"
					/>
					<Link href={"/"}>
						<img
							className="w-[98px] ml-[50px] pt-[55px]"
							src="/Images/whiteEccLogo.svg"
						/>
					</Link>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="ml-[50px] mt-[120px] text-white"
					>
						<p className="text-[40px] xl:text-[40px] font-bold">Verify your email</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">A code has been sent to your email address. Kindly input the code to proceed</p>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					exit={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					className="w-full px-[90px] flex flex-col justify-center relative"
				>
					<AnimatePresence>
						{backendError && (
							<ErrorPopUp
								error={backendError}
								setBackendError={setBackendError}
							/>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{resendText && (
							<ResendCodeSuccessfulPopUp
								resendText={resendText}
								setResendText={setResendText}
							/>
						)}
					</AnimatePresence>
					<motion.p
						layout
						className="text-[36px] xl:text-[40px] text-center mb-[15px]"
					>
						Verify your email
					</motion.p>
					<motion.p
						layout
						className="text-eccblue text-center text-[20px] mb-[41px]"
					>
						{email}
					</motion.p>
					<motion.form
						onSubmit={(e) => e.preventDefault()}
						layout
					>
						<div className="flex flex-col gap-y-[5px] mb-15">
							<p className="text-[14px] md:text-[16px] lg:text-[20px]">Verification Code</p>

							<input
								value={code}
								onChange={changeValue}
								className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-0 rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue"
								placeholder="Enter verification code"
								type="text"
								maxLength={4}
							/>
							<AnimatePresence>
								{validationError && (
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0, transition: { duration: 0.15 } }}
										className="text-[#ed4956]"
									>
										{validationError}
									</motion.p>
								)}
							</AnimatePresence>

							<div
								onClick={resendButtonDisabled ? () => null : resendCode}
								style={{ opacity: resendButtonDisabled ? 0.6 : 1 }}
								className="text-eccblue mt-[30px] mb-[40px] cursor-pointer focus:outline-0 max-w-[150px] text-left transition-all"
							>
								Resend Code
							</div>
						</div>

						<AsyncSubmitButton
							text="Verify Email"
							loading={loading}
							onSubmit={onSubmit}
						/>
					</motion.form>
				</motion.div>
			</div>
			{/* Start of mobile design */}
			<div className="lg:hidden bg-eccblue w-full min-h-screen poppinsFont pb-[70px] relative flex flex-col justify-center">
				<Link href={"/"}>
					<img
						className="absolute w-[50px] left-[15px] top-[30px]"
						src="/Images/whiteEccLogo.svg"
					/>
				</Link>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">Verify your email</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">A code has been sent to your email address. Kindly input the code to proceed </p>
					</div>
				</div>
				<AnimatePresence>
					{backendError && (
						<ErrorPopUp
							error={backendError}
							setBackendError={setBackendError}
						/>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{resendText && (
						<ResendCodeSuccessfulPopUp
							resendText={resendText}
							setResendText={setResendText}
						/>
					)}
				</AnimatePresence>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto pt-[40px] pb-[45px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">Verify your email</p>
							<p className="text-eccblue text-center mt-[10px] text-[14px]">{email}</p>
							<form className="mt-[15px]">
								<div className="flex flex-col gap-y-[10px] mb-[40px]">
									<p className="text-[14px] md:text-[16px] lg:text-[20px]">verification code</p>

									<input
										value={code}
										onChange={changeValue}
										className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-0 rounded-[10px] border-2 border-[#C5C5C5] w-full focus:border-eccblue"
										placeholder="please enter verification code"
										type="text"
										maxLength={4}
									/>
									<AnimatePresence>
										{validationError && (
											<motion.p
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0, transition: { duration: 0.15 } }}
												className="text-[#ed4956] text-[12px]"
											>
												{validationError}
											</motion.p>
										)}
									</AnimatePresence>
									<button
										onClick={resendCode}
										disabled={resendButtonDisabled}
										style={{ opacity: resendButtonDisabled ? 0.6 : 1 }}
										className="text-eccblue text-[14px] md:text-[16px] cursor-pointer focus:outline-0 max-w-[150px] text-left transition-all"
									>
										Resend Code
									</button>
								</div>

								<AsyncSubmitButton
									text="Verify Email"
									loading={loading}
									onSubmit={onSubmit}
								/>
							</form>
						</div>
					</div>
				</div>
				<img
					className="absolute bottom-0"
					src="/Images/polygons.svg"
				/>
			</div>
		</>
	);
};

export default RecoverPage;
