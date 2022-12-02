import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

import Spinner from "../Pages/Shared/Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [userCategory, setUserCategory] = useState("");
  const [adminLoader, setAdminLoader] = useState(true);

  const location = useLocation();
  const email = user?.email;
  useEffect(() => {
    axios
      .get(`https://merchantry-server.vercel.app/users/${email}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => {
        setUserCategory(res.data.status);
        setAdminLoader(false);
      });
  }, [email, userCategory]);
  if (adminLoader) {
    return <Spinner />;
  }
  if (userCategory === "seller") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default SellerRoute;
