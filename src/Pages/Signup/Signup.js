import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-bold text-center">
                Create account on
                <span className="text-primary"> Merchentry</span>
              </h1>
              <p className="py-0 overline text-center font-bold">
                Buy & Sell E-commerce!!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-xl">
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
                  <label className="label cursor-pointer">
                    <span className="label-text">Seller</span>
                    <input
                      type="radio"
                      name="radio-4"
                      value="seller"
                      className="radio radio-accent"
                      checked
                    />
                    <span>Buyer</span>
                    <input
                      type="radio"
                      name="radio-4"
                      value="buyer"
                      className="radio radio-accent"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
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
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
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
