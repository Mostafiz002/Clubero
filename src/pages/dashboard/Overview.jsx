import React from "react";
import useRole from "../../hooks/useRole";
import MemberOverview from "./member/MemberOverview";
import { PulseLoader } from "react-spinners";
import ManagerOverview from "./club_manager/ManagerOverview";
import AdminOverview from "./admin/AdminOverview";

const Overview = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    <div className="flex items-center justify-center h-screen">
      <PulseLoader color="#7a66d3" margin={2} size={13} />
    </div>;
  }

  if (role === "member") return <MemberOverview />;
  if (role === "club-manager") return <ManagerOverview />;
  if (role === "admin") return <AdminOverview />;
};

export default Overview;
