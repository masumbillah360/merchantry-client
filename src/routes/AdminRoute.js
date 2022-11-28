import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

import Spinner from "../Pages/Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [userCategory, setUserCategory] = useState("");
  const location = useLocation();
  const email = user?.email;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${email}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => setUserCategory(res?.data?.status));
  }, [email]);
  if (loading) {
    return <Spinner />;
  }
  if (userCategory === "admin") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
