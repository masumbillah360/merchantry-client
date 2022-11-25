import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
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
