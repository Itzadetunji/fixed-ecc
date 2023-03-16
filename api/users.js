import { post, get, put, _delete } from "./config";
import jwt_decode from "jwt-decode";
export const authenticate = async (payload) => {
	try {
		const res = await post("auth", {}, payload);
		console.log(res.test.cookie);

		let data = {};
		if (res.data.token) {
			data = jwt_decode(res.data.token);
		} else data = res.data;

		return { status: res.status, message: data, token: res.data.token };
	} catch (error) {
		console.log(error);
		return { status: error.response.status, message: error.response.data.message };
	}
};

export const createUser = async (payload) => {
	try {
		const res = await post("users", {}, payload);
		return { status: res.status, message: res.data };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};

export const verifyEmail = async (user, payload) => {
	try {
		const res = await post(`users/verify_email/${user}`, {}, payload);
		console.log(res);
		return { status: res.status, message: jwt_decode(res.data.token) };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
export const checkVerified = async (user) => {
	try {
		const res = await post(`auth/is_verified/${user}`);
		return { status: res.status, message: res.data };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
export const sendEmail = async (user) => {
	try {
		const res = await post(`users/verify_email/${user}/resend_code`);
		console.log(res);
		return { status: res.status, message: res.data.message };
	} catch (error) {
		console.log(error);
		return { status: error.response.status, message: error.response.data.message };
	}
};
export const verifyAccount = async (payload, user) => {
	try {
		const res = await post(`users/verify/${user}`, {}, payload);
		console.log(res);
		return { status: res.status, message: jwt_decode(res.data.token) };
	} catch (error) {
		console.log(error);
		return { status: error.response.status, message: error.response.data.message };
	}
};

export const getUserInfo = async (user, token) => {
	try {
		const res = await get(`users/${user}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		return {
			status: res.status,
			message: res.data.data,
			getNeededInfo: function () {
				if (res.data.data) {
					const data = res.data.data;
					const DataObject = { firstName: data.firstName, lastName: data.lastName, email: data.email, phoneNumber: data.phoneNumber, createdAt: data.createdAt, address: data.address, state: data.state };
					return DataObject;
				} else return {};
			},
		};
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
