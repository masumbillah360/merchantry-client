import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div className="w-20 h-20 animate-bounce">
        <div className="h-16 w-16 border-8 rounded-full border-red-600 border-dashed animate-spin"></div>
      </div>
      <h1 className="text-center text-4xl font-bold">Please Wait</h1>
    </div>
  );
};

export default Spinner;
