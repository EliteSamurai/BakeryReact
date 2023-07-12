import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Checkout.css";

const stripePromise = loadStripe("pk_live_51NJc2cDUPQKJ61tf4wi8rfgy0lYITta0zjRgcG56fWc1EFga3f6kkgwn7ZFFzKZa9InrrxC5rTCii3PBT6I3TDsS00P4gGtfya");

export default function Checkout({ selectedProduct }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/.netlify/functions/createPaymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: selectedProduct }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Status code error: " + res.status);
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error:", error));    
  }, [selectedProduct]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm selectedProduct={selectedProduct}/>
        </Elements>
      )}
    </div>
  );
}