import { get, post, put, _delete } from "./config";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Data } from "victory";

export const getScams = () => {
	const _getScams = async () => {
		try {
			const res = await get("scam", {});
			return res;
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const { data, state } = useQuery("scams", _getScams);
	console.log(data, state);
};
