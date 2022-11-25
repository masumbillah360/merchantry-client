import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

const CategoryPage = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        {/* <div className="card card-compact bg-base-100 shadow-md border">
            <figure>
              <img src={product.thumbnail} className="p-10" alt="Shoes" />
            </figure>
            <div className="card-body p-0 m-0">
              <h2 className="text-xl font-bold text-center md:text-start">
                {product.name}
              </h2>
              <h2 className="font-bold">Brand : {product.brand}</h2>
              <div className="grid grid-cols-2 justify-between bg-base-200 py-1 font-bold">
                <span>Purchase Date:{product.purchaseDate}</span>
                <span>Condition : {product.condition}</span>
              </div>
              <div className="grid grid-cols-2 justify-between font-bold">
                <span>Original Price : {product.originalPrice}$</span>
                <span>Present Price : {product.presentPrice}$</span>
              </div>
              <div className="grid grid-cols-2 justify-between bg-base-200 m-0 p-0">
                <span>Location : {product.location}</span>
                <span>Post Date :{product.postDate}</span>
              </div>
              <div className="grid grid-cols-2 justify-between">
                <span>Used Of Year : {product.usedOfYear}</span>
                <span>Post Date :{product.postDate}</span>
              </div>
              <p>
                {product.description.length > 100 ? (
                  <span>{product.description.slice(0, 100)}...</span>
                ) : (
                  <span>{product.description}</span>
                )}
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary btn-sm "
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          </div> */}
        {products.map((product) => (
          <SingleProduct data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
