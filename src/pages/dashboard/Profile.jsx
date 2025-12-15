import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";


const Profile = () => {
  const { user } = useAuth();
  const {role} = useRole();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500">No user information available</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 pb-24">
      <h2 className="heading mb-10">My Profile</h2>

      <div className="bg-white rounded-2xl shadow-sm border border-black/10 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Avatar */}
        <div className="flex flex-col items-center text-center">
          <img
            src={
              user.photoURL || "https://img.icons8.com/ios-filled/100/user.png"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border border-black/10"
          />
          <h3 className="mt-4 text-xl font-[Neusans-medium]">
            {user.displayName || "Unnamed User"}
          </h3>
          <p className="text-sm text-gray-500 capitalize">{role}</p>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-base-200">
            <FaUser className="text-accent text-lg" />
            <div>
              <p className="text-xs text-gray-500">Full Name</p>
              <p className="font-[Neusans-medium]">
                {user.displayName || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-base-200">
            <FaEnvelope className="text-accent text-lg" />
            <div>
              <p className="text-xs text-gray-500">Email Address</p>
              <p className="font-[Neusans-medium]">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
