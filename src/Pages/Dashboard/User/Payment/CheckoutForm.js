import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ bookingData }) => {
  const [cardError, setCardError] = useState(null);
  const [clientSecrete, setClientSecrete] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
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
        .post("http://localhost:8000/payments", bookingData, {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        })
        .then((res) => {
          axios
            .put(`http://localhost:8000/booking/${bookingData._id}`, {
              headers: {
                authorisation: `bearer ${localStorage.getItem(
                  "merchantry-token"
                )}`,
              },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          toast.success("Successfully Paid");
          navigate("/dashboard/myorders");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="border p-5 rounded-lg">
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
            className="btn mt-7 btn-primary btn-sm"
            disabled={!stripe || !clientSecrete}
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
