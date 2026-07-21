import axios from "axios";

const API = "http://localhost:8080/api/admin";

const getToken = () => localStorage.getItem("token");

export const getDashboard = () => {

    return axios.get(
        `${API}/dashboard`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

};