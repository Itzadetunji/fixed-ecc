import { createContext, useState } from "react";

export const SideNavContext = createContext();

const SideNavContextProvider = ({ children }) => {
	const [Open, setIsOpen] = useState(false);

	return <SideNavContext.Provider value={{ Open, setIsOpen }}>{children}</SideNavContext.Provider>;
};

export default SideNavContextProvider;
