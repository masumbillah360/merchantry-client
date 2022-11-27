import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavLink from "../Pages/Shared/DashboardNavLink/DashboardNavLink";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 mt-7 gap-7">
        <DashboardNavLink />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
