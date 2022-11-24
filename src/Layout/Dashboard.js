import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-12 mt-7 gap-7">
        <div className="col-span-4">
          <ul className="menu bg-base-100 w-full text-center">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/mywishlist">My WishList</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
