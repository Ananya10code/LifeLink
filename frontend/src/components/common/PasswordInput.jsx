import { useState } from "react";

function PasswordInput({
  label,
  name,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <div className="flex border rounded-lg overflow-hidden">

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="flex-1 p-3 outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="px-4 bg-gray-100"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

      </div>
    </div>
  );
}

export default PasswordInput;