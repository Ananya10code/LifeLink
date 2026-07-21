import { useEffect, useState } from "react";
import { getDashboard } from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalDonors: 0,
        totalRequests: 0,
        openRequests: 0,
        completedRequests: 0,
        totalVolunteers: 0
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {

        try {

            const response = await getDashboard();

            setStats(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load dashboard");

        }

    };

    const Card = ({ title, value, color }) => (
        <div className={`rounded-xl shadow-lg p-6 text-white ${color}`}>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-4xl font-bold mt-3">{value}</p>
        </div>
    );

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-red-600 mb-8">
                Admin Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <Card
                    title="Total Users"
                    value={stats.totalUsers}
                    color="bg-blue-600"
                />

                <Card
                    title="Total Donors"
                    value={stats.totalDonors}
                    color="bg-green-600"
                />

                <Card
                    title="Blood Requests"
                    value={stats.totalRequests}
                    color="bg-red-600"
                />

                <Card
                    title="Open Requests"
                    value={stats.openRequests}
                    color="bg-yellow-500"
                />

                <Card
                    title="Completed Requests"
                    value={stats.completedRequests}
                    color="bg-purple-600"
                />

                <Card
                    title="Volunteers"
                    value={stats.totalVolunteers}
                    color="bg-pink-600"
                />

            </div>

        </div>

    );

}

export default AdminDashboard;