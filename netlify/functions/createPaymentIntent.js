const stripe = require('stripe')(process.env.REACT_APP_KEY);

const calculateOrderAmount = (items) => {
  const totalSum = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return totalSum;
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { items, email } = JSON.parse(event.body);

    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
    });

    // Create a PaymentIntent with the order amount, currency, and customer ID
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
