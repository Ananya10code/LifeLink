import axios from "axios";

const API = "http://localhost:8080/api/profile";

export const getProfile = () => {

    const token = localStorage.getItem("token");

    return axios.get(API, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const updateProfile = (profile) => {

    const token = localStorage.getItem("token");

    return axios.put(API, profile, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};