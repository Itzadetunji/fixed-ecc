import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

export const ComplaintContext = createContext();
import { getComplaintsUser } from "api/complaints";
import { getUserInfo } from "./../../api/users";

const ComplaintContextProvider = ({ children }) => {
	const [userComplaints, setUserComplaints] = useState([]);
	const [cookie, setCookie] = useCookies();
	const user = cookie.user ? cookie.user.userId : "";
	const token = cookie.token ? cookie.token : "";
	const getUserComplaints = async () => {
		const data = await getComplaintsUser(user, token);

		return data.message;
	};
	const { isLoading, data, status } = useQuery("complaints", getUserComplaints);

	const postUserComplaints = (complaintData) => {
		return null;
	};
	useEffect(() => {
		if (!isLoading && status === "success") {
			setUserComplaints(data);
		}
	}, [isLoading]);

	return <ComplaintContext.Provider value={{ userComplaints, postUserComplaints }}>{children}</ComplaintContext.Provider>;
};

export default ComplaintContextProvider;
