"use server";
import { auth } from "@clerk/nextjs/server";
import { UserDetails } from "@/app/dashboard/upgrade/page";
import { adminDb } from "../../firebaseAdmin";
import stripe from "@/lib/stripe";
import getBaseUrl from "@/lib/getBaseUrl";

export async function createCheckoutSesssion(userDetails: UserDetails) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  let stripeCustomerId;

  const user = await adminDb.collection("users").doc(userId).get();

  stripeCustomerId = user.data()?.stripeCustomerId;

  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: userDetails.email,
      name: userDetails.name,
      metadata: {
        userId,
      },
    });

    await adminDb.collection("users").doc(userId).set({
      stripeCustomerId: customer.id,
    });

    stripeCustomerId = customer.id;
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1Q9oM3BAkR6ax9v4MIIe5Qpk",
        quantity: 1,
      },
    ],
    mode: "subscription",
    customer: stripeCustomerId,
    success_url: `${getBaseUrl()}/dashboard`,
    cancel_url: `${getBaseUrl()}/dashboard`,
  });

  return session.id;
}
