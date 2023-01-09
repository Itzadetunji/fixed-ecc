import { post, get, put, _delete } from "./config";
import jwt_decode from "jwt-decode";
export const authenticate = async (payload) => {
	try {
		const res = await post("auth", {}, payload);
		console.log(res);
		return { status: res.status, message: res.data };
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
export const verifyEmail = async (payload) => {
	try {
		const res = post(`users/verify_email/${user}`, payload);
		return { status: res.status, message: res.data };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
export const sendEmail = async (user) => {
	try {
		const res = await post(`users/verify_email/${user}/resend_code`);
		return { status: res.status, message: res.data };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
export const verifyAccount = async (payload, user) => {
	try {
		const res = await post(`users/verify/${user}`, {}, payload);
		return { status: res.status, message: jwt_decode(res.data.token) };
	} catch (error) {
		return { status: error.response.status, message: error.response.data.message };
	}
};
