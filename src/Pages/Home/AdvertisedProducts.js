import React, { useEffect, useState } from "react";

const AdvertisedProducts = () => {
  const [addvertisedData, setAdvertisedData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setAdvertisedData(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-7">
        {addvertisedData.map((data) => (
          <div className="card card-compact bg-base-100 shadow-md border">
            <figure>
              <img src={data.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body p-0 m-0">
              <h2 className="text-xl font-bold text-center md:text-start">
                {data.name}
              </h2>
              <h2 className="font-bold">Brand : {data.brand}</h2>
              <div className="grid grid-cols-2 justify-between bg-base-200 py-1 font-bold">
                <span>Purchase Date:{data.purchaseDate}</span>
                <span>Condition : {data.condition}</span>
              </div>
              <div className="grid grid-cols-2 justify-between font-bold">
                <span>Original Price : {data.originalPrice}$</span>
                <span>Present Price : {data.presentPrice}$</span>
              </div>
              <div className="grid grid-cols-2 justify-between bg-base-200 m-0 p-0">
                <span>Location : {data.location}</span>
                <span>Post Date :{data.postDate}</span>
              </div>
              <div className="grid grid-cols-2 justify-between">
                <span>Used Of Year : {data.usedOfYear}</span>
                <span>Post Date :{data.postDate}</span>
              </div>
              <p>
                {data.description.length > 100 ? (
                  <span>{data.description.slice(0, 100)}...</span>
                ) : (
                  <span>{data.description}</span>
                )}
              </p>
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

export default AdvertisedProducts;
