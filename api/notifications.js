import { post, get, put, _delete } from "./config";

export const fetchNotifications = async (user) => {
	try {
		const res = await get(`notifications/${user}`, {});

		return { status: res.status, message: res.data };
	} catch (error) {
		console.log(error);
	}
};

export const markAllRead = async (user) => {
	try {
		const res = await post(`notifications/${user}/markAllAsRead`);
		return { status: res.status, message: res.data };
		setNotificationData(data.notifications);
	} catch (error) {
		console.log(error);
	}
};
