import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-red-600 text-white min-h-screen">

      <div className="text-3xl font-bold p-6 border-b">
        ❤️ LifeLink
      </div>

      <nav className="flex flex-col mt-6">

        <Link
          to="/dashboard"
          className="px-6 py-3 hover:bg-red-700"
        >
          Dashboard
        </Link>

        <Link
          to="/dashboard/profile"
          className="px-6 py-3 hover:bg-red-700"
        >
          My Profile
        </Link>

        <Link
          to="/dashboard/settings"
          className="px-6 py-3 hover:bg-red-700"
        >
          Settings
        </Link>

        <button
          onClick={logout}
          className="text-left px-6 py-3 hover:bg-red-700"
        >
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;