import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_API_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE api key");
}
const stripe = new Stripe(stripeSecretKey);

export default stripe;
