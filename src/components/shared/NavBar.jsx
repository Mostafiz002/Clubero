import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaBars, FaSignOutAlt, FaUser } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Slide } from "react-awesome-reveal";
import toast from "react-hot-toast";
import LogoImg from "../../assets/icons8-cloud-cross-48.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, logOut } = useAuth();
  console.log(user);

  const navLinkClass = ({ isActive }) =>
    `relative  py-1 text-sm font-medium transition-colors duration-300
        ${
          isActive
            ? "text-primary after:w-full after:scale-x-100"
            : "text-base-content hover:text-primary after:w-full hover:after:scale-x-100"
        }
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:bg-primary after:transition-transform
        after:duration-300 after:origin-left after:scale-x-0`;

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/"
          className={navLinkClass}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/clubs"
          className={navLinkClass}
        >
          Clubs
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/events"
          className={navLinkClass}
        >
          Events
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        setUser(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" w-full z-50 py-2.5 ">
      <div className="drawer z-50">
        <input
          id="Clubero-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar  max-w-[1500px] mx-auto px-4">
            {/* Logo */}
            <div className=" navbar-start">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/"
                className="text-[25px] flex font-[Neusans-bold] font-extrabold text-[#ff4a79] "
              >
                <img className="w-9.5" src={LogoImg} alt="" /> clubero
              </Link>
            </div>

            {/* Center*/}
            <div className="navbar-center hidden lg:flex">
              <ul className="flex gap-6  text-base font-medium">{navLinks}</ul>
            </div>

            {/* Right */}
            <div className="navbar-end  flex items-center gap-2">
              {!user && (
                <>
                  <Link
                    to="/login"
                    className="hidden md:flex  text-secondary hover:bg-[#e6e6e6] px-3 pb-1 pt-0.5 rounded-full duration-200 text-base font-medium tracking-tight"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="hidden rounded-full md:flex btn font-medium  bg-secondary text-base-100 hover:bg-primary duration-300  py-4"
                  >
                    Register
                  </Link>
                </>
              )}

              {/* Mobile menu icon */}
              <label
                htmlFor="Clubero-drawer"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <FaBars className="text-xl" />
              </label>
              {user && (
                <div className="relative inline-block group">
                  <div className="avatar cursor-pointer">
                    <div className="min-w-9 h-9 rounded-full ">
                      <img
                        src={
                          user?.photoURL ||
                          "https://img.icons8.com/color/48/test-account.png"
                        }
                        alt={user?.displayName || "Default User"}
                      />
                    </div>
                  </div>

                  {/* Dropdown */}
                  <Slide direction="down" triggerOnce={false}>
                    <div className="absolute right-0 mt-2 w-40 bg-base-200 text-base-content rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2 space-y-2">
                      <Link className="flex items-center gap-2 font-[Neusans-medium] text-sm cursor-pointer rounded-md hover:bg-base-300 transition-all duration-200 w-full py-2 px-2">
                        <FaUser /> Profile
                      </Link>

                      <Link to="/dashboard" className="flex items-center gap-2 font-[Neusans-medium] text-sm cursor-pointer rounded-md hover:bg-base-300 transition-all duration-200 w-full py-2 px-2">
                        <TbLayoutDashboardFilled /> Dashboard
                      </Link>

                      <button
                        className="flex items-center gap-2 font-[Neusans-medium] text-sm cursor-pointer rounded-md bg-red-500/50 text-red-600/70 hover:text-white hover:bg-red-600/70 transition-all duration-200 w-full py-2 px-2"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </Slide>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar drawer (mobile/tablet) */}
        <div className="drawer-side">
          <label
            htmlFor="Clubero-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4  w-72 min-h-full bg-base-100 text-base-content space-y-3 text-lg font-medium">
            <li className="mb-4 text-2xl font-bold text-primary">Clubero</li>
            {navLinks}
            <div className="mt-6 flex flex-col gap-3">
              {user ? (
                <button className="btn bg-secondary text-base-100 hover:bg-secondary/80">
                  Logout
                </button>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-base-100 rounded-full"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn bg-secondary font-medium rounded-full text-base-100 hover:bg-secondary/80"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
