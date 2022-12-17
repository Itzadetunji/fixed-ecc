import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../../../components/Admin/Navs/navWrapper";
import { Admin, Activity } from "types/complaintTypes.d";
import AdminData from "components/Admin/adminData";
import Image from "next/image";
import arrow from "@/icons/arrow.svg";
import calendar from "@/icons/admin-icons/calendar.svg";
import { MutableRefObject } from "react";
import { format } from "date-fns";
import ActivitiesTable from "components/Admin/ManageAdmin/ActivitiesTable";

const Activities = () => {
	const router = useRouter();
	const id = router.query.id;
	const [adminData, setAdminData] = useState<Admin[]>(AdminData);
	const [currentAdmin, setCurrentAdmin] = useState<Admin>();
	const [activities, setActivities] = useState<Activity[]>();

	useEffect(() => {
		const cAdmin = adminData ? adminData.filter((admin) => admin.id == id)[0] : adminData[0];
		setCurrentAdmin(cAdmin);
		setActivities(cAdmin?.activities);
	}, [id]);

	return (
		<Wrapper>
			<div>
				<div className="w-full px-[26px] h-[78px] flex items-center justify-between rounded-t-[20px] bg-eccblue text-white">
					<div className="flex flex-row items-center">
						<div
							className="relative w-[36px] h-[36px]"
							onClick={() => router.back()}
						>
							<Image
								src={arrow}
								alt="Arrow Icon"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h1 className="ml-5 text-[24px] font-medium -tracking-[0.02em]">Activities</h1>
					</div>

					<div className="flex flex-row items-center gap-x-[15px]">
						<h1 className="text-[20px] font-medium -tracking-[0.02em]"> Sort by date</h1>
						<div
							className="relative w-[24px] h-[24px]"
							onClick={() => router.back()}
						>
							<Image
								src={calendar}
								alt="Arrow Icon"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
				{currentAdmin && (
					<div className="pt-3 text-end px-[25px] bg-white">
						<div className="text-end">
							<p className="text-[20px]">{currentAdmin.username}</p>
							<p className="text-[18px] text-[#808080]">{currentAdmin.email}</p>
						</div>
						<div>{<ActivitiesTable activities={activities} />}</div>
					</div>
				)}
			</div>
		</Wrapper>
	);
};

export default Activities;
