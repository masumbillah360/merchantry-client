import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../../Shared/Spinner/Spinner";
import AllSellerRow from "./AllSellerRow";

const AllSeller = () => {
  const {
    data: allSeller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(
        "https://merchantry-server.vercel.app/users?userStatus=seller",
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
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      Total Seller : {allSeller.length}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Verified</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((seller) => (
              <AllSellerRow
                key={seller._id}
                userInfo={seller}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
