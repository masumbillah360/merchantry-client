import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
      <div>
        <h1 className="font-bold text-4xl">{data.name}</h1>
        <div>
          <img src={data.thumbnail} alt="" />
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-3xl text-primary">
          Price : {data.presentPrice} $
        </h2>
        <h2 className="font-bold text-2xl line-through text-red-400">
          Original Price : {data.originalPrice} $
        </h2>
        <h2 className="text-xl font-bold text-center md:text-start">
          Name : {data.name}
        </h2>
        <h2 className="font-bold">Brand : {data.brand}</h2>
        <div className="grid grid-cols-2 justify-between bg-base-200 font-bold">
          <span>Purchase Date:{data.purchaseDate}</span>
          <span>Condition : {data.condition}</span>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <span>Used Of Year : {data.usedOfYear}</span>
          <span>Post Date :{data.postDate}</span>
        </div>
        <div className="grid grid-cols-2 justify-between bg-base-200 m-0 p-0">
          <span>Location : {data.location}</span>
          <span>Post Date :{data.postDate}</span>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <span>Used Of Year : {data.usedOfYear}</span>
          <span>Post Date :{data.postDate}</span>
        </div>
        <p className="mt-4">Specification : {data.description}</p>
        <div className="mt-7">
          <button className="btn btn-primary mr-7">Booking</button>
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
