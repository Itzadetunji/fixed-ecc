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

export const getComplaintsUser = async (user, token) => {
	try {
		const data = await get(`complaints/${user}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		console.log(data);
		return { status: data.status, message: data.data.complaints };
	} catch (error) {
		console.log(error);
	}
};

export const createComplaint = async (payload, token) => {
	try {
		const res = await post(
			"complaints/",
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			},
			payload
		);
		console.log(res);
		return { status: data.status, message: "success" };
	} catch (error) {
		throw new Error("an error occured");
	}
};
