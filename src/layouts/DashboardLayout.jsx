import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import { FaUser, FaHome, FaUsers, FaSignOutAlt } from "react-icons/fa";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/dashboard" },
    { name: "My Clubs", icon: <FaUsers />, path: "/dashboard/clubs" },
    { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-accent">Clubero</h1>
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-3">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition"
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 transition text-red-600 mt-5">
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 h-16">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hello, User</span>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
