function DonorCard({ donor }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {donor.name}
          </h2>

          <p className="text-gray-500">
            📍 {donor.city}
          </p>

        </div>

        <div className="text-3xl font-bold text-red-600">
          {donor.blood}
        </div>

      </div>

      <div className="mt-5">

        <span
          className={`px-4 py-2 rounded-full text-white ${
            donor.available
              ? "bg-green-600"
              : "bg-gray-500"
          }`}
        >
          {donor.available ? "Available" : "Unavailable"}
        </span>

      </div>

      <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
        Request Blood
      </button>

    </div>
  );
}

export default DonorCard;