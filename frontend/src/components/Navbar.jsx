import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-red-600 hover:text-red-700 transition"
        >
          ❤️ LifeLink
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-lg font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-red-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-red-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-red-600 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;