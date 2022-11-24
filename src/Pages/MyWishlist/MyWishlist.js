import { useQuery } from "@tanstack/react-query";
import React from "react";
import WishlistRow from "./WishlistRow";

const MyOrders = () => {
  const { data: allOrders = [], isLoading } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/booking");
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
            <WishlistRow key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
