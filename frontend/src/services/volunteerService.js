import axios from "axios";

const API_URL = "http://localhost:8080/api/volunteer";

export const volunteer = (requestId) => {
    const token = localStorage.getItem("token");

    return axios.post(
        `${API_URL}/${requestId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const getVolunteerCount = (requestId) => {
    const token = localStorage.getItem("token");

    return axios.get(
        `${API_URL}/count/${requestId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};