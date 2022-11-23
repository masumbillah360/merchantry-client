import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
