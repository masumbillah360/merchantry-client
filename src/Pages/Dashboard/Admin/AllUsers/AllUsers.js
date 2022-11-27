import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../../Shared/Spinner/Spinner";
import AllSellerRow from "../AllSeller/AllSellerRow";

const AllUsers = () => {
  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/users?userStatus=buyer", {
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
    <>
      Total User : {allUsers.length}
      <div className="overflow-x-auto w-full">
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
            {allUsers.map((user) => (
              <AllSellerRow key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
