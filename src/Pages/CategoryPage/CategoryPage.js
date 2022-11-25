import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

const CategoryPage = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        {products.map((product) => (
          <SingleProduct data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
