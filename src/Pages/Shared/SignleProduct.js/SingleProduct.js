import React from "react";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="card card-compact  bg-base-100 shadow-md border">
      <figure>
        <img
          className="p-2 w-full max-h-80 rounded-2xl"
          src={data.thumbnail}
          alt="Product Thumbnail"
        />
      </figure>
      <div className="card-body">
        <div className="grid grid-cols-1">
          <span className="font-bold text-primary text-2xl">
            Present Price : {data.presentPrice} $
          </span>
          <span className="font-bold text-red-700 line-through">
            Original Price : {data.originalPrice} $
          </span>
        </div>
        <h2 className="text-xl font-bold ">{data.name}</h2>
        <div className="grid grid-cols-2">
          <h2 className="font-bold">Brand : {data.brand}</h2>
          <span>Used Of Year : {data.usedOfYear} y</span>
        </div>
        <div className="grid grid-cols-2">
          <span>Purchase Date:{data.purchaseDate}</span>
          <span>Condition : {data.condition}</span>
        </div>

        <div className="grid grid-cols-2">
          <span>Location : {data.location}</span>
          <span>Date :{data.postDate}</span>
        </div>
        <p>
          {data.description.length > 70 ? (
            <span>{data.description.slice(0, 70)}...</span>
          ) : (
            <span>{data.description}</span>
          )}
        </p>
        <div className="card-actions gap-4 md:gap-0 justify-between items-center">
          {data?.userEmail ? (
            <div className="flex justify-start items-center">
              <img
                src={data.userThumb}
                className="rounded-full h-12 w-12 ring ring-primary ring-offset-2"
                alt="Products Thumbnail"
              />

              <div className="flex ml-3 justify-start items-center">
                <h1 className="text-lg font-bold">{data?.userName}</h1>
                {data.verify}
                <span>
                  <GoVerified className="text-primary ml-1" />
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <button
            onClick={() => navigate(`/products/${data._id}`)}
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600  sm:w-auto"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
