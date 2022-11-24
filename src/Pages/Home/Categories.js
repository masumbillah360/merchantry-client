import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      <div className="card border shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Lenevo</h2>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
      <div className="card border shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dell</h2>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
      <div className="card border shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">HP</h2>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
