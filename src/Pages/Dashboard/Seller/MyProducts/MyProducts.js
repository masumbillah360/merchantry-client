import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import EachProducts from "./EachProducts";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/sellers-product?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      sellers all products will be here{myProducts.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {myProducts.map((product) => (
          <EachProducts key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
