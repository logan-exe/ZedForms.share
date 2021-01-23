import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #fff",
        padding: "32px",
      }}
    >
      <CardElement />
      <button
        className="work-button edit-button"
        type="submit"
        disabled={!stripe}
        style={{ color: "white", marginTop: "15px", marginLeft: "-1px" }}
      >
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

function Payment({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");

  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">Kindly enter your Website Address</div>
        <div className="work-description">
          Please make sure that it’s a professional one.
        </div>
        <div className="mail-input-wrapper w-form">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Payment;
