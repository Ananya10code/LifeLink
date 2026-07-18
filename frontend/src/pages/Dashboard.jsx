import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const [stats, setStats] = useState({
        totalRequests: 0,
        totalDonors: 0,
        bloodGroups: 0,
        citiesCovered: 0
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/dashboard",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (
        <div className="min-h-screen bg-red-50">

            {/* Navbar */}

            <nav className="bg-red-600 text-white flex justify-between items-center px-10 py-4">

                <h1 className="text-2xl font-bold">
                    ❤️ LifeLink
                </h1>

                <button
                    onClick={logout}
                    className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Logout
                </button>

            </nav>

            <div className="max-w-7xl mx-auto p-8">

                <h2 className="text-3xl font-bold mb-8">
                    Dashboard
                </h2>

                {/* Statistics */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Requests
                        </h3>

                        <p className="text-4xl font-bold text-red-600 mt-3">
                            {stats.totalRequests}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Donors
                        </h3>

                        <p className="text-4xl font-bold text-red-600 mt-3">
                            {stats.totalDonors}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Blood Groups
                        </h3>

                        <p className="text-4xl font-bold text-red-600 mt-3">
                            {stats.bloodGroups}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Cities Covered
                        </h3>

                        <p className="text-4xl font-bold text-red-600 mt-3">
                            {stats.citiesCovered}
                        </p>

                    </div>

                </div>

                {/* Quick Actions */}

                <div className="mt-12">

                    <h2 className="text-2xl font-bold mb-6">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <button
                            onClick={() => navigate("/blood-request")}
                            className="bg-red-600 text-white p-6 rounded-xl shadow-lg hover:bg-red-700 transition"
                        >
                            <div className="text-3xl mb-2">
                                🩸
                            </div>

                            <h3 className="text-xl font-bold">
                                Create Blood Request
                            </h3>

                            <p className="mt-2 text-red-100">
                                Submit a new emergency blood request.
                            </p>

                        </button>

                        <button
                            onClick={() => navigate("/blood-requests")}
                            className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition"
                        >
                            <div className="text-3xl mb-2">
                                📋
                            </div>

                            <h3 className="text-xl font-bold">
                                View Blood Requests
                            </h3>

                            <p className="mt-2 text-blue-100">
                                View all active blood requests.
                            </p>

                        </button>

                        <button
                            onClick={() => navigate("/profile")}
                            className="bg-green-600 text-white p-6 rounded-xl shadow-lg hover:bg-green-700 transition"
                        >
                            <div className="text-3xl mb-2">
                                👤
                            </div>

                            <h3 className="text-xl font-bold">
                                My Profile
                            </h3>

                            <p className="mt-2 text-green-100">
                                View and update your profile.
                            </p>

                        </button>
                        <Link
                            to="/donors"
                            className="bg-purple-600 text-white p-6 rounded-xl shadow-lg hover:bg-purple-700 transition"
                        >
                            <div className="text-3xl mb-2">
                                ❤️
                            </div>

                            <h3 className="text-xl font-bold">
                                Donor Directory
                            </h3>

                            <p className="mt-2 text-purple-100">
                                Search donors by city and blood group.
                            </p>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;