import { createContext, useState, useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useCookies } from "react-cookie";

export const ComplaintContext = createContext();
import { getComplaintsUser, createComplaint } from "api/complaints";
import { getUserInfo } from "./../../api/users";
import { ToastContainer, toast } from "react-toastify";
import { totalmem } from "os";

const ComplaintContextProvider = ({ children }) => {
	const queryClient = useQueryClient();
	const [createResult, setCreateResult] = useState("");

	const [userComplaints, setUserComplaints] = useState([]);
	const [cookie, setCookie] = useCookies();
	const user = cookie.user ? cookie.user.userId : "";
	const token = cookie.token ? cookie.token : "";

	const { mutate: postUserComplaints } = useMutation((payload) => createComplaint(payload, token), {
		onError(err) {
			setCreateResult({ error: true, message: "could not create complaint" });
		},
		onSuccess(data) {
			setCreateResult({ error: false, message: "complaint successfully created" });
		},
		onSettled() {
			queryClient.invalidateQueries("complaints");
		},
	});
	const getUserComplaints = async () => {
		const data = await getComplaintsUser(user, token);

		return data.message;
	};
	const { isLoading, data, status } = useQuery("complaints", getUserComplaints);

	useEffect(() => {
		setUserComplaints(data);
	}, []);

	return <ComplaintContext.Provider value={{ userComplaints, postUserComplaints, createResult }}>{children}</ComplaintContext.Provider>;
};

export default ComplaintContextProvider;
