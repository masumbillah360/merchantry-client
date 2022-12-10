import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DashboardNavLink = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userCategory, setUserCategory] = useState("");

  useEffect(() => {
    axios
      .get(`https://merchantry-server.vercel.app/users/${email}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => setUserCategory(res?.data?.status));
  }, [email]);
  const navLink = (
    <>
      {userCategory === "admin" && (
        <>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/allseller">
              <span className="ml-3 text-sm font-medium text-gray-900">
                All Sellers
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/allusers">
              <span className="ml-3 text-sm font-medium text-gray-900">
                All Users
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink
              className="relative block p-4"
              to="/dashboard/reportedItem"
            >
              <span className="ml-3 text-sm font-medium text-gray-900">
                Reported Products
              </span>
            </NavLink>
          </li>
        </>
      )}
      {userCategory === "seller" && (
        <>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/addproduct">
              <span className="ml-3 text-sm font-medium text-gray-900">
                Add Product
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/myproducts">
              <span className="ml-3 text-sm font-medium text-gray-900">
                My Products
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/mybuyer">
              <span className="ml-3 text-sm font-medium text-gray-900">
                My Buyer
              </span>
            </NavLink>
          </li>
        </>
      )}

      {userCategory === "buyer" && (
        <>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/myorders">
              <span className="ml-3 text-sm font-medium text-gray-900">
                My Booking
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink className="relative block p-4" to="/dashboard/mywishlist">
              <span className="ml-3 text-sm font-medium text-gray-900">
                My WishList
              </span>
            </NavLink>
          </li>
          <li className="flex-1  text-center">
            <NavLink
              className="relative block p-4"
              to="/dashboard/orderhistory"
            >
              <span className="ml-3 text-sm font-medium text-gray-900">
                Order History
              </span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="h-[60px]  z-40 sticky top-0 bg-base-200 flex items-center">
      <ul className="flex border-b w-full">{navLink}</ul>
    </div>
  );
};

export default DashboardNavLink;
