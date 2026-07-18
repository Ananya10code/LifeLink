import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { volunteer } from "../services/volunteerService";

function BloodRequests() {

    const navigate = useNavigate();

    const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState("");
    const [bloodGroupFilter, setBloodGroupFilter] = useState("");
    const [urgencyFilter, setUrgencyFilter] = useState("");

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/blood-requests",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setRequests(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load blood requests");

        }

    };

    const filteredRequests = useMemo(() => {

        return requests.filter((request) => {

            const matchesSearch =
                request.patientName
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesBloodGroup =
                bloodGroupFilter === "" ||
                request.bloodGroup === bloodGroupFilter;

            const matchesUrgency =
                urgencyFilter === "" ||
                request.urgency === urgencyFilter;

            return (
                matchesSearch &&
                matchesBloodGroup &&
                matchesUrgency
            );

        });

    }, [requests, search, bloodGroupFilter, urgencyFilter]);

    const urgencyColor = (urgency) => {

        switch (urgency) {

            case "HIGH":
                return "bg-red-500";

            case "MEDIUM":
                return "bg-yellow-500";

            case "LOW":
                return "bg-green-500";

            default:
                return "bg-gray-500";
        }

    };

    const handleVolunteer = async (requestId) => {

        try {

            const response = await volunteer(requestId);

            alert(response.data.message);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to volunteer"
            );

        }

    };

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold text-red-600">
                    Blood Requests
                </h1>

                <div className="bg-white px-5 py-3 rounded-xl shadow">

                    <span className="font-semibold">
                        Total Requests:
                    </span>{" "}

                    <span className="text-red-600 font-bold">
                        {filteredRequests.length}
                    </span>

                </div>

            </div>

            {/* Filters */}

            <div className="bg-white p-5 rounded-xl shadow mb-6">

                <div className="grid md:grid-cols-3 gap-4">

                    <input
                        type="text"
                        placeholder="Search patient..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-lg p-3"
                    />

                    <select
                        value={bloodGroupFilter}
                        onChange={(e) => setBloodGroupFilter(e.target.value)}
                        className="border rounded-lg p-3"
                    >
                        <option value="">All Blood Groups</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>

                    <select
                        value={urgencyFilter}
                        onChange={(e) => setUrgencyFilter(e.target.value)}
                        className="border rounded-lg p-3"
                    >
                        <option value="">All Urgency</option>
                        <option>HIGH</option>
                        <option>MEDIUM</option>
                        <option>LOW</option>
                    </select>

                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-red-600 text-white">

                        <tr>

                            <th className="p-4">Patient</th>
                            <th className="p-4">Blood</th>
                            <th className="p-4">Hospital</th>
                            <th className="p-4">City</th>
                            <th className="p-4">Units</th>
                            <th className="p-4">Urgency</th>
                            <th className="p-4">Contact</th>
                            <th className="p-4">Volunteer</th>
                            <th className="p-4">Matching Donors</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredRequests.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="9"
                                    className="text-center p-8 text-gray-500"
                                >
                                    No blood requests found.
                                </td>

                            </tr>

                        ) : (

                            filteredRequests.map((request) => (

                                <tr
                                    key={request.id}
                                    className="border-b hover:bg-red-50 text-center"
                                >

                                    <td className="p-4 font-semibold">
                                        {request.patientName}
                                    </td>

                                    <td className="p-4">

                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                                            {request.bloodGroup}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {request.hospital}
                                    </td>

                                    <td className="p-4">
                                        {request.city}
                                    </td>

                                    <td className="p-4">
                                        {request.units}
                                    </td>

                                    <td className="p-4">

                                        <span
                                            className={`text-white px-3 py-1 rounded-full ${urgencyColor(request.urgency)}`}
                                        >
                                            {request.urgency}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {request.contact}
                                    </td>

                                    <td className="p-4">

                                        <button
                                            onClick={() => handleVolunteer(request.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                                        >
                                            Volunteer
                                        </button>

                                    </td>

                                    <td className="p-4">

                                        <button
                                            onClick={() =>
                                                navigate(`/matching-donors/${request.id}`)
                                            }
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                                        >
                                            View Donors
                                        </button>

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

export default BloodRequests;