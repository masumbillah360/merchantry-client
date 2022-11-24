import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";

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
          <SingleProduct key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
