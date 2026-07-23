import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState({
        users: 0,
        donors: 0,
        requests: 0,
        volunteers: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {

        try {

            const response = await getDashboardStats();

            console.log(response);
            console.log(response.data);

            setStats(response.data);

        } catch (error) {
            console.log(error);
            console.log(error.response);

            alert(
                error.response?.status +
                " " +
                JSON.stringify(error.response?.data)
            );
        }

    };

    const Card = ({ title, value, color }) => (

        <div className={`${color} text-white rounded-xl shadow-lg p-6`}>

            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <p className="text-4xl font-bold mt-4">
                {value}
            </p>

        </div>

    );

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <h1 className="text-4xl font-bold text-red-600 mb-8">
                Admin Dashboard
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <Card
                    title="Users"
                    value={stats.users}
                    color="bg-blue-600"
                />

                <Card
                    title="Donors"
                    value={stats.donors}
                    color="bg-green-600"
                />

                <Card
                    title="Blood Requests"
                    value={stats.requests}
                    color="bg-red-600"
                />

                <Card
                    title="Volunteers"
                    value={stats.volunteers}
                    color="bg-purple-600"
                />

            </div>

        </div>

    );

}

export default AdminDashboard;