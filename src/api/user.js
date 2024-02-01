import api from "./axios";

const url = '/user';

const getRegisteredEvents = async () => {
    try {
        const response = await api.get(`${url}/get-events`);
        const { data: events, message } = response.data;

        return { events, message }
    } catch (err) {
        return { error: err }
    }
}

const eventRegister = async (data) => {
    try {
        const response = await api.post(`${url}/event-register`, data);

        const { message } = response.data;

        return { message };
    } catch (err) {
        return { error: err }
    }
}

export {
    eventRegister,
    getRegisteredEvents
}