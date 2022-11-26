import React from "react";

const AllSellerRow = ({ user }) => {
  return (
    <tr className="hover">
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>{user?.status}</td>
      <td>{user?.verify ? "Verified" : "x"}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Del</button>
        <button className="btn btn-ghost btn-xs">Pay</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
