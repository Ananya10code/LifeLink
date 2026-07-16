import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Ananya Kushwah",
    email: "ananya@example.com",
    phone: "9876543210",
    bloodGroup: "O+",
    age: "21",
    gender: "Female",
    city: "Bhopal",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h1 className="text-3xl font-bold mb-8">
        👤 My Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6"
      >

        <div>
          <label className="font-medium">Full Name</label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Phone</label>

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Blood Group</label>

          <select
            name="bloodGroup"
            value={profile.bloodGroup}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Age</label>

          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Gender</label>

          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="font-medium">City</label>

          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div className="flex items-center gap-3 mt-8">
          <input
            type="checkbox"
            name="available"
            checked={profile.available}
            onChange={handleChange}
          />

          <label className="font-medium">
            Available to Donate
          </label>
        </div>

        <div className="md:col-span-2">

          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}

export default Profile;