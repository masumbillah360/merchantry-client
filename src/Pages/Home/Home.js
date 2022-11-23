import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
