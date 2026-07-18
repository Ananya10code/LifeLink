import { useEffect, useState } from "react";
import { getDonors } from "../services/donorService";

function Donors() {

    const [donors, setDonors] = useState([]);
    const [bloodGroup, setBloodGroup] = useState("");
    const [city, setCity] = useState("");

    const loadDonors = async () => {
        try {
            const data = await getDonors(bloodGroup, city);
            setDonors(data);
        } catch (err) {
            console.log(err);
            alert("Unable to load donors");
        }
    };

    useEffect(() => {
        loadDonors();
    }, []);

    return (
        <div className="min-h-screen bg-red-50 p-8">

            <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
                Donor Directory
            </h1>

            <div className="flex gap-4 justify-center mb-8">

                <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
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

                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border rounded-lg p-3"
                />

                <button
                    onClick={loadDonors}
                    className="bg-red-600 text-white px-6 rounded-lg"
                >
                    Search
                </button>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {donors.map((donor) => (

                    <div
                        key={donor.id}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >

                        <h2 className="text-2xl font-bold">
                            {donor.fullName}
                        </h2>

                        <p className="mt-2">
                            🩸 {donor.bloodGroup}
                        </p>

                        <p>
                            📍 {donor.city}
                        </p>

                        <p>
                            📞 {donor.phone}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Donors;