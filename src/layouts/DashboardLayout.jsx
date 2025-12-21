import { Link, NavLink, Outlet } from "react-router";
import LogoImg from "../assets/icons8-cloud-cross-48.png";
import {
  FiMenu,
  FiHome,
  FiGrid,
  FiUsers,
  FiUser,
  FiLogOut,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";
import { MdOutlineReceiptLong, MdOutlineEventRepeat } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { LuUserCog } from "react-icons/lu";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { setUser, logOut } = useAuth();
  const { role } = useRole();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be redirected to the login page.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4a79",
      cancelButtonColor: "#1f2937",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            toast.success("Logged out successfully");
            setUser(null);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-xl text-sm font-medium ${
      isActive
        ? "bg-white text-[#ff4a79] shadow-sm border border-[#ff4a79]/10"
        : "text-gray-500 hover:bg-white/50 hover:text-gray-900"
    }`;

  return (
    <div className="drawer lg:drawer-open font-sans min-h-screen bg-[#f8fafc]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col bg-linear-to-br from-slate-50 via-white to-blue-50/30">
        {/* Navbar */}
        <nav className="navbar sticky top-0 z-30 w-full bg-white/60 backdrop-blur-xl border-b border-gray-100 px-6 py-3">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-gray-600"
            >
              <FiMenu className="text-xl" />
            </label>
          </div>

          <div className="flex-1 px-2 mx-2 lg:hidden">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 font-bold text-xl text-[#ff4a79]"
            >
              <img className="w-8" src={LogoImg} alt="logo" />
              clubero
            </Link>
          </div>

          <div className="flex-1 hidden lg:block">
            <h1 className="text-lg font-bold tracking-tight text-slate-800">
              Workspace
            </h1>
          </div>
        </nav>

        {/* Outlet Content */}
        <main className="p-6 md:p-8 grow animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="min-h-full w-72 flex flex-col bg-linear-to-b from-slate-50 to-slate-100 border-r border-gray-200/60 shadow-xl shadow-slate-200/50">
          <div className="h-20 flex items-center px-8">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-3 font-bold text-2xl text-[#ff4a79] hover:opacity-80 transition-opacity"
            >
              <img className="w-9 drop-shadow-sm" src={LogoImg} alt="logo" />
              <span className="tracking-tighter">clubero</span>
            </Link>
          </div>

          {/* Sidebar Menu */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
            {/* Main Group */}
            <div>
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-3">
                Main Navigation
              </p>
              <div className="space-y-1">
                <NavLink
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={navLinkClasses}
                >
                  <FiHome className="text-lg" />
                  <span>Homepage</span>
                </NavLink>
                <NavLink to="/dashboard/overview" className={navLinkClasses}>
                  <FiGrid className="text-lg" />
                  <span>Overview</span>
                </NavLink>
              </div>
            </div>

            {/* Admin Section */}
            {role === "admin" && (
              <div>
                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-3">
                  Administration
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="/dashboard/manage-users"
                    className={navLinkClasses}
                  >
                    <LuUserCog className="text-lg" />
                    <span>Manage Users</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manage-clubs"
                    className={navLinkClasses}
                  >
                    <LiaUsersCogSolid className="text-lg" />
                    <span>Manage Clubs</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/transactions"
                    className={navLinkClasses}
                  >
                    <MdOutlineReceiptLong className="text-lg" />
                    <span>Transactions</span>
                  </NavLink>
                </div>
              </div>
            )}

            {/* Manager Section */}
            {role === "club-manager" && (
              <div>
                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-3">
                  Management
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="/dashboard/manage-clubs"
                    className={navLinkClasses}
                  >
                    <LiaUsersCogSolid className="text-lg" />
                    <span>Club Settings</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/club-member"
                    className={navLinkClasses}
                  >
                    <PiUsersThree className="text-lg" />
                    <span>Club Members</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/event-management"
                    className={navLinkClasses}
                  >
                    <MdOutlineEventRepeat className="text-lg" />
                    <span>Event Management</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/event-registrations"
                    className={navLinkClasses}
                  >
                    <HiOutlineTicket className="text-lg" />
                    <span>Event Registrations</span>
                  </NavLink>
                </div>
              </div>
            )}

            {/* Personal Group */}
            <div>
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-3">
                Account
              </p>
              <div className="space-y-1">
                <NavLink to="/dashboard/my-clubs" className={navLinkClasses}>
                  <FiUsers className="text-lg" />
                  <span>My Clubs</span>
                </NavLink>
                <NavLink to="/dashboard/my-events" className={navLinkClasses}>
                  <FiCalendar className="text-lg" />
                  <span>My Events</span>
                </NavLink>
                <NavLink
                  to="/dashboard/payment-history"
                  className={navLinkClasses}
                >
                  <FiDollarSign className="text-lg" />
                  <span>Payment History</span>
                </NavLink>
                <NavLink to="/dashboard/profile" className={navLinkClasses}>
                  <FiUser className="text-lg" />
                  <span>Profile</span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 mt-auto">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50/50 transition-all duration-300 rounded-xl font-medium border border-transparent hover:border-red-100"
            >
              <FiLogOut className="text-lg" />
              <span>Logout Session</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
