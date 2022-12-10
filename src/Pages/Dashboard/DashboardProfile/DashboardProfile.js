import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { GoUnverified, GoVerified } from "react-icons/go";
import { AuthContext } from "../../../contexts/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";

const DashboardProfile = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  console.log(email, "email");
  const [usersInfo, setUsersInfo] = useState(null);
  const [userVerifyStatus, setUserVerifyStatus] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  console.log(userVerifyStatus);
  useEffect(() => {
    axios
      .get(`https://merchantry-server.vercel.app/users/${email}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUsersInfo(res?.data);
        setUserVerifyStatus(res?.data?.verifyStatus);
        setUserLoading(false);
      })
      .catch((err) => console.log(err));
  }, [email, userVerifyStatus]);

  const handleVerify = (email) => {
    console.log(email);
    const userStatus = {
      verifyStatus: "Pending",
    };
    if (userVerifyStatus === "Pending") {
      toast.success("Your Request has been Pending");
      return;
    }
    fetch(`https://merchantry-server.vercel.app/users?email=${email}`, {
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
          toast.success("Your Request Has Pending, Please Wait");
          setUserVerifyStatus("Pending");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSuccessToast = () => {
    toast.success("You Are Already Verified");
  };
  if (userLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="card full max-w-md mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="rounded-full h-40 w-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex justify-start gap-2 items-center">
            <h1 className="text-lg font-bold">{usersInfo?.name}</h1>
            {usersInfo?.verify && (
              <span>
                <GoVerified className="text-primary" />
              </span>
            )}
          </div>

          {usersInfo?.verify ? (
            <span className="flex justify-start gap-2 items-center">
              Verified:
              <GoVerified className="text-primary" />
            </span>
          ) : (
            <span className="flex justify-start gap-2 items-center">
              Verified:
              <GoUnverified className="text-error" />
            </span>
          )}
          <p>{usersInfo?.email}</p>
          <div className="card-actions">
            {usersInfo?.verify ? (
              <button onClick={handleSuccessToast} className="btn btn-success ">
                Verified
              </button>
            ) : (
              <button
                onClick={() => handleVerify(usersInfo?.email)}
                className="btn btn-primary"
              >
                {userVerifyStatus || "Verify Account"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
