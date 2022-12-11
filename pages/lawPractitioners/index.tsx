import type { NextPage } from "next";
import { Footer } from "../../components";
import { NavBar } from "../../components";
import JoinLawyersSection from "../../Sections/JoinLawyersSection";
import MakeThingsRightSection from "../../Sections/MakeThingsRightSection";
import ResolveComplaintsSection from "../../Sections/ResolveComplaints";
import { useState } from "react";
import Menu from "components/MenuComp";

const LawPracitioners: NextPage = () => {
	const [expand, setExpand] = useState(false);
	return (
		<div>
			<div>
				{expand && (
					<Menu
						expand={expand}
						setExpand={setExpand}
					/>
				)}
			</div>
			{!expand && (
				<div>
					<NavBar
						expand={expand}
						setExpand={setExpand}
					/>
					<div className="lg:mt-[200px]">
						<ResolveComplaintsSection />
						<MakeThingsRightSection />
						<JoinLawyersSection />
						<Footer />
					</div>
				</div>
			)}
		</div>
	);
};
export default LawPracitioners;
