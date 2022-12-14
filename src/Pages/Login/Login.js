import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { handleUserLogin, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    handleUserLogin(data.email, data.password)
      .then((result) => {
        const user = result?.user;
        const currentUser = {
          email: user?.email,
        };
        fetch("https://merchantry-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("merchantry-token", data?.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        toast.error(err.message);
        resetField("email");
        resetField("password");
      });
  };
  const handleSocialLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        axios
          .post("https://merchantry-server.vercel.app/jwt", {
            headers: {
              authorisation: `bearer ${localStorage.getItem(
                "merchantry-token"
              )}`,
            },
          })
          .then((res) => {
            localStorage.setItem("merchantry-token", res.data.token);
            const userInfo = {
              name: result?.user?.displayName,
              email: result?.user?.email,
              status: "buyer",
            };
            axios
              .post("https://merchantry-server.vercel.app/users", userInfo)
              .then((response) => {})
              .catch((err) => console.log(err));
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7 justify-center items-center">
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
              id="email"
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
              <Link to="/signup" className="label-text-alt link link-hover">
                Don't have an account ?
                <span className="text-primary">Register Now</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
        <div className="form-control mt-7">
          <button onClick={handleSocialLogin} className="btn btn-primary">
            Login With Google <FcGoogle className="ml-2" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
