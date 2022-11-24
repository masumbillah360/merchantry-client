import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const { data: homeData = [], isLoading } = useQuery({
    queryKey: ["homeData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/products");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <h1 className="text-enter font-bold text-red-500 text-9xl">Loading</h1>
    );
  }
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
              <p>
                {data.description.length > 100 ? (
                  <span>{data.description.slice(0, 100)}...</span>
                ) : (
                  <span>{data.description}</span>
                )}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`products/${data._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
