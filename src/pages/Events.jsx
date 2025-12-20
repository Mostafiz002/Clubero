import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import EventCard from "../components/shared/EventCard";
import { PulseLoader } from "react-spinners";

const Events = () => {
  const axios = useAxios();
  const [search, setSearch] = useState("");

  const { data: events = [] } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await axios("/events");
      return res.data;
    },
  });

  const { data: searchResult = events, isLoading } = useQuery({
    queryKey: ["search-events", search],
    queryFn: async () => {
      const res = await axios(`/events?search=${search}`);
      return res.data;
    },
  });

  const resetFilters = () => {
    setSearch("");
  };

  return (
    <div className="max-w-[1232px] mx-auto px-4 pt-20 pb-30">
      <h2 className="heading relative">Discover All Events</h2>
      <div className="flex items-center justify-between  mt-6 ">
        {/* search  */}
        <form className="input rounded-full bg-transparent outline-none hover:border-black/40 focus:border-black/40">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </form>
      </div>

      <div className="divider mb-6"></div>
      {isLoading ? (
        <>
          <div className="flex items-center justify-center pb-24 md:pb-44 pt-24">
            <PulseLoader color="#7a66d3" margin={2} size={13} />
          </div>
        </>
      ) : searchResult.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-600 font-medium mb-4">
            No events found.
          </p>

          <button
            onClick={resetFilters}
            className="btn rounded-lg border border-black/20 hover:bg-black hover:text-white transition-all"
          >
            Load All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResult.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
