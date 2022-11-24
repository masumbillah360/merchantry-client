import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { handleCreateuser, handleUpdateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((image) => {
        console.log(image);
        handleCreateuser(data.email, data.password)
          .then((result) => {
            handleUpdateUser(data.name, image.data.url)
              .then(() => {
                navigate("/");
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
      <div className="text-center lg:text-end">
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
              required
              type="text"
              {...register("name", {
                required: "Enter Your Full Name",
                minLength: "4",
                maxLength: "16",
              })}
              placeholder="Full Name"
              className="input input-bordered"
            />
            {errors.name && <span>{errors.name.message}</span>}
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
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account ?
                <span className="text-primary">Login</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-1">
            <input type="submit" className="btn btn-primary" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
