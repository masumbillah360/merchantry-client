import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userCategory, setUserCategory] = useState("");
  console.log(userCategory);
  console.log(email);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${email}`)
      .then((res) => setUserCategory(res.data.status));
  }, [email]);
  const navLink = (
    <>
      {userCategory === "admin" && (
        <>
          <li>
            <Link to="/dashboard/allseller">All Sellers</Link>
          </li>
          <li>
            <Link to="/dashboard/allusers">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/reportedItem">Reported Products</Link>
          </li>
        </>
      )}
      {userCategory === "seller" && (
        <>
          <li>
            <Link to="/dashboard">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/myproducts">My Products</Link>
          </li>
          <li>
            <Link to="/dashboard/mybuyer">My Buyer</Link>
          </li>
        </>
      )}

      {userCategory === "buyer" && (
        <>
          <li>
            <Link to="/dashboard/myorders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/mywishlist">My WishList</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-12 mt-7 gap-7">
        <div className="col-span-4">
          <ul className="menu bg-base-100 w-full text-center">{navLink}</ul>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
