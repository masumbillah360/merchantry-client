import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { handleCreateuser, handleUpdateUser, handleGoogleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    setLoading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((image) => {
        handleCreateuser(data.email, data.password)
          .then((result) => {
            handleUpdateUser(data.name, image.data.url)
              .then(() => {
                const user = result.user;
                const userInfo = {
                  name: user.displayName,
                  email: user?.email,
                  status: data.userStatus,
                };
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

                    axios
                      .post(
                        "https://merchantry-server.vercel.app/users",
                        userInfo
                      )
                      .then((res) => {
                        navigate("/");
                        setLoading(false);
                        window.location.reload();
                      })
                      .catch((err) => console.log(err));
                  });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
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
              .then((response) => {
                toast.success("Successfully created your account");
              })
              .catch((err) => toast.error(err.message));
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7 items-center justify-center">
      <div className="text-center">
        <h4>Create Account on</h4>
        <h1 className="text-5xl font-bold text-primary">Merchentry</h1>
        <p className="py-0 overline font-bold">Buy & Sell E-commerce!!</p>
        <p>Trusted E-commerse for used Laptop</p>
      </div>
      <div className="card flex-shrink-0 shadow-xl">
        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Enter Your Full Name",
                minLength: "4",
                maxLength: "16",
              })}
              placeholder="Full Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            {errors.name?.type === "minLength" && (
              <span className="text-red-500">Min Length is minimum 4</span>
            )}
            {errors.name?.type === "maxLength" && (
              <span className="text-red-500">Max length exceeded</span>
            )}
          </div>

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
              <span className="label-text">Select User Category</span>
            </label>
            <select
              defaultValue="buyer"
              {...register("userStatus", { required: "Select a category" })}
              className="select input-bordered w-full"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.userStatus && <span>{errors.userStatus.message}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              required
              type="file"
              {...register("image", { required: "Please select an image" })}
              className="file-input file-input-bordered file-input-primary w-full"
            />
            {errors.image && <span>{errors.image.message}</span>}
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
                minLength: 8,
                maxLength: 14,
              })}
              autoComplete="Password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && <span>{errors.password.message}</span>}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500">Min Length is 6 charecter</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500">Max length exceeded</span>
            )}
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account ?
                <span className="text-primary">Login</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-1">
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? "Loading" : "SignUp"}
            </button>
          </div>
        </form>
        <div onClick={handleSocialLogin} className="form-control mt-7">
          <button className="btn btn-primary">
            Login With Google <FcGoogle className="ml-2" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
