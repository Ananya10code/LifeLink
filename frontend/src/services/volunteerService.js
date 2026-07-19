import axios from "axios";

const API = "http://localhost:8080/api/volunteers";

export const volunteer = (requestId) => {

    const token = localStorage.getItem("token");

    return axios.post(
        `${API}/${requestId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

};