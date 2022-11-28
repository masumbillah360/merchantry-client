import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleProduct from "../Shared/SignleProduct.js/SingleProduct";
import Spinner from "../Shared/Spinner/Spinner";

const HomeProducts = () => {
  const { data: homeData = [], isLoading } = useQuery({
    queryKey: ["homeData"],
    queryFn: async () => {
      const res = await fetch("https://merchantry-server.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {homeData.map((data) => (
          <SingleProduct key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
