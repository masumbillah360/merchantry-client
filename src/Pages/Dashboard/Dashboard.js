import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GoUnverified, GoVerified } from "react-icons/go";
import { AuthContext } from "../../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [usersInfo, setUsersInfo] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${email}`)
      .then((res) => {
        console.log(res);
        setUsersInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [email]);

  const handleVerify = (email) => {
    console.log(email);
    const userStatus = {
      verifyStatus: "Pending",
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
    <div>
      Dash board{usersInfo?.name}
      <div className="card full max-w-md mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
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
              <span className="btn btn-success ">Verified</span>
            ) : (
              <button
                onClick={() => handleVerify(usersInfo?.email)}
                className="btn btn-primary"
              >
                Verify Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
