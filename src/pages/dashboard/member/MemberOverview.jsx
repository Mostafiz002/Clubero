import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { PulseLoader } from "react-spinners";
import EventCard from "../../../components/shared/EventCard";

const MemberOverview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: overview = {}, isLoading: overviewLoading } = useQuery({
    queryKey: ["member-overview"],
    queryFn: async () => {
      const res = await axiosSecure("/dashboard/overview");
      return res.data;
    },
  });

  const { data: events = [], isLoading: eventsLoading } = useQuery({
    queryKey: ["upcoming-dashboard-events", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/upcoming-events?email=${user.email}`
      );
      return res.data;
    },
  });

  //   console.log(events)

  if (overviewLoading || eventsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#7a66d3" margin={2} size={13} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Welcome to Clubero</h2>

      {/* Stats */}
      <div className="flex gap-8">
        <div className="p-4 bg-accent rounded-lg">
          <p className="text-sm text-white">Total Clubs Joined</p>
          <p className="text-xl text-white font-semibold">
            {overview.totalClubs || 0}
          </p>
        </div>

        <div className="p-4 bg-accent rounded-lg">
          <p className="text-sm text-white">Total Events Registered</p>
          <p className="text-xl text-white font-semibold">
            {overview.totalEvents || 0}
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>

        {events.length === 0 ? (
          <p className="text-gray-500">No upcoming events</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberOverview;
