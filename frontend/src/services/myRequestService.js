import axios from "axios";

const API = "http://localhost:8080/api/blood-requests";

const getToken = () => localStorage.getItem("token");

export const getMyRequests = async () => {
    return axios.get(`${API}/my`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};

export const completeRequest = async (id) => {
    return axios.put(
        `${API}/${id}/complete`,
        {},
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
};