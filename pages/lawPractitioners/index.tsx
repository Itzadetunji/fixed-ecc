import type { NextPage } from "next";
import { Footer } from "../../components";
import { NavBar } from "../../components";
import JoinLawyersSection from "../../Sections/JoinLawyersSection";
import MakeThingsRightSection from "../../Sections/MakeThingsRightSection";
import ResolveComplaintsSection from "../../Sections/ResolveComplaints";

const LawPracitioners: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className="lg:mt-[200px]">
				<ResolveComplaintsSection />
				<MakeThingsRightSection />
				<JoinLawyersSection />
				<Footer />
			</div>
		</>
	);
};
export default LawPracitioners;
