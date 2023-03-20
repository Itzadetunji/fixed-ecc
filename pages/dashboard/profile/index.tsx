import WebcamPort from "components/DashboardComponents/DashboardProfile/Webcam";
import ProfileCard from "../../../components/DashboardComponents/DashboardProfile/ProfileCard";
import NavWrapper from "../../../components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../../Sections/ComplaintsCardSection";
import { WebCamContext } from "components/Contexts/WebCamContext";
import { useContext } from "react";
import * as React from "react";

const Profile: React.FC = () => {
	const { webCamShowing, setWebCamShowing } = useContext(WebCamContext);
	return (
		<div>
			<NavWrapper>
				<div className=" flex items-center justify-center ">
					{webCamShowing && (
						<div className="h-full z-40 w-screen pb-[30px]  flex items-center justify-center">
							<WebcamPort setWebCamShowing={setWebCamShowing} />
						</div>
					)}
					{!webCamShowing && (
						<>
							<div className="lg:block hidden">
								<div className="grid xl:gap-x-[48px] xl:grid-cols-[auto_400px] w-full">
									<ProfileCard />
									<div className="lg:hidden xl:block">
										<ComplaintsCardSection />
									</div>
								</div>
							</div>
							<div className="lg:hidden">
								<ProfileCard />
							</div>
						</>
					)}
				</div>
			</NavWrapper>
		</div>
	);
};

export default Profile;
