import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVolunteers } from "../services/volunteerHistoryService";
import Navbar from "../components/Navbar";

function VolunteerHistory() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetchVolunteers();
    }, []);

    const fetchVolunteers = async () => {

        try {

            const response = await getVolunteers(id);

            setVolunteers(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load volunteers.");

        }

    };

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold text-red-600">
                    Volunteer History
                </h1>

                <button
                    onClick={() => navigate("/my-requests")}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                >
                    Back
                </button>

            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-red-600 text-white">

                        <tr>

                            <th className="p-4">Name</th>
                            <th className="p-4">Blood Group</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4">City</th>
                            <th className="p-4">Volunteered At</th>

                        </tr>

                    </thead>

                    <tbody>

                        {volunteers.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="text-center p-8 text-gray-500"
                                >
                                    No volunteers yet.
                                </td>

                            </tr>

                        ) : (

                            volunteers.map((volunteer) => (

                                <tr
                                    key={volunteer.id}
                                    className="border-b hover:bg-red-50 text-center"
                                >

                                    <td className="p-4 font-semibold">
                                        {volunteer.fullName}
                                    </td>

                                    <td className="p-4">

                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                                            {volunteer.bloodGroup}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {volunteer.phone}
                                    </td>

                                    <td className="p-4">
                                        {volunteer.city}
                                    </td>

                                    <td className="p-4">
                                        {new Date(
                                            volunteer.volunteeredAt
                                        ).toLocaleString()}
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

export default VolunteerHistory;