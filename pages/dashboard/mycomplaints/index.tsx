import type { NextPage } from "next";
import ComplaintsNavBar from "../../../components/DashboardComponents/DashboardProfile/ComplaintsNavBar";
import NavWrapper from "../../../components/DashboardNav/NavWrapper";
import { useState, useContext } from "react";
import ComplaintList from "../../../components/DashboardComponents/DashboardProfile/ComplaintList";
import { SideNavContext } from "components/Contexts/SideNavContext";
const Mycomplaints: NextPage = () => {
	const [page, setPage] = useState("All");
	const [pageNumber, setPageNumber] = useState(1);
	const { Open } = useContext(SideNavContext);
	return (
		<NavWrapper>
			<div className={`bg-white  min-h-screen pb-10 ${Open ? `overflow-hidden h-screen` : `h-full`} `}>
				<ComplaintsNavBar
					page={page}
					setPage={setPage}
					setPageNumber={setPageNumber}
				/>
				<ComplaintList
					page={page}
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
				/>
			</div>
		</NavWrapper>
	);
};

export default Mycomplaints;
