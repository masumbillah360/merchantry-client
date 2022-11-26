import React from "react";
import AdvertisedProducts from "./AdvertisedProducts";
import Banner from "./Banner";
import Categories from "./Categories";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />

      <AdvertisedProducts />

      <h1 className="text-end text-primary font-extrabold mt-16">
        All Products for You!!!
      </h1>
      <HomeProducts />
    </div>
  );
};

export default Home;
