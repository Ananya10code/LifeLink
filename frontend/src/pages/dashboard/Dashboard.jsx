import { Link } from "react-router-dom";

function Dashboard() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  }

  return (

    <div className="min-h-screen bg-gray-100">

      <nav className="bg-red-600 text-white p-5 flex justify-between">

        <h2 className="text-2xl font-bold">
          LifeLink Dashboard
        </h2>

        <button
          onClick={logout}
          className="bg-white text-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </nav>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-6">
          Welcome to LifeLink
        </h1>

        <Link to="/blood-request">

          <button
            className="bg-red-600 text-white px-6 py-3 rounded"
          >
            Create Blood Request
          </button>

        </Link>

      </div>

    </div>

  );

}

export default Dashboard;