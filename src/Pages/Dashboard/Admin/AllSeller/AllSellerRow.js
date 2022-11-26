import React from "react";
import { GoUnverified } from "react-icons/go";

const AllSellerRow = ({ user }) => {
  const handlePendingVerify = (email) => {
    console.log(email);
    const userStatus = {
      verifyStatus: "Verified",
      verify: true,
    };
    console.log(userStatus);

    fetch(`http://localhost:8000/users?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userStatus),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <tr className="hover">
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>{user?.status}</td>
      <td className="flex flex-col justify-center items-center">
        {user?.verify ? (
          <span className="btn btn-success">Verified</span>
        ) : (
          <GoUnverified className="text-red-500" />
        )}
        {user?.verifyStatus === "Pending" && (
          <button
            onClick={() => handlePendingVerify(user?.email)}
            className="btn btn-primary btn-xs"
          >
            {user?.verifyStatus}
          </button>
        )}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
        <button className="btn btn-ghost btn-xs">Del</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
