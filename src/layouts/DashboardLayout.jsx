import { Link, Outlet } from "react-router";
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
import { MdOutlineReceiptLong } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";

import { LiaUsersCogSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";
import { PiUsersThree } from "react-icons/pi";
import {
  MdEventAvailable,
  MdOutlineEventRepeat,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { LuUserCog } from "react-icons/lu";

const DashboardLayout = () => {
  const { setUser, logOut } = useAuth();
  const { role } = useRole();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout!",
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

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content">
        <nav className="navbar w-full bg-accent-content/60">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <FiMenu className="text-lg" />
          </label>

          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-[25px] flex items-center gap-0.5 font-[Neusans-bold] text-[#ff4a79]"
          >
            <img className="w-9.5" src={LogoImg} alt="logo" />
            clubero
          </Link>
        </nav>

        <div className="p-8">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col bg-accent-content is-drawer-close:w-14 is-drawer-open:w-64 pt-2">
          <ul className="menu w-full gap-2 grow">
            {/* Homepage */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <FiHome className="text-lg" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* Overview */}
            <li>
              <Link
                to="/dashboard/overview"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Overview"
              >
                <FiGrid className="text-lg" />
                <span className="is-drawer-close:hidden">Overview</span>
              </Link>
            </li>
            {/* Manage users */}
            {role === "admin" && (
              <li>
                <Link
                  to="/dashboard/manage-users"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Manage Users"
                >
                  <LuUserCog className="text-[19px]" />
                  <span className="is-drawer-close:hidden">Manage Users</span>
                </Link>
              </li>
            )}

            {/* My Clubs */}
            <li>
              <Link
                to="/dashboard/my-clubs"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Clubs"
              >
                <FiUsers className="text-lg" />
                <span className="is-drawer-close:hidden">My Clubs</span>
              </Link>
            </li>
            {/* manage clubs */}
            {(role === "admin" || role === "club-manager") && (
              <li>
                <Link
                  to="/dashboard/manage-clubs"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Manage Clubs"
                >
                  <LiaUsersCogSolid className="text-[20px]" />
                  <span className="is-drawer-close:hidden">Manage Clubs</span>
                </Link>
              </li>
            )}

            {/* club member */}
            {role === "club-manager" && (
              <li>
                <Link
                  to="/dashboard/club-member"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Club Member"
                >
                  <PiUsersThree className="text-[21px]" />
                  <span className="is-drawer-close:hidden">Club Member</span>
                </Link>
              </li>
            )}

            {/* my events */}
            <li>
              <Link
                to="/dashboard/my-events"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Events"
              >
                <FiCalendar className="text-lg" />
                <span className="is-drawer-close:hidden">My Events</span>
              </Link>
            </li>

            {/* event management */}
            {role === "club-manager" && (
              <>
                <li>
                  <Link
                    to="/dashboard/event-management"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Event Management"
                  >
                    <MdOutlineEventRepeat className="text-[21px]" />
                    <span className="is-drawer-close:hidden">
                      Event Management
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/event-registrations"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Event Registrations"
                  >
                    <HiOutlineTicket className="text-[21px]" />
                    <span className="is-drawer-close:hidden">
                      Event Registrations
                    </span>
                  </Link>
                </li>
              </>
            )}
            {/* payment history */}
            <li>
              <Link
                to="/dashboard/payment-history"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payment History"
              >
                <FiDollarSign className="text-lg" />
                <span className="is-drawer-close:hidden">Payment History</span>
              </Link>
            </li>
            {/* Transactions */}
            {role === "admin" && (
              <li>
                <Link
                  to="/dashboard/transactions"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Transactions"
                >
                  <MdOutlineReceiptLong  className="text-[21px]" />
                  <span className="is-drawer-close:hidden">Transactions</span>
                </Link>
              </li>
            )}
            {/* profile */}
            <li>
              <Link
                to="/dashboard/profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                <FiUser className="text-lg" />
                <span className="is-drawer-close:hidden">Profile</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Logout"
              >
                <FiLogOut className="text-lg" />
                <span className="is-drawer-close:hidden">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
