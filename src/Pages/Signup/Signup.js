import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userStatus, setUserStatus] = useState("");
  console.log(userStatus);
  const handleUserStatus = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className=" ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="text-center lg:text-end">
              <h4>Create Account on</h4>
              <h1 className="text-5xl font-bold text-primary">Merchentry</h1>
              <p className="py-0 overline font-bold">Buy & Sell E-commerce!!</p>
              <p>Trusted E-commerse for used Laptop</p>
            </div>
            <div className="card flex-shrink-0 shadow-xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Select User Category</span>
                  </label>
                  <select
                    defaultValue={"Buyer"}
                    onChange={(e) => handleUserStatus(e)}
                    className="select select-primary w-full"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account ?
                      <span className="text-primary">Login</span>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-1">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
