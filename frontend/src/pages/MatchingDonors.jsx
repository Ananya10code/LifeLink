import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MatchingDonors() {

    const { id } = useParams();

    const [donors, setDonors] = useState([]);

    useEffect(() => {
        loadDonors();
    }, []);

    const loadDonors = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(

                `http://localhost:8080/api/donors/match/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setDonors(response.data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="min-h-screen bg-red-50 p-8">

            <h1 className="text-4xl font-bold text-red-600 mb-8">

                Matching Donors

            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {donors.map(donor => (

                    <div
                        key={donor.id}
                        className="bg-white shadow-lg rounded-xl p-6"
                    >

                        <h2 className="text-2xl font-bold">

                            {donor.fullName}

                        </h2>

                        <p>🩸 {donor.bloodGroup}</p>

                        <p>📍 {donor.city}</p>

                        <p>📞 {donor.phone}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default MatchingDonors;