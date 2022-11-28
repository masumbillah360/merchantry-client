import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Spinner from "../../../Shared/Spinner/Spinner";
import OrderHistoryRow from "./OrderHistoryRow";

const UsersOrderHistory = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: allHistoryOrder = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allHistoryOrder"],
    queryFn: async () => {
      const res = await fetch(
        `https://merchantry-server.vercel.app/payments?email=${email}`,
        {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(allHistoryOrder, "history");
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {allHistoryOrder.map((order) => (
            <OrderHistoryRow key={order._id} order={order} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersOrderHistory;
