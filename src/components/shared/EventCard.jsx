import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="relative group hover:scale-98 duration-200 block"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="h-40 w-full object-cover rounded-3xl group-hover:scale-105 duration-300"
          src={event.bannerImage}
          alt="Club Banner"
        />
        <div className="absolute inset-0 bg-white/16 opacity-0 group-hover:opacity-100 duration-300 rounded-3xl"></div>
      </div>
      <p className="flex text-[12px] items-center gap-1 font-[Neusans-medium] mt-4 text-[#69696C]">
        <FaLocationDot /> {event.location}
      </p>
      <h3 className="text-primary my-1.5 font-[Neusans-bold] text-lg/7">
        {event.title}
      </h3>
      <p className="text-[12px] line-clamp-2 items-center gap-1 font-[Neusans-medium] text-[#69696C]">
        {event.description}
      </p>
    </Link>
  );
};

export default EventCard;
