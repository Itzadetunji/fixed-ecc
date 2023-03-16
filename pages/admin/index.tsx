import Wrapper from "../../components/Admin/Navs/navWrapper";
import UserStats from "../../components/Admin/Dashboard/UserStats";
import ComplaintStats from "../../components/Admin/Dashboard/ComplaintStats";
import userStats from "./../../components/Admin/userStats";
import ComplaintStatsData from "./../../components/Admin/ComplaintStats";
import RecentActivity from "../../components/Admin/Dashboard/RecentActivity";
import RecentShares from "./../../components/Admin/Dashboard/RecentShares/index";
import Geographics from "../../components/Admin/Dashboard/Geographics";
import ComplaintGeographics from "../../components/Admin/Dashboard/ComplaintGeographics";
import { states } from "../../components/Data/VerificationData/StatesAndLga";

const Admin = () => {
	return (
		<Wrapper>
			<div>
				<h1 className="text-eccblue text-[28px] font-regular">Dashboard</h1>
				<div className="w-full mb-[20px]">
					<UserStats stats={userStats} />
				</div>
				<div className="w-full mb-[20px]">
					<ComplaintStats stats={ComplaintStatsData} />
				</div>
				<div className="flex items-center flex-col lg:flex-row lg:justify-between mb-[20px] gap-x-6">
					<RecentActivity />
					<RecentShares />
				</div>
				<div className="lg:w-full w-[80%] items-center flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0 lg:gap-x-6">
					<Geographics states={states} />
					<ComplaintGeographics states={states} />
				</div>
			</div>
		</Wrapper>
	);
};

export default Admin;
