import { useQuery } from "@tanstack/react-query";
import React from "react";
import { serverUrl } from "../../../../url/serverUrl";
import Spinner from "../../../Shared/Spinner/Spinner";
import WishlistRow from "./WishlistRow";

const MyWishlist = () => {
  const {
    data: allWishlist = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allWishlist"],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/wishlist`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
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
          {allWishlist.map((order) => (
            <WishlistRow key={order._id} order={order} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWishlist;
