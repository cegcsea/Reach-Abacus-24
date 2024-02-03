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

const getRegisteredWorkshops = async () => {
    try {
        const response = await api.get(`${url}/get-workshops`);
        const { data: workshops, message } = response.data;

        return { workshops, message }
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

const workshopRegister = async (data) => {
    try {
        const response = await api.post(`${url}/workshop-register`, data);

        const { message } = response.data;

        return { message };
    } catch (err) {
        return { error: err }
    }
}

const verifyWorkshopPayment = async (data) => {
    try {
        const response = await api.post(`${url}/verify-workshop-payment-details`, data);

        const { message, data: payment } = response.data;

        return { message, payment };
    } catch (err) {
        return { error: err }
    }
}

const verifyWorkshopPayScreenshot = async (data) => {
    try {
        const response = await api.post(`${url}/workshop-payment-screenshot/${data.workshopPaymentId}`, data.formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        const { message } = response.data;

        return { message };
    } catch (err) {
        return { error: err }
    }
}

export {
    eventRegister,
    getRegisteredEvents,
    workshopRegister,
    getRegisteredWorkshops,
    verifyWorkshopPayment,
    verifyWorkshopPayScreenshot
}