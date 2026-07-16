function Button({
  text,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition disabled:bg-gray-400 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;