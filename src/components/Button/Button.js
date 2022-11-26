import React from "react";

const Button = ({ children }) => {
  console.log(children);
  return (
    <>
      <button className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600  sm:w-auto">
        {children}
      </button>
    </>
  );
};

export default Button;
