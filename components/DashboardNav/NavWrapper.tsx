import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useState, useContext } from "react";
import test from "node:test";

import { SideNavContext } from "./../Contexts/SideNavContext";

interface NavWrapperProps {
	children: JSX.Element;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const { Open, setIsOpen } = useContext(SideNavContext);

	const openSide = () => {
		setIsOpen(!Open);
	};

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
