import React from "react";

const AllSellerRow = ({ seller }) => {
  return (
    <tr className="hover">
      <td>{seller.name}</td>
      <td>{seller?.email}</td>
      <td>{seller?.status}</td>
      <td>{seller?.verify ? "Verified" : "x"}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Del</button>
        <button className="btn btn-ghost btn-xs">Pay</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
