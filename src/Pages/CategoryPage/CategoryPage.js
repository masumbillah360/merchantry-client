import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

const CategoryPage = () => {
  const products = useLoaderData();
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <SingleProduct data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
