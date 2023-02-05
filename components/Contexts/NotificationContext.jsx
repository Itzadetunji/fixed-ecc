import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import client from "../../pages/api/Services/AxiosClient";

import { fetchNotifications, markAllRead } from "./../../api/notifications";

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
	const [notificationData, setNotificationData] = useState([]);
	const [cookies, setCookies] = useCookies(["user"]);
	const [newNotifications, setNewNotifications] = useState(false);
	const user = cookies.user ? cookies.user.userId : "";

	const fetchNotificationData = async () => {
		try {
			const res = await fetchNotifications(user);

			setNotificationData(res.message.notifications);
		} catch (error) {
			console.log(error);
		}
	};

	const markAllNotificationsAsRead = async () => {
		try {
			const res = await markAllRead(user);

			setNotificationData(res.message.notifications);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setNewNotifications(notificationData.filter((notification) => notification.status == "unread").length > 0);
	}, [notificationData]);

	return <NotificationContext.Provider value={{ notificationData, fetchNotificationData, newNotifications, markAllNotificationsAsRead }}>{children}</NotificationContext.Provider>;
};

export default NotificationContextProvider;
