import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllSellerRow from "./AllSellerRow";

const AllSeller = () => {
  const { data: allSeller = [], isLoading } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/users?userStatus=seller");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      all seller page here {allSeller.length}
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((seller) => (
              <AllSellerRow key={seller._id} seller={seller} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
