import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUnreadCount } from "../services/notificationService";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {

    if (token) {
      loadUnreadCount();
    }

  }, []);

  const loadUnreadCount = async () => {

    try {

      const response = await getUnreadCount();

      setUnreadCount(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-red-600"
        >
          ❤️ LifeLink
        </Link>

        {!token ? (

          <>
            <ul className="flex items-center gap-8 text-lg font-medium">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

            <div className="flex gap-4">

              <Link
                to="/login"
                className="px-5 py-2 border border-red-600 rounded-lg text-red-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 bg-red-600 text-white rounded-lg"
              >
                Register
              </Link>

            </div>
          </>

        ) : (

          <div className="flex items-center gap-6">

            <Link
              to="/dashboard"
              className="hover:text-red-600"
            >
              Dashboard
            </Link>

            <Link
              to="/notifications"
              className="relative text-2xl"
            >
              🔔

              {unreadCount > 0 && (

                <span
                  className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                >
                  {unreadCount}
                </span>

              )}

            </Link>

            <Link
              to="/profile"
              className="hover:text-red-600"
            >
              Profile
            </Link>

            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

        )}

      </div>

    </nav>

  );

}

export default Navbar;