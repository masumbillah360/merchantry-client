import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card card-compact bg-base-100 shadow-md border">
      <figure>
        <img
          className="p-3 h-48"
          src={data.thumbnail}
          alt="Product Thumbnail"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center md:text-start">
          {data.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h2 className="font-bold">Brand : {data.brand}</h2>
          <span>Used Of Year : {data.usedOfYear}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <span>Purchase Date:{data.purchaseDate}</span>
          <span>Condition : {data.condition}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <span className="font-bold text-red-700 line-through">
            Original Price : {data.originalPrice}
          </span>
          <span className="font-bold text-primary">
            Present Price : {data.presentPrice}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
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
          <button
            onClick={() => navigate(`/products/${data._id}`)}
            className="btn btn-primary btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
