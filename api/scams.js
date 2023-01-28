import { get, _delete } from "./config";
import { useQuery } from "react-query";

export const getScams = () => {
	const _getScams = async () => {
		try {
			const res = await get("scam", {});
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	const { data, state } = useQuery("scams", _getScams);
	console.log(data, state);
};
