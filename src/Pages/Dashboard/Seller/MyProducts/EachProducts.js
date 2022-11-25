import React from "react";

const EachProducts = ({ product }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-md border">
        <figure>
          <img
            className="p-3 w-full h-40"
            src={product?.thumbnail}
            alt="Product? Thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-center md:text-start">
            {product?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <h2 className="font-bold">
              Status : {product?.status ? "Sold" : "Unsold"}
            </h2>
            <span>Used Of Year : {product?.usedYears}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <span>Price:{product?.price}</span>
            <span>Condition : {product?.condition}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <span>Location : {product?.location}</span>
            <span>Date :{product?.date}</span>
          </div>
          <p>
            {product?.description.length > 80 ? (
              <span>{product?.description.slice(0, 80)}...</span>
            ) : (
              <span>{product?.description}</span>
            )}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-error">Delete</button>
            <button className="btn btn-sm btn-primary">Advertised</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProducts;
