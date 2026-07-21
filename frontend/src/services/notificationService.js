import api from "./api";

export const getNotifications = () => {
    return api.get("/notifications");
};

export const getUnreadCount = () => {
    return api.get("/notifications/unread-count");
};

export const markAsRead = (id) => {
    return api.put(`/notifications/${id}/read`);
};