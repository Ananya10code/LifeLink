import api from "./api";

export const createBloodRequest = (request) => {
    return api.post("/blood-requests", request);
};

export const getBloodRequests = () => {
    return api.get("/blood-requests");
};