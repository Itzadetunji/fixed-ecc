import { useQuery, useMutation, useQueryClient } from "react-query";
import { get, post, put, _delete } from "./config";

export const _getComplaints = async () => {
	try {
		const data = await get("complaints");
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const createComplaint = async (auth) => {};
