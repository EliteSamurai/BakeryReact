import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm({ clientSecret, selectedProduct }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          // Add relevant billing details here
        },
      },
    });

    if (error) {
      console.error('Payment failed:', error);
      setError(error.message);
    } else {
      console.log('Payment successful:', paymentIntent);
      // Handle successful payment
    }
  };

  const totalAmount = selectedProduct.reduce((total, item) => total + (item.price * item.quantity) / 100, 0).toFixed(2);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Details:
        <CardElement />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={!stripe}>
        Pay Now - ${totalAmount}
      </button>
    </form>
  );
}
