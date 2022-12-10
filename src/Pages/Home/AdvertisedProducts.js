import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

const AdvertisedProducts = () => {
  const [addvertisedData, setAdvertisedData] = useState([]);
  useEffect(() => {
    axios
      .get("https://merchantry-server.vercel.app/advertised-products")
      .then((res) => setAdvertisedData(res?.data));
  }, []);
  return (
    <div>
      {addvertisedData.length > 0 && (
        <div>
          <h1 className="text-end text-primary font-extrabold mt-16">
            Specail Products for You!!!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {addvertisedData.map((data) => (
              <SingleProduct key={data._id} data={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedProducts;
