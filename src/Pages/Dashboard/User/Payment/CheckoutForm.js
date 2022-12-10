import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ paymentData }) => {
  const [cardError, setCardError] = useState(null);
  const [clientSecrete, setClientSecrete] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("https://merchantry-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => setClientSecrete(data.clientSecret))
      .catch((err) => console.log(err));
  }, [paymentData]);
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
      setCardError(error);
    } else {
      console.log(paymentMethod);
      paymentData.transactionId = clientSecrete;
      axios
        .post(`https://merchantry-server.vercel.app/payments`, paymentData, {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        })
        .then((res) => {
          fetch(
            `https://merchantry-server.vercel.app/${paymentData.productId}`,
            {
              method: "PUT",
              headers: {
                authorisation: `bearer ${localStorage.getItem(
                  "merchantry-token"
                )}`,
              },
            }
          )
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
      <form onSubmit={handleSubmit} className="border p-5 rounded-t-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                border: "solid",
                color: "#00020f",
                "::placeholder": {
                  color: "#5c5c5e",
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
