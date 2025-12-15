import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["dashboard-payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <PulseLoader color="#7a66d3" size={12} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="heading">
          Payment <span className="text-accent">History</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          View all your membership payments and transaction details
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        {payments.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            No payment history found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* Table Head */}
              <thead className="bg-base-200 text-sm">
                <tr>
                  <th>#</th>
                  <th>Club</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id} className="hover">
                    <td>{index + 1}</td>

                    <td className="font-medium">
                      {payment.clubName}
                    </td>

                    <td>
                      <span className="badge badge-outline">
                        Membership Fee
                      </span>
                    </td>

                    <td className="font-semibold text-accent">
                      ৳ {payment.amount}
                    </td>

                    <td className="text-sm">
                      {new Date(payment.paidAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          payment.paymentStatus === "paid"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {payment.paymentStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
