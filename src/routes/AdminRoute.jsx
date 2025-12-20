import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { PulseLoader } from "react-spinners";

const ManagerRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#7a66d3" margin={2} size={13} />
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h3>This route is Forbidden</h3>
      </div>
    );
  }

  return children;
};

export default ManagerRoute;
