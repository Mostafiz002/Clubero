import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleBtn = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    try {
      googleSignIn().then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state || "/");
        window.scrollTo(0, 0);
      });
    } catch {
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignin}
        className="py-3 rounded-full w-full  cursor-pointer bg-base-300/50 hover:bg-base-300/70 flex items-center gap-2 justify-center"
      >
        <FcGoogle size={22} />
        Login with Google
      </button>
    </div>
  );
};

export default GoogleBtn;
