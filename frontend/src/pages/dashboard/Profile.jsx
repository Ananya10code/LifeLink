import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile
} from "../../services/profileService";
import Navbar from "../../components/Navbar";

function Profile() {

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    bloodGroup: "",
    role: ""
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const response = await getProfile();

      setProfile(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load profile");

    }

  };

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await updateProfile({

        fullName: profile.fullName,
        phone: profile.phone,
        city: profile.city,
        bloodGroup: profile.bloodGroup

      });

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Unable to update profile");

    }

  };

  return (

    <div className="min-h-screen bg-red-50 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">

        <h1 className="text-3xl font-bold text-red-600 mb-6">
          My Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            value={profile.email}
            disabled
            className="w-full border rounded-lg p-3 bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <select
            name="bloodGroup"
            value={profile.bloodGroup}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
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

          <input
            type="text"
            value={profile.role}
            disabled
            className="w-full border rounded-lg p-3 bg-gray-100"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>

  );

}

export default Profile;