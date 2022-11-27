import React from "react";
import toast from "react-hot-toast";

const AllSellerRow = ({ userInfo, refetch }) => {
  const handleVerify = (email) => {
    const userStatus = {
      verifyStatus: "Verified",
      verify: true,
    };

    fetch(`http://localhost:8000/users?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
      },
      body: JSON.stringify(userStatus),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          toast.success("Successfully Verified");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSuccessToast = () => {
    toast.success("Users Already Verified");
  };
  return (
    <tr className="hover">
      <td>{userInfo?.name}</td>
      <td>{userInfo?.email}</td>
      <td>{userInfo?.status}</td>
      <td className="flex flex-col justify-start items-center">
        {userInfo?.verifyStatus === "Verified" ? (
          <button
            onClick={handleSuccessToast}
            className="btn btn-success btn-xs "
          >
            Verified
          </button>
        ) : (
          <button
            onClick={() => handleVerify(userInfo?.email)}
            className="btn btn-primary btn-xs"
          >
            {userInfo?.verifyStatus ? userInfo?.verifyStatus : "Verify Account"}
          </button>
        )}
      </td>
      <th>
        <button className="btn btn-primary btn-xs mr-2">Update</button>
        <button className="btn btn-error btn-xs">Del</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
