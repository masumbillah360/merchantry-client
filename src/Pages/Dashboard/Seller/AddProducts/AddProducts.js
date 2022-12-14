import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Spinner from "../../../Shared/Spinner/Spinner";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data: usersInfo = {}, isLoading } = useQuery({
    queryKey: ["usersInfo"],
    queryFn: async () => {
      const res = await fetch(
        `https://merchantry-server.vercel.app/users/${email}`,
        {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddProduct = (data) => {
    if (!usersInfo.status === "seller") {
      toast.error("You are not a seller");
      navigate("/login");
      return;
    }
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
        setLoading(false);
        const time = new Date().toDateString();
        const productsInfo = {
          thumbnail: image?.data?.url,
          cat_id: data.category,
          brand: data.category,
          userName: user?.displayName,
          userEmail: user?.email,
          userThumb: user?.photoURL,
          verify: usersInfo?.verify,
          name: data.title,
          mobile: data.mobile,
          description: data.description,
          location: data.location,
          presentPrice: data.price,
          originalPrice: data.originalPrice,
          condition: data.productCondition,
          usedOfYear: data.usedYears,
          postDate: time,
        };
        axios
          .post(
            "https://merchantry-server.vercel.app/sellers-product",
            productsInfo,
            {
              headers: {
                authorisation: `bearer ${localStorage.getItem(
                  "merchantry-token"
                )}`,
              },
            }
          )
          .then((res) => {
            navigate("/dashboard/myproducts");
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className=" items-center">
      <div className="card flex-shrink-0 shadow-xl">
        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              required
              type="text"
              {...register("title", {
                required: "Enter Product Title",
              })}
              placeholder="Product Title"
              className="input input-bordered"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Resale Price</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Resale Price"
                    {...register("price", {
                      required: "Enter Product Price",
                    })}
                    className="input input-bordered"
                  />
                  {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Original Price</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Original Price"
                    {...register("originalPrice", {
                      required: "Enter Product Price",
                    })}
                    className="input input-bordered"
                  />
                  {errors.originalPrice && (
                    <span>{errors.originalPrice.message}</span>
                  )}
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Used Years</span>
                </label>
                <input
                  required
                  type="text"
                  {...register("usedYears", {
                    required: "How many years of use ?",
                  })}
                  placeholder="How many years of use "
                  className="input input-bordered"
                />
                {errors.mobile && <span>{errors.mobile.message}</span>}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col md:flex-row justify-between gap-3 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Prodcuts Condition</span>
                </label>
                <select
                  defaultValue="Good"
                  {...register("productCondition", {
                    required: "Select Prodcut Condition",
                  })}
                  className="select input-bordered w-full"
                >
                  <option selected value="Good">
                    Good
                  </option>
                  <option value="Fare">Fare</option>
                  <option value="Bad">Bad</option>
                </select>
                {errors.productCondition && (
                  <span>{errors.productCondition.message}</span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select Category</span>
                </label>
                <select
                  defaultValue="dell"
                  {...register("category", {
                    required: "Select Prodcut Condition",
                  })}
                  className="select input-bordered w-full"
                >
                  <option selected value="dell">
                    Dell
                  </option>
                  <option value="hp">Hp</option>
                  <option value="lenevo">Lenevo</option>
                </select>
                {errors.productCondition && (
                  <span>{errors.productCondition.message}</span>
                )}
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Mobile No</span>
              </label>
              <input
                required
                type="text"
                {...register("mobile", {
                  required: "Enter Your Mobile Number",
                })}
                placeholder="Mobile Number"
                className="input input-bordered"
              />
              {errors.mobile && <span>{errors.mobile.message}</span>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                required
                type="text"
                {...register("location", {
                  required: "Enter Your Mobile Number",
                })}
                placeholder="Location"
                className="input input-bordered"
              />
              {errors.location && <span>{errors.location.message}</span>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered file-input-primary w-full"
              />
              {errors.image && <span>{errors.image.message}</span>}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Add Products Description",
              })}
              className="textarea textarea-bordered"
              required
              placeholder="Add products description here..."
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>

          <div className="form-control mt-1">
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? "Loading" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
