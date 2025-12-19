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
        if (res.data.modifiedCount) {
          refetch();
          toast.success("Member status is expired");
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
    <div>
      <h2 className="heading mb-8 relative">
        Club <span className="text-accent">Members</span> List
      </h2>

      {clubs.length === 0 ? (
        <div className="alert bg-info/10 text-primary shadow-lg mt-8 border-l-4 border-accent">
          <div>
            <span className="font-[Neusans-medium]">
              You are not currently managing any approved clubs.
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {clubs.map((club, index) => (
            <div
              key={club._id}
              className="collapse collapse-arrow shadow-xl border border-info/30 rounded-lg overflow-hidden"
            >
              <input
                type="radio"
                name="club-member-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-black font-[Neusans-medium] flex justify-between items-center bg-white/10  hover:bg-info">
                <span className="truncate">{club.clubName}</span>
                <span className="badge badge-lg bg-accent text-accent-content border-accent">
                  {club.members.length} Members
                </span>
              </div>

              <div className="collapse-content bg-base-100 p-4">
                {club.members.length === 0 ? (
                  <div className="text-center p-4 bg-info/10 text-primary rounded-lg font-[Neusans-medium]">
                    No members have joined this club yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="table table-sm w-full bg-base-100 text-base-content border border-info/30 rounded-lg">
                      <thead className="bg-info/10 text-primary border-b border-info/30">
                        <tr>
                          <th>#</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th>Joined At</th>
                          <th>Make Expired</th>
                        </tr>
                      </thead>

                      <tbody className="text-base-content">
                        {club.members.map((member, memberIndex) => (
                          <tr
                            key={member._id}
                            className="hover:bg-info/10 transition-colors"
                          >
                            <th className="opacity-70">
                              {memberIndex + 1}
                            </th>

                            <td>{member.email}</td>

                            <td>
                              <span
                                className={`badge badge-sm font-[Neusans-medium] capitalize ${
                                  member.status === "active"
                                    ? "bg-green-100 text-green-700 border-green-300"
                                    : "bg-yellow-100 text-yellow-700 border-yellow-300"
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
                                  className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                                >
                                  <FaRegEdit />
                                </button>
                              ) : (
                                <button className="p-2 rounded-full bg-red-500 opacity-70 cursor-not-allowed text-white">
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
