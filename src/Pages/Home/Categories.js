import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1 className="text-4xl font-bold text-red-500">Loading</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {categories.map((category) => (
        <Link
          key={category._id}
          to={`/category/${category.cat_id}`}
          className="card border shadow-md"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{category.brand}</h2>
            <p>Find Your Favorite used apply </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
