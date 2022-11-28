import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const bookingData = useLoaderData();
  console.log(bookingData);
  const { user } = useContext(AuthContext);
  const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);
  const [buyersInfo, setBuyersInfo] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/booking/${bookingData._id}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => setBuyersInfo(res.data));
  }, [bookingData?._id]);
  return (
    <Elements stripe={stripePromise}>
      <div>
        <div className="mb-10">
          <div className="card max-w-md bg-base-100 shadow-lg mx-auto">
            <div className="card-body">
              <h1 className="text-xl ">
                Payment for
                <span className="ml-2 font-bold text-primary">
                  {bookingData?.name}
                </span>
              </h1>
              <h4 className="text-rose-600 font-bold text-xl">
                Price : {bookingData?.presentPrice}
              </h4>
              <h4>Email : {user?.email}</h4>
              <h4>Name : {user?.displayName}</h4>
              <h4>Your Phone : {buyersInfo?.phone}</h4>
              <h4>Delivery from : {bookingData?.location}</h4>
              <h4>Delivery to : {buyersInfo?.location}</h4>
            </div>
          </div>
        </div>
        <div className="my-10 max-w-md mx-auto shadow-lg">
          <CheckoutForm bookingData={bookingData} />
        </div>
      </div>
    </Elements>
  );
};

export default Payment;
