import { Link, Outlet } from "react-router";
import LogoImg from "../assets/icons8-cloud-cross-48.png";
import { FiMenu, FiHome, FiGrid, FiUsers } from "react-icons/fi";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
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

        <div className="p-4">
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

        <div className="flex min-h-full flex-col bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 mt-2">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
