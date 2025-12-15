import React from "react";
import useRole from "../../hooks/useRole";
import { PulseLoader } from "react-spinners";
import MyClubsMember from "./member/MyClubsMember";
import MyClubsManager from "./club_manager/MyClubsManager";

const MyClubs = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    <div className="flex items-center justify-center h-screen">
      <PulseLoader color="#7a66d3" margin={2} size={13} />
    </div>;
  }

  if (role === "member") return <MyClubsMember />;
  if (role === "club-manager") return <MyClubsManager />;
};

export default MyClubs;
