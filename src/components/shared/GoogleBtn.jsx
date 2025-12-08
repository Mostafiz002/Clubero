import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <div>
      <button className="py-3 rounded-full w-full  cursor-pointer bg-base-300/50 hover:bg-base-300/70 flex items-center gap-2 justify-center">
        <FcGoogle size={22} />
        Login with Google
      </button>
    </div>
  );
};

export default GoogleBtn;
