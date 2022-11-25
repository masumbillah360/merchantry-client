import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ bookingData }) => {
  const [cardError, setCardError] = useState(null);
  const [clientSecrete, setClientSecrete] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => setClientSecrete(data.clientSecret));
  }, [bookingData]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error);
    } else {
      console.log(paymentMethod);
      bookingData.transactionId = clientSecrete;
      axios
        .post("http://localhost:8000/payments", bookingData)
        .then((res) => {
          console.log(res);
          console.log(res.data.status);
          toast.success(res.data.data.status);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="border">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <div>
          <p className="text-red-500">{cardError?.type}</p>
          <p className="text-red-500">{cardError?.code}</p>
          <p className="text-red-500">{cardError?.message}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
