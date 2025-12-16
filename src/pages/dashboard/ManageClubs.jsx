import React from "react";
import useRole from "../../hooks/useRole";
import ManageClubsManager from "./club_manager/ManageClubsManager";
import ManageClubsAdmin from "./admin/ManageClubsAdmin";
import { PulseLoader } from "react-spinners";

const ManageClubs = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    <div className="flex items-center justify-center h-screen">
      <PulseLoader color="#7a66d3" margin={2} size={13} />
    </div>;
  }

  if (role === "club-manager") return <ManageClubsManager />;
  if (role === "admin") return <ManageClubsAdmin />;

   if (role !== "admin" || role !== "club-manager") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h3 className="text-2xl">This route is Forbidden</h3>
      </div>
    );
  }
};

export default ManageClubs;
