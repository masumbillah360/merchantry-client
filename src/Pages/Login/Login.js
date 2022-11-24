import React from "react";

const Login = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center text-primary">
                Merchentry
              </h1>
              <p className="py-0 overline text-center font-bold">
                Buy & Sell E-commerce!!
              </p>
              <p className="py-6 text-center">
                To get best services Login now !!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
