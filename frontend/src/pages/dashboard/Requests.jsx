import { useState } from "react";

function Requests() {
  const [requests] = useState([
    {
      id: 1,
      patient: "Rahul Sharma",
      blood: "O-",
      city: "Bhopal",
      hospital: "City Care Hospital",
      status: "Urgent",
    },
    {
      id: 2,
      patient: "Priya Singh",
      blood: "B+",
      city: "Indore",
      hospital: "Apollo Hospital",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Amit Verma",
      blood: "A+",
      city: "Delhi",
      hospital: "AIIMS",
      status: "Accepted",
    },
  ]);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Blood Requests
      </h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search patient..."
        className="border rounded-lg p-3 w-full mb-8"
      />

      {/* Table */}

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Patient</th>

              <th className="p-4 text-left">
                Blood Group
              </th>

              <th className="p-4 text-left">
                City
              </th>

              <th className="p-4 text-left">
                Hospital
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((request) => (

              <tr
                key={request.id}
                className="border-b"
              >

                <td className="p-4">
                  {request.patient}
                </td>

                <td className="p-4">
                  {request.blood}
                </td>

                <td className="p-4">
                  {request.city}
                </td>

                <td className="p-4">
                  {request.hospital}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      request.status === "Urgent"
                        ? "bg-red-600"
                        : request.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {request.status}
                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    Accept
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Requests;