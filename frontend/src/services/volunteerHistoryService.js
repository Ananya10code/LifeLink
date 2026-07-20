import axios from "axios";

const API = "http://localhost:8080/api/volunteers";

const getToken = () => localStorage.getItem("token");

export const getVolunteers = (requestId) => {
    return axios.get(
        `${API}/request/${requestId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
};