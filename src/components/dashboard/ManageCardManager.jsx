import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const ManageCardManager = ({ club }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="relative group hover:scale-98 duration-200 block">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            className="h-40 w-full object-cover rounded-3xl group-hover:scale-105 duration-300"
            src={club.bannerImage}
            alt="Club Banner"
          />
          <p className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
            {club.membershipFee === 0 ? "Free" : `৳${club.membershipFee}`}
          </p>
        </div>

        <p className="flex text-[12px] items-center gap-1 mt-4 text-[#69696C]">
          <FaLocationDot /> {club.location}
        </p>

        <h3 className="text-primary my-1.5 font-bold text-lg">
          {club.clubName}
        </h3>

        <p className="text-[12px] text-[#69696C]">
          {club.category} Club
        </p>

        {/* Actions */}
        <div className="flex gap-3 pt-3">
          <Link
            to={`/club-details/${club._id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm"
          >
            <FaEye /> View
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-green-100 text-green-600 hover:bg-green-200 text-sm"
          >
            <FaEdit /> Edit
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-lg">
            <h3 className="font-bold text-lg mb-4">Edit Club</h3>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="label">Club Name</label>
                <input
                  type="text"
                  defaultValue={club.clubName}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Location</label>
                <input
                  type="text"
                  defaultValue={club.location}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Membership Fee</label>
                <input
                  type="number"
                  defaultValue={club.membershipFee}
                  className="input input-bordered w-full"
                />
              </div>
            </form>

            {/* Actions */}
            <div className="modal-action">
              <button
                className="btn btn-outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ManageCardManager;
