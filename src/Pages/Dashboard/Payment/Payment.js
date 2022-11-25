import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const bookingData = useLoaderData();
  const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);
  return (
    <Elements stripe={stripePromise}>
      <div>
        <div className="mb-10">
          <h1 className="text-xl font-bold">
            Payment for <span className="text-info">{bookingData?.name}</span>
          </h1>
          <h4 className="text-primary font-bold text-xl">
            Price : {bookingData?.price}
          </h4>
          <h4>Email : {bookingData?.userEmail}</h4>
          <h4>Name : {bookingData?.userName}</h4>
          <h4>Location : {bookingData?.userLocation}</h4>
        </div>
        <div className="my-10">
          <CheckoutForm bookingData={bookingData} />
        </div>
      </div>
    </Elements>
  );
};

export default Payment;
