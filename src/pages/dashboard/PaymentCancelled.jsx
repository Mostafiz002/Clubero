import React from "react";
import { useNavigate } from "react-router";
import { AiFillCloseCircle } from "react-icons/ai";

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl">
        <div className="card-body items-center text-center space-y-3">
          <AiFillCloseCircle className="text-6xl text-error" />

          <h2 className="text-2xl font-semibold">
            Payment Cancelled
          </h2>

          <p className="text-sm text-gray-500">
            Your payment process was cancelled. No money has been charged.
          </p>

          <div className="card-actions mt-4 w-full flex flex-col gap-2">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline w-full"
            >
              Try Again
            </button>

            <button
              onClick={() => navigate("/dashboard/my-clubs")}
              className="btn btn-accent w-full"
            >
              My Clubs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
