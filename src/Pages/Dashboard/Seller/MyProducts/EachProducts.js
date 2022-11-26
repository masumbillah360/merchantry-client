import axios from "axios";
import React from "react";

const EachProducts = ({ product, refetch }) => {
  console.log(product);
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/sellers-product/${id}`)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((err) => console.log(err));
  };
  const handleAdvertised = (id) => {
    const advertisedInfo = {
      advertised: true,
    };
    fetch(`http://localhost:8000/advertised-products?id=${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertisedInfo),
    });
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-md border">
        <figure>
          <img
            className="p-3 w-full h-48"
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
              Status :
              {product?.status ? (
                <span className="text-success">Sold</span>
              ) : (
                <span className="text-error">Unsold</span>
              )}
            </h2>
            <span>Used Of Year : {product?.usedOfYear}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <span className="font-bold text-primary">
              Price:{product?.presentPrice}
            </span>
            <span>Condition : {product?.condition}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <span>Location : {product?.location}</span>
            <span>Date :{product?.postDate || product?.date}</span>
          </div>
          <p>
            {product?.description.length > 35 ? (
              <span>{product?.description.slice(0, 35)}...</span>
            ) : (
              <span>{product?.description}</span>
            )}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
            {!product?.status && (
              <button
                onClick={() => handleAdvertised(product?._id)}
                className="btn btn-sm btn-primary"
              >
                Advertised
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProducts;
