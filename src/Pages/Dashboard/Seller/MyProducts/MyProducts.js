import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Spinner from "../../../Shared/Spinner/Spinner";
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
        `https://merchantry-server.vercel.app/sellers-product?email=${email}`,
        {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h4 className="text-xl font-bold">
        Your total products : <span>{myProducts.length}</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {myProducts.map((product) => (
          <EachProducts key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
