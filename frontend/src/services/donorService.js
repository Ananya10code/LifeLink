import axios from "axios";

const API_URL = "http://localhost:8080/api/donors";

export const getDonors = async (bloodGroup = "", city = "") => {

    const token = localStorage.getItem("token");

    const response = await axios.get(API_URL, {
        params: {
            bloodGroup,
            city
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};