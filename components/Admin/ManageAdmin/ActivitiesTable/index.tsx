import Image from "next/image";
import { Activity } from "types/complaintTypes.d";

interface ActivitiesTableProps {
	activities: Activity[];
}

const ActivitiesTable: React.FC<ActivitiesTableProps> = ({ activities }) => {
	return (
		<div className="bg-white pt-[18px]">
			<div className="pt-2 w-full">
				<div className="text-[28px] text-start font-medium text-eccblue px-[25px]">Today</div>
				<div className="pt-[36px]">
					<div className="flex text-[18px] justify-between px-[48px] pb-3 border-b-[1px] border-[#BEBEBE]">
						<div>Action</div>
						<div>Username/Greviance ID</div>
						<div>Time</div>
					</div>
				</div>
				<div className="pb-[50px] pt-4">
					{activities.length > 0 ? (
						activities.map(({ id, action, usernameorGID, time }) => (
							<div key={id}>
								<div className="flex flex-row justify-between text-center items-center py-3">
									<div className="flex items-center gap-x-[20px]">
										<div className="relative w-[40px] h-[40px]">
											<Image
												src={`/icons/admin-icons/${action == "Added a new user" ? "add-user" : action == "Deleted a user" ? "delete-user" : action == "Edited a user" ? "edit-user" : action == "Deleted a complaint" ? "deleted-complaint" : action == "Approved a complaint" ? "approved-complaint" : action == "Replied a complaint" ? "replied-complaint" : ""}.svg`}
												alt="admin action"
												layout="fill"
												objectFit="contain"
											/>
										</div>
										<p className="text-[18px]">{action}</p>
									</div>
									<p className="text-[20px] font-semibold text-eccblue">{usernameorGID}</p>
									<p className="text-[18px] text-[#474747] font-medium">{time}</p>
								</div>
							</div>
						))
					) : (
						<div>
							<h2 className="text-[40px] text-center pt-[3] text-eccblue">No Activities</h2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default ActivitiesTable;
