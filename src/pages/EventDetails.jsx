import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router";
import { MdLocationOn, MdEvent } from "react-icons/md";
import { FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { PulseLoader } from "react-spinners";

const EventDetails = () => {
  const axios = useAxios();
  const { id } = useParams();

  const { data: event = {}, isLoading } = useQuery({
    queryKey: ["event-details", id],
    queryFn: async () => {
      const res = await axios(`/events/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#7a66d3" margin={2} size={13} />
      </div>
    );
  }

  return (
    <div className="max-w-[1232px] mx-auto px-4 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* left section */}
      <div className="lg:col-span-3 space-y-8">
        <h2 className="heading md:text-[44px]!">{event.title}</h2>

        {/* Description */}
        <div>
          <h3 className="text-xl font-[Neusans-medium] mb-2">About Event</h3>
          <p className="text-info leading-relaxed">{event.description}</p>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-transparent p-6 rounded-2xl border border-black/10">
            <p className="text-xs font-[Neusans-medium] text-[#69696C] flex items-center gap-2">
              <MdEvent className="text-base text-accent" />
              Event Date
            </p>
            <p className="font-[Neusans-medium]">
              {new Date(event.eventDate).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-transparent p-6 rounded-2xl border border-black/10">
            <p className="text-xs font-[Neusans-medium] text-[#69696C] flex items-center gap-2">
              <BiCalendar className="text-base text-accent" />
              Created At
            </p>
            <p className="font-[Neusans-medium]">
              {new Date(event.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-transparent p-6 rounded-2xl border border-black/10">
            <p className="text-xs font-[Neusans-medium] text-[#69696C] flex items-center gap-2">
              <FaMoneyBillWave className="text-base text-green-600" />
              Event Fee
            </p>
            <p className="font-[Neusans-medium]">
              {event.isPaid ? `${event.eventFee} BDT` : "Free"}
            </p>
          </div>

          <div className="bg-transparent p-6 rounded-2xl border border-black/10">
            <p className="text-xs font-[Neusans-medium] text-[#69696C] flex items-center gap-2">
              <AiFillCheckCircle className="text-base text-green-600" />
              Status
            </p>
            <p className="font-[Neusans-medium]">
              {event.isPaid ? "Paid Event" : "Open for Club Members"}
            </p>
          </div>
        </div>

        {/* join btn */}
        <button
          className="button_primary px-7! flex items-center gap-2 hover:-translate-y-1 transition-all"
          onClick={() => console.log("Join Event")}
        >
          <FaUsers className="text-base" />
          Join Event
        </button>
      </div>

      {/* right */}
      <div className="lg:col-span-2 space-y-6">
        <figure className="bg-base-200 rounded-2xl overflow-hidden shadow-sm">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="w-full h-72 object-cover"
          />
        </figure>

        <div className="bg-white p-6 rounded-2xl border border-black/10">
          <div className="flex items-center gap-3">
            <img
              src="https://img.icons8.com/scribby/50/marker.png"
              className="w-8"
            />
            <div>
              <p className="text-xs font-[Neusans-medium] text-[#69696C]">
                Location
              </p>
              <p className="font-[Neusans-medium]">{event.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
