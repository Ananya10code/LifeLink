import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Top Header */}
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Donor Dashboard
            </h1>

            <p className="text-gray-500">
              Welcome back 👋
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
              A
            </div>

            <div>
              <p className="font-semibold">Ananya</p>
              <p className="text-sm text-gray-500">Blood Donor</p>
            </div>

          </div>

        </header>

        {/* Dashboard Pages */}
        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;