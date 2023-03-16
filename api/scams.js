import { get, _delete } from "./config";

export const getScams = async (y) => {
	try {
		const res = await get("scammer", {});
		console.log(res);
		return res.data.data;
	} catch (error) {
		console.log(error);
	}
};
