import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { PulseLoader } from "react-spinners";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineBlock } from "react-icons/md";
import toast from "react-hot-toast";

const ClubMember = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: clubs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["club-members-manager", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/manager/clubMembers?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleStatus = (id) => {
    axiosSecure
      .patch(`/club-member/status/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();
          toast.success("member status is expired");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#7a66d3" margin={2} size={13} />
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="heading mb-8 relative">
        Club <span className="text-accent">Members</span> List
      </h2>
      {clubs.length === 0 ? (
        <div className="alert bg-info text-accent-content shadow-lg mt-8 border-l-4 border-accent">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-accent shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-[Neusans-medium]">
              You are not currently managing any approved clubs.
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {clubs.map((club, index) => (
            <div
              key={club._id}
              className="collapse collapse-arrow shadow-xl border border-info/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <input
                type="radio"
                name="club-member-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-[Neusans-medium] flex justify-between items-center bg-primary text-base-100 hover:bg-info">
                <span className="truncate">{club.clubName}</span>
                <span className="badge badge-lg bg-accent text-accent-content border-accent">
                  {club.members.length} Members
                </span>
              </div>

              <div className="collapse-content bg-secondary p-4 text-base-100">
                {club.members.length === 0 ? (
                  <div className="text-center p-4 bg-info/70 text-accent-content rounded-lg font-[Neusans-medium]">
                    No members have joined this club yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto ">
                    <table className="table table-sm w-full bg-secondary/80 text-base-100">
                      <thead className="text-accent border-b border-info/70">
                        <tr>
                          <th className="font-[Neusans-medium]">#</th>
                          <th className="font-[Neusans-medium]">Email</th>
                          <th className="font-[Neusans-medium]">Status</th>
                          <th className="font-[Neusans-medium]">Joined At</th>
                          <th className="font-[Neusans-medium]">
                            Make Expired
                          </th>
                        </tr>
                      </thead>
                      {/* Table Body */}
                      <tbody className="text-accent-content">
                        {club.members.map((member, memberIndex) => (
                          <tr key={member._id}>
                            <th className="opacity-70">{memberIndex + 1}</th>
                            <td className="font-[Neusans-regular]">
                              {member.email}
                            </td>
                            <td>
                              <span
                                className={`badge badge-sm font-[Neusans-medium] capitalize ${
                                  member.status === "active"
                                    ? "bg-green-600 text-white border-green-600"
                                    : "bg-yellow-600 text-white border-yellow-600"
                                }`}
                              >
                                {member.status}
                              </span>
                            </td>
                            <td>
                              {member.joinedAt
                                ? format(
                                    new Date(member.joinedAt),
                                    "MMM d, yyyy"
                                  )
                                : "N/A"}
                            </td>
                            <td>
                              {member.status === "active" ? (
                                <button
                                  onClick={() => handleStatus(member._id)}
                                  className="text-white rounded-full cursor-pointer p-2 bg-green-500"
                                >
                                  <FaRegEdit />
                                </button>
                              ) : (
                                <button className="text-white rounded-full p-2 cursor-pointer bg-red-500">
                                  <MdOutlineBlock />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClubMember;
