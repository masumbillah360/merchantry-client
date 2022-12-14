import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import BookingModal from "../Payment/BookingModal";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [bookingData, setBookingData] = useState(null);
  const bookingInfo = {
    productId: data?._id,
    thumbnail: data?.thumbnail,
    price: data?.presentPrice,
    name: data?.name,
    brand: data?.brand,
    userName: user?.displayName,
    userEmail: user?.email,
  };
  const handleWishlist = () => {
    fetch("https://merchantry-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <div>
          <h1 className="font-bold text-4xl">{data?.name}</h1>
          <div>
            <img src={data?.thumbnail} alt="" />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-3xl text-primary">
            Price : {data?.presentPrice} $
          </h2>
          <h2 className="font-bold text-2xl line-through text-red-400">
            Original Price : {data?.originalPrice} $
          </h2>
          <h2 className="text-xl font-bold">Model : {data?.name}</h2>
          <h2 className="font-bold">Brand : {data?.brand}</h2>
          <div className="grid grid-cols-2 justify-between bg-base-200 font-bold">
            <span>Purchase Date:{data?.purchaseDate}</span>
            <span>Condition : {data?.condition}</span>
          </div>
          <div className="grid grid-cols-2 justify-between">
            <span>Used Of Year : {data?.usedOfYear}</span>
            <span>Post Date :{data?.postDate}</span>
          </div>
          <div className="grid grid-cols-2 justify-between font-bold bg-base-200 m-0 p-0">
            <span>Location : {data?.location}</span>
          </div>
          <p className="mt-4">Specification : {data?.description}</p>
          <div className="mt-7">
            <button onClick={handleWishlist} className="btn btn-primary mr-7">
              Wishlisth
            </button>
            <label
              onClick={() => setBookingData(bookingInfo)}
              htmlFor="bookingModal"
              className="btn btn-info"
            >
              Booking
            </label>
          </div>
        </div>
      </div>
      {bookingData && (
        <BookingModal
          data={data}
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      )}
    </>
  );
};

export default ProductDetails;
