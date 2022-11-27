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
      .get(`http://localhost:8000/users/${email}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => setUserCategory(res.data.status));
  }, [email]);
  const navLink = (
    <>
      {userCategory === "admin" && (
        <>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/allseller">
              <span class="ml-3 text-sm font-medium text-gray-900">
                All Sellers
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/allusers">
              <span class="ml-3 text-sm font-medium text-gray-900">
                All Users
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/reportedItem">
              <span class="ml-3 text-sm font-medium text-gray-900">
                Reported Products
              </span>
            </NavLink>
          </li>
        </>
      )}
      {userCategory === "seller" && (
        <>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/addproduct">
              <span class="ml-3 text-sm font-medium text-gray-900">
                Add Product
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/myproducts">
              <span class="ml-3 text-sm font-medium text-gray-900">
                My Products
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/mybuyer">
              <span class="ml-3 text-sm font-medium text-gray-900">
                My Buyer
              </span>
            </NavLink>
          </li>
        </>
      )}

      {userCategory === "buyer" && (
        <>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/myorders">
              <span class="ml-3 text-sm font-medium text-gray-900">
                My Orders
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/mywishlist">
              <span class="ml-3 text-sm font-medium text-gray-900">
                My WishList
              </span>
            </NavLink>
          </li>
          <li class="flex-1  text-center">
            <NavLink class="relative block p-4" to="/dashboard/orderhistory">
              <span class="ml-3 text-sm font-medium text-gray-900">
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
      <ul class="flex border-b w-full">{navLink}</ul>
    </div>
  );
};

export default DashboardNavLink;
