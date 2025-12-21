import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineIdentification,
  HiCamera,
} from "react-icons/hi";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const { role } = useRole();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
          <div className="h-32 w-32 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div className="relative mb-20">
        <div className="h-48 w-full rounded-3xl bg-linear-to-r from-[#7a66d3] to-[#ff4a79] shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="relative group">
            <div className="w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <img
                src={
                  user.photoURL ||
                  "https://img.icons8.com/ios-filled/100/user.png"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-2 hidden sm:block">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              {user.displayName || "User"}
              <HiOutlineBadgeCheck
                className="text-blue-500"
                title="Verified Member"
              />
            </h2>
            <p className="text-gray-500 font-medium capitalize">
              {role || "Member"}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:hidden mb-8 px-2">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          {user.displayName || "User"}
          <HiOutlineBadgeCheck className="text-blue-500" />
        </h2>
        <p className="text-gray-500 font-medium capitalize">
          {role || "Member"}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2 border-b border-gray-100 pb-4 mb-2">
          <h3 className="text-lg font-bold text-gray-800">
            Personal Information
          </h3>
          <p className="text-sm text-gray-400">
            Manage your personal details and account settings.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <HiOutlineUser className="text-lg" /> Full Name
          </label>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium">
            {user.displayName || "Not provided"}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <HiOutlineMail className="text-lg" /> Email Address
          </label>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium">
            {user.email}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <HiOutlineIdentification className="text-lg" /> Account Role
          </label>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium capitalize flex justify-between items-center">
            {role}
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                role === "admin"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              Active
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <HiOutlineBadgeCheck className="text-lg" /> User ID
          </label>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-500 font-mono text-sm truncate">
            {user.uid || "UID-UNAVAILABLE"}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
