import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const ClubCard = ({ club }) => {
  return (
    <Link to={`/club-details/${club._id}`} className="relative group hover:scale-98 duration-200 block">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="h-40 w-full object-cover rounded-3xl group-hover:scale-105 duration-300"
          src={club.bannerImage}
          alt="Club Banner"
        />
        <p className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
          {club.membershipFee === 0 ? "Free" : `৳${club.membershipFee}`}
        </p>
        <div className="absolute inset-0 bg-white/16 opacity-0 group-hover:opacity-100 duration-300 rounded-3xl"></div>
      </div>
      <p className="flex text-[12px] items-center gap-1 font-[Neusans-medium] mt-4 text-[#69696C]">
        <FaLocationDot /> {club.location}
      </p>
      <h3 className="text-primary my-1.5 font-[Neusans-bold] text-lg/7">
        {club.clubName}
      </h3>
      <p className="text-[12px] items-center gap-1 font-[Neusans-medium] text-[#69696C]">
        {club.category} Club
      </p>
    </Link>
  );
};

export default ClubCard;
