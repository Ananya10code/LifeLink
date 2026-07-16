import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    city: "",
    role: "Donor",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!form.bloodGroup) {
      newErrors.bloodGroup = "Select a blood group";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await register({
        fullName: form.name,
        email: form.email,
        password: form.password,
        bloodGroup: form.bloodGroup,
        role: form.role.toUpperCase(),
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      console.log(error);
      console.log("Response:", error.response);
      console.log("Data:", error.response?.data);

      alert(
        error.response?.data?.message ||
        JSON.stringify(error.response?.data) ||
        error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-red-50">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join LifeLink today
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

          <select
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
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
          {errors.bloodGroup && (
            <p className="text-red-600 text-sm">{errors.bloodGroup}</p>
          )}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Donor</option>
            <option>Patient</option>
            <option>Hospital</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">
              {errors.confirmPassword}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;