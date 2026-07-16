function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}

export default InputField;