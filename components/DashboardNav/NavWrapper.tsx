import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useState, useContext, useEffect } from "react";
import test from "node:test";
import { SideNavContext } from "./../Contexts/SideNavContext";
import { useCookies } from "react-cookie";
import { getUserInfo } from "./../../api/users";
import { UserContext } from "components/Contexts/UserContext";
import { useRouter } from "next/router";
import { Data } from "victory";
interface NavWrapperProps {
	children: JSX.Element;
}
const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const { Open, setIsOpen } = useContext(SideNavContext);
	const { user, setUser } = useContext(UserContext);
	const [cookie, setCookie, deleteCookie] = useCookies();
	const router = useRouter();
	const openSide = () => {
		setIsOpen(!Open);
	};

	useEffect(() => {
		document.body.style.overflow = "auto";
		if (cookie.expiry && cookie.expiry.time < Date.now()) {
			router.replace("/login");
			deleteCookie("expiry");
		}

		if (cookie.user && cookie.token && cookie.expiry && cookie.expiry.time > Date.now()) {
			const getUserDetails = async () => {
				const user = cookie.user ? cookie.user.userId : "";
				console.log(user, cookie.token);
				try {
					const res = await getUserInfo(user, cookie.token);
					const data = res.getNeededInfo();
					setUser(data);
				} catch (error) {
					console.log(error);
				}
			};
			try {
				getUserDetails();
			} catch (error) {
				console.log(error);
			}
		} else {
			router.replace("/login");
		}
	}, []);

	return (
		<div className="flex flex-row">
			<SideNav
				openSide={openSide}
				open={Open}
			/>
			<div className="flex flex-col w-full h-full">
				<TopNav openSide={openSide} />

				<div className="lg:block hidden">
					<div className="pl-[295px] pt-[115px] w-full h-screen min-h-screen min-w-screen bg-clearblue">
						<div className={`px-[30px] pt-[55px] bg-clearblue w-full min-h-[calc(100vh-126px)] pb-[43px]`}>{children}</div>
					</div>
				</div>

				<div
					onClick={() => setIsOpen(false)}
					className="  lg:hidden mt-[56.7px] min-h-screen    w-full h-full bg-clearblue"
				>
					<div className={`w-full absolute -z-10 lg:hidden   h-full  ${Open && ` bg-black z-40  opacity-50`}`}></div>
					{children}
				</div>
			</div>
		</div>
	);
};
export default NavWrapper;
