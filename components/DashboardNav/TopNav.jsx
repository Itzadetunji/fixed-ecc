import Link from "next/link";
import Notifications from "./Notifications";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import moment from "moment";
import { UserContext } from "../Contexts/UserContext";
import { motion } from "framer-motion";
import Image from "next/image";

const NavTitle = ({ text }) => {
	return (
		<motion.p
			initial={{ opacity: 0, scale: 0.92 }}
			animate={{ opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeIn" } }}
			className="font-medium text-[12px] sm:text-xl lg:text-[24px] text-eccblue relative"
		>
			{text}
		</motion.p>
	);
};

const TopNav = (props) => {
	const [cookie, setCookie] = useCookies(["user"]);
	const router = useRouter();

	const { user, setUser } = useContext(UserContext);
	const currentDate = moment().format("ddd. Do MMMM, YYYY");
	const [currentPath, setCurrentPath] = useState(router.pathname);
	useEffect(() => {
		// if (!cookie.user) router.replace("/login");
		// console.log(user);
		// setUser(cookie.user)
	}, []);
	useEffect(() => {
		setCurrentPath(router.pathname);
	}, [router.pathname]);

	const getCurrentPage = (currentPath) => {
		// const currentPath = router.pathname;
		if (currentPath && currentPath.startsWith("/dashboard/notification")) return <NavTitle text="My Notifications" />;
		switch (currentPath) {
			case "/dashboard":
				return <NavTitle text="Dashboard" />;
			case "/dashboard/notifications":
				return <NavTitle text="My Notifications" />;
			case "/dashboard/notificationDetails":
				return <NavTitle text="My Notifications" />;
			case "/dashboard/profile":
				return <NavTitle text="My Profile" />;
			case "/dashboard/mycomplaints":
				return <NavTitle text="My Complaints" />;
			case "/dashboard/talktoalawyer":
				return <NavTitle text="Dashboard" />;
			case "/dashboard/hirealawyer":
				return <NavTitle text="Hire A Lawyer" />;
			case "/dashboard/help":
				return <NavTitle text="Help" />;
		}
	};
	return (
		<>
			<div className="lg:block hidden">
				<div
					style={{ zIndex: 20 }}
					className="fixed left-[274px] top-0 w-[calc(100%-274px)] h-[110px] bg-white pl-[35px] pt-[0px] pr-[66px] flex justify-between items-center poppinsFont  "
				>
					<div>
						{getCurrentPage(currentPath)}
						<p className="font-medium text-[18px] text-[#7A797D] mt-[2px]">{currentDate}</p>
					</div>
					<div className="flex items-center lg:gap-x-[30px] xl:gap-x-[60px]">
						<Notifications />
						<div className="flex gap-x-[21px]">
							<div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
								<Link href={"/dashboard/profile"}>
									<Image
										src={user.profilePic || "/Images/profilePic.png"}
										layout="fill"
										objectFit="contain"
										alt="profile picture"
									/>
								</Link>
							</div>
							<div className="flex flex-col items-start ">
								<p className="font-semibold opacity-70 text-[20px]">{`${user.firstName} ${user.lastName}`}</p>
								<p className="font-semibold text-[14px] relative ">
									<span className="opacity-70">Member since</span> <span className="text-eccblue">{new Date(user.createdAt).getFullYear()}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*the mobile screen starts here */}
			<div className="lg:hidden">
				<div className="w-full max-h-[57.3px] bg-white fixed z-20 flex flex-row justify-between p-3 sm:p-5">
					<div className="flex flex-row items-center space-x-[11px] sm:space-x-[15px]">
						<button onClick={props.openSide}>
							<div className="relative w-[24px] sm:w-[30px] h-[24px] sm:h-[30px]">
								<Image
									src="/icons/menu-01.svg"
									layout="fill"
									objectFit="contain"
									alt="menu icon"
								/>
							</div>
						</button>
						<div>
							<h2 className="font-medium text-eccblue">{getCurrentPage(currentPath)}</h2>
							<h2 className="font-medium text-[9px] sm:text-[11px] text-[#7A797D] mt-[2px]">{currentDate}</h2>
						</div>
					</div>
					<div className="flex flex-row items-center ml-5">
						<Notifications newNotifications={false} />
						<div className="flex gap-x-2 sm:gap-x-4 items-center ml-2 sm:ml-5">
							<div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
								<Link href={"/dashboard/profile"}>
									<Image
										src={user.profilePic || "/Images/profilePic.png"}
										layout="fill"
										objectFit="contain"
										alt="menu icon"
									/>
								</Link>
							</div>
							<div className="flex flex-col items-start ">
								<p className="font-semibold opacity-70 text-[11px] sm:text-[14px]">{`${user.firstName} ${user.lastName}`}</p>
								<p className="font-semibold text-[9px] sm:text-[11px] relative tracking-[-0.02em]">
									<span className="opacity-70">Member since</span> <span className="text-eccblue">{new Date(user.createdAt).getFullYear()}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default TopNav;
