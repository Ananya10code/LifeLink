import axios from "axios";

const API = "http://localhost:8080/api/profile";

const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`
});

export const getProfile = async () => {
    const response = await axios.get(API, {
        headers: getHeaders()
    });

    return response.data;
};

export const updateProfile = async (profile) => {
    const response = await axios.put(API, profile, {
        headers: getHeaders()
    });

    return response.data;
};