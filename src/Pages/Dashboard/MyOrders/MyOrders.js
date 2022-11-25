import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: allOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/booking?email=${email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
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
          {allOrders.map((order) => (
            <OrderRow key={order._id} order={order} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
