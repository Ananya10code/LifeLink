import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
    getMyRequests,
    completeRequest
} from "../services/myRequestService";

function MyRequests() {

    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMyRequests();
    }, []);

    const fetchMyRequests = async () => {

        try {

            const response = await getMyRequests();

            setRequests(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load your requests");

        }

    };

    const handleComplete = async (id) => {

        const confirmComplete = window.confirm(
            "Are you sure you want to mark this request as COMPLETED?"
        );

        if (!confirmComplete) return;

        try {

            const response = await completeRequest(id);

            alert(response.data.message);

            fetchMyRequests();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Unable to complete request."
            );

        }

    };

    const statusColor = (status) => {

        switch (status) {

            case "OPEN":
                return "bg-green-500";

            case "ACCEPTED":
                return "bg-yellow-500";

            case "COMPLETED":
                return "bg-blue-500";

            default:
                return "bg-gray-500";

        }

    };

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold text-red-600">
                    My Blood Requests
                </h1>

                <div className="bg-white shadow rounded-lg px-5 py-3">

                    <span className="font-semibold">
                        Total Requests:
                    </span>{" "}

                    <span className="text-red-600 font-bold">
                        {requests.length}
                    </span>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-red-600 text-white">

                        <tr>

                            <th className="p-4">Patient</th>
                            <th className="p-4">Hospital</th>
                            <th className="p-4">Blood Group</th>
                            <th className="p-4">Units</th>
                            <th className="p-4">City</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {requests.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="text-center p-8 text-gray-500"
                                >
                                    No blood requests found.
                                </td>

                            </tr>

                        ) : (

                            requests.map((request) => (

                                <tr
                                    key={request.id}
                                    className="border-b hover:bg-red-50 text-center"
                                >

                                    <td className="p-4 font-semibold">
                                        {request.patientName}
                                    </td>

                                    <td className="p-4">
                                        {request.hospital}
                                    </td>

                                    <td className="p-4">

                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                                            {request.bloodGroup}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {request.units}
                                    </td>

                                    <td className="p-4">
                                        {request.city}
                                    </td>

                                    <td className="p-4">

                                        <span
                                            className={`text-white px-3 py-1 rounded-full ${statusColor(request.status)}`}
                                        >
                                            {request.status}
                                        </span>

                                    </td>

                                    <td className="p-4">

                                        <div className="flex justify-center gap-2">

                                            {request.status === "OPEN" && (

                                                <button
                                                    onClick={() => handleComplete(request.id)}
                                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Complete
                                                </button>

                                            )}

                                            <button
                                                onClick={() => navigate(`/volunteers/${request.id}`)}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                                            >
                                                View Volunteers
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default MyRequests;