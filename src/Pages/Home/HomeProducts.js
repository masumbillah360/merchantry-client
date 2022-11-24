import React, { useEffect, useState } from "react";

const HomeProducts = () => {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setHomeData(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-7">
        {homeData.map((data) => (
          <div className="card card-compact bg-base-100 shadow-md border">
            <figure>
              <img src={data.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center md:text-start">
                {data.name}
              </h2>
              <h2 className="card-title">Brand : {data.brand}</h2>
              <div className="flex justify-between">
                <span>Purchase Date:{data.purchaseDate}</span>
                <span>Condition : {data.condition}</span>
              </div>
              <div className="flex justify-between">
                <span>Original Price : {data.originalPrice}</span>
                <span>Present Price : {data.presentPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Location : {data.location}</span>
                <span>Post Date :{data.postDate}</span>
              </div>
              <p>{data.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
