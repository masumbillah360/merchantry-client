import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorThumb from "../../assets/productImages/error.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <img src={errorThumb} alt="" className="md:w-40 mx-auto rounded-lg" />
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600">
            Page {error.statusText}
          </h1>
          <Link className="mt-7 btn btn-primary" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
