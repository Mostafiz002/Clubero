import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import { PulseLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <PulseLoader color="#7a66d3" margin={2} size={13} />
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
