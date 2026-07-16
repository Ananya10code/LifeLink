import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import BloodRequest from "./pages/BloodRequest";

// Dashboard Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Requests from "./pages/dashboard/Requests";
import History from "./pages/dashboard/History";
import Settings from "./pages/dashboard/Settings";
import Donors from "./pages/dashboard/Donors";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar appears only on public pages */}
      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/blood-request" element={<BloodRequest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<h1>Profile Page</h1>} />
        <Route path="/dashboard/settings" element={<h1>Settings Page</h1>} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/donors" element={<Donors />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;