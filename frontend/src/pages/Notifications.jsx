import { useEffect, useState } from "react";
import {
    getNotifications,
    markAsRead
} from "../services/notificationService";

function Notifications() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {

        try {

            const response = await getNotifications();

            setNotifications(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load notifications");

        }

    };

    const handleRead = async (id) => {

        try {

            await markAsRead(id);

            fetchNotifications();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <h1 className="text-3xl font-bold text-red-600 mb-8">
                Notifications
            </h1>

            <div className="space-y-4">

                {notifications.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
                        No notifications.
                    </div>

                ) : (

                    notifications.map(notification => (

                        <div
                            key={notification.id}
                            onClick={() => handleRead(notification.id)}
                            className={`p-5 rounded-xl shadow cursor-pointer transition
                                ${notification.readStatus
                                    ? "bg-white"
                                    : "bg-red-100 border-l-4 border-red-600"
                                }`}
                        >

                            <div className="flex justify-between">

                                <p className="font-semibold">
                                    {notification.message}
                                </p>

                                {!notification.readStatus && (

                                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                                        NEW
                                    </span>

                                )}

                            </div>

                            <p className="text-gray-500 text-sm mt-2">
                                {new Date(notification.createdAt).toLocaleString()}
                            </p>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

}

export default Notifications;