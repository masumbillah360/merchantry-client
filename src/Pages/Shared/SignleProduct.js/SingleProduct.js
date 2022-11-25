import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ data }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-md border">
      <figure>
        <img className="p-3" src={data.thumbnail} alt="Product Thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center md:text-start">
          {data.name}
        </h2>
        <div className="flex justify-between">
          <h2 className="font-bold">Brand : {data.brand}</h2>
          <span>Used Of Year : {data.usedOfYear}</span>
        </div>
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
          <span>Date :{data.postDate}</span>
        </div>
        <p>
          {data.description.length > 80 ? (
            <span>{data.description.slice(0, 80)}...</span>
          ) : (
            <span>{data.description}</span>
          )}
        </p>
        <div className="card-actions justify-end">
          <Link to={`products/${data._id}`} className="btn btn-primary btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
