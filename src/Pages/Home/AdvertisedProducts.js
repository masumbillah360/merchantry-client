import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

const AdvertisedProducts = () => {
  const [addvertisedData, setAdvertisedData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setAdvertisedData(res.data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {addvertisedData.map((data) => (
          <SingleProduct key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisedProducts;
