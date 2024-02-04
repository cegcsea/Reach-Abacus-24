import Cookies from "js-cookie";
import api from "./axios";

const url = '/user';

const abacusLogin = async (data) => {
    try {
        const response = await api.post(`${url}/login`, data);

        const { message, data: responseData } = response.data;

        if (responseData.token) Cookies.set("token", responseData.token);

        return { ...responseData, message }
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

const getAbacusUser = async () => {
    try {
        const responseUser = await api.get(`${url}/profile`);
        const { data: user, message } = responseUser.data;

        return { user, message }
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

const getAbacusRegiserLink = async (data) => {
    try {
        const response = await api.post(`${url}/get-registration-link`, data);

        const { link, message } = response.data;

        return { link, message };
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

const abacusRegister = async (data) => {
    try {
        const response = await api.post(`${url}/register/${data.email}/${data.token}`, data);

        const { data: responseData, message } = response.data;

        if (responseData.token) Cookies.set("token", responseData.token);

        return { ...responseData, message }
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

const getAbacusForgotPasswordLink = async (data) => {
    try {
        const response = await api.post(`${url}/get-password-reset-link`, data);

        const { link, message } = response.data;

        return { link, message };
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

const resetForgottenPassword = async (data) => {
    try {
        const response = await api.post(`${url}/reset-password/${data.userId}/${data.token}`, data);

        const { message } = response.data;

        return { message };
    } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
    }
}

export {
    abacusLogin,
    getAbacusUser,
    getAbacusRegiserLink,
    abacusRegister,
    getAbacusForgotPasswordLink,
    resetForgottenPassword
}