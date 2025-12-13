import React from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  const { data: paymentInfo = [] } = useQuery({
    queryKey: ["club", sessionId],
    queryFn: async () => {
      const res = await axiosSecure.patch(`/payment-success?session_id=${sessionId}`);
      return res.data;
    },
  });

  return (
    <div>
      success
      <p>{paymentInfo.transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
