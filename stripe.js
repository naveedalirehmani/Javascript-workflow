// Import the Stripe package
const stripe = require('stripe')(process.env.STRIPE_SECRET);

/**
 * Fetch the total balance in the Stripe account.
 * @returns {Promise<void>} Prints the total available balance in cents.
 */
const fetchStripeAccountBalance = async () => {
  try {
    // Fetch the balance from Stripe
    const balance = await stripe.balance.retrieve();

    // Get the total available amount in all available currencies
    let totalAmount = 0;
    balance.available.forEach((balanceItem) => {
      totalAmount += balanceItem.amount;
    });

    console.log(`Total Available Balance: ${totalAmount} cents`);
  } catch (error) {
    console.error('Error fetching Stripe balance:', error.message);
  }
};

// Call the function to fetch balance
fetchStripeAccountBalance();

// To use this function, make sure you have STRIPE_SECRET_KEY set in your environment variables.
// Example: export STRIPE_SECRET_KEY='your_secret_key_here' in your terminal or use dotenv to load env variables from a .env file