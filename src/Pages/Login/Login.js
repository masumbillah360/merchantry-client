import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { handleUserLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
    handleUserLogin(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-2">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-center text-primary">
          Merchentry
        </h1>
        <p className="py-0 overline text-center font-bold">
          Buy & Sell E-commerce!!
        </p>
        <p className="py-6 text-center">To get best services Login now !!</p>
      </div>
      <div className="card w-full  shadow-xl">
        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              placeholder="email"
              {...register("email", {
                required: "Enter Your Valied Email Address",
              })}
              className="input input-bordered"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              {...register("password", {
                required: "Select a strong password",
              })}
              autoComplete="Password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && <span>{errors.password.message}</span>}
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Don't have an account ?
                <span className="text-primary">Register Now</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
          <div className="form-control mt-7">
            <button className="btn btn-primary">
              Login With Google <FcGoogle className="ml-2" />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
