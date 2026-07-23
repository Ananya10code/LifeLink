import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BloodRequest() {

    const [form, setForm] = useState({
        patientName: "",
        hospital: "",
        bloodGroup: "",
        units: "",
        city: "",
        urgency: "",
        contact: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            console.log("JWT Token:", token);

            const response = await axios.post(

                "http://localhost:8080/api/blood-requests",

                {
                    patientName: form.patientName,
                    hospital: form.hospital,
                    bloodGroup: form.bloodGroup,
                    units: Number(form.units),
                    city: form.city,
                    urgency: form.urgency,
                    contact: form.contact
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }

            );

            console.log(response.data);

            alert(response.data.message);

            setForm({
                patientName: "",
                hospital: "",
                bloodGroup: "",
                units: "",
                city: "",
                urgency: "",
                contact: ""
            });

        } catch (err) {

            console.log("Error:", err);
            console.log("Status:", err.response?.status);
            console.log("Data:", err.response?.data);

            alert(

                err.response?.data?.message ||

                JSON.stringify(err.response?.data) ||

                err.message

            );
        }
    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-red-50">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

                <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
                    Create Blood Request
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="patientName"
                        placeholder="Patient Name"
                        value={form.patientName}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="text"
                        name="hospital"
                        placeholder="Hospital"
                        value={form.hospital}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <select
                        name="bloodGroup"
                        value={form.bloodGroup}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    >
                        <option value="">Select Blood Group</option>
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
                        type="number"
                        name="units"
                        placeholder="Units Required"
                        value={form.units}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <select
                        name="urgency"
                        value={form.urgency}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    >
                        <option value="">Select Urgency</option>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>

                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Number"
                        value={form.contact}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
                    >
                        Create Request
                    </button>

                </form>

            </div>

        </div>
    );
}

export default BloodRequest;