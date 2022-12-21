import React from "react";

const About = () => {
  return (
    <div className="text-center my-24 border py-5 px-3 md:px-12 rounded-tl-3xl rounded-br-3xl">
      <p className="font-bold">About</p>
      <h1 className="text-primary font-bold text-3xl uppercase">Merchantry</h1>
      <div className="mt-4">
        <p className="text-lg text-gray-700">
          Merchantry is the best used laptop shop in Bangladesh and a leading
          seller of all kinds of IT products. It's been a place of reliability
          for new and used laptops as well as other accessories since its
          beginning back in 2014.
        </p>
        <p className="text-lg text-gray-700 mt-3">
          We, as a used laptop shop, supply A-grade used laptops imported from
          Dubai, Malaysia, and Singapore. With a goal of giving exceptional
          customer support,{" "}
          <span className="text-primary font-bold">Merchantry</span> is also
          working with multiple corporate clients.
        </p>
      </div>
    </div>
  );
};

export default About;
