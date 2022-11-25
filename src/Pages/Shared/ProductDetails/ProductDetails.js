import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const data = useLoaderData();
  const [bookingData, setBookingData] = useState(null);
  console.log(data);

  const handleBooking = (productData) => {
    console.log(productData);
    const bookingInfo = {
      productId: productData._id,
      userEmail: user?.email,
      userName: user?.displayName,
      thumbnail: productData.thumbnail,
      price: productData.presentPrice,
      name: productData.name,
      brand: productData.brand,
    };
    setBookingData(bookingInfo);
    // fetch("http://localhost:8000/booking", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(bookingData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <div>
          <h1 className="font-bold text-4xl">{data.name}</h1>
          <div>
            <img src={data.thumbnail} alt="" />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-3xl text-primary">
            Price : {data.presentPrice} $
          </h2>
          <h2 className="font-bold text-2xl line-through text-red-400">
            Original Price : {data.originalPrice} $
          </h2>
          <h2 className="text-xl font-bold text-center md:text-start">
            Name : {data.name}
          </h2>
          <h2 className="font-bold">Brand : {data.brand}</h2>
          <div className="grid grid-cols-2 justify-between bg-base-200 font-bold">
            <span>Purchase Date:{data.purchaseDate}</span>
            <span>Condition : {data.condition}</span>
          </div>
          <div className="grid grid-cols-2 justify-between">
            <span>Used Of Year : {data.usedOfYear}</span>
            <span>Post Date :{data.postDate}</span>
          </div>
          <div className="grid grid-cols-2 justify-between bg-base-200 m-0 p-0">
            <span>Location : {data.location}</span>
            <span>Post Date :{data.postDate}</span>
          </div>
          <div className="grid grid-cols-2 justify-between">
            <span>Used Of Year : {data.usedOfYear}</span>
            <span>Post Date :{data.postDate}</span>
          </div>
          <p className="mt-4">Specification : {data.description}</p>
          <div className="mt-7">
            <button
              onClick={() => handleBooking(data)}
              className="btn btn-primary mr-7"
            >
              Wishlisth
            </button>
            <label
              onClick={() => handleBooking(data)}
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
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      )}
    </>
  );
};

export default ProductDetails;
