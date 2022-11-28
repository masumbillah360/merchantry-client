import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GiAbstract100 } from "react-icons/gi";
import { ImLoop2 } from "react-icons/im";

const SupportPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-7">
      <div className="card w-full bg-base-100 shadow-md">
        <div className="card-body text-center">
          <GiAbstract100 className="text-primary font-bold text-3xl mx-auto" />
          <h2 className="text-lg font-bold">Great Value</h2>
          <p>We get you the best value for your money</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <FiPhoneCall className="text-primary font-bold text-3xl mx-auto" />
          <h2 className="text-lg font-bold">24/7 SUPPORT</h2>
          <p>We're here to support you around the clock</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <ImLoop2 className="text-primary font-bold text-3xl mx-auto" />
          <h2 className="text-lg font-bold">Warranty Policy</h2>
          <p>Our warranty policy will give you peace of mind</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
